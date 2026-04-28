import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

// Custom event to notify profile changes
export const PROFILE_UPDATED_EVENT = 'profileUpdated';

export const useProfile = () => {

    function getProfile() {
        try {
            const profile = localStorage.getItem('userProfile');
            return profile ? JSON.parse(profile) : null;
        } catch {
            return null;
        }
    }

    // Checks for saved data in local storage
    const [profile, setProfile] = useState(getProfile);
    const [loadingProfile, setLoadingProfile] = useState(true);

    useEffect(() => {
        const validateProfile = async () => {
            const saved = getProfile();

            if (!saved) {
                setProfile(null);
                setLoadingProfile(false);
                return;
            }

            const { data, error } = await supabase
                .from("users")
                .select("name")
                .eq("name", saved.name)
                .maybeSingle();

            if (data === null && !error) {
                // User not found in database - clear localStorage
                localStorage.removeItem("userProfile");
                setProfile(null);
            } else if (error) {
                // Network/auth error - keep saved profile to avoid accidental logout
                console.error('Profile validation error:', error);
                setProfile(saved);
            } else {
                // No error or transient error (network, auth, etc.) - keep saved profile
                setProfile(saved);
            }

            setLoadingProfile(false);
        };

        validateProfile();
    }, []);

    useEffect(() => {
        const channel = supabase
            .channel("profile-delete-listener")
            .on(
                "postgres_changes",
                {
                    event: "DELETE",
                    schema: "public",
                    table: "users",
                },
                (payload) => {
                    const saved = getProfile();

                    if (!saved) return;

                    // Match against `name` because `name` is used as the identifier
                    if (payload.old.name === saved.name) {
                        localStorage.removeItem("userProfile");
                        setProfile(null);
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);


    // Save new data 
    const updateProfile = (newData) => {
        localStorage.setItem('userProfile', JSON.stringify(newData));
        setProfile(newData);

        // Dispatch custom event to let other components know about the change
        window.dispatchEvent(new CustomEvent(PROFILE_UPDATED_EVENT, { detail: newData }));
    };

    return { profile, updateProfile, loadingProfile };
}
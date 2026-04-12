import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Data / Language
import { supabase } from '../lib/supabaseClient';
import { useProfile } from "../hooks/useProfile";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";


export default function useCreateProfile() {

    const navigate = useNavigate();
    const { lang } = useLanguage();
    const text = translations.createProfile[lang];
    const [errorMessage, setErrorMessage] = useState("");
    const { profile } = useProfile(); // Fetch profile
    const existingProfile = profile || null;

    // Form data - If profile exists the data is shown from start
    const [name, setName] = useState(profile?.name || "");
    const [role, setRole] = useState(profile?.role || "");
    const [avatar, setAvatar] = useState(profile?.avatar || "")
    const [loading, setLoading] = useState(false);

    // Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {

            // Check that role and avatar are selected
            if (!role) {
                throw new Error(text.errorRole)
            }
            if (!avatar) {
                throw new Error(text.errorAvatar)
            }

            // Trim and validate the name input
            const trimmedName = name.trim();

            // Ensure minimum name length to prevent empty or single-character names
            if (trimmedName.length < 2) {
                throw new Error(text.errorNameLength);
            }

            const validName = /^[a-zA-Z0-9äöåÄÖÅ -]+$/.test(trimmedName);

            if (!validName) {
                throw new Error(text.errorChars)
            }

            // Create profile with trimmed, validated name
            const profileData = {
                name: trimmedName,
                role,
                avatar
            };

            // Check for duplicate name using case-insensitive search to prevent duplicate entries
            if (!existingProfile || trimmedName !== existingProfile.name) {
                const { data: existingUser, error: checkError } = await supabase
                    .from('users')
                    .select('name')
                    .ilike('name', trimmedName)
                    .maybeSingle();

                if (checkError) throw checkError;
                if (existingUser) {
                    throw new Error(text.nameExists);
                }
            }

            let result;

            if (existingProfile) {
                result = await supabase
                    .from('users')
                    .update(profileData)
                    .eq('name', existingProfile.name);
            } else {
                result = await supabase
                    .from('users')
                    .insert([profileData]);
            }

            if (result.error) throw result.error;

            localStorage.setItem('userProfile', JSON.stringify(profileData));
            navigate('/finished-profile');

        } catch (error) {
            setErrorMessage(error.message);

        } finally {
            setLoading(false)
        }
    }

    return {
        name,
        setName,
        role,
        setRole,
        avatar,
        setAvatar,
        loading,
        errorMessage,
        setErrorMessage,
        existingProfile,
        handleSubmit,
        navigate,
    };
}

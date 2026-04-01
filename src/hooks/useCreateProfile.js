import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Data
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
            // If profile exixts - Update
            if (existingProfile) {
                const profileData = { 
                    name: existingProfile.name, 
                    role, 
                    avatar 
                };

                const { data, error } = await supabase
                    .from('users')
                    .update(profileData)
                    .eq('name', existingProfile.name);

                if(error) throw error;

                localStorage.setItem('userProfile', JSON.stringify(profileData));
                console.log("Profile updated!", data);
                navigate('/finished-profile');
            } else {
                // If new profile - check for duplicate name
                const { data: existingUser, error: checkError } = await supabase
                    .from('users')
                    .select('name')
                    .eq('name', name)
                    .maybeSingle();

                if (checkError) throw checkError;
                if (existingUser) {
                    throw new Error(text.nameExists);
                }

                // If unique name, create profile
                const profileData = { 
                    name, 
                    role, 
                    avatar 
                };

                const { data, error } = await supabase
                    .from('users')
                    .insert([profileData]);

                if(error) throw error;

                localStorage.setItem('userProfile', JSON.stringify(profileData));
                console.log("Profile created!", data);
                navigate('/finished-profile');
            }

        } catch (error) {
            console.error("Upload error: ", error.message);
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
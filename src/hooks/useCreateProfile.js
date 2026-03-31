import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Data
import { supabase } from '../lib/supabaseClient';
import { useProfile } from "../hooks/useProfile";


export default function useCreateProfile() {

    const navigate = useNavigate();
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

        const profileData = { 
            name: existingProfile ? existingProfile.name : name, 
            role, 
            avatar };

        try {
            const { data, error } = await supabase
                .from('users')
                .upsert([profileData], { onConflict: 'name' });

            if(error) throw error;

            // Save to local storage
            localStorage.setItem('userProfile', JSON.stringify(profileData));

            console.log("Profile saved!", data);
            navigate('/finished-profile')

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
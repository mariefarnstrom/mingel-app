import { useState } from "react";

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

    // Save new data 
    const updateProfile = (newData) => {
        localStorage.setItem('userProfile', JSON.stringify(newData));
        setProfile(newData);
    };

    return { profile, updateProfile };
}
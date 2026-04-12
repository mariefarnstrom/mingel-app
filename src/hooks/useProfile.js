import { useState } from "react";

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

    // Save new data 
    const updateProfile = (newData) => {
        localStorage.setItem('userProfile', JSON.stringify(newData));
        setProfile(newData);
        
        // Dispatch custom event to let other components know about the change
        window.dispatchEvent(new CustomEvent(PROFILE_UPDATED_EVENT, { detail: newData }));
    };

    return { profile, updateProfile };
}
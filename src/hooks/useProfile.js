import { useState } from "react";

export const useProfile = () => {

    // Checks for saved data in local storage
    const [profile, setProfile] = useState(() => {
        const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
        return savedProfile;
    })

    // Save new data 
    const updateProfile = (newData) => {
        localStorage.setItem('userProfile', JSON.stringify(newData));
        setProfile(newData);
    };

    return { profile, updateProfile };
}
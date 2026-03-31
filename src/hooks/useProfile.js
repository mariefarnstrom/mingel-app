import { useState } from "react";

export const useProfile = () => {
    const [profile, setProfile] = useState(() => {
        const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
        return savedProfile;
    })

    const updateProfile = (newData) => {
        localStorage.setItem('userProfile', JSON.stringify(newData));
        setProfile(newData);
    };

    return { profile, updateProfile } || null;
}


// Data
// import { useProfile } from "../hooks/useProfile";
// const { savedProfile } = useProfile();
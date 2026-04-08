import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

// Language
import { useLanguage } from "./useLanguage";
import translations from "../translations/translations.json";

export function useLevels () {
    const { lang } = useLanguage();
    const text = translations.chooseDifficulty[lang];

    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchLevels = async () => {
            try {
                const { data, error } = await supabase
                    .from('levels')
                    .select('id, level, points')
                    .order('id', { ascending: true });

                if (error) throw error;
                setLevels(data);
            } catch (err) {
                console.error("Error fetching levels:", err.message);
                setErrorMessage(text.errorFetching)
            } finally {
                setLoading(false);
            }
        };
        fetchLevels();
    }, [text]);

    return {
        levels,
        loading,
        errorMessage,
        setErrorMessage
    };
}
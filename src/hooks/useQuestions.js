import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./useLanguage";
import translations from "../translations/translations.json";

export function useQuestions(level) {
    const navigate = useNavigate();
    const { lang } = useLanguage();
    const text = translations.questions[lang];

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    // Safely parse stored user profile with error handling
    const getStoredUser = () => {
        try {
            const profile = localStorage.getItem("userProfile");
            return profile ? JSON.parse(profile) : null;
        } catch {
            return null;
        }
    };

    const storedUser = getStoredUser();

    // Check for missing user inside effect, not during render
    useEffect(() => {
        if (!storedUser) {
            setErrorMessage(text.errorNoUser);
        }
    }, [storedUser, text.errorNoUser]);

    const role = storedUser?.role;

    
    useEffect(() => {
        if (!storedUser || !role) return;

        setLoading(true);

        // Get correct questions based on company or student
        const tableName = role === "CO" ? "questions_companies" : "questions";

        const fetchData = async () => {
            try {
                // Först: Hämta level_id baserat på level-namn
                const { data: levelData, error: levelError } = await supabase
                    .from('levels')
                    .select('id')
                    .eq('level', level)
                    .single();

                if (levelError) throw levelError;
                if (!levelData) throw new Error('Level not found');

                // Sedan: Hämta questions för den level_id med join
                const { data, error } = await supabase
                    .from(tableName)
                    .select('*, levels(id, level, points)')
                    .eq('level_id', levelData.id);

                if (error) throw error;
                setQuestions(data);
            } catch (err) {
                setErrorMessage(text.errorFetching);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [level, role]);

    useEffect(() => {
        if (questions.length > 0) {
            setRandomQuestion();
        }
    }, [questions]);

    const setRandomQuestion = () => {
        const randomId = Math.floor(Math.random() * questions.length);
        setCurrentId(randomId);
    };

    const handleCompleted = async () => {
        if (currentId === null || !questions[currentId]) return;

        const name = storedUser.name;

        const { data, error } = await supabase
            .from("users")
            .select("score")
            .eq("name", name)
            .single();
        if (error) {
            setErrorMessage(text.errorFetchingScore);
            return;
        }

        const currentScore = data.score ?? 0;

        const points = questions[currentId].levels.points;
        const newScore = currentScore + points;

        const { error: updateError } = await supabase
            .from("users")
            .update({ score: newScore })
            .eq("name", name);

        if (updateError) {
            setErrorMessage(text.errorUpdatingScore);
        } else {
            navigate('/score');
        }
    }

    return {
        questions,
        loading,
        currentId,
        errorMessage,
        setErrorMessage,
        setRandomQuestion,
        handleCompleted
    };
}
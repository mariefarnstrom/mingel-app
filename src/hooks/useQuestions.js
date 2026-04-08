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

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('questions')
                    .select('*')
                    .eq('level', level);

                if (error) throw error;
                setQuestions(data);
            } catch (err) {
                console.error("Error fetching questions:", err.message);
                setErrorMessage(text.errorFetching);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [level, text]);

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

        const storedUser = JSON.parse(localStorage.getItem("userProfile"));

        if (!storedUser) {
            console.error("No user found");
            setErrorMessage(text.errorNoUser);
            return;
        }
        const name = storedUser.name;

        const { data, error } = await supabase
            .from("users")
            .select("score")
            .eq("name", name)
            .single();
        if (error) {
            console.error("Could not fetch score.", error);
            setErrorMessage(text.errorFetchingScore);
            return;
        }

        const currentScore = data.score ?? 0;

        const getPoints = (level) => {
            switch (level) {
                case "easy": return 1;
                case "medium": return 3;
                case "hard": return 5;
                default: return 0;
            }
        };

        const points = getPoints(questions[currentId].level);
        const newScore = currentScore + points;

        const { error: updateError } = await supabase
            .from("users")
            .update({ score: newScore })
            .eq("name", name);

        if (updateError) {
            console.error("Could not update score:", updateError);
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
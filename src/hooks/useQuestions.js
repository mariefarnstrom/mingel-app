import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export function useQuestions(level) {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const { data, error } = await supabase
                .from('questions')
                .select('*')
                .eq('level', level);

            if (error) {
                console.error("Error fetching questions:", error);
            } else {
                setQuestions(data);
            }
            setLoading(false);
        };

        fetchData();
    }, [level]);

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
            console.error("Ingen användare hittades");
            return;
        }
        const name = storedUser.name;

        const { data, error } = await supabase
            .from("users")
            .select("score")
            .eq("name", name)
            .single();
        if (error) {
            console.error("Kunde inte hämta poäng.", error);
            return;
        }

        const currentScore = data.score ?? 0;

        const getPoints = (level) => {
            switch (level) {
                case "easy": return 1;
                case "medium": return 2;
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
            console.error("Kunde inte uppdatera poäng:", updateError);
        } else {
            navigate('/score');
        }
    }

    return {
        questions,
        loading,
        currentId,
        setRandomQuestion,
        handleCompleted
    };
}
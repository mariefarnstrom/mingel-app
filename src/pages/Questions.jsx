import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// Components
import { HeadingCard } from "../components/cards/Cards";
import { ButtonRow } from "../components/buttons/ButtonRow";
import { SmallButton, SmallLightButton } from "../components/buttons/Button";
import { QuestionCard } from "../components/cards/Cards";
import { NewQuestionButton } from "../components/buttons/Button";

// Data
import { supabase } from "../lib/supabaseClient";


export default function Questions() {

    const { level } = useParams();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [currentId, setCurrentId] = useState(null);

    // Fetch scores from databse
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
            const randomId = Math.floor(Math.random() * questions.length);
            setCurrentId(randomId);
        }
    }, [questions]);

    const handleNewQuestion = () => {
        if (questions.length > 0) {
            const randomId = Math.floor(Math.random() * questions.length);
            setCurrentId(randomId);
        }
    }

    // Loading view
    if (loading) return <p>Laddar fråga...</p>
    if (questions.length === 0) return <p>Inga frågor hittades. Försök igen.</p>;
    if (currentId === null) return <p>Laddar fråga...</p>;

    const numOfQuestions = 0;
    const easyQuestions = 0;
    const mediumQuestions = 0;
    const hardQuestions = 0;

    return (
        <>
            <HeadingCard>
                <h3>FRÅGA {numOfQuestions + 1}</h3>
                <p>Nivå: {questions[currentId].level}</p>
            </HeadingCard>

            <QuestionCard>
                <p>{questions[currentId].question}</p>
            </QuestionCard>

            <NewQuestionButton onClick={handleNewQuestion}>
                GENERERA NY FRÅGA
            </NewQuestionButton>

            <ButtonRow>
                <SmallLightButton type="button" onClick={() => navigate(-1)}>
                    <img src="backwardsArrow.svg" alt="back" />
                    TILLBAKA
                </SmallLightButton>
                <SmallButton>
                    KLAR
                    <img src="forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </>
    );
}
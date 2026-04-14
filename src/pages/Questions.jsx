import { useQuestions } from "../hooks/useQuestions";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import { HeadingCard } from "../components/cards/Cards.styles";
import { ButtonRow } from "../components/buttons/Buttons.styles";
import NextButton from "../components/buttons/NextButton";
import PrevButton from "../components/buttons/PrevButton";
import { QuestionCard } from "../components/cards/Cards.styles";
import { NewQuestionButton } from "../components/buttons/Buttons.styles";

// Language
import { useLanguage } from "../hooks/useLanguage";
import translation from "../translations/translations.json";
import { ErrorModal } from "../components/ErrorModal";


export default function Questions() {

    const { level } = useParams();
    const navigate = useNavigate();
    const { lang } = useLanguage();
    const text = translation.questions[lang];
    const textCommon = translation.common[lang];

    const {
        questions,
        loading,
        currentId,
        errorMessage,
        setErrorMessage,
        setRandomQuestion,
        handleCompleted
    } = useQuestions(level);

    const [shouldShowError, setShouldShowError] = useState(false);

    // Delay render of error modal to eliminate flicker
    useEffect(() => {
        if (errorMessage) {
            const id = setTimeout(() => {
                setShouldShowError(true);
            }, 50);

            return () => clearTimeout(id);
        } else {
            setShouldShowError(false);
        }
    }, [errorMessage]);

    // Clear error when language changes
    useEffect(() => {
        setErrorMessage("");
        setShouldShowError(false);
    }, [lang]);

    // Loading view
    if (loading) return <p>{text.loading}</p>
    if (questions.length === 0) return (
        <ErrorModal errorMessage={text.notFound} onClose={() => navigate(-1)} />
    );
    if (currentId === null) return <p>{text.loading}</p>;
    if (!questions[currentId] || !questions[currentId].levels) return (
        <ErrorModal errorMessage={text.errorFetching} onClose={() => navigate(-1)} />
    );

    return (
        <>
            {shouldShowError && (
                <ErrorModal 
                    errorMessage={errorMessage} 
                    onClose={() => {
                        setShouldShowError(false);
                        setErrorMessage("");
                    }} 
                />
            )}

            <HeadingCard>
                <h3>{text.level.toUpperCase()}: {questions[currentId].levels.level.toUpperCase()}</h3>
                <p>{questions[currentId].levels.points}xp</p>
            </HeadingCard>

            <QuestionCard>
                <p>{questions[currentId][`question_${lang}`]}</p>
            </QuestionCard>

            <NewQuestionButton onClick={setRandomQuestion}>
                {text.generateNew.toUpperCase()}
            </NewQuestionButton>

            <ButtonRow>
                <PrevButton type="button" onClick={() => navigate(-1)}>
                </PrevButton>
                <NextButton type="button" onClick={handleCompleted}>
                    {textCommon.done.toUpperCase()}
                </NextButton>
            </ButtonRow>

        </>
    );
}
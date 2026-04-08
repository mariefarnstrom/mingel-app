import { useQuestions } from "../hooks/useQuestions";
import { useNavigate, useParams } from "react-router-dom";

// Components
import { HeadingCard } from "../components/cards/Cards.styles";
import { ButtonRow } from "../components/buttons/ButtonRow.styles";
import { SmallButton, SmallLightButton } from "../components/buttons/Button.styles";
import { QuestionCard } from "../components/cards/Cards.styles";
import { NewQuestionButton } from "../components/buttons/Button.styles";

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
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={() => setErrorMessage("")} />}

            <HeadingCard>
                <h3>{text.level.toUpperCase()}: {questions[currentId].levels.level.toUpperCase()}</h3>
                <p>{questions[currentId].levels.points}xp</p>
            </HeadingCard>

            <QuestionCard>
                <p>{questions[currentId].question}</p>
            </QuestionCard>

            <NewQuestionButton onClick={setRandomQuestion}>
                {text.generateNew.toUpperCase()}
            </NewQuestionButton>

            <ButtonRow>
                <SmallLightButton type="button" onClick={() => navigate(-1)}>
                    <img src="/backwardsArrow.svg" alt="back" />
                    {textCommon.back.toUpperCase()}
                </SmallLightButton>
                <SmallButton type="button" onClick={handleCompleted}>
                    {textCommon.done.toUpperCase()}
                    <img src="/forwardArrow.svg" alt="forward" />
                </SmallButton>
            </ButtonRow>

        </>
    );
}
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import { WideButton } from "../components/buttons/Buttons.styles";
import { BaseCard } from "../components/cards/Cards.styles";
import { GhostContainer, GhostWrapper } from "../components/icons/GhostContainer.styles";
import { RegisteredPlayersCard } from "../components/cards/Cards.styles";
import { ErrorModal } from "../components/ErrorModal";
import { VideoWrapper, IntroVideo } from "../App.styles";

// Icons
import GhostIcon from "../components/icons/Ghost";

// Data / Language
import { supabase } from "../lib/supabaseClient";
import { useLanguage } from "../hooks/useLanguage";
import useCreateProfile from "../hooks/useCreateProfile";
import translations from "../translations/translations.json";

export default function Home({ showIntro, setShowIntro }) {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { lang } = useLanguage();
    const text = translations.home[lang];
    const textCommon = translations.common[lang];
    const { existingProfile } = useCreateProfile();

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('users')
                    .select('role');

                if (error) throw error;
                setUsers(data);
            } catch (err) {
                setErrorMessage(text.errorFetching);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);


    const digitalDesignersActive = users.filter(user => user.role === 'DD').length;
    const webDevelopersActive = users.filter(user => user.role === 'WU').length;
    const companiesActive = users.filter(user => user.role === 'CO').length;

    useEffect(() => {
        if (sessionStorage.getItem("introPlayed")) return;

        const timer = setTimeout(() => {
            setShowIntro(false);
            sessionStorage.setItem("introPlayed", "true");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (showIntro) {
        return (
            <VideoWrapper>
                <IntroVideo
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => setShowIntro(false)}
                >
                    <source src="/intro.mp4" type="video/mp4" />
                </IntroVideo>
            </VideoWrapper>
        )
    }

    return (
        <>
            {errorMessage && <ErrorModal errorMessage={errorMessage} onClose={() => setErrorMessage("")} />}

            <BaseCard>
                <h1>{text.title.toUpperCase()}</h1>
                <p>{text.description1}</p>
                <p>{text.description2}</p>
            </BaseCard>

            <RegisteredPlayersCard>
                <h2>{text.registeredPlayers.toUpperCase()}</h2>

                <div>
                    <p>{textCommon.digitalDesigners.toUpperCase()}:</p>
                    <p>{loading ? textCommon.loading : digitalDesignersActive}</p>
                </div>

                <div>
                    <p>{textCommon.webDevelopers.toUpperCase()}:</p>
                    <p>{loading ? textCommon.loading : webDevelopersActive}</p>
                </div>

                <div>
                    <p>{textCommon.companies.toUpperCase()}:</p>
                    <p>{loading ? textCommon.loading : companiesActive}</p>
                </div>
            </RegisteredPlayersCard>

            <GhostContainer>
                <GhostWrapper>
                    <GhostIcon />
                </GhostWrapper>
            </GhostContainer>

            <WideButton onClick={() => navigate(existingProfile !== null ? "/choose-difficulty" : "/instructions")}>
                {(existingProfile !== null
                    ? text.toQuestions
                    : text.seeRules).toUpperCase()}
            </WideButton>

        </>
    );
}
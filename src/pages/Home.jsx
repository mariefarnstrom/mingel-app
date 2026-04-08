import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import { WideButton } from "../components/buttons/Button.styles";
import { BaseCard } from "../components/cards/Cards.styles";
import { GhostContainer } from "../components/GhostContainer.styles";
import { RegisteredPlayersCard } from "../components/cards/Cards.styles";
import { ErrorModal } from "../components/ErrorModal";

// Icons
import GhostIcon from "../components/icons/Ghost";

// Data / Language
import { supabase } from "../lib/supabaseClient";
import { useLanguage } from "../hooks/useLanguage";
import useCreateProfile from "../hooks/useCreateProfile";
import translations from "../translations/translations.json";

export default function Home() {

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
                console.error("Error fetching users:", err.message);
                setErrorMessage(text.errorFetching);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);


    const digitalDesignersActive = users.filter(user => user.role === 'DD').length;
    const webDevelopersActive = users.filter(user => user.role === 'WU').length;

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
            </RegisteredPlayersCard>

            <GhostContainer>
                <GhostIcon />
            </GhostContainer>

            <WideButton onClick={() => navigate(existingProfile !== null ? "/choose-difficulty" : "/instructions")}>
                {(existingProfile !== null
                    ? text.toQuestions
                    : text.seeRules).toUpperCase()}
            </WideButton>

        </>
    );
}
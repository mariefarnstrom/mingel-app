import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import { WideButton } from "../components/buttons/Button";
import { BaseCard } from "../components/cards/Cards";
import { GhostContainer } from "../components/GhostContainer";
import { RegisteredPlayersCard } from "../components/cards/Cards";

// Data / Language
import { supabase } from "../lib/supabaseClient";
import { useLanguage } from "../hooks/useLanguage";
import translations from "../translations/translations.json";

export default function Home() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const { lang } = useLanguage();
    const text = translations.home[lang];
    const textCommon = translations.common[lang];
    
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const { data, error } = await supabase
            .from('users')
            .select('role')
            
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setUsers(data);
            }
            setLoading(false);
        }

        fetchUsers();
    }, []);
    
    
    const digitalDesignersActive = users.filter(user => user.role === 'DD').length;
    const webDevelopersActive = users.filter(user => user.role === 'WU').length;

    return (
        <>
            <BaseCard>
                <h1>{text.title.toUpperCase()}</h1>
                <p>{text.description1}</p>
                <p>{text.description2}</p>
            </BaseCard>

            <RegisteredPlayersCard>
                <h2>{text.registeredPlayers.toUpperCase()}</h2>

                <div>
                    <p>{textCommon.digitalDesigner.toUpperCase()}</p>
                    <p>{loading ? textCommon.loading : digitalDesignersActive}</p>
                </div>

                <div>
                    <p>{textCommon.webDevelopers.toUpperCase()}</p>
                    <p>{loading ? textCommon.loading : webDevelopersActive}</p>
                </div>
            </RegisteredPlayersCard>

            <GhostContainer>
                <img src="ghost.svg" alt="Ghost image" />
            </GhostContainer>

            <WideButton onClick={() => navigate("/instructions")}>
                {text.seeRules.toUpperCase()}
            </WideButton>

        </>
    );
}
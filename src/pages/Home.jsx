import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import { WideButton } from "../components/buttons/Button";
import { BaseCard } from "../components/cards/Cards";
import { GhostContainer } from "../components/GhostContainer";
import { RegisteredPlayersCard } from "../components/cards/Cards";

// Data
import { supabase } from "../lib/supabaseClient";


export default function Home() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    
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
                <h1>VÄLKOMMEN TILL YRGOXP</h1>
                <p>Spelet som gör det enkelt att börja prata, Samla poäng genom att ställa frågor och vara aktiv i spelet.</p>
                <p>Ju fler frågor du ställer, desto högre klättrar du på scoreboarden.</p>
            </BaseCard>

            <RegisteredPlayersCard>
                <h2>SPELARE INNE</h2>

                <div>
                    <p>DIGITAL DESIGNERS: </p>
                    <p>{loading ? 'Laddar...' : digitalDesignersActive}</p>
                </div>

                <div>
                    <p>WEBBUTVECKLARE: </p>
                    <p>{loading ? 'Laddar...' : webDevelopersActive}</p>
                </div>
            </RegisteredPlayersCard>

            <GhostContainer>
                <img src="ghost.svg" alt="Ghost image" />
            </GhostContainer>

            <WideButton onClick={() => navigate("/instructions")}>
                SE SPELREGLER
            </WideButton>

        </>
    );
}
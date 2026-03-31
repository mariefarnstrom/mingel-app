import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { WideButton } from "../components/buttons/Button";
import { BaseCard } from "../components/cards/Cards";
import { GhostContainer } from "../components/GhostContainer";
import { PresentCard } from "../components/cards/Cards";

// Data
import { supabase } from "../lib/supabaseClient";


export default function Home() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    
    const fetchUsers = async () => {
        const { data, error } = await supabase
        .from('users')
        .select('*')
        .order("score", { ascending: false });
        
        if (error) {
            console.error("Error fetching data:", error);
        } else {
            setUsers(data);
        }
    };
    
    useEffect(() => {
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

            <PresentCard>
                <h2>SPELARE INNE</h2>

                <div>
                    <p>DIGITAL DESIGNERS: </p>
                    <p>{digitalDesignersActive}</p>
                </div>

                <div>
                    <p>WEBBUTVECKLARE: </p>
                    <p>{webDevelopersActive}</p>
                </div>
            </PresentCard>

            <GhostContainer>
                <img src="ghost.svg" alt="Ghost image" />
            </GhostContainer>

            <WideButton onClick={() => navigate("/instructions")}>
                SE SPELREGLER
            </WideButton>

        </>
    );
}
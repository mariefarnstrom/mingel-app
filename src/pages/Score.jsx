import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Score() {

    const [users, setUsers] = useState([]);

    // Fetch scores from databse
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('users')
                .select('*')

            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setUsers(data);
            }
        };

        fetchData();

    }, []);


    return (
        <>
            <h1>Score</h1>

            { users.map((user) => (
                <p key={user.id}>{user.name} - {user.score}</p>

            ))}
        </>
    );
}
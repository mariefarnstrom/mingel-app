import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { HeadingCard } from "../components/cards/Cards";

export default function Score() {

    const [users, setUsers] = useState([]);

    // Fetch live scores from databse
    useEffect(() => {
        fetchUsers();
        const channel = supabase
            .channel("scoreboard")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "users",
                },
                (payload) => {
                    console.log("Change recieved!", payload);

                    setUsers((prev) => {
                        let updated = [...prev];

                        if (payload.eventType === "UPDATE") {
                            updated = updated.map(u =>
                                u.id === payload.new.id ? payload.new : u
                            );
                        }

                        if (payload.eventType === "INSERT") {
                            updated = [...updated, payload.new];
                        }

                        if (payload.eventType === "DELETE") {
                            updated = updated.filter(u => u.id !== payload.old.id);
                        }

                        return updated.sort((a, b) => b.score - a.score);
                    });
                }
            )
            .subscribe();

        return () =>
            supabase.removeChannel(channel);
    }, []);

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


    return (
        <>
            <HeadingCard>
                <h3>SCOREBOARD</h3>
                <p>Se vem som leder just nu!</p>
            </HeadingCard>

            {users.map((user, index) => (
                <p key={user.id}>
                    {index + 1}. {user.name} - {user.score}
                </p>

            ))}
        </>
    );
}
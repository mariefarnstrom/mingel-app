import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useLanguage } from "./useLanguage";
import translations from "../translations/translations.json";

export function useScore() {

    const { lang } = useLanguage();
    const text = translations.score[lang];

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // Fetch live scores from databse
    const fetchUsers = async () => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .order("score", { ascending: false });

            if (error) throw error;
            setUsers(data);
        } catch (err) {
            console.error("Error fetching data:", err);
            setErrorMessage(text.errorFetching);
        } finally {
            setLoading(false);
        }
    };

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

    return {
        users,
        loading,
        errorMessage
    }
};
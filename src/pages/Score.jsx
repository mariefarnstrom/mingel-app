import { HeadingCard } from "../components/cards/Cards";
import { useScore } from "../hooks/useScore";

export default function Score() {
    const { users, loading, error } = useScore();

    if (loading) return <p>Laddar scoreboard...</p>;

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
import { HeadingCard } from "../components/cards/Cards";
import { useScore } from "../hooks/useScore";
import { LeaderBoard, LeaderBoardRow, Rank, UserInfo, UserScore } from "../components/LeaderBoard.styles";

export default function Score() {
    const { users, loading, error } = useScore();

    if (loading) return <p>Laddar scoreboard...</p>;

    return (
        <>
            <HeadingCard>
                <h3>SCOREBOARD</h3>
                <p>Se vem som leder just nu!</p>
            </HeadingCard>

            <LeaderBoard>
                {users.map((user, index) => (
                    <LeaderBoardRow>
                        <Rank>
                            <span key={user.id}>
                                {index + 1}
                            </span>
                        </Rank>
                        <UserInfo>
                            <span>{user.name}</span>
                            <span>{user.role}</span>
                        </UserInfo>
                        <UserScore>
                            <span>{user.score}p</span>
                        </UserScore>

                    </LeaderBoardRow>

                ))}
            </LeaderBoard>
        </>
    );

}
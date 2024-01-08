import { Link } from 'react-router-dom'
export default function MainPage({ user }) {
    return (
    <>
    <h1>QuestForge</h1>
    <h2>{user.name}'s Rank: </h2>
    <Link to='/quests'>My Quests</Link>
    &nbsp;&nbsp;
    <Link to='/forgequest'>Forge a Quest</Link>
    </>
    )
}
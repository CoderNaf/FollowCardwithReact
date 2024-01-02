import './App.css'
import { TwitterFollowCard } from './TwitterFollowcard.jsx'

export function App(){
    const formatUsername = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                initialIsFollowing
                userName='codernaf' 
                name='fabian Silva'>
            </TwitterFollowCard>

            <TwitterFollowCard
                initialIsFollowing
                userName='facebook' 
                name='Facebook oficial'>
             </TwitterFollowCard>
        </section>
    )
}  
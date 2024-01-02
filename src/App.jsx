import './App.css'
import { TwitterFollowCard } from './TwitterFollowcard.jsx'

export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard userName='codernaf' name='fabian Silva'></TwitterFollowCard>
            <TwitterFollowCard userName='facebook' name='Facebook oficial'></TwitterFollowCard>
        </section>
    )
}
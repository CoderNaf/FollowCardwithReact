import { useState } from 'react' //nos ayuda a guardar una variable

export function TwitterFollowCard ({userName = 'unknown', name = 'user', initialIsFollowing}){
   
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    console.log(isFollowing)
    const textFollowCard = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" className='tw-followCard-avatar '/>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClass} onClick={handleClick}>
                {textFollowCard}
            </button>
        </aside>
      </article>
    )
}
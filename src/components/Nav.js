import React, {useContext} from 'react'
import { 
    NavLink
} from 'react-router-dom'
import { MyContext } from '../App'

export const Nav = () => {

    const user = useContext(MyContext)
    const {userId, setUserId} = user

    return (
        <div className='nav'>
            {
                userId
                ?
                <>
                    <NavLink to='/'>Posts</NavLink>
                    <button onClick={() => setUserId(false)}>Sign out</button>
                </>
                :
                <>
                    <button onClick={() => setUserId(true)}>Sign in</button>
                </>
            }
        </div>
    )
}

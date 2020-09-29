import React, {useCallback, useContext} from 'react'
import { 
    NavLink
} from 'react-router-dom'
import { MyContext } from '../App'

// const Button = (action, title) => {

// }

export const Nav = () => {

    const user = useContext(MyContext)
    const {userId, setUserId} = user

    const handleClick = useCallback( async (value) => {
        await setUserId(value)
    }, [userId])

    return (
        <div className='nav'>
            <div className='logo nav__item'>
                <NavLink to='/' className='sirqle'>
                    S
                </NavLink>
                <span className='text'>
                    Blog
                </span>
            </div>
            {
                userId && <span className='nav__item button' onClick={() => handleClick(false)}>Sign out</span>
            }
        </div>
    )
}

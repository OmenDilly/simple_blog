import React, {useContext, useCallback} from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../App'
import '../styles/index.sass'

export const SignIn = () => {

    const user = useContext(MyContext)
    const {userId, setUserId} = user

    const handleClick = useCallback( async (value) => {
        await setUserId(value)
    }, [userId])

    return (
        <div className='form__container'>
            <div className="form__controls">
            <div className="header">
                <h2 className='title'>Sign in to discover blogs</h2>
                <p className='body'>There are a lot of nice ones</p>
            </div>

                <NavLink onClick={() => handleClick(true)} className='button' to='/'>Sign in</NavLink>
            </div>
        </div>
    )
}

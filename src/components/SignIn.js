import React from 'react'
import { NavLink } from 'react-router-dom'

export const SignIn = () => {
    return (
        <form>
            <h3>Sign in to see information</h3>
            <NavLink to='/'>Sign in</NavLink>
        </form>
    )
}

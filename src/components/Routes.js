import React, {useContext} from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { MyContext } from '../App'
import { PostDetails } from './PostDetails'
import { PostList } from './PostList'
import { SignIn } from './SignIn'

export const useRoutes = (id) => {
    if (id) {
        return (
            <Switch>
                <Route path='/' exact>
                    <PostList/>
                </Route>
                <Route path='/:id'>
                    <PostDetails/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <SignIn/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}

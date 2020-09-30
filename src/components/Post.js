import React from 'react'
import {
	NavLink
} from 'react-router-dom'
import '../styles/index.sass'

export const Post = (props) => {

	const {title, body, image, id} = props.post

	return (
		<NavLink to={`/${id}`} className='post__item'>
			<span className="post__image">
				<img src={image.url} alt=""/>
			</span>
			<div className='post__content'>
				<h3 className='post__title'>
					{title}
				</h3>
				<p className='post__body'>
					{body}
				</p>
			</div>
		</NavLink>
	)
}

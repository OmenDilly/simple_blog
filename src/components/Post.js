import React from 'react'
import '../styles/index.sass'

export const Post = (props) => {

	const {title, body, image} = props.post

	return (
		<div className='post__item'>
			<span className="post__image">
				<img src={image.url} alt=""/>
			</span>
			<div className='post__content'>
				<h4 className='post__title'>
					{title}
				</h4>
				<p>
					{body}
				</p>
			</div>
		</div>
	)
}

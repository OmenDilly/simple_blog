import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Post } from './Post'
import '../styles/index.sass'

const POSTS = gql`
    query (
        $options: PageQueryOptions
    ) {
        posts (options: $options) {
            data {
            id
            title
            body
            }
        }
        album (id: 1) {
            photos (options: $options) {
            data {
                id
                url
                
            }
            }
        }
    }
`

export const PostList = () => {

    const { loading, error, data } = useQuery(POSTS, {
        variables: {
            "options": {
                "paginate": {
                  "page": 1,
                  "limit": 5
                }
              }
        }

    })

    const displayPosts = () => {
        if (loading) {
            return (
                <div className="loading"></div>
            )
        } else {
            return (
                data.posts.data.map((post, index) => {
                    return (
                        <Post key={post.id} post={{
                            id: post.id,
                            title: post.title,
                            body: post.body,
                            image: data.album.photos.data[index]
                        }}/>
                    )
                })
            )
        }
    }

    return (
        <div className='post__container'>
            {
                displayPosts()
            }
        </div>
    )
}

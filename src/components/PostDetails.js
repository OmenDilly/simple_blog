import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useQuery, gql } from '@apollo/client'
import '../styles/index.sass'

// const POST = gql`
//     query (
//         $id: ID!
//     ) {
//         post (id: $id) {
//                 id
//                 title
//                 body
//         }
//         photo (id: $id) {
//             id
//             url 

//         }
//     }
// `

export const PostDetails = () => {

    // const { id } = useParams();

    // const { loading, error, data } = useQuery(POST, {
    //     variables: {
    //         "id": id
    //     }

    // })

    return (
        <div className='detail__card'>
            {/* {
                loading 
                ?
                <div>loading</div> 
                :
                <>
                    <span>
                        <img src={`${data.photo.url}`} alt=""/>
                    </span>
                    <span>
                        <h3>
                            {data.post.title}
                        </h3>
                        <p>
                            {data.post.body}
                        </p>
                    </span>
                </>
            } */}
            <h2 className='detail__title'>
                Hello World!
            </h2>

        </div>
    )
}

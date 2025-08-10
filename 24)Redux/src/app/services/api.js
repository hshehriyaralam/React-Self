import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const api = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({baseUrl : 'https://jsonplaceholder.typicode.com/'}),
    endpoints : (builder) => ({
        //get request 
        getPosts : builder.query({
            query : () => 'posts'
        }),

        // POST request (mutation)
        addPost :   builder.mutation({
            query : (newPost) => ({
                url : 'post',
                method : 'POST',
                body : newPost
            })
        })

    })
})


// Auto-generated hooks export
export const {useGetPostsQuery, useAddPostMutation } = api
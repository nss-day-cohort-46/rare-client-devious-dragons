import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { ReactionContext } from './ReactionProvider'

export const ReactionList =() => {
    const {reactions, getReactions} = useContext(ReactionContext)
    const {postId} = useParams
    console.log(postId)

    useEffect(()=>{
        getReactions()
    }, [])

    return(
        <>
            <h2>Reactions</h2>
            <div>{reactions.map(react => <img key={react.id} src={react.imageUrl} width="10%"/>)}</div>
        </>
    )
}


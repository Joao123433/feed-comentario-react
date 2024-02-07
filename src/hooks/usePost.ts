import { useState } from 'react'
import PostInterface from '../interface/PostInterface'

export default function usePost() {
  const [ posts, setPost ] = useState<PostInterface[]>(() => {
    const storagePost = localStorage.getItem("post-list")
    if(!storagePost) return []
    return JSON.parse(storagePost)
  })

  const addPost = ({ email, comment}: {email: string, comment: string}) => {
    const savePosts = {
      id: Math.floor(Math.random() * 1000000),
      email: email,
      date: new Date(),
      comment: comment
    }
    setPost((prevState) => {
      const newState = [savePosts, ...prevState]
      localStorage.setItem("post-list", JSON.stringify(newState))
      return newState
    })
  }

  return { posts, addPost }
}
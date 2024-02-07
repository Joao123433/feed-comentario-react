import { SetStateAction, useState } from "react"
import FormPostInterface from "../interface/FormPostInterface"
import TextArea from "./TextArea"
import InputText from "./InputText"

export default function NewPostForm({ addPost }: FormPostInterface) {
  const [ email, setEmail ] = useState("")
  const [ comment, setComment ] = useState("")

  const settingEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value)
  }

  const settingComment = (e: { target: { value: SetStateAction<string> } }) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    addPost({ email, comment })
    setEmail("")
    setComment("")
  }

  return (
    <form>
        <InputText id={"email"} text="Email:" value={email} setValue={settingEmail}/>
        <TextArea id={"comment"} text="Comentário:" value={comment} setValue={settingComment}/>
        <button onClick={handleSubmit}>Enviar Comentário</button>
      </form>
  )
}
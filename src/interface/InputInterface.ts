import { ChangeEventHandler } from "react"

export default interface InputInterface<T> {
  id: string 
  text: string
  value: string
  setValue: ChangeEventHandler<T>
}
import InputInterface from "../interface/InputInterface";

export default function TextArea({ id, text, value, setValue}: InputInterface<HTMLTextAreaElement>) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <textarea 
        name={id}
        id={id}
        cols={30} 
        rows={6}
        onChange={setValue}
        value={value}
        required
      ></textarea>
    </div>
  )
}
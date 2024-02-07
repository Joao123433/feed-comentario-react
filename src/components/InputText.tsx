import InputInterface from "../interface/InputInterface";

export default function InputText({ id, text, value, setValue}: InputInterface<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input 
        type="text" 
        id={id}
        name={id}
        value={value}
        onChange={setValue}
        required
      />
    </div>
  )
}
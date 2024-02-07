export default function Post({email, date, comment}: {email: string, date: string, comment: string}) {
  return (
    <div>
      <h2>{email}</h2>
      <p>{date}</p>
      <p>{comment}</p>
    </div>
  )
}
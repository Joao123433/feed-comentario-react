export default interface FormPostInterface {
  addPost: (post: {email: string, comment: string}) => void
}

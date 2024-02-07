/* eslint-disable @typescript-eslint/no-explicit-any */
import NewPostForm from './components/NewPostForm'
import Post from './components/Post'
import usePost from './hooks/usePost'
import PostInterface from './interface/PostInterface'

function App() {
  const { posts, addPost } = usePost()

  return (
    <div id='app'>
      <h1>Seção de Comentários</h1>
      <NewPostForm addPost={addPost}/>
      <div className="commentList">
        {posts.length > 0 
          ? 
            posts.map((post: PostInterface) => (
              <Post email={post.email} date={`Em ${post.date.toLocaleString()}`} comment={post.comment} key={post.id}/>
            )) 
          : 
            <h2>Seja o Primeiro a Comentar!</h2>
        }
      </div>
    </div>
  )
}

export default App
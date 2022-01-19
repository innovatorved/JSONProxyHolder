import React , {useEffect , useState} from 'react';

const API_BACKEND_URL = `http://${window.location.hostname}:1338/posts`;

export default function ActiveState({ id }) {

  const [post , setPost] = useState({})
  
  useEffect(()=>{
    async function RunOperation(){
      const [post , comment] = await Promise.all([
          fetch(`${API_BACKEND_URL}.${id}`),
          fetch(`${API_BACKEND_URL}.${id}/comments`)
      ])
      const [postData , commentData] = await Promise.all([
        post.json(), 
        comment.json()
      ])

      setPost({postData , commentData});
    }
    RunOperation();
  })

  return (
      <div>
        <h1>{id}</h1>
      </div>
  )
}

import React, { useEffect, useState } from 'react';

const API_BACKEND_URL = `http://${window.location.hostname}:1338/posts`;

export default function ActiveState({ id }) {

  const [post, setPost] = useState({
    postData: "",
    commentData: []
  })

  useEffect(() => {
    async function RunOperation() {
      const [post, comment] = await Promise.all([
        fetch(`${API_BACKEND_URL}/${id}`),
        fetch(`${API_BACKEND_URL}/${id}/comments`)
      ])
      const [postData, commentData] = await Promise.all([
        post.json(),
        comment.json()
      ])

      setPost({
        postData,
        commentData
      });
    }
    if (id !== "" && id !== null && id !== undefined) {
      RunOperation();
    }

  }, [id])

  if (!post) {
    return null
  }

  return (
    <div style={{backgroundColor : 'gray'}}>
      {
        id !== null ?
          <div style={{ marginLeft: "10px" }}>
            <h2 >Title : {post.postData.title}</h2>
            <p>Description : {post.postData.body}</p>

            <h3>Commments : -</h3>
            <ul style={{ marginLeft: "10px" }}>
              {
                post.commentData.map(comment => {
                  return (
                    <li key={comment.id}>
                      <b>{comment.name}</b> : {comment.body}
                    </li>
                  )
                })
              }
            </ul>
          </div> :
          ""
      }
    </div>
  )
}

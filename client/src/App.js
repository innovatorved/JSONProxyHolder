import React, { useEffect, useState } from 'react'
import ActiveState from './ActiveState'

function App() {
  const [data, setData] = useState([]);
  const API_BACKEND_URL = `http://${window.location.hostname}:1338/posts`;

  const [activeState, setActiveState] = useState(null);

  useEffect(() => {
    fetch(API_BACKEND_URL).then(d => d.json()).then(d2 => {
      setData(d2)
    })
  }, [API_BACKEND_URL]);

  return (
    <div>
      <h1>Your Posts</h1>
      <ActiveState id={activeState}/>
      <ul>
        {data.map(entity => {
          return (
            <li key={entity.id} onClick={()=>{
              setActiveState(entity.id)
            }}>{entity.title}</li>
          )}
        )}
      </ul>
    </div>
  )
}

export default App

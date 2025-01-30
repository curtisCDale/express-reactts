import { useEffect, useState } from 'react'
import { BackendData } from "./schema/backendData";

function App() {

  const [backendData, setBackendData] = useState<BackendData | null>(null);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data: BackendData) => setBackendData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <>
      {backendData === null ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Users</h1>
          <ul>
            {backendData.users.map((user: any) => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default App

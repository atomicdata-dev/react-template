import './App.css'
import { Agent, Store, StoreContext } from '@tomic/react'
import Browser from './Browser'

const store = new Store({
  // Feel free to host Atomic Server yourself and then use http://localhost:9883
  serverUrl: 'https://atomicdata.dev',
})

// Create an Agent by visiting https://atomicdata.dev/invites/1 and copy the secret from the user settings page
const agent = Agent.fromSecret('eyJzdWJqZWN0IjoiaHR0cHM6Ly9hdG9taWNkYXRhLmRldi9hZ2VudHMvWE0zMFdVQ0hyUU5iTHNBQjB4VGFsdmZHRWhjQy9UVnBkUlB0Qnk1R1Nnbz0iLCJwcml2YXRlS2V5IjoiTkxiblJ3OGVRTGt1dW5tOG4zMkxhZzFtd2htRTBpWWZ0bkNraEwvYkcvWT0iLCJwdWJsaWNLZXkiOiJYTTMwV1VDSHJRTmJMc0FCMHhUYWx2ZkdFaGNDL1RWcGRSUHRCeTVHU2dvPSJ9');
store.setAgent(agent)

function App() {

  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Browser/>
      </div>
    </StoreContext.Provider>
  )
}

export default App

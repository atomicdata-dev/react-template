import './App.css'
import { Store, StoreContext } from '@tomic/react'

const store = new Store({
  serverUrl: 'https://atomicdata.dev',
})

function App() {

  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <h1>hello world</h1>
      </div>
    </StoreContext.Provider>
  )
}

export default App

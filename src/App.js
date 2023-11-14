//bulma
import 'bulma/css/bulma.css'

//mi CSS
import './components/NavBar/NavBar.css'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {'Bienvenidos a Zelaya restaurant'} />
    </div>
  )
}

export default App
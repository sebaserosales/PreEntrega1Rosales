import './App.css'

import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
const App = () => {
  return (
      <div>
        <NavBar />
        <ItemListContainer greeting={"CERVEZA CON UN SABOR UNICO"} />
      </div>
    
  )
}

export default App

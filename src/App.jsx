import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView.jsx'
import CategoryView from './views/CategoryView.jsx'
import ItemDetailContainer from './views/ItemDetailContainer.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<HomeView welcome="bievenido"/>}></Route>
          <Route exact path='/category/:categoryId' element={<CategoryView />}></Route>
          <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route exact path='*' element={<h1>404 no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

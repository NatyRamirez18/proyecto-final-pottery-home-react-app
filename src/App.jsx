import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Greeting from './components/Titles/Greeting.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (

    <div className="App">
      
      <header className="App-header">

    <BrowserRouter>
     <NavBar />

     <Greeting/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>

        <Route path='/category/:id2' element={<ItemListContainer/>}/>


        <Route path='*' element={<h1>Error 404: esta pagina no existe! </h1>}/>
      </Routes>
    </BrowserRouter>

    </header>

    </div>

  );
}

export default App;

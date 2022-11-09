
import './App.css';

import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <ItemListContainer  greeting={"Bienvenidos!"} />
      </main>

    </div>
  );
}

export default App;

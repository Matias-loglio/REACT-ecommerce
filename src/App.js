
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from ".components/NavBar";


function App() {
  return (
    <div className="App">
      <main>
        <ItemListContainer greeting={"Hola Mundo"}/>
        <NavBar />
      </main>

    </div>
  );
}

export default App;

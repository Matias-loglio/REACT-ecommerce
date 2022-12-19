
import './App.css';
import { CartContext } from './context/cartContext';
import ItemListContainer from './components/ItemListContainer';
import {Layout} from './components/Layout';

function App() {
  return (
    <div className="App">
      <main>
        <CartContext.Provider value={[]}>
          <Layout>
            <ItemListContainer  />

          </Layout>
        </CartContext.Provider>
        
      </main>

    </div>
  );
}

export default App;

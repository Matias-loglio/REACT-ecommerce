
import './App.css';

import ItemListContainer from './components/ItemListContainer';
import {Layout} from './components/Layout';

function App() {
  return (
    <div className="App">
      <main>
        
          <Layout>
            <ItemListContainer  />
          </Layout>
        
        
      </main>

    </div>
  );
}

export default App;

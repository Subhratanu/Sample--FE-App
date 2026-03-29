import { createContext } from 'react';
import './App.css';
import CardList from './components/CardList';
import CartCounter from './components/CartCounter';
import CompA from './components/parentTochild/compA';
export const userContext = createContext();
function App() {
  
  const placeholder="placeholder image"
  const isReadOnly = false; // set to true to make the context read-only
  return (
    <userContext.Provider value={{  placeholder, isReadOnly}}>
    {/* // JSX = JavaScript XML */}
      <div className="App">
        <CartCounter/>
        <CardList />
        <CompA/>
      </div>
    </userContext.Provider>
  );
}

export default App;

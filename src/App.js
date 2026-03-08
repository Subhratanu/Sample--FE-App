import Imagecard from './components/Imagecard';
import './App.css';

function App() {
  return (
    // JSX = JavaScript XML
    <div className="App">
      <Imagecard name="Subhratanu Saha" imgLink="https://avatars.githubusercontent.com/u/64859956?v=4" />
      <Imagecard name="Tanima Nag" imgLink="https://avatars.githubusercontent.com/u/171805697?v=4" />
      <Imagecard name="Soumyadeep M." imgLink="https://avatars.githubusercontent.com/u/221869256?v=4" />
      <Imagecard name="Sayan Sengupta" imgLink="https://avatars.githubusercontent.com/u/261204091?v=4" />
    </div>
  );
}

export default App;

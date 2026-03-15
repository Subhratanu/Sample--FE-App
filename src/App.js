import { useState } from 'react';
import Imagecard from './components/Imagecard';
import './App.css';
import { userData } from './constants/constant';
function App() {
  const [showFlag, setShowFlag ] = useState(false);
  const clickHandler = () => {
    showFlag? setShowFlag(false) : setShowFlag(true);
  };
  return (
    // JSX = JavaScript XML
    <div className="App">
      {
        userData.map((user)=> (
          <div key={user.githubId}>
          <Imagecard name={user.name} imgLink={`https://avatars.githubusercontent.com/u/${user.githubId}?v=4`} />
          {/* conditional rendering */}  
          <h3 style={{cursor:'pointer'}} onClick={clickHandler}>{user.isStudent ? "Student" : "Mentor"} ⬇️⬇️⬇️</h3> 
          {showFlag? <p>{user.bioDescription}</p> : null}
          </div>
        ))
      }
    </div>
  );
}

export default App;

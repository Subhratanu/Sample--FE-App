import { useState } from "react";
import { userData } from "../constants/constant";
import Imagecard from "./Imagecard";

const CardList = ({placeholder}) => {
    const [showFlag, setShowFlag ] = useState(false);
    const clickHandler = () => {
        showFlag? setShowFlag(false) : setShowFlag(true);
    };
    return (
        <>
        {
            userData.map((user)=> (
            <div key={user.githubId}>
            <Imagecard name={user.name} imgLink={`https://avatars.githubusercontent.com/u/${user.githubId}?v=4`} placeholder={placeholder} />
            {/* conditional rendering */}  
            <h3 style={{cursor:'pointer'}} onClick={clickHandler}>{user.isStudent ? "Student" : "Mentor"} ⬇️⬇️⬇️</h3> 
            {showFlag? <p>{user.bioDescription}</p> : null}
            </div>
            ))
        }
      </>
  );
};

export default CardList;
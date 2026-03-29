import { useContext } from "react";
import { userContext } from "../../App";
const CompD = () => {
    const {isReadOnly} = useContext(userContext);
    return (
        <div>
            <h1>This is component D</h1>
            {/* It'll be disabled once we have read only context */}
            <button disabled={isReadOnly}>Click me</button>
        </div>
    );
}
export default CompD;
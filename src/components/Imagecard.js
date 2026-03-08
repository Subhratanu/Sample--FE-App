
// //props = properties
// 1. pass props to function parameter and get props.name or props.imageLink 
// 2. destructure props in function parameter and get name and imageLink directly
function Imagecard({name, imgLink}) {
    console.log("This is the Imagecard component");
    return (
        <div>
            <h2>{name}</h2>
            <img src={imgLink} alt="placeholder" />
        </div>
        
    );
}

export default Imagecard;
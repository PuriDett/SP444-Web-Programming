function Btn(){
    const clickHandler = () => console.log("mouse over!");
        return(
        <button onClick={clickHandler}>
            Click Me!
        </button>
    );
}
export default Btn ;
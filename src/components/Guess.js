function Guess() {

function randomInt(min, max) {
    let x = max - min + 1;
    return min + Math.floor(Math.random() * x);
}

function alertbox(){
    let total = prompt("type a number 1 to 5 :");
    if(total >= 1 && total <=5){
    const randInt = randomInt(1, 5)
        console.log(randInt)
        if (randInt === total) {
            alert("This is correct\n Computer number : " 
            + randInt + " Your guess : " + total);
        } else {
            alert("This is not correct\n Computer number : " 
            + randInt + "  Your guess : " + total);
        } 
    } else {
            alert("Enter a number between 1 and 5")
        }
    }

    return (
        <button onClick={alertbox}>
            -- Start --
        </button>
    );
}
export default Guess ;
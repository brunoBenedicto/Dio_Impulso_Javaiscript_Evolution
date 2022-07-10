function Counter(){
    let quantity = 10;
    function upQuantity(){
        quantity++;
        document.getElementById("counter-box").innerHTML = quantity;
        console.log(quantity);
    }
    return(
        <>
            <h1 id ="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>aumentar</button>
        </>
    )
}

export default Counter;
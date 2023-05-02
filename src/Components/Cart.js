import bonusItems from "./bonusItems";

export default function Cart({birdCart, total, discount, bonus}) {
    return (
        <div className="Cart side-card">
            <h1>Cart</h1>
            <ol>
                <h3 id="cart-default-msg">Birds</h3>
                {birdCart.map((bird) => {
                    return (
                        <li key={bird.id}> {bird.name}, ${bird.amount}</li>
                    )
                })}
            </ol>
            <h4>Discount: {discount}%</h4>
            <h4>Total: ${total}</h4>

            <ul className="bonus">
                <h3>Bonuses</h3>
                {bonusItems.map((item, index) => {
                    for(let i = 0; i < bonus; i++){
                        if(i === index){
                            return <li>{item}</li>
                        }
                    }
                })}
            </ul>
        </div>
    );
}
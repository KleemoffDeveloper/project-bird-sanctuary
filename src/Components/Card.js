export default function Card({bird, handleCart}){
    return (
        <div className="card" style={{margin: 0}}>
            <h2>{bird.name}</h2>
            <img src={bird.img}/>
            <h4>${bird.amount}</h4>
            <button onClick={() => handleCart(bird)}>Adopt</button>
        </div>
    );
}
import { useState } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Card from "./Components/Card";
import birds from "./data/birds";

function App() {
  const [birdCart, setBirdCart] = useState([])
  function handleCart(bird) {
    let array = birdCart
    array.push(bird)
    setBirdCart([...array])
    console.log(birdCart)
    setCartTotal(() => getTotal(birdCart))
    handleDiscount(birdCart.length)
    handleBonuses(getTotal(birdCart))
  }
  const [cartTotal, setCartTotal] = useState(0)
  function getTotal(cart){
    let x = 0
    cart.map(bird => {
      x += bird.amount
    })
    return x
  }
  const [discount, setDiscount] = useState(0)
  function handleDiscount(cartLength){
    setDiscount(cartLength >= 3 ? 10 : 0)
  }
  const [bonus, setBonus] = useState(0)
  function handleBonuses(total){
    if(total > 100 && total <= 300){
      setBonus(1)
    }

    if(total > 300 && total <= 500){
      setBonus(2)
    }

    if(total > 500 && total <= 1000){
      setBonus(3)
    }

    if(total > 1000){
      setBonus(4)
    }
  }
  const [formComplete, setFormComplete] = useState(false)
  function handleForm(){
    const fields = document.querySelectorAll('input[type="text"]')

    if(birdCart.length < 1){
      return;
    }

    for(const field of fields){
      if(field.value.length < 1){
        setFormComplete(false)
        return;
      }
    }
    setFormComplete(true)
  }
  return (
    <main>
      <section className="sidebar">
        <Cart birdCart={birdCart} total={cartTotal} discount={discount} bonus={bonus}/>
        <Checkout formComplete={formComplete} handleForm={handleForm}/>
      </section>
      <section className="birds">
        {birds.map(bird => <Card
          bird={bird}
          handleCart={handleCart}
        />)}
      </section>
    </main>
  );
};

export default App;

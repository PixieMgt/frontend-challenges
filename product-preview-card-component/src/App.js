import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    import(`./images/icon-cart.svg`).then(data => {
      setIcon(data.default)
    })
  }, [])

  return (
    <div className="App">
      <div className="container">
        <img className="productImage" alt="" />
        <div className="informationContainer">
          <p className="productType">Perfume</p>
          <p className="productName">Gabrielle Essence Eau De Parfum</p>
          <p className="productDescription">A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.</p>
          <div className="priceContainer">
            <p className="discountedPrice">$149.99</p>
            <p className="normalPrice">$169.99</p>
          </div>
          <button className="btnAddToCart"><img className="cartIcon" src={icon} />Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;

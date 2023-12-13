import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  let [cart, setCart] = useState(0)
  let product = [
    {
      name: "Cup Noodles",
      price: 2
    },
    {
      name: "Veg Briyani",
      price: 3
    },
    {
      name: "Pizza",
      price: 5
    },
    {
      name: "Veg Fried rice",
      price: 4
    }

  ]
  return <>
    <Navbar cart={cart} setCart={setCart} />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            product.map((e, i) => {
              return <Card cart={cart} setCart={setCart} product={e} key={i} />
            })
          }


        </div>
      </div>
    </section>
  </>
}

export default App
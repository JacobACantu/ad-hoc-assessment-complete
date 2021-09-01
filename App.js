
import React from 'react'
import Loading from './components/Loading'
import Products from './components/Products'
import './App.css';

class App extends React.Component{

  state = {
    loading: false,
    products: [
      {
        id: 1,
        name: 'toyota',
        product_number: 4123,
        price: 25
      },
      {
        id: 2,
        name: 'mazda',
        product_number: 9042,
        price: 30
      },
      {
        id: 3,
        name: 'honda',
        product_number: 7813,
        price: 18
      },
    ]
  }

  render() {

    const {loading, products} = this.state

    if (loading) {
    return <loading />
    } else {
      return (
        <div className="App">
          <Products products={products} />
          </div>
      )
    }
  }
}


export default App;



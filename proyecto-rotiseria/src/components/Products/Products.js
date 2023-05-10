import React from 'react'

const inventory = [
    {
        Type: "Product",
        Name: "CheeseBurger",
        Id: Math.random.toString(16),
        Price: 1500,
        Ingredients: ["Doble Carne","Cheedar","Tomate","Cebolla","Lechuga","Aderezos"]
    },
    {
        Type: "Product",
        Name: "KingBurger",
        Id: Math.random.toString(16),
        Price: 1500,
        Ingredients: ["Doble Carne","Extra Cheedar","Tomate","Cebolla caramelizada","Lechuga","Aderezos"]
    }
]

const Products = () => {
  return (
    <div>
        <ol>
            {inventory.map((item)=>(<li key={item.Id}>
                <ul>
                    <li>{item.Name}</li>
                    <li>{item.Price}</li>
                    <li>{item.Ingredients.map((item)=>(
                        <ul>
                            <li>{item}</li>
                        </ul>))}
                    </li>
                </ul>
                <hr/>
            </li>))}
        </ol>
    </div>
  )
}
export default Products
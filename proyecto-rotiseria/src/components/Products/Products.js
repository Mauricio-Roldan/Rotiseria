import React from 'react'
import ErrorPage from '../../Pages/ErrorPage';
const idGenerate = () => {
    const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let x = 0; x < 10; x++) {
        let aleatory = Math.floor(Math.random() * values.length);
        password += values.charAt(aleatory);
    }
    return password
}
let filteredInventory = [];
const inventory = [
    {
        Type: "Burger",
        Name: "CheeseBurger",
        Id: idGenerate(),
        Price: 1500,
        Ingredients: ["Doble Carne", "Cheedar", "Tomate", "Cebolla", "Lechuga", "Aderezos"]
    },
    {
        Type: "Burger",
        Name: "KingBurger",
        Id: idGenerate(),
        Price: 1500,
        Ingredients: ["Doble Carne", "Extra Cheedar", "Tomate", "Cebolla caramelizada", "Lechuga", "Aderezos"]
    },
    {
        Type: "Pizza",
        Name: "Doble Muzza",
        Id: idGenerate(),
        Price: 1400,
        Ingredients: ["queso", "tomate"]
    }
]

const Products = ({Typo}) => {
    filteredInventory = [];
    return (
        <div>
            {inventory.map((item) => {if (item.Type==Typo) {
                filteredInventory.push(item)
            }})}
            {filteredInventory.map((item) => (<ul key={item.Id}>
                <li>{item.Name}</li>
                <li>precio: ${item.Price}</li>
                <li>ID:{item.Id}</li>
                <li>Ingredientes:{item.Ingredients.map((item) => (
                    <ul key={idGenerate()} id='ingredientes' style={{marginLeft:25}}>
                        <li>{item}</li>
                    </ul>))}
                </li>
                <hr />
            </ul>))}
        </div>
    )
}
export default Products
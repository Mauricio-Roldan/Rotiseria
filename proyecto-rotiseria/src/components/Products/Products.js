import React, { useEffect, useState } from 'react'
import products from './products.json'
const Products = () => {
        const [filteredProducts, setFilteredProducts] = useState([])
        const unicos = [];
        for(var i = 0; i < products.length; i++) {
        
            const elemento = products[i].Type;
        
            if (!unicos.includes(products[i].Type)) {
            unicos.push(elemento);
        }

        }
        const selectedProduct = (type) => {
            setFilteredProducts([])
            setFilteredProducts(products.filter(p => p.Type===type))
            console.log(type)
            return filteredProducts
        }
        return (
        <div>
            {unicos.map((item,index)=><button key={index} onClick={()=>selectedProduct(item)}>{item}</button>)}
            {filteredProducts.map((item, index)=>(<ul key={item.Id}>
                <li><b>{item.Name}</b></li>
                <li><b>Precio:</b>{item.Price}</li>
                <li><b>ID:</b>{item.Id}</li>
                <li>
                    <b>Ingredientes:</b>{item.Ingredients.map((item, index)=>(
                        <ul key={index}>
                            <li>{item}</li>
                        </ul>
                    ))}
                </li>
                <hr/>
            </ul>))}
        </div>
    )
}
export default Products
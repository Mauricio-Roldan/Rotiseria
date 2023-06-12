import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import products from './products.json'
import Post from './Post';
const Products = () => {
        const [filteredProducts, setFilteredProducts] = useState([])
        const unique = [];
        for(var i = 0; i < products.length; i++) {
        
            const elemento = products[i].Type;
        
            if (!unique.includes(products[i].Type)) {
            unique.push(elemento);
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
            <div>
            <Container fluid>
            <Row >
                {unique.map(p=><Post key={p} name={p} btnName={p} func={()=>selectedProduct(p)} img={"https://i0.wp.com/cremigal.com/wp-content/uploads/2022/04/CREMIGAL-10-scaled.jpg?fit=960%2C640&ssl=1"}/>)}
            </Row>
            </Container>
        </div>
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
import React,{useState,useEffect} from 'react'

const Products = () => {
    const [name,setName]=useState("");
    const [brand,setBrand]=useState("");
    const [price,setPrice]=useState(0);
    const [products,setProducts]=useState([]);

    const url = "http://localhost:5000/product";

    const addProduct=()=>{
        let product={name,brand,price};
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        }).then((response)=>response.json())
        .then((data)=>setProducts(data))      
     
    }

    const resetProduct=()=>{
        setName("");
        setBrand("");
        setPrice(0);
    }

    return (
    <>
    
    <div>
        <h1>Product Master</h1>
        <label>Product Name</label>
        <input type="text" placeholder="Enter Product Name" value ={name} onChange={(event)=>setName(event.target.value)}/><br/>
        <label>Brand</label>
        <input type="text" placeholder="Enter Product Brand" value ={brand} onChange={(event)=>setBrand(event.target.value)}/><br/>
        <label>Price</label>
        <input type="number" placeholder="Enter Product Price" value ={price} onChange={(event)=>setPrice(event.target.value)}/><br/>
        <button onClick={addProduct}>Add Product</button>
        
    </div>
    <div>
        <h1>Product List</h1>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product,index)=>{
                        return(
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>

    </>
  )
}

export default Products
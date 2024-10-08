import React,{useState,useEffect} from 'react'

const Products = () => {
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [brand,setBrand]=useState("");
    const [price,setPrice]=useState(0);
    const [products,setProducts]=useState([]);

    const url = "http://127.0.0.1:5000/product";

    const addProduct=()=>{
        let product={name,brand,price};
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        }).then((response)=>response.json())
        .then((data)=>{
            console.log("add product response ",data)
            getProducts()
            resetProduct()
        })
        .catch((error)=>console.log(error))      
     
    }

    const resetProduct=()=>{
        setName("");
        setBrand("");
        setPrice(0);
    }

    const getProducts=()=>{ 
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        getProducts();
    },[])

    const deleteProduct=(id)=>{
        console.log("delete product id ",id)
        fetch(url+"/"+id,{
            method:"DELETE"
        }).then((response)=>response.json())
        .then((data)=>{
            console.log("delete product response ",data)
            getProducts()
        })
        .catch((error)=>console.log(error))      
    }

    const editProduct=(product)=>{
        console.log("edit product ",product)
        setId(product.id)
        setName(product.name)
        setBrand(product.brand)
        setPrice(product.price)
    }

    const  updateProduct=()=>{
        let product={name,brand,price};
        fetch(url+"/"+id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        }).then((response)=>response.json())
        .then((data)=>{
            console.log("update product response ",data)
            getProducts()
            resetProduct()
        })
        .catch((error)=>console.log(error))      
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
        <button onClick={updateProduct}>Update Product</button>
        
    </div>
    
    <div>
        <h1>Product List</h1>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Delete</th>
                    <th>Edit</th>
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
                                <td><button onClick={()=>deleteProduct(product.id)}>Delete</button></td>
                                <td><button onClick={()=>editProduct(product)}>Edit</button></td>
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
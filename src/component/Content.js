import { useEffect, useState } from 'react';
import '../style/content.css'

function Content(){
    const [products ,setProduct] =  useState([])
    const [like,setLike] = useState(false)
    const [myProduct , setMyProduct] = useState(0)
    const [cartProduct , setCartProduct] = useState([{}])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) =>{
        setProduct(data)
    })
   
    },[])
    function addToCart(id){
       setMyProduct(myProduct+1)
       fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json()).then((data) =>{
        setCartProduct(data)
    })
    }
    return(
<>
<div className="col">
        {products.map(product => 
        <>
        
        <div className="card" key={product.id}>
        <img  className="d-block imageCard " src={product.image} alt="Second slide" />
        <div className="card-body">
          <h5 className="card-title">{product.category}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
        </>
        
        )}

      </div>
</>

  
    )
}
export default Content;
import useCount from "../../customHook/useCount";
import { ItemCounts } from "./ItemCounts";
import '../css/product.css';
import { Link } from "react-router-dom";
import { ProductView } from "../../views/ProductView";


export const ProductComponent = ({ product }) => {

  const { count, increment, decrement } = useCount(0)


  const onAdd = (productName, quantityProduct) => {
    console.log("nombreDeProducto: ", productName);
    console.log("cantidadaLlevar: ", quantityProduct);
  };

  return (

    <div className="product-component rounded items-center bg-sky-50 flex hover:bg-sky-200 border-2">

      <div className="">
       
          <img className="img-product" src={product.image} alt={product.title} />
      </div>
      <Link to={`/views/ProductView/${product.id}`} className="item--title">
      <h2 className="title-produtc pt-3 text-indigo-600">
        {product.title}
      </h2>
      </Link>
      <p className="description-product" >
        {product.description}
      </p>
      <p className="price-product ">
        ${product.price}
      </p>
      <div>
        <ItemCounts
          stock={product.stock}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <div>
       
      </div>
    </div>

  
    
  )
}

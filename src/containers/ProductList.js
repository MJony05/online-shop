import {useSelector} from "react-redux";
import ProductComponents from "./ProductComponents";

const ProductList = () => {
  const products = useSelector(state=>state)
  console.log(products)
  return (
    <div className="ui grid container">
      <ProductComponents/>
    </div>
  )
}
export default ProductList
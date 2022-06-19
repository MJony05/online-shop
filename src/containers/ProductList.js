import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import ProductComponents from "./ProductComponents";
import {setProduct} from "../redux/actions/productAction";

const ProductList = () => {
  const products = useSelector(state=>state)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
      .catch(e=>console.log(e.message))
    dispatch(setProduct(response.data))

  }
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div className="ui grid container">
      <ProductComponents/>
    </div>
  )
}
export default ProductList
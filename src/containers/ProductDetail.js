import {useParams} from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
const ProductDetail = () => {
  const {productId} = useParams()
  console.log(productId)
  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
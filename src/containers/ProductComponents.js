import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProductComponents = () => {
  const products = useSelector(state=>state.allProducts.product)
  const renderList = products.map((product)=> {
    const {id,title,price,image,category} = product
    const shortTitle = title.length>40? title.slice(1,40)+'...':title;
    return (
      <div className="four wide column " key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card" style={{height:'400px'}}>
              <div className="image">
                <img src={image} alt={title} style={{height:'280px',padding:'20px'}}/>
              </div>
              <div className="content">
                <div className="header">{shortTitle}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>

              </div>
            </div>
          </div>
        </Link>

    </div>)
  })
  return (
    <>
      {renderList}
    </>
  );
};

export default ProductComponents;
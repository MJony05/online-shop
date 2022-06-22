import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addCard} from "../redux/actions/productAction";
import {useDispatch} from "react-redux";

const ProductComponents = () => {
  const products = useSelector(state=>state.allProducts.product)
  const cardDispatch = useDispatch()
  const renderList = products.map((product)=> {
    let count = 0;
    const {id,title,price,image,category} = product
    const shortTitle = title.length>40? title.slice(1,40)+'...':title;
    return (
      <div className="four wide column " key={id}>
          <div className="ui link cards">
            <div className="card" style={{height:'430px', padding:'0 0 20px 0'}}>
              <Link to={`/product/${id}`}>
              <div className="image">
                <img src={image} alt={title} style={{height:'280px',padding:'20px'}}/>
              </div>
              <div className="content">
                <div className="header">{shortTitle}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
              </Link>
              <div className="buying">
                <div className="inc">
                  <i
                    onClick={() => {

                    }}
                    className="inc_icon ui plus circle icon"
                  ></i>
                  <p>{count}</p>
                  <i
                    onClick={() => {
                      count=count-1
                    }}
                    className="dec_icon ui minus circle icon"
                  ></i>
                </div>
                <button
                  onClick={() => {
                    cardDispatch(addCard(product))
                  }}
                  className="ui inverted green button"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>


    </div>)
  })
  return (
    <>
      {renderList}
    </>
  );
};
export default ProductComponents;
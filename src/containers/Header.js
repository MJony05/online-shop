import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const Header = () => {
  const count = useSelector(state=>state.cards.cards.length)
  console.log(count)
  return (<div className="ui pointing menu" style={{padding:'0px 30px'}}>
    <Link to="/">
      <a className="active item">
        Amazon
      </a>
    </Link>

      <div className="right menu">
        <div className="ui vertical animated button" tabIndex="0">
          <span className="count">{count}</span>
          <div className="hidden content">Shop</div>
          <div className="visible content">
            <i className="shop icon"/>
          </div>
        </div>
    </div>
  </div>)

};

export default Header;
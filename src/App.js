import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import NotFound from "./containers/NotFound";

function App() {
  return <BrowserRouter>
   <div className="App">
     <Header/>
     <Switch>
      <Route path="/" exact component={ProductList}/>
      <Route path="/product/:productId" exact component={ProductDetail}/>
      <Route path="" component={NotFound}/>
    </Switch>

  </div></BrowserRouter>;
}

export default App;

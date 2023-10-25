import { useSelector } from "react-redux";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const PrivateRoute = (props) => {
    if (user) {
      return <Navigate to="/" />;
    }else{
      <Navigate to='/login'/>
    }
    return props.children;
  };
  return (
    <Router>
      <Routes>
        <Route exactexact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/login"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }
        />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

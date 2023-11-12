import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProducts from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
const PrivateRoute = ({ element }) => {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  // console.log(admin);
  return admin ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Routes>
                  <Route
                    index
                    path="/"
                    element={<PrivateRoute element={<Home />} />}
                  />
                  <Route
                    path="users/*"
                    element={<PrivateRoute element={<UserList />} />}
                  />
                  <Route
                    path="user/:userId"
                    element={<PrivateRoute element={<User />} />}
                  />
                  <Route
                    path="newUser"
                    element={<PrivateRoute element={<NewUser />} />}
                  />
                  <Route
                    path="products/*"
                    element={<PrivateRoute element={<ProductList />} />}
                  />
                  <Route
                    path="product/:productId"
                    element={<PrivateRoute element={<Product />} />}
                  />
                  <Route
                    path="newproduct"
                    element={<PrivateRoute element={<NewProducts />} />}
                  />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;

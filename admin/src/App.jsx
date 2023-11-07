import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
function App() {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  // const PrivateRoute = (props) => {
  //   if (admin) {
  //     return <Navigate to="/" />;
  //   } else {
  //     <Navigate to="/login" />;
  //   }
  //   return props.children;
  // };
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;

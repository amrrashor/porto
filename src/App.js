import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navbar from './components/navabr/Navbar';
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import Signup from "./pages/signup/Signup";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

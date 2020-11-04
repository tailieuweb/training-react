
import './App.scss';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import { BrowserRouter as Router} from "react-router-dom";
import Direct from './Component/Direct';
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
          <Direct></Direct>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

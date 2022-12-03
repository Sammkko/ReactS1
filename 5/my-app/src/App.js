import logo from './logo.svg';
import './App.css';
import AboutUs from "./pages/AboutUs/AboutUs";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <PortfolioPage/>
      <ContactsPage/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from "./components/menu/Menu";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from  "./pages/aboutPage/AboutPage"
import NavigationPage from "./pages/navigationPage/NavigationPage";
import UserPage from "./pages/usersPage/UserPage";
import ContactsPage from  "./pages/contactPage/ContactPage"



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu/>
          <Routes>
           <Route index element={<MainPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
              <Route path="navigation" element={<NavigationPage/>}/>
              <Route path="contact" element={<ContactsPage/>}/>
              <Route path="info" element={<UserPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

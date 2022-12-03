import logo from './logo.svg';
import './App.css';


function AboutUs() {
  return(
    <div>
      <Title title="Hi, you are welcome!"/>
    </div>
  )
}

function Title(props){
  return(
    <h1>{props.title}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <AboutUs/>
    </div>
  );
}

export default App;

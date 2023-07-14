import Logo from "./assets/logo192.png"
import './App.css';
import ClassComponent from "./components/ClassComponent/ClassComponent";

function App() {
  return (
    <div className="container">
      <div className="App">
        <img src={Logo} />
        <ClassComponent />
      </div>
      <div className="footer">
        <p>Developed by Mehrgan Akbari ^_^</p>
      </div>
    </div>
  );
}

export default App;

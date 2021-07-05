import Navbar from "./components/Navbar";
import Message from "./components/Message";
import Hero from "./components/Hero";
import Order from "./components/Order";
import Online from "./components/Online";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Message />
      <Hero />
      <Order />
    </div>
  );
}

export default App;

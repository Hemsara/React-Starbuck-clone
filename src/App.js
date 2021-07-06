import Navbar from "./components/Navbar";
import Message from "./components/Message";
import Hero from "./components/Hero";
import Order from "./components/Order";
import Online from "./components/Online";
import "./App.css";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Message />

      <Hero heading={"FREE COFFEE IS A TAP WAY"} 
      para={"Join now to start earning Rewards."} 
      btnText={"Join now"} 
      bg={"#F1F8F6"}
      img={"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png"}
      />
      <Order />
      <Online />

      <Hero heading={"Creating positive change"} 
      para={"We believe coffee can help fuel connection and strengthen communities. See how our partners (employees) are uplifting neighborhoods everywhere."} 
      btnText={"See How"} 
      bg={"#D4E9E2"}
      img={"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71657.jpg"}
      />
      <Info />
    </div>
  );
}

export default App;

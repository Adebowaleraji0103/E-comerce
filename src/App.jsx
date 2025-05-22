import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import CardRow from "./component/CardRow";
import NewArrival from "./component/NewArrival";
import Blog from "./component/Blog";
import Footer from "./component/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardRow/>
      <NewArrival/>
      <Blog/>
      <Footer/>
   
    </div>
  );
}

export default App;

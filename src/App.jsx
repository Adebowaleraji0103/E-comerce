import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import CardRow from "./component/CardRow";
import NewArrival from "./component/NewArrival";
import Blog from "./component/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CardRow/>
      <NewArrival/>
      <Blog/>
   
    </div>
  );
}

export default App;

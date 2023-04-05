import {Navbar,Sidebar,Chatbar,Posts,Test,Chatscreen} from "./components";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
     <Navbar/>
     <div className="main-wrap">
     <Sidebar/>
     <Posts/>
     <Chatbar/>
     </div>
     <Routes>
      <Route path="/create" element={ <Test/> }/>
      <Route path="/chatscreen/:chatId" element={ <Chatscreen/> }/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;

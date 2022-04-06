import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import ListOfUsers from "./components/ListOfUsers";
import ErrorPage from "./components/ErrorPage"
import UserProfile from "./components/UserProfile"


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListOfUsers />} />
        <Route path="/profile/:login" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </Router>
   
      

    
  );
}

export default App;

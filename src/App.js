import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Admin/Dashboard";
import Editdev from "./Components/Admin/Editdev";
import Profile from "./Components/Profile/Profile";
import Team from "./Components/Team/Team";


function App() {
  return (
    <>

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Team></Team>}/>
        <Route path='/profile/:id' element={<Profile></Profile>}/>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
        <Route path='/edit/:id' element={<Editdev></Editdev>}/>
      </Routes>
     </BrowserRouter>
      
    </>
  );
}

export default App;

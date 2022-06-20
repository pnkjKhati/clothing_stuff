import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.container";
import  Authentication from './routes/authentication/authentication.component.jsx'


const Shop = () => {
  return(
    <div>
      Hi I am shop
    </div>
  )
}

const  App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/> 
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
    
  )
}

export default App;

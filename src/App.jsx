// import reactLogo from './assets/react.svg'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Shope from "./pages/Shope";
import About from "./pages/About";
import Contacts from './pages/Contacts';

let router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>
     <Route index element={<Home />} ></Route>
     <Route path="/products" element={<Shope />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/contacts" element={<Contacts />}></Route>


    </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

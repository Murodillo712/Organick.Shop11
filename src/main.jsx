import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Sildebar from "./Sildebar.jsx";
import About from "./About.jsx";
import Shop from "./Shop.jsx";
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'
import Projects from './Projects.jsx'
import News from './blog.jsx'
import ShopSingle from './ShopSingle.jsx';
import SingleService from './SingleService';
import PortfolioSingle from '../src/PortfolioSingle.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Sildebar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path="/portfolio/:slug" element={<PortfolioSingle />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/news' element={<News />} />
        <Route path="/shop/:id" element={<ShopSingle />} />
        <Route path="/service/:id" element={<SingleService />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Search from './searching/Search'
import Search_results from './searching/Search_results'
import Footer from './footer/Footer'


function App() {

  return (
    <>
        <BrowserRouter>
          <div>
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<Search />} />
              <Route path="/results/" element={<Search_results />} />
              {/* <Route path="/swagger/" element={<SwaggerAPI />} /> */}
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App

import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Header from './components/Navbar/Header'
import Footer from './components/Tag/Footer'
const Questions = lazy(() => import("./components/questions"));
const Answares = lazy(() => import("./components/answares"));
const Tags = lazy(() => import("./components/Tag/tags"));

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Suspense
          fallback={
            <div>
              <Spinner animation="grow" />
            </div>
          }
        >
          <div>
            <main>
              <Routes>
                 
                <Route exact path="/" element={<Tags />} />
                <Route exact path="/questions/:tag" element={<Questions />} />
                <Route path="/answare/:id" element={<Answares />} />
              </Routes>
            </main>
          </div>
        </Suspense>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;

import {useEffect,  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
import CustomCursor from "./components/CustomCursor";
const HomeThree = lazy(() => import("./pages/HomeThree"));

function App() {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, []);
  return (
      <Router>
        <CustomCursor />
        <NavScrollTop>
          <Suspense fallback={<div />}>
                <Routes>
                  <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<HomeThree/>}/>
                </Routes>
            </Suspense>
        </NavScrollTop>
      </Router>
  );
}

export default App;

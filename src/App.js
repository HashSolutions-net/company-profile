import {useEffect,  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
import AnimatedCursor from "react-animated-cursor";
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
    
  }, [])
  return (
      <Router>
        <AnimatedCursor
          innerSize={6}
          outerSize={50}
          innerScale={0.6}
          outerScale={1.2}
          outerAlpha={0.8}
          hasBlendMode={true}
          trailingSpeed={4}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)',
          }}
          outerStyle={{
            mixBlendMode: 'difference',
            border: '1px solid var(--cursor-color)',
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
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

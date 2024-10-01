import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense, useEffect } from "react";
import mixpanel from './mixpanel'; 
const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  useEffect(() => {
    mixpanel.track('bmglab Page View', {
      page: 'Home' 
    });
  }, []);
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <intro/> 
        <portfolio/>
        <works/>
        <testimonials/>
        <contact/>
      </div>
    </div>
  );
}

export default App;

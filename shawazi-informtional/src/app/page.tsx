import Products from "./components/Products";
import Services from "./components/Services";
import LandingPage from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import About from './components/About_us'
import QuestionSection from './components/Insights';
import Ratings from "./components/Ratings";
import Contact from "./components/Contacts";
import Testimonial from "./components/Testimonial";



export default function Home(){
  return (
    <main>
     
        <Navbar/>
        <LandingPage/>
        <Products/>
        <Services/>
        <Ratings />
        <Contact />
        <Testimonial />
        <About/>
        <QuestionSection/>
        <Footer/>
    </main>

  );
};
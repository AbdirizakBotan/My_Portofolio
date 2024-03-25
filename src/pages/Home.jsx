import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"
function Home(){
    return <div id="home">
 <Header/>
  <Hero/>
  <Projects/>
  <About/>
  <TechStack/>
  <Contact/>
    </div>
}
export default Home
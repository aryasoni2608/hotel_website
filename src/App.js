import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Section from "./components/Section";
import Information from './components/Information'

function App() {
  return (
    <div className=" md:w-full">
      <Header/>
      <Section/>
      <Pricing/>
      <Information/>
    </div>
  );
}

export default App;
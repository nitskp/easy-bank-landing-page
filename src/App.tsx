import "./App.css";
import { Articles, Hero, WhyEasyBank, Footer, Navbar } from "./Components";
import { GlobalStyles } from "./Components/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <WhyEasyBank />
      <Articles />
      <Footer />
    </>
  );
}

export default App;

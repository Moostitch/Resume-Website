import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderSection from "./pagesSection/HeaderSection";
import ContentSection from "./pagesSection/ContentSection";
import FooterSection from "./pagesSection/FooterSection";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HeaderSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
}

export default App;

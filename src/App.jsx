import { useEffect } from "react";
import Navigation from './component/Navigation'
import Header from "./component/Header";
import Footer from "./component/footer";
import SideItemsLeft from "./component/SideItemsLeft";
import SideItemsRight from "./component/SideItemsRight";

function App() {

  const darkModeHandler = () => {
    document.body.classList.toggle("dark");
    // Store the theme preference in localStorage or sessionStorage for persistence
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };
  
  // Apply the saved theme on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);


  return (
    <div className={` dark:bg-black h-screen`}>
      <div className={` dark:bg-black h-screen`}>
       <Navigation darkModeHandler={darkModeHandler} />
       <Header />
       <SideItemsLeft />
       <SideItemsRight />
       <Footer />
      </div>
    </div>
  );
}

export default App;

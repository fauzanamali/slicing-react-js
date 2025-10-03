// import Header from "./components/Header";
// import Page from "./components/Page";
// import Footer from "./components/Footer";




// function App() {
//   return (
//     <>
//       <Header />
//       <Page />
//       <Footer />
//     </>
//   );
// }

// export default App;

// import PagesLayouts from "./components/Layouts/PegesLayouts";

// const App = () => {
//   return (
//     <PagesLayouts>
//       <main>
//       </main>
//     </PagesLayouts>
//   );
// };

// export default App;

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Page/Page";
import Footer from "./components/Footer/Footer"; 
import Certificates from "./components/Certificates/Certificates"; 
import Gallery from "./components/Gallery/Gallery";   

const App = () => {
  const [nama, setNama] = useState("");

  function handleClick() {
    setNama("Hello");
  }

  return (
    <div>
      <Navbar />
      <Page />
      <Certificates />
      <Gallery />      
      <Footer />
    </div>
  ); 
}; 

export default App;

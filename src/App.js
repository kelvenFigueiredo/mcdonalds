import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { GlobalStyles } from "./components/style";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;

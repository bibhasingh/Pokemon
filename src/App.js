import Header from "./Header";
import Menu from "./Menu";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div className="Container">
      <Header />
      <Menu />
      <MainContent />
      <Footer />
    </div>
  );
}
export default App;

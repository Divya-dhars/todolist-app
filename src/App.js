import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
function App() {

  function handleNameChange(){
    const names=["Earn","Grow","Give"];
    const int=Math.floor(Math.random()*3);
    return names(int);
  }
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

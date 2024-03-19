import Header from './Header';
import Content from './Content';
function App() {

  function handleNameChange(){
    const names=["Earn","Grow","Give"];
    const int=Math.floor(Math.random()*3);
    return names(int);
  }
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;

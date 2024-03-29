import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import {useState} from 'react';
import './App.css';
function App() {

  const [items,setItems]=useState([
    {
        id:1,
        checked:true,
        item:"Practice Coding"
    },
    {
        id:2,
        checked:false,
        item:"Play Cricket"
    },
    {
        id:3,
        checked:true,
        item:"Read About AI" 
    }
]);
const handleCheck=(id)=>{
    //console.log(`id ${id}`)
    const listItems=items.map((item) => item.id===id? {...item,checked:!item.checked}:item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}
const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}
  return (
    <div className="App">
      <Header title="To Do List"/>
      <AddItem/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
       />
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;

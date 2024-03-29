import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import {useState,useEffect} from 'react';
import './App.css';
function App() {
const API_URL='http://localhost:3000/items';
const [items,setItems]=useState([]);

const [newItem,setNewItem]=useState('')
const [search,setSearch]=useState('')
const [fetchError,setFetchError]=useState(null)
const [isLoading,setIsLoading]=useState(true)

useEffect(()=>{
  //JSON.parse(localStorage.getItem('todo_list'))
  const fetchItems= async ()=>{
    try{
      const response=  await fetch(API_URL);
      if(!response.ok) throw Error("Data not Received")
      const listItems= await response.json();
      setItems(listItems);
      setFetchError(null)
    }catch(err){
      setFetchError(err.message)
    }
    finally{
      setIsLoading(false)
    }
  }
  setTimeout(()=>{
    (async () => {await fetchItems()})()
  },2000)
},[])

const addItem=(item)=>{
  const id=items.length ? items[ items.length-1 ].id + 1 : 1;
  const addNewItem={id, checked:false,item};
  const listItems=[...items,addNewItem];//...items=>already existing
  setItems(listItems);
  //localStorage.setItem("todo_list",JSON.stringify(listItems));
}

const handleCheck=(id)=>{
    //console.log(`id ${id}`)
    const listItems=items.map((item) => item.id===id? {...item,checked:!item.checked}:item)
    setItems(listItems)
    //localStorage.setItem("todo_list",JSON.stringify(listItems))
}
const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!==id)
    setItems(listItems)
    //localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem)return;
  console.log(newItem);
  addItem(newItem)
  setNewItem('')
}
  return (
    <div className="App">
      <Header title="To Do List"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
       />}
      </main>
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;

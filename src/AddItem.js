import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem,setNewItem,handleSubmit})=> {
    const handleChange=(e)=>{
        setNewItem(e.target.value)
    }
  return (
   <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input autoFocus id='addItem' type="text"  placeholder='Add Item'required  value={newItem} onChange={handleChange}/>
        <button type="submit" aria-label='Add Item' > <FaPlus/>
        </button>
   </form>
  )
}

export default AddItem
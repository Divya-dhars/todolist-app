import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ()=> {
  return (
   <form classNme='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input autoFocus type="text" id='addItem' placeholder='Add Item' required/>
        <button type="submit" aria-label='Add Item'/>
        <FaPlus/>
   </form>
  )
}

export default AddItem
 import React from 'react';

 const Footer=()=>{
    const year=new Date();//here used date object
    return(
        <footer>Copyright &copy; year.getFullYear()</footer>
    )
 }
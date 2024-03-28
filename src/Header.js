import React from 'react';

const Header = ({title})=>{
    // const headerStyle={
    //     backgroundColor:'mediumblue',
    //     color:'white'}
    return (
        // <header style={{backgroundColor:'mediumblue',color:'white'}}>{/*inline styling*/}
        <header>
          <h1>{title}</h1>
        </header>
    );
}
Header.defaultProps={
  title:"todolist"
}
export default  Header;
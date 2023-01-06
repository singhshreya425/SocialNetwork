 //import logo from './logo.svg';
 import './App.css';
 import React, { useState } from 'react';
 //import './style.css';
 //import React from "react";
 import StudentForm  from './Components/StudentForm';
 
 // function App() {
 //   return (
 //     <div className="App">
 //       <header className="App-header">
 //         <img src={logo} className="App-logo" alt="logo" />
 //         <p>
 //           Edit <code>src/App.js</code> and save to reload.
 //         </p>
 //         <a
 //           className="App-link"
 //           href="https://reactjs.org"
 //           target="_blank"
 //           rel="noopener noreferrer"
 //         >
 //           Learn React
 //         </a>
 //       </header>
 //     </div>
 //   );
 // }
 class App extends React.Component {
   render() {
     const name = 'Shreya!!!';
 
     return (
       <div>
         <h1 id="aksjdk">Hello !!!</h1>
         <p>Start filling the form :)</p>
         <Comp2 nm={name} />
         <br />
         <br />
         <br />
         <StudentForm />
       </div>
     );
   }
 }
 
 function Comp2(props) {
   const [count, setCount] = useState(10);
   console.log(props);
   return (
     <div>
       I am comp2 - {props.nm} <br />
       {/* Conditional rendering */}
       {count > 15 ? 'Hello' : 'Hi'}
       <div>
         Counter: {count}
         <br />
         <button
           onClick={() => {
             setCount(count + 1);
           }}
         >
           Click me
         </button>
       </div>
     </div>
   );
 }
 
 // class Comp2 extends React.Component {
 //   constructor(props) {
 //     super(props);
 //     this.state = {
 //       count: 10,
 //     };
 //   }
 //   render() {
 //     return (
 //       <div>
 //         I am comp2 - {this.props.nm}
 //         <div>
 //           Counter: {this.state.count}
 //           <button
 //             onClick={() => {
 //               this.setState({
 //                 count: this.state.count -1,
 //               });
 //             }}
 //           >
 //             CLick me
 //           </button>
 //         </div>
 //       </div>
 //     );
 //   }
 // }
 
 // App - parent
 // comp2 -> child
 
  export default App;

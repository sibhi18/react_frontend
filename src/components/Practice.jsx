import React, { useState, useEffect, useContext, useRef ,useMemo} from "react";
// import {user} from "../App";

//variable declartion

// function Practice (){

//     const name = "sibhi"
//     const course = "react js"

//     return (
//      <div>
//         <h1>welcome :{name}</h1>
//         <h2>learing: {course}</h2>

//      </div>
//     )
// }

// props

// function Practice (props){
//     return (
//         <div>
//             <h1>welcome :{props.name}</h1>
//             <h2>learing: {props.course}</h2>
//             <h3>am in:{props.location}</h3>
//             <p>my value is :{props.value}</p>
//         </div>
//     )
// }

// hook concept

// 1 usestate

// function Practice() {
//   const [name, setName] = useState("sibhi");
//   const [course, setCourse] = useState("react js");

//   return (
//     <div>
//       <h1>Welcome: {name}</h1>
//       <h2>Learning: {course}</h2>
//       <button onClick={() => setName("vishnu")}>Click me</button>
//       <button onClick={() => setCourse("css")}>add</button>
//     </div>
//   );
// }

// useeffect

// function Practice() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("sibhi");
//   }, []);

//   return (
//     <>
//     <h1>{count}</h1>
//   <button onClick={()=> setCount(count + 1)}> add</button>
//   </>
// )
// }

// use context

// function Practice(){

//   const name = useContext(user);
//   return (
//     <h1>{name}</h1>
//   );
// }

// input ref

// function Practice(){
//   const inref = useRef();

// function Focus(){
//   inref.current.focus()
// }
// return(
//   <>
//   <input ref={inref}></input>

//   <button onClick={Focus}>focus</button>
// </>
// )

// }



// function slowCalculation(num) {
//   console.log("Calculating...");

//   let total = 0;

//   for (let i = 0; i < 100000000; i++) {
//     total++;
//   }

//   return total + num;
// }

// function Practice() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");
// const result = useMemo(()=>{
//   return slowCalculation(count);
// },[count])


//   return (
//     <>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <br /><br />

//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//     </>
//   );
// }

// export default Practice;




// function Practice() {
//   const [name, setName] = useState("");

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={handleChange}
//       />

//       <h2>Hello {name}</h2>
//     </>
//   );
// }

// export default Practice;


//  onchange
// function Practice(){

//     const [name, setName] = useState("");
//     return(
//       <>
//         <input type="text" onChange={(e)=>setName(event.target.value)} />

//         <h1>Hello{name}</h1>
//         </>
//     )
  
// }

// export default Practice;



// function Practice(){
//   const [name,setName]= useState("")

//   function Onsubmit(e){
//   e.preventDefault();

//   alert("welcome "+name);
//   }

//   return(
//     <form onSubmit={Onsubmit}>
//       <input type="text"
//       onChange={(e)=>setName(e.target.value)}
//       />
//     <br />

//     <button type="submit">
//       login
//     </button>

//     </form>
    
//   )
// }

// export default Practice;


// function Practice(){
//   const [name, setName] = useState("");
//   const[pass,setpass]= useState("");

//   function SOl(e){
//     e.preventDefault();

//     console.log("Name :" ,{name});
//      console.log("Name :" , {pass});


   
//   }
//   return(
//     <form onSubmit={SOl}>
//       <input type="text"
//       onChange={(e)=>setName(e.target.value)} />
//       <button type="submit">login</button>
    

//       <br />
//       <input type="text"
//       onChange={(e)=>setpass(e.target.value)} />
//       <button type="submit">login</button>
// {/* 
//       <h2> Name:{name}</h2>
//       <h2>Password:{pass}</h2> */}
//     </form>
//   )

// }

// export default Practice;

function Practice(){
  const [name, setName] = useState("");
  const[pass,setpass]= useState("");

  function SOl(e){
    e.preventDefault();

   if(name === ""){
    alert("emter the name")
   }
   else{
    alert("welcome" , {name})

   }

   if(pass === ""){
    alert("enter the password")
  }
  else{
    alert("login")
  }
  }
  return(
    <form onSubmit={SOl}>
      <input type="text"
      onChange={(e)=>setName(e.target.value) } />
      <button type="submit">login</button>
    

      <br />
      <input type="text"
      onChange={(e)=>setpass(e.target.value)} />
      <button type="submit">login</button>
 
      <h2> Name:{name}</h2>
      <h2>Password:{pass}</h2> 
    </form>
  )

}

export default Practice;



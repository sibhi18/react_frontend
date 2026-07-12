import React, { useState } from "react";
import "./Project2.css";

function Project(){
  
        const [data,setdata] =useState([])

        const handle = async()=>{
            let res = await fetch("https://fakestoreapi.com/products/13")
            const da = await res.json()
            setdata([da])
        }
        return(
            <>
             <button onClick={handle}>callApi</button>
            <div className="box">
                
                 {data.map((da)=>(
                    <>
                    <div className="img">
                        <img src={da.image} height= "200" width= "200" />
                        </div>
                        <br />

                    <div className="title"><h2>{da.title}</h2></div>

                    <div className="desc"><p>{da.description}</p></div>
                    <div className="price"><p>Price:${da.price}</p></div>
                    <div className="cat"><h3>{da.category}</h3></div>
                    <div className="rate"><p>⭐⭐⭐{da.rating.rate}</p></div>
                    

                   
                    
                   

                   </> 
                   
                  ) )}
            
            </div>
         </>
        )
    }
    export default Project;
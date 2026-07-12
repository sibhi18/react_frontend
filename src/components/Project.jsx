import react from 'react';
import image from '../assets/laptop.jpg'
import { FaShoppingCart } from 'react-icons/fa';
import { BiColor } from 'react-icons/bi';


function Project(){
    return(
            <div className='box'>
                <div className="image">
                     <img src={image} height="400px " width= "400px"alt="laptop image"></img>
                </div>
                <div className="one">
                  <h3>HIGH-PERFORMANCE LAPTOP</h3>
                  <h2>UltraBooK Pro X</h2>
                  <p>cutting-edge performance with Intel Core I9, 32GB RAM, and a 1 TB SSD inna sleek, lightweight design.</p>
                </div>
                 <div className="Two">
                    <p>4k Display</p>
                    <p>16-Hour Battery</p>
                    <p>Thunnderbolt 4</p>
                 </div>

                 <div className="Three">
                    <p>$2499</p>
                    <h3>$1,999</h3>
                 </div>

                 <div className="four">
                    <button>Add to Cart </button>
                    <FaShoppingCart></FaShoppingCart>
                     </div>

                     <dr></dr>
                
                <div className="five">
                   <p>⭐⭐⭐⭐⭐</p>
                     <p>2.9 Reviews</p>
                    <p className='stock'>In Stock</p>
                </div>
                


            
            

        </div>
    )
}
export default Project

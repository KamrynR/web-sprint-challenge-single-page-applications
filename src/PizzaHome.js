import React from "react";
import {Link} from 'react-router-dom'
import './PizzaHome.css'

const PizzaHome = () => {
    return (
      <>
        <div className='banner'>
            <div>
                <p>Your favorite food, delivered while coding</p>
                <Link to='/pizza'>
                    <a href="#">Pizza?</a>
                </Link>
            </div>
        </div>
        <div className='pizza-list'>
            <div className='pizza-list-header'>
                <p>Food Delivery in Gotham City</p>
            </div>
            <div className='pizza-cont'>
                <div className='pizza-item'>
                    <img src='https://picsum.photos/500/400'></img>
                    <p>McDonald's</p>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div className='pizza-item'>
                    <img src='https://picsum.photos/500/400'></img>
                    <p>McDonald's</p>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div className='pizza-item'>
                    <img src='https://picsum.photos/500/400'></img>
                    <p>McDonald's</p>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div className='pizza-item'>
                    <img src='https://picsum.photos/500/400'></img>
                    <p>McDonald's</p>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div className='pizza-item'>
                    <img src='https://picsum.photos/500/400'></img>
                    <p>McDonald's</p>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div className='pizza-item'>
                    <img src='https://picsum.photos/500/400'></img>
                    <p>McDonald's</p>
                    <p>$ - American - Fast Food - Burgers</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  };
  export default PizzaHome;
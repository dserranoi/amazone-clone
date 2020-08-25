import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg" 
                alt="Banner" />
            <div className="home__row">
                <Product 
                    id="1234"
                    title="Javascript:The Good Parts"
                    price={15.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="12345"
                    title="Learning React: A Hands-On Guide to Building Web Applications Using React and Redux (2nd Edition)"
                    price={31.26}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51bBG0BOZwL._SX385_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123456"
                    title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming"
                    price={19.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
                />
                 <Product 
                    id="123456"
                    title="Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming"
                    price={16.90}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/510-dE3N1PL._SX376_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="1234567"
                    title="Havit Keyboard Rainbow Backlit Wired Gaming Keyboard Mouse Combo, LED 104 Keys USB Ergonomic Wrist Rest Keyboard, 6400 Dots Per Inch 6 Button RGB Mouse for Windows Gamer Desktop, Computer (Black)"
                    price={199.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71AQHDq6XLL._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="1234578"
                    title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black"
                    price={89.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>
        </div>
    )
}

export default Home

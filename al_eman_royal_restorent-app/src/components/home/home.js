import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="home">

       <div className="home_text">
        <h1 className="qote">The Secret Ingredient Is Always Love</h1>
        <h2 className="welcome_text"> Do You Like Tasty Foods</h2>
        <h1 className="order-text">Hurry Up  Let's  Book a Table Now</h1>
        <button className="table-oder-button">Book A Table</button>
       </div>
       <Meals/>
      </section>
    </>
  );
};

export default Home;


const Meals = ()=>{
return   <div className="meals">
     
  </div>
}
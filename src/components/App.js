import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import React from "react";
import Footer from "./Footer";
// import QuestionForm from "./QuestionForm";

const App = () => {
  return (
    <div>
      {/* <QuestionForm /> */}
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer />
    </div>
  );
};

export default App;

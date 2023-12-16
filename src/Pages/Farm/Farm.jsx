import React from "react";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ListFarm from "../../Components/Farm/ListFarm";
const Farm = () => {
  return (
    <div>
      <Navbar />
      <ListFarm />
      <Footer/>
    </div>
  );
};

export default Farm;

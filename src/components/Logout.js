import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
   return(
      <Link to="/login"><button className="recipe-list" type="submit" onClick={() => localStorage.removeItem("token")}>Logout</button></Link>
   )
}

export default Logout;
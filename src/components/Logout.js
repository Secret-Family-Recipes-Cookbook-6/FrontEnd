import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
   return(
      <Link to="/login"><button className="logout-button" type="submit" onClick={() => localStorage.removeItem("token")}>Logout</button></Link>
   )
}

export default Logout;
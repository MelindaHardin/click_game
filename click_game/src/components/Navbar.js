import React from "react";

const Navbar = () => (
  <div class="bootstrapNav">


    <mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark indigo">
      <logo>
        <a class="navbar-brand" href="/">Click Game!</a>
      </logo>

      <span class="navbar-text white-text title">
        Click an Image to Begin!
      </span>

      <span class="navbar-text white-text score">
        Score:
      </span>

    </mdb-navbar>

  
  </div>
);

export default Navbar;
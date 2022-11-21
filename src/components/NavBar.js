import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link1) => {
    console.log(link1)
    return (
      <a key={link1} href={"#"+link1}>{link1}</a>
    );
  })

  return (
    <nav>
      {linkElements}
    </nav>
  );
}

export default NavBar;

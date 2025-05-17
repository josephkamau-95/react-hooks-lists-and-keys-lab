import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {/* display an <a> tag for each link here */}
    {links.map((link) => (
      <a key={link} href={`#${link}`}>
        {link}
      </a>
    ))}
    {/* end of links */}
    </nav>;
}

export default NavBar;

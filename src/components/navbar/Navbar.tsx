import {Link} from "react-router-dom";
import navegation from "../../config/navegation";
import NavbarStyled from "./NavbarStyled";

function Navbar() {
  return (
    <>
      <NavbarStyled>
        <div>
          <h3>FOODies</h3>
        </div>
        <div style={{display: "flex", width: "50vw", justifyContent: "space-around"}}>
          {navegation.map((item) => (
            <div>
              <Link to={item.url}>{item.label}</Link>
            </div>
          ))}
          <button style={{width: "60px", background: "#ce8751", color: "#fff", borderRadius: "5px", border: "none"}}>Join</button>
        </div>
      </NavbarStyled>
    </>
  );
}

export default Navbar;

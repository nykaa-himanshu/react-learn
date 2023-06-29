
import { Link } from "react-router-dom";

function Header() {
    const myStyle = {
        background: 'red'
      };

    return(
        <div style={myStyle}>
            Header
            <Link to=''>
                Home
            </Link>
          
            <Link to='about'>
                About
            </Link>

            <Link to='contact'>
                Contact
            </Link>

        </div>
    )
}

export default Header;
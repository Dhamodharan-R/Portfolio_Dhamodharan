import React from 'react';
import "./nav.css"
import { Link } from 'react-scroll';
const Navbar = () => {
return (
<div className="navBar">
<ul className="uln">
<li className="n">
<Link 
activeClass="active" 
to="intro" 
spy={true} 
smooth={true} 
duration={500}>
<button>Home</button>
</Link>
</li>
<li className="n">
<Link 
activeClass="active" 
to="abc" 
spy={true} 
smooth={true} 
duration={500}>
<button>About</button>
</Link>
</li>
<li className="n">
<Link 
activeClass="active" 
to="skills" 
spy={true} 
smooth={true} 
duration={500}>
<button>Skills</button>
</Link>
</li>
<li className="n">
<Link 
activeClass="active" 
to="pl" 
spy={true} 
smooth={true} 
duration={500}>
<button>Projects</button>
</Link>
</li>
<li className="n">
<Link 
activeClass="active" 
to="c" 
spy={true} 
smooth={true} 
duration={500}>
<button>Contact</button>
</Link>
</li>
</ul>
</div>
);
};
export default Navbar;
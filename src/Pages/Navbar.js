// import React from 'react';
// import { Link } from 'react-router-dom';

// import ImgLogo from "./download.png"
// // import "../Navbar.css";
// // import './Pages/Contact';
// import "../Apps.css"
// const Navbar = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <Link to="/">
//           <img src={ImgLogo} alt="Logo" style={{width:"50px", height:"50px"}}/>
//         </Link>

//       </div>

//     const paths={
//             home:"/home",
//             about:"/about",
//             contact:"/contact"
//         }
//     paths[location.pathname] === "/Home" ? { display:'block'} : {display : 'none'} 
//     paths[location.pathname] === "/About"  ? { display:'block'} : {display : 'none'}
//     paths[location.pathname] === "/Contact"  ? { display:'block'} : {display : 'none'};
//       <ul className="nav-links">
        
//         <li>
         
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImgLogo from "./download.png"
import "../Apps.css"
const Navbar = () => {
    const location = useLocation();
  const paths = {
                home:"/",
                about:"/about",
                contact:"/contact"
            };
// console.log("---->",location.pathname == paths.home )
  return (
    <nav>
      <div className="logo">
        <Link to="/">
        <img src={ImgLogo} alt="Logo" style={{width:"50px", height:"50px"}}/>
         </Link>
      </div>
      <ul className="nav-links">
        <li >
          <Link to="/" className={`${location.pathname === paths.home ? 'active' : ''}`}>Home</Link>
        </li>
        <li >
        <Link to="/about" className={`${location.pathname === paths.about ? 'active' : ''}`}>About</Link>
        </li>
        <li >
        <Link to="/contact" className={`${location.pathname === paths.contact? 'active' : ''}`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
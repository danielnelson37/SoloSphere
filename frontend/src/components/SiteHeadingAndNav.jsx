import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  // return <header>
  //   <a id='logo' href='/'>SoloSphere</a>
  //   <nav>
  //     <ul>
  //       <li><NavLink to='/'>Home</NavLink></li>
  //       <li><NavLink to='/users' end={true}>Users</NavLink></li>
  //       {
  //         currentUser
  //           ? <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
  //           : <>
  //             <li><NavLink to='/login'>Login</NavLink></li>
  //             <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
  //           </>
  //       }
  //       <li><NavLink>Gallery</NavLink></li>
  //       <li><NavLink>Shop</NavLink></li>
  //       <li><NavLink>About</NavLink> </li>
  //       <li><NavLink>Contact</NavLink> </li>
  //       <li><NavLink>FAQs</NavLink> </li>
  //     </ul>
  //   </nav>
  // </header>;
  return (
    <header>
      <nav>
        <div className="left">
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/users' end={true}>Users</NavLink></li>
            {currentUser
              ? <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
              : <>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
              </>
            }
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
          </ul>
        </div>
        <a id='logo' href='/'>SOLISPHERE</a>
        <div className="right">
          <ul>
            <li><NavLink to='/shop'>Shop</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/faqs'>FAQs</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );

}

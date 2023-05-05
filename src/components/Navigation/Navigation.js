import { NavLink } from "react-router-dom";

const Navigation = ()=>(
  <nav>
    <NavLink to='/' exact='true'>
      Home
    </NavLink>

    <NavLink to='/contacts' >
      My phonebook
    </NavLink>
  </nav>
);

export default Navigation;
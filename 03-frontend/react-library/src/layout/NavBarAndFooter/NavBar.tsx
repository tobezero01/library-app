import { useOktaAuth } from "@okta/okta-react"
import { Link, NavLink } from "react-router-dom"
import { SpinnerLoading } from "../Utils/SpinnerLoading";

export const NavBar = () => {

  const {oktaAuth , authState} = useOktaAuth();
  if(!authState) {
    return <SpinnerLoading/>
  }
  const handlerLogout = async () => oktaAuth.signOut();
  console.log(authState);

    return  (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3' >
      <div className='container-fluid ' >
        <span className='navbar-brand'>BOOKS</span>
        <button className='navbar-toggler' type='button' 
        data-bs-toggle = 'collapse' data-bs-target = '#navbarNavDropdown'
        aria-controls='navbarNavDropdown' aria-expanded ='false'
        aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id = 'navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/home' >Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/search' >Search</NavLink>
            </li>
          </ul>

          <ul className='navbar-nav ml-auto'>

            {!authState.isAuthenticated ? 
              <li className='nav-item m-1'>
                <Link type='button' className='btn btn-outline-light' to='/login'>Sign in</Link>
              </li>
            
              :
              <li>
                <button className="btn btn-outline-light" onClick={handlerLogout}>Logout</button>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
    )
}
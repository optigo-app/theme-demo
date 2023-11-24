// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import NavbarUser from "./NavbarUser";

// ** Third Party Components
import { Sun, Moon, Menu } from "react-feather";

// ** Reactstrap Imports
import { NavItem, NavLink } from "reactstrap";
import { sidebarToggler } from "../../VerticalLayout";
import { useSetRecoilState } from "recoil";
import { IoMdMenu } from "react-icons/io";

const ThemeNavbar = (props) => {
  
  const setFlag = useSetRecoilState(sidebarToggler);


  // ** Props
  const { skin, setSkin, setMenuVisibility } = props;

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };


  return (
    <Fragment>
      <div className="bookmark-wrapper d-flex align-items-center">
        {/* <ul className="navbar-nav d-xl-none">
          <NavItem className="mobile-menu me-auto">
            <NavLink
              className="nav-menu-main menu-toggle hidden-xs is-active"
              onClick={() => setMenuVisibility(true)}
            >
              <Menu className="ficon" />
            </NavLink>
          </NavItem>
        </ul>
        <NavItem className="d-none d-lg-block">
          <NavLink className="nav-link-style">
            <ThemeToggler />
          </NavLink>
        </NavItem> */}
       {window.innerWidth < 1199 && <div onClick={()=>setFlag((prev)=>!prev)}>
        <IoMdMenu style={{fontSize:'30px'}}/>
        </div>}
      </div>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  );
};

export default ThemeNavbar;

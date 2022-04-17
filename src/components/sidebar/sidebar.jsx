import "./sidebar.scss";
import Logo from "../../assets/logo.svg";
import Home from "../../assets/homeicon.svg";
import Mail from "../../assets/mailicon.svg";
import Cash from "../../assets/cashicon.svg";
import Calendar from "../../assets/calendaricon.svg";
import Users from "../../assets/usersicon.svg";
import Angle from "../../assets/angleicon.svg";
import Clip from "../../assets/clipboardicon.svg";
import Settings from "../../assets/settingsicon.svg";
import Signout from "../../assets/signouticon.svg";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const [expanse, setExpanse] = useState(false);

    const logout = async () => {
      await localStorage.removeItem("SIXELEVEN_TOKEN")
      await localStorage.removeItem("SIXELEVEN_ID")
      window.location.reload()
    }

  return (
    <div className="sidebar">
      <img className="logo" src={Logo} alt="sixeleven_logo" />

      <div className="navs">
        <NavLink activeclassname="active" className="nav" to="/">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 15H3.75L15 3.75L26.25 15H23.75"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.25 15V23.75C6.25 24.413 6.51339 25.0489 6.98223 25.5178C7.45107 25.9866 8.08696 26.25 8.75 26.25H21.25C21.913 26.25 22.5489 25.9866 23.0178 25.5178C23.4866 25.0489 23.75 24.413 23.75 23.75V15"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 26.25V18.75C11.25 18.087 11.5134 17.4511 11.9822 16.9822C12.4511 16.5134 13.087 16.25 13.75 16.25H16.25C16.913 16.25 17.5489 16.5134 18.0178 16.9822C18.4866 17.4511 18.75 18.087 18.75 18.75V26.25"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Dashboard
        </NavLink>
        <NavLink activeclassname="active" className="nav" to="/dashboard/requests">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 22.5H6.25C5.58696 22.5 4.95107 22.2366 4.48223 21.7678C4.01339 21.2989 3.75 20.663 3.75 20V7.5C3.75 6.83696 4.01339 6.20107 4.48223 5.73223C4.95107 5.26339 5.58696 5 6.25 5H23.75C24.413 5 25.0489 5.26339 25.5178 5.73223C25.9866 6.20107 26.25 6.83696 26.25 7.5V16.875"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 7.5L15 15L26.25 7.5"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 22.5H26.25"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.5625 18.75L17.8125 22.5L21.5625 26.25"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Requests
        </NavLink>
        <NavLink activeclassname='active' className="nav" exact to="/dashboard/donations">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 11.25H11.25C9.86929 11.25 8.75 12.3693 8.75 13.75V21.25C8.75 22.6307 9.86929 23.75 11.25 23.75H23.75C25.1307 23.75 26.25 22.6307 26.25 21.25V13.75C26.25 12.3693 25.1307 11.25 23.75 11.25Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.25 11.25V8.75C21.25 8.08696 20.9866 7.45107 20.5178 6.98223C20.0489 6.51339 19.413 6.25 18.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V16.25C3.75 16.913 4.01339 17.5489 4.48223 18.0178C4.95107 18.4866 5.58696 18.75 6.25 18.75H8.75"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Donations
        </NavLink>
        <NavLink activeclassname='active' className="nav" exact to="/dashboard/events">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 6.25H7.5C6.11929 6.25 5 7.36929 5 8.75V23.75C5 25.1307 6.11929 26.25 7.5 26.25H22.5C23.8807 26.25 25 25.1307 25 23.75V8.75C25 7.36929 23.8807 6.25 22.5 6.25Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 3.75V8.75"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 3.75V8.75"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 13.75H25"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 18.75H12.5V21.25H10V18.75Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Events & Activities
        </NavLink>
        <li className="nav" onClick={() => setExpanse(prev => !prev)}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 13.75C14.0114 13.75 16.25 11.5114 16.25 8.75C16.25 5.98858 14.0114 3.75 11.25 3.75C8.48858 3.75 6.25 5.98858 6.25 8.75C6.25 11.5114 8.48858 13.75 11.25 13.75Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 26.25V23.75C3.75 22.4239 4.27678 21.1521 5.21447 20.2145C6.15215 19.2768 7.42392 18.75 8.75 18.75H13.75C15.0761 18.75 16.3479 19.2768 17.2855 20.2145C18.2232 21.1521 18.75 22.4239 18.75 23.75V26.25"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 3.9126C21.0755 4.18797 22.0288 4.81347 22.7095 5.69049C23.3903 6.5675 23.7598 7.64614 23.7598 8.75635C23.7598 9.86656 23.3903 10.9452 22.7095 11.8222C22.0288 12.6992 21.0755 13.3247 20 13.6001"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.25 26.25V23.75C26.2437 22.6464 25.8724 21.576 25.1941 20.7055C24.5158 19.835 23.5685 19.2134 22.5 18.9375"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Staff & Volunteers
          <img className={expanse ? "angle expanded" : "angle"} src={Angle} alt="icon" />
        </li>
       {expanse && <div className="nav-mini">
            <NavLink activeclassname='active' className="nav-minix gy" exact to="/dashboard/staff"><i className="fas fa-circle"></i>Staff</NavLink>
            <NavLink activeclassname='active' className="nav-minix" exact to="/dashboard/volunteers"><i className="fas fa-circle"></i>Volunteers</NavLink>
        </div>}
      </div>
      <ul className="navs2">
        <NavLink activeclassname='active' className="nav" exact to="/dashboard/career">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9998 6.6665H9.33317C8.62593 6.6665 7.94765 6.94746 7.44755 7.44755C6.94746 7.94765 6.6665 8.62593 6.6665 9.33317V25.3332C6.6665 26.0404 6.94746 26.7187 7.44755 27.2188C7.94765 27.7189 8.62593 27.9998 9.33317 27.9998H22.6665C23.3737 27.9998 24.052 27.7189 24.5521 27.2188C25.0522 26.7187 25.3332 26.0404 25.3332 25.3332V9.33317C25.3332 8.62593 25.0522 7.94765 24.5521 7.44755C24.052 6.94746 23.3737 6.6665 22.6665 6.6665H19.9998"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3333 4H14.6667C13.1939 4 12 5.19391 12 6.66667C12 8.13943 13.1939 9.33333 14.6667 9.33333H17.3333C18.8061 9.33333 20 8.13943 20 6.66667C20 5.19391 18.8061 4 17.3333 4Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16H12.0133"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.333 16H19.9997"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21.3335H12.0133"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.333 21.3335H19.9997"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Career
        </NavLink>
        <NavLink activeclassname='active' className="nav" exact to="/dashboard/settings">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7667 5.756C14.3347 3.41467 17.6653 3.41467 18.2333 5.756C18.3186 6.10773 18.4856 6.43437 18.7209 6.70933C18.9563 6.98429 19.2532 7.19981 19.5875 7.33833C19.9219 7.47685 20.2842 7.53447 20.645 7.50649C21.0059 7.47852 21.355 7.36574 21.664 7.17733C23.7213 5.924 26.0773 8.27867 24.824 10.3373C24.6359 10.6462 24.5233 10.9951 24.4954 11.3557C24.4674 11.7163 24.525 12.0784 24.6634 12.4125C24.8017 12.7467 25.017 13.0434 25.2916 13.2787C25.5663 13.514 25.8926 13.6812 26.244 13.7667C28.5853 14.3347 28.5853 17.6653 26.244 18.2333C25.8923 18.3186 25.5656 18.4856 25.2907 18.7209C25.0157 18.9563 24.8002 19.2532 24.6617 19.5875C24.5232 19.9219 24.4655 20.2842 24.4935 20.645C24.5215 21.0059 24.6343 21.355 24.8227 21.664C26.076 23.7213 23.7213 26.0773 21.6627 24.824C21.3538 24.6359 21.0049 24.5233 20.6443 24.4954C20.2837 24.4674 19.9216 24.525 19.5875 24.6634C19.2533 24.8017 18.9566 25.017 18.7213 25.2916C18.486 25.5663 18.3188 25.8926 18.2333 26.244C17.6653 28.5853 14.3347 28.5853 13.7667 26.244C13.6814 25.8923 13.5144 25.5656 13.2791 25.2907C13.0437 25.0157 12.7468 24.8002 12.4125 24.6617C12.0781 24.5232 11.7158 24.4655 11.355 24.4935C10.9941 24.5215 10.645 24.6343 10.336 24.8227C8.27867 26.076 5.92267 23.7213 7.176 21.6627C7.36414 21.3538 7.47673 21.0049 7.50465 20.6443C7.53256 20.2837 7.47499 19.9216 7.33663 19.5875C7.19827 19.2533 6.98301 18.9566 6.70836 18.7213C6.43371 18.486 6.10742 18.3188 5.756 18.2333C3.41467 17.6653 3.41467 14.3347 5.756 13.7667C6.10773 13.6814 6.43437 13.5144 6.70933 13.2791C6.98429 13.0437 7.19981 12.7468 7.33833 12.4125C7.47685 12.0781 7.53447 11.7158 7.50649 11.355C7.47852 10.9941 7.36574 10.645 7.17733 10.336C5.924 8.27867 8.27867 5.92267 10.3373 7.176C11.6707 7.98667 13.3987 7.26933 13.7667 5.756Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Settings
        </NavLink>
        <li className="nav" onClick={logout}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6667 10.6668V8.00016C18.6667 7.29292 18.3857 6.61464 17.8856 6.11454C17.3855 5.61445 16.7072 5.3335 16 5.3335H6.66667C5.95942 5.3335 5.28115 5.61445 4.78105 6.11454C4.28095 6.61464 4 7.29292 4 8.00016V24.0002C4 24.7074 4.28095 25.3857 4.78105 25.8858C5.28115 26.3859 5.95942 26.6668 6.66667 26.6668H16C16.7072 26.6668 17.3855 26.3859 17.8856 25.8858C18.3857 25.3857 18.6667 24.7074 18.6667 24.0002V21.3335"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.3335 16H28.0002M28.0002 16L24.0002 12M28.0002 16L24.0002 20"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

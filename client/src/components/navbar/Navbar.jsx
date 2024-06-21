import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout")
            localStorage.setItem("currentUser", null)
            navigateavigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className='link'>
                        <span className='text'>RumahTangga</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    {currentUser ? (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={currentUser.img || "../images/noavatar.jpg"} alt="" />
                            <span>{currentUser?.username}</span>
                            {open && (<div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link className="link" to="/myGigs">Gigs</Link>
                                        <Link className="link" to="/add">Add New Gig</Link>
                                    </>
                                )}
                                <Link className="link" to="/orders">Orders</Link>
                                <Link className="link" to="/messages">Messages</Link>
                                <Link className="link" onClick={handleLogout}>Logout</Link>
                            </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="link">Login</Link>
                            <Link className="link" to="/register">
                                <button>Create an Account</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className='link' to="/">
                            Cleaning
                        </Link>
                        <Link className='link' to="/">
                            Maintenance and Repair
                        </Link>
                        <Link className='link' to="/">
                            Handyman
                        </Link>
                        <Link className='link' to="/">
                            Lawn and Garden
                        </Link>
                        <Link className='link' to="/">
                            Home Improvement
                        </Link>
                        <Link className='link' to="/">
                            Moving and Storage
                        </Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    )
}

export default Navbar
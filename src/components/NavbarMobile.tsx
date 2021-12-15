import React, { useState, useRef } from 'react';
import searchAction from "../actions/AppActions";
// import Store from "../stores/Store";
import logo from '../img/logo-mobile.svg';

const Navbar: React.FC<any> = (props: any) => {
    const [toggle, setToggle] = useState(false);
    const input = useRef<any>(null);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        searchAction(input.current?.value);
        input.current?.value.trim() != "" && setToggle(true);
    }

    const handleToggle = () => {
        setToggle(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar__content container">
                <img className="navbar__logo" src={logo} alt="" />

                {!toggle && <form className="navbar__search" onSubmit={handleSearch}>
                    <input ref={input} className="navbar__input" type="text" name="query" placeholder="Search"/>

                    <button className="navbar__button">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="navbar__icon"><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg>
                    </button>
                </form>}

                {toggle && <div className="navbar__toggle">
                    <div className="navbar__title">{props.search}</div>
                    
                    <button className="navbar__button" onClick={handleToggle}>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="navbar__icon"><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg>
                    </button>
                </div>}
            </div>
        </nav>
    );
}
 
export default Navbar;
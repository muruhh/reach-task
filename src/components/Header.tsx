import React from "react";
import Filter from "./Filter";

function Header(props: any) {
    return (
        <div className="header container">
            <div className="header__results-count">About {props.count} results</div>

            <Filter />
        </div>
    );
}

export default Header;

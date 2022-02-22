import React from "react";

import SearchIcon from "@material-ui/icons/Search";
const GlobalSearch = ({ filter, setFilter }) => {
    return (
        <div className="search_bar">
            <input
                value={filter || ""}
                onChange={(e) => {
                    setFilter(e.target.value);
                }}
                type="text"
                placeholder="Search By Firstname, Lastname, Username"
            />
            <SearchIcon />
        </div>
    );
};

export default GlobalSearch;

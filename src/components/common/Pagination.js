import React from "react";

const Pagination = ({
    data,
    currentPage,
    handleClick,
    pageSize,
    currentPosts,
}) => {
    // let indexOfLastTodo = currentPage * pageSize;
    // let indexOfFirstTodo = indexOfLastTodo - pageSize;
    // currentPosts = data.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / pageSize); i++) {
        pageNumbers.push(i);
    }
    console.log(data);
    return (
        <ul className="pagination" style={{ marginTop: "10px" }}>
            {pageNumbers.map((number, i) => {
                return (
                    <li
                        className={
                            currentPage === i + 1
                                ? "page-item active"
                                : "page-item"
                        }
                        key={number}
                    >
                        <button
                            type="button"
                            className="page-link"
                            onClick={handleClick}
                            id={number}
                        >
                            {number}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;

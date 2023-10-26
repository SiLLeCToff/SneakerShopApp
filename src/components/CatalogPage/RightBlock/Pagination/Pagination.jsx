import React, {useEffect} from "react";
import leftArrowIcon from "../../../../icons/leftArrowBlackIcon.svg";
import rightArrowIcon from "../../../../icons/rightArrowBlackIcon.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage, selectItemsPerPage, setCurrentPage} from "../../../../store/paginationSlice.jsx";

export const Pagination = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(selectCurrentPage)
    const totalItems = useSelector((state) => state.sneakers.filteredSneakers.length)
    const itemsPerPage = useSelector(selectItemsPerPage)
    const totalPages = Math.ceil(totalItems / itemsPerPage);


    const handlePageClick = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };
    const handlePrevClick = () => {
        if (currentPage > 1) {
            handlePageClick(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            handlePageClick(currentPage + 1);
        }
    };


    const pages = [];

    let visiblePages;
    if(totalPages <= 5) {
        visiblePages = totalPages;
    }else {
        visiblePages = 5;
    }
    const totalVisiblePages = Math.min(visiblePages, totalPages);

// Определить начальную и конечную видимые страницы
    let startPage = 1;
    let endPage = totalVisiblePages;

    if (totalPages > 1) {
        if (currentPage > Math.floor(visiblePages / 2)) {
            startPage = currentPage - Math.floor(visiblePages / 2);
            endPage = startPage + visiblePages - 1;
            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - visiblePages + 1;
            }
        }

        // Добавить кнопку "первая страница"
        if (startPage > 1) {
            pages.push(
                <a
                    key={1}

                    className={`inline-flex items-center border-t-2 ${
                        1 === currentPage
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } px-4 pt-4 text-sm font-medium`}
                    onClick={() => handlePageClick(1)}
                >
                    {1}
                </a>
            );
            if (startPage > 2) {
                pages.push(
                    <span key="ellipsis1" className="px-2 py-2">
          ...
        </span>
                );
            }
        }

        // Добавить видимые страницы
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <a
                    key={i}

                    className={`inline-flex items-center border-t-2 ${
                        i === currentPage
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } px-4 pt-4 text-sm font-medium`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </a>
            );
        }

        // Добавить кнопку "последняя страница"
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(
                    <span key="ellipsis2" className="px-2 py-2">
          ...
        </span>
                );
            }
            pages.push(
                <a
                    key={totalPages}
                    href="#"
                    className={`inline-flex items-center border-t-2 ${
                        totalPages === currentPage
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } px-4 pt-4 text-sm font-medium`}
                    onClick={() => handlePageClick(totalPages)}
                >
                    {totalPages}
                </a>
            );
        }
    }


    useEffect(() => {
        if(currentPage > totalPages) {
            dispatch(setCurrentPage(1));
        }
    }, [totalItems, totalPages]);



    return (
        <nav className="flex w-full h-full bottom-0 items-center justify-end border-t border-b border-r border-gray-200 rounded-3xl md:px-4 sm:px-0">
            <div className="-mt-px flex items-center justify-end">
                <a
                    href="#"
                    className="inline-flex items-center justify-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    onClick={handlePrevClick}
                >
                    <img
                        src={leftArrowIcon}
                        className="flex h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </a>
            </div>
            <div className="hidden md:-mt-px md:flex md:items-center">
                {pages} {/* Отображаем кнопки страницы */}
            </div>
            <div className="-mt-px flex items-center justify-center mr-10">
                <a
                    href="#"
                    onClick={handleNextClick}
                    className="inline-flex justify-center items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                    <img
                        src={rightArrowIcon}
                        className="flex h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </a>
            </div>
        </nav>
    );
};

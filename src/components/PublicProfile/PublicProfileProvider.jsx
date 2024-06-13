import { ORDER_OPTIONS } from "@/constant";
import { createContext, useContext, useEffect, useState } from "react";
import Select from "react-select";


const PublicProfileContext = createContext(null);



const PublicProfile = ({ children }) => {

    const [sort, setSort] = useState(ORDER_OPTIONS[0]);
    const [search, setSearch] = useState();
    const [grid, setGrid] = useState('four');
    const [status, setStatus] = useState();

    return (
        <PublicProfileContext.Provider value={{
            sort,
            search,
            grid,
            status,
            setSort,
            setSearch,
            setGrid,
            setStatus
        }}>
            {children}
        </PublicProfileContext.Provider>
    )
}

export const usePublicProfile = () => useContext(PublicProfileContext);

const Search = () => {

    const { setSearch } = usePublicProfile();

    const [localsearch, setLocalSearch] = useState();

    useEffect(() => {
        // if (!localsearch) return;
        // const timer = setTimeout(() => {
            setSearch(localsearch)
        // }, 600);

        // return () => clearTimeout(timer);

    }, [localsearch])

    return (
        <div className="search-form-block">
            <div className="search-box-form">
                <input
                    value={localsearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    type="text"
                    placeholder="Search by NFTs"
                />
                <button>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z"
                            fill="#9E9E9E"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}


const Sort = ({ isDisabled = false }) => {
    const { sort, setSort } = usePublicProfile()
    return (
        <div className="form-group">
            <Select
                name="filter"
                options={ORDER_OPTIONS}
                className="TX-select2-wrapper"
                classNamePrefix="TX-fix-select"
                onChange={(e) => {
                    setSort(e);
                }}
                defaultValue={sort}
                isDisabled={isDisabled}
            />
        </div>
    )
}

const Grid = ({ disabled = false }) => {

    const { setGrid, grid } = usePublicProfile();

    return (
        <div className="odd-filter-block">
            <button onClick={() => setGrid("four")} disabled={disabled}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.25 3.125C1.25 2.62772 1.44754 2.15081 1.79917 1.79917C2.15081 1.44754 2.62772 1.25 3.125 1.25H6.875C7.37228 1.25 7.84919 1.44754 8.20083 1.79917C8.55246 2.15081 8.75 2.62772 8.75 3.125V6.875C8.75 7.37228 8.55246 7.84919 8.20083 8.20083C7.84919 8.55246 7.37228 8.75 6.875 8.75H3.125C2.62772 8.75 2.15081 8.55246 1.79917 8.20083C1.44754 7.84919 1.25 7.37228 1.25 6.875V3.125ZM11.25 3.125C11.25 2.62772 11.4475 2.15081 11.7992 1.79917C12.1508 1.44754 12.6277 1.25 13.125 1.25H16.875C17.3723 1.25 17.8492 1.44754 18.2008 1.79917C18.5525 2.15081 18.75 2.62772 18.75 3.125V6.875C18.75 7.37228 18.5525 7.84919 18.2008 8.20083C17.8492 8.55246 17.3723 8.75 16.875 8.75H13.125C12.6277 8.75 12.1508 8.55246 11.7992 8.20083C11.4475 7.84919 11.25 7.37228 11.25 6.875V3.125ZM1.25 13.125C1.25 12.6277 1.44754 12.1508 1.79917 11.7992C2.15081 11.4475 2.62772 11.25 3.125 11.25H6.875C7.37228 11.25 7.84919 11.4475 8.20083 11.7992C8.55246 12.1508 8.75 12.6277 8.75 13.125V16.875C8.75 17.3723 8.55246 17.8492 8.20083 18.2008C7.84919 18.5525 7.37228 18.75 6.875 18.75H3.125C2.62772 18.75 2.15081 18.5525 1.79917 18.2008C1.44754 17.8492 1.25 17.3723 1.25 16.875V13.125ZM11.25 13.125C11.25 12.6277 11.4475 12.1508 11.7992 11.7992C12.1508 11.4475 12.6277 11.25 13.125 11.25H16.875C17.3723 11.25 17.8492 11.4475 18.2008 11.7992C18.5525 12.1508 18.75 12.6277 18.75 13.125V16.875C18.75 17.3723 18.5525 17.8492 18.2008 18.2008C17.8492 18.5525 17.3723 18.75 16.875 18.75H13.125C12.6277 18.75 12.1508 18.5525 11.7992 18.2008C11.4475 17.8492 11.25 17.3723 11.25 16.875V13.125Z"
                        fill={
                            grid === "four"
                                ? "black"
                                : "#979797"
                        }
                    />
                </svg>
            </button>
            <button onClick={() => setGrid("five")} disabled={disabled}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.6667 8.33333V11.6667H8.33333V8.33333H11.6667ZM13.3333 8.33333H17.5V11.6667H13.3333V8.33333ZM11.6667 17.5H8.33333V13.3333H11.6667V17.5ZM13.3333 17.5V13.3333H17.5V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5H13.3333ZM11.6667 2.5V6.66667H8.33333V2.5H11.6667ZM13.3333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V6.66667H13.3333V2.5ZM6.66667 8.33333V11.6667H2.5V8.33333H6.66667ZM6.66667 17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V13.3333H6.66667V17.5ZM6.66667 2.5V6.66667H2.5V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5H6.66667Z"
                        fill={
                            grid === "five"
                                ? "black"
                                : "#979797"
                        }
                    />
                </svg>
            </button>
        </div>
    )
}

const Status = ({ disabled = false }) => {
    const { status, setStatus } = usePublicProfile();
    return (
        <div className="listed-tab-block-inner">
            <div className="listed-tab-block-inner-button">
                <button onClick={() => setStatus(['Listing', 'Auction'])} className="list-btn" disabled={disabled}>
                    Listed
                </button>
            </div>
            <div className="listed-tab-block-inner-button">
                <button onClick={() => setStatus(['NOT_FOR_SALE'])} className="list-btn " disabled={disabled} >
                    Unlisted
                </button>
            </div>
        </div>
    )
}

PublicProfile.Search = Search;
PublicProfile.Sort = Sort;
PublicProfile.Grid = Grid;
PublicProfile.Status = Status;

export { PublicProfile };
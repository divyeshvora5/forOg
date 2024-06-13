import React, { useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationCustom = ({ totalPages, page, onPageChange }) => {
	const pageIndex = useMemo(() => {
		if (totalPages <= 3) {
		  return Array.from({ length: totalPages }, (_, index) => index + 1);
		}
		if (page <= 2) {
		  return Array.from({ length: 3 }, (_, index) => index + 1);
		}
		if (page >= totalPages - 1) {
		  return Array.from({ length: 3 }, (_, index) => totalPages - 2 + index);
		}
		return Array.from({ length: 3 }, (_, index) => page - 1 + index);
	  }, [totalPages, page]);
	const previeusPage = () => {
		if (page <= 1) return;
		onPageChange(page - 1);
	};

	const nextPage = () => {
		if (page >= totalPages) return;
		onPageChange(page + 1);
	};

	return (
		<>
			{totalPages > 1 && (
				<Pagination className="justify-content-end mt-5">
					{totalPages > 2 && (
						<>
							<Pagination.First onClick={() => onPageChange(1)} />
							<Pagination.Prev onClick={previeusPage} />
							{/* <Pagination.Item onClick={() => onPageChange(1)}>
								1
							</Pagination.Item> */}
							{/* <Pagination.Ellipsis disabled /> */}
						</>
					)}
					{pageIndex?.map((pg, index) => (
						<Pagination.Item
							key={index}
							onClick={() => onPageChange(pg)}
							className={`${page==pg? "active": ""}`}
						>
							{pg}
						</Pagination.Item>
					))}
					{totalPages > 2 && (
						<>
							{/* <Pagination.Ellipsis disabled /> */}
							{/* <Pagination.Item
								onClick={() => onPageChange(totalPages)}
								className={`${page==totalPages? "active": ""}`}
							>
								{totalPages}
							</Pagination.Item> */}

							<Pagination.Next onClick={nextPage} />
							<Pagination.Last
								onClick={() => onPageChange(totalPages)}
							/>
						</>
					)}
				</Pagination>
			)}
		</>
	);
};

export default PaginationCustom;

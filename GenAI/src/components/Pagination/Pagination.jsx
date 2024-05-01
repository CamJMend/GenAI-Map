import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= pageCount) {
      onPageChange(nextPage);
    }
  };

  const goToPreviousPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      onPageChange(prevPage);
    }
  };

  return (
    <div className="pagination">
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Back
      </button>
      <span>{currentPage} de {pageCount}</span>
      <button onClick={goToNextPage} disabled={currentPage === pageCount}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

import "./Pagination.css";
const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <>
            <li className="page-item">
              <a onClick={() => paginate(1)} className="page-link">
                First
              </a>
            </li>
            <li className="page-item">
              <a
                onClick={() => paginate(currentPage - 1)}
                className="page-link"
              >
                Previous
              </a>
            </li>
          </>
        )}
        <li className="page-item current">
          <span className="page-link">{currentPage}</span>
        </li>
        {currentPage < totalPages && (
          <>
            <li className="page-item">
              <a
                onClick={() => paginate(currentPage + 1)}
                className="page-link"
              >
                Next
              </a>
            </li>
            <li className="page-item">
              <a onClick={() => paginate(totalPages)} className="page-link">
                Last
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;

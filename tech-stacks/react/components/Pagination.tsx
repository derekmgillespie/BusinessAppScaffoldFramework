import React from 'react';
import '../styles/Pagination.css';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  siblingCount?: number;
};

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  showFirstLast = true,
  siblingCount = 1 
}: PaginationProps) {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (showLeftDots) {
        pages.push(1);
        pages.push('left-dots');
      } else {
        for (let i = 1; i < leftSibling; i++) {
          pages.push(i);
        }
      }

      for (let i = leftSibling; i <= rightSibling; i++) {
        pages.push(i);
      }

      if (showRightDots) {
        pages.push('right-dots');
        pages.push(totalPages);
      } else {
        for (let i = rightSibling + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <nav className="ba-Pagination" role="navigation" aria-label="Pagination">
      {showFirstLast && (
        <button
          className="ba-Pagination-button"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          «
        </button>
      )}
      
      <button
        className="ba-Pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((page, index) => {
        if (typeof page === 'string') {
          return (
            <span key={`dots-${index}`} className="ba-Pagination-dots">
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            className={`ba-Pagination-button ${
              page === currentPage ? 'ba-Pagination-button--active' : ''
            }`}
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        className="ba-Pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        ›
      </button>

      {showFirstLast && (
        <button
          className="ba-Pagination-button"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          »
        </button>
      )}
    </nav>
  );
}

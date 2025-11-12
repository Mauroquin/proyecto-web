import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath: string; // ejemplo: "Atlas", "Migracion", "Visualizacion"
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, basePath }) => {
  const navigate = useNavigate();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    if (page === 1) {
      navigate(`/${basePath}`);
    } else {
      navigate(`/${basePath}_${page}`);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.pageButton} ${page === currentPage ? styles.active : ""}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;


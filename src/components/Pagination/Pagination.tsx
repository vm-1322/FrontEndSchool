import { Direction } from '../../types';

import {
  StyledPagination,
  StyledPaginationNext,
  StyledPaginationPrev,
  StyledPaginationPage,
} from './PaginationStyled';

interface IPagination {
  currentPage: number;
  totalPages: number;
  clickPage: (num: number) => void;
  clickDirection: (direction: Direction) => void;
}

const Pagination: React.FC<IPagination> = ({
  currentPage = 1,
  totalPages = 0,
  clickPage,
  clickDirection,
}) => {
  const renderPaginationPages = () => {
    return [...Array(totalPages)].map((_, index) => (
      <StyledPaginationPage
        key={index}
        currentPage={index + 1 === currentPage}
        onClick={() => clickPage(index + 1)}
      >
        {index + 1}
      </StyledPaginationPage>
    ));
  };

  return (
    <StyledPagination>
      <StyledPaginationPrev onClick={() => clickDirection(Direction.Left)}>
        {'<'}
      </StyledPaginationPrev>
      {renderPaginationPages()}
      <StyledPaginationNext onClick={() => clickDirection(Direction.Right)}>
        {'>'}
      </StyledPaginationNext>
    </StyledPagination>
  );
};

export default Pagination;

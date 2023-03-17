import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  height: 90px;
  padding: 30px 0;
`;

export const StyledPaginationPrev = styled.button`
  width: 30px;
  margin: 0 10px 0 0;
`;

export const StyledPaginationNext = styled(StyledPaginationPrev)`
  margin: 0 0 0 10px;
`;

export const StyledPaginationPage = styled.button<{ currentPage?: boolean }>`
  width: 30px;
  margin: 0 5px;
  background-color: ${(props) =>
    props.currentPage
      ? props.theme.colors.starRating
      : props.theme.colors.starNoRating};
  border: none;
`;

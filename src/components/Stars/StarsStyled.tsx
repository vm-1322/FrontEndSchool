import styled from 'styled-components';

export const StyledStars = styled.div``;

export const StyledStarsItemNoRating = styled.span`
  color: ${(props) => props.theme.colors.starNoRating};
`;

export const StyledStarsItemRating = styled.span`
  color: ${(props) => props.theme.colors.starRating};
`;

export const StyledStarsItemRatingPart = styled.span<{ percent: number }>`
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.colors.starNoRating};

  &::before {
    content: attr(data-forhalf);
    position: absolute;
    overflow: hidden;
    display: block;
    z-index: 1;
    top: 0;
    left: 0;
    width: ${(props) => props.percent}%;
    color: #ffd700;
  }
`;

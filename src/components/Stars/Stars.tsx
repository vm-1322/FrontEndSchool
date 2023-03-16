import { Fragment } from 'react';

import {
  StyledStars,
  StyledStarsItemNoRating,
  StyledStarsItemRating,
  StyledStarsItemRatingPart,
} from './StarsStyled';

interface IStars {
  totalStars?: number;
  rating?: number;
}

const Stars: React.FC<IStars> = ({ totalStars = 5, rating = 0 }) => {
  const renderStars = (totalStars: number, rating: number) => {
    const starChar = '★';
    const ratingDecimal = (rating - Math.trunc(rating)) * 100;

    const getStar = (index: number) => {
      if (index < rating) {
        if (index < Math.trunc(rating)) {
          return (
            <StyledStarsItemRating key={index}>
              {starChar}
            </StyledStarsItemRating>
          );
        }

        return (
          <StyledStarsItemRatingPart
            key={index}
            percent={ratingDecimal}
            data-forhalf={starChar}
          >
            {starChar}
          </StyledStarsItemRatingPart>
        );
      }

      return (
        <StyledStarsItemNoRating key={index}>
          {starChar}
        </StyledStarsItemNoRating>
      );
    };

    return (
      <Fragment>
        {[...Array(totalStars)].map((_, index) => getStar(index))}
      </Fragment>
    );
  };

  return <StyledStars>{renderStars(totalStars, rating)}</StyledStars>;
};

export default Stars;

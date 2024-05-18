interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const getStarClass = (index: number): string => {
    if (rating >= index + 1) {
      return 'text-red-500'; // Full star
    } else if (rating > index) {
      return 'text-red-500'; // Half star
    } else {
      return 'text-gray-300'; // Empty star
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(maxRating)].map((_, index) => (
        <div className="relative" key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-3 w-3 ${getStarClass(index)}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ zIndex: 1 }}
          >
            <path d="M12 .587l3.668 7.431 8.168 1.192-5.91 5.758 1.394 8.131L12 18.897l-7.32 3.857 1.394-8.131-5.91-5.758 8.168-1.192z" />
          </svg>
          {rating > index && rating < index + 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 h-3 w-3 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ clipPath: 'inset(0 0 0 50%)', zIndex: 0 }}
            >
              <path d="M12 .587l3.668 7.431 8.168 1.192-5.91 5.758 1.394 8.131L12 18.897l-7.32 3.857 1.394-8.131-5.91-5.758 8.168-1.192z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRating;

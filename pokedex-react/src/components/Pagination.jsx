const Pagination = ({ onPrevious, onNext, prevUrl, nextUrl }) => {
    return (
      <div className="tw-pagination-wrapper">
        {prevUrl && (
          <button onClick={onPrevious} className="tw-pagination-btn">
            ← Previous
          </button>
        )}
        {nextUrl && (
          <button onClick={onNext} className="tw-pagination-btn">
            Next →
          </button>
        )}
      </div>
    );
  };
  
  export default Pagination;
  
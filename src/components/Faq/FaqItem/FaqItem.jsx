import PropTypes from "prop-types";

export const FaqItem = ({ title, description, isOpen }) => {
  return (
    <div className="accordion-item">
      <p className={`title ${isOpen && "is-expected"}`}>{title}</p>
      <div className={`content ${isOpen && "is-expected"}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  title: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

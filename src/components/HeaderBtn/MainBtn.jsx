import PropTypes from "prop-types";
import { Button } from "./MainBtn.styled";

export const MainBtn = ({ text, light }) => {
  return (
    <Button type="button" light={light}>
      {text}
    </Button>
  );
};

MainBtn.propTypes = {
  text: PropTypes.string.isRequired,
  light: PropTypes.bool,
};

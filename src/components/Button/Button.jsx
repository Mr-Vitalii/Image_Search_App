import PropTypes from 'prop-types'
import { CustomButton } from './Button.styled';



const Button = ({ children, onClick, ...otherProps }) => {
        return (
          <CustomButton type="button" onClick={onClick} {...otherProps}>
            {children}
          </CustomButton>
        );
};

Button.defaultProps = {
    onClick: () => null,
    children: null,
};

Button.prototype = {
    onClick: PropTypes.func,
    children: PropTypes.node,
}



export  {Button};


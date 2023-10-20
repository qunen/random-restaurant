import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => {
    return (
        <button
            className={className}
            onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    className: 'btn-submit'
}

export default Button
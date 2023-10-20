import PropTypes from 'prop-types';
import Button from './Button';

const Title = ({ title, showAddRestaurant, toggleForm }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button
                className={!showAddRestaurant ? 'btn-add' : 'btn-hide'}
                text={!showAddRestaurant ? 'Add' : 'Hide'}
                onClick={toggleForm}
            />
        </header>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    showAddRestaurant: PropTypes.bool.isRequired,
    toggleForm: PropTypes.func.isRequired
};

export default Title;
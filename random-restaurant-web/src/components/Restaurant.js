import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Restaurant = ({ restaurant, deleteRestaurant }) => {
    return (
        <div className='restaurant'>
            <h3>
                {restaurant.name}
                <FaTimes 
                    className='delete-restaurant'
                    onClick={() => deleteRestaurant(restaurant._id)}
                />
            </h3>
            <p>{restaurant.address}</p>
        </div>
    );
};

Restaurant.propTypes = {
    restaurant: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    }),
    deleteRestaurant: PropTypes.func.isRequired
};

export default Restaurant;
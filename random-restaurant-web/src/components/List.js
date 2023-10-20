import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const List = ({ restaurants, title, deleteRestaurant }) => {
    return (
        <div className='list'>
            <h2>{title}</h2>
            <>
                {restaurants.map((restaurant) => (
                    <Restaurant key={restaurant._id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>
                ))}
            </>
        </div>
    );
};

List.propTypes = {
    restaurant: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    deleteRestaurant: PropTypes.func.isRequired
};

export default List;
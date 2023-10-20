import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const Result = ({ restaurant, clearResult }) => {
    return (
        <div className='result'>
            <h2>Result</h2>
            <Restaurant restaurant={restaurant} deleteRestaurant={clearResult}/>
        </div>
    );
};

Result.propTypes = {
    restaurant: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    }),
    clearResult: PropTypes.func.isRequired
};

export default Result;
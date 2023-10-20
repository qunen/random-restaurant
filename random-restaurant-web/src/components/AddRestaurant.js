import PropTypes from 'prop-types'
import { useState } from 'react';

const AddRestaurant = ({ addRestaurant }) => {
    const [restaurantName, setName] = useState('');
    const [restaurantAddress, setAddress] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (restaurantName.trim() === '' || restaurantAddress.trim() === '') {
            alert('Restaurant name and address is required');
            return;
        }

        addRestaurant(restaurantName.trim(), restaurantAddress.trim());

        setName('');
        setAddress('');
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Restaurant: </label>
                <input
                    type='text'
                    placeholder='Restaurant Name'
                    value={restaurantName}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Address: </label>
                <input
                    type='text'
                    placeholder='Restaurant Address'
                    value={restaurantAddress}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>

            <input
                className='btn-submit'
                type='submit'
                value='Add Restaurant'
            />
        </form>
    );
};

AddRestaurant.propTypes = {
    addRestaurant: PropTypes.func.isRequired
};

export default AddRestaurant;
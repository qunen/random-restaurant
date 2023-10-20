import AddRestaurant from './components/AddRestaurant'
import Button from './components/Button';
import List from './components/List';
import Result from './components/Result';
import Title from './components/Title';
import { useState, useEffect } from 'react';

function App() {
    // states
    const [showAddRestaurant, toggleShowAddRestaurant] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [randomResult, setRandomResult] = useState(null);

    // effects
    useEffect(() => {
        const getRestaurants = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const res = await fetch('http://localhost:8080/api/v1/allRestaurants', options);
            const data = await res.json();

            if (res.status !== 200) alert('Failed to retrieve restaurants from server');
            else setRestaurants(data);
        }

        getRestaurants();
    }, []);

    // button actions
    const toggleForm = () => {
        toggleShowAddRestaurant(!showAddRestaurant);
    };
    const randomRestaurant = () => {
        setRandomResult(restaurants[Math.floor(Math.random() * restaurants.length)]);
    };
    const deleteRestaurant = async (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        };

        const res = await fetch('http://localhost:8080/api/v1/deleteRestaurant', options);
        const data = await res.json();

        if (res.status !== 200) alert(data.error);
        else setRestaurants(restaurants.filter((restaurant) => restaurant._id !== id));
    };
    const clearResult = (id) => {
        deleteRestaurant(id);
        setRandomResult(null);
    };
    const addRestaurant = async (newName, newAddress) => {
        const newRestaurant = {
            name: newName,
            address: newAddress
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurant)
        };

        const res = await fetch('http://localhost:8080/api/v1/addRestaurant', options);
        const data = await res.json();

        if (res.status !== 200) alert(data.error);
        else {
            newRestaurant._id = data._id;
            setRestaurants([...restaurants, newRestaurant]);
        }
    };

    return (
        <div className='app'>
            <Title title={'Restaurant Randomnizer'} showAddRestaurant={showAddRestaurant} toggleForm={toggleForm}/>
            {showAddRestaurant ? <AddRestaurant addRestaurant={addRestaurant}/> : ''}
            <List restaurants={restaurants} title={'Restaurant List'} deleteRestaurant={deleteRestaurant}/>
            <Button className={'btn-random'} text={'Randomnize!'} onClick={randomRestaurant}/>
            {randomResult !== null ? <Result restaurant={randomResult} clearResult={clearResult}/> : ''}
        </div>
    );
}

export default App;

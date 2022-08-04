import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = props => {
    const navigate = useNavigate();
    const [location, setLocation] = useState("")
    const onChangeHandler = e =>{
        setLocation(e.target.value)
    }
    const searchHandler = e => {
        if(e.key === 'Enter'){
            navigate(`/weather/bycity/${location}`)
            setLocation("")
        }
    }
    return (
        <div className="navbar-cont">
            <div className="navbar-name">
                <Link className='navbar-name-link' to={'/'}><h1>Weather App</h1></Link>
            </div>
            <div className="navbar-input">
                <input 
                value={location} 
                onChange={onChangeHandler} 
                placeholder='Enter Location' 
                type="text"
                onKeyPress={searchHandler} />
            </div>
            <div className="navbar-currentLocation">
                <Link to={"/weather/currentlocation"}><button>Use Current location</button></Link>
            </div>
        </div>
    )
}

export default NavBar;
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import "./Portfolio.css"
import DataContext from '../../datacontext'

function Cards() {
    const data = useContext(DataContext);   

    const handleClick = () => {
    }
    return (    

        <div>         
            <div className='container'>
            {data.map(item => (
                <Link to={`./Sheet/${item.id}`}onClick={() => handleClick(item.id) }key={item.id}>
             <figure className='card' key={item.id} >
                <img className='imgCard' src={item.cover} alt={item.title} />
            </figure>
               </Link>
            ))}</div>
        </div>
    )
}

export default Cards
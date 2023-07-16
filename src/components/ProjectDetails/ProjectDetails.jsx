import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import './ProjectDetails.css';
import DataContext from '../../datacontext';
import Collaps from "../../components/Collaps/Collaps"
import Carousel from "../../components/Carousel/Carousel";



function ProjectDetails() {
  const data = useContext(DataContext);   
  const {id} = useParams()
  
  const dataId = data.find(data => data.id === id);

if (data.length === 0) {
  return (
    <div className="error" >
      <p>Une erreur est survenue, veuillez réessayer.</p>
    </div>
  );
} else
return (      
  <div className="projectCard">
    <Carousel>
        {dataId.pictures.map((picture, index) => (
          <div className="itemPictures" key={index}>
            <img
              className="itemPicture"
              src={picture}
              alt={dataId.title}
            />
          </div>
        ))}
    </Carousel> 
        <div className='containerHostTags'>
          <div className='itemInformations'>
            <div className="itemTitle">
              <p>{dataId.title}</p>
            </div>
         </div>
        </div>
        <div className='collapsSheet'>
          <div >
            <Collaps  title="Description">
              <ul className="itemDescription">
                {dataId.descriptions.map(description => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </Collaps> 
          </div>
          </div>
        </div>
);
} 
  
export default ProjectDetails


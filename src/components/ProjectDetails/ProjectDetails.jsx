import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import './ProjectDetails.css';
import DataContext from '../../datacontext';
import Carousel from '../Carousel/Carousel';
import Collaps from '../Collaps/Collaps'
import PortfolioButton from '../PortfolioButton/PortfolioButton'
<PortfolioButton />


 
function ProjectDetails() {
  const data = useContext(DataContext); 
  const {id} = useParams()
  
  const dataId = data.find(data => data.id === id);

if (data.length === 0) {
  return (
    <div className="error" >
      <p>Une erreur est survenue, veuillez réessayer.</p>
    </div>
  )
} else
return (      
  <div className="projectCard"> 
    <Carousel>
        {dataId.pictures.map((picture, index) => (  
           console.log("data", picture), 

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
              <p>{dataId.id}</p>
              <p>{dataId.description}</p>
            </div>
         </div>
        </div>
        <div className='collapsSheet'>
          <div >
            <Collaps  title="skills">
              <ul className="itemSkills">
                {dataId.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Collaps> 
          </div>
          </div>
          <PortfolioButton />
        </div>
);
} 
  
export default ProjectDetails


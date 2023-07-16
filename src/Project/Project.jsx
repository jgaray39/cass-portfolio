import {  useState, useEffect } from "react"
import DataContext from "../datacontext"


 function ProjectProvider(props) {
    const [item, setItem] = useState([])

   useEffect(() => {
      fetch("/project.json")
          .then(data => {
            data.json().then(projects => {
              setItem(projects);
            })
          })
          .catch(error => console.log(error));
  }, []);

return (
 
 <DataContext.Provider value={item}>
  {props.children}
 </DataContext.Provider>
)} 


export default  ProjectProvider;
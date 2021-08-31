import React from 'react';
import HornedBeast from '../components/HornedBeast';
import data from '../components/data.json'

class Main extends React.Component{

render(){

return(
    <>
{data.map((item)=>{

  return (<HornedBeast
    title={item.title}
     imgUrl={item.image_url}
     description={item.description}

     />)
}
)



}


</>
);


};


};

export default Main;


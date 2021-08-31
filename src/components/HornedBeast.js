import React from 'react';
import horns from '../components/caribou.webp'

class HornedBeast extends React.Component{

render(){

return(
<>
<h2>{this.props.title}</h2>
<img src={this.props.imgUrl} alt="horns" title="This is horns animals"></img>
<p>
{this.props.description}</p>
</>


)

}

}

export default HornedBeast;
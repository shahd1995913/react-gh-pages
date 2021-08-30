import React from 'react';
import horns from '../components/caribou.webp'

class Div extends React.Component{

render(){

return(
<>
<h2>{this.props.title}</h2>
<img src={this.src.imgUrl} alt="horns" title="This is horns animals"></img>
<p>
{this.props.description}</p>
</>


)

}

}

export default Div;
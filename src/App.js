import logo from './logo.svg';
import React  from 'react';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';
import HornedBeast  from './components/HornedBeast'

// import data from './components/data.json'
import data from './components/data.json';

class App extends React.Component{

render(){

return(
<>
<Header></Header>
<Main>  
    
<HornedBeast
  title={item.title}
   imgUrl={item.image_url}
   description={item.description}

   />)

</Main>
<Footer></Footer>

</>


)

}


}
export default App;
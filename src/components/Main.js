import React from 'react';
import HornedBeast from '../components/HornedBeast';
import data from '../components/data.json'




class Main extends React.Component {
    render() {

        let allCardArr = this.props.cardsBeasts.map(element => {
            return (<HornedBeast
                takeData={this.props.takeData}
                title={element.title}
                imgUrl={element.image_url}
                description={element.description}
                handleClose={this.props.handleClose}
            />
            )

        });
        return (
            <div>
                {allCardArr}
            </div>
        )
    }
};

export default Main;

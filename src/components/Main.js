import React from 'react';
import HornedBeast from '../components/HornedBeast';
import data from '../components/data.json'
import Search from '../components/Serch';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayedImg: this.props.cardsBeasts,
        }
    }

    filteredImg = (cornValue) => {
        if (cornValue === 'all') {
            this.setState({
                displayedImg: this.props.cardsBeasts

            });
        } else {
            let newArrOfBeast = this.props.cardsBeasts.filter(element => { return 
              (JSON.stringify(element.horns) === cornValue) })
            this.setState({
                displayedImg: newArrOfBeast,

            })
        }
    }



    render() {

        let allCardArr = this.state.displayedImg.map((element) => {
            return (<HornedBeast
                takeData={this.props.takeData}
                title={element.title}
                imgUrl={element.image_url}
                description={element.description}
                handleClose={this.props.handleClose}
            />
            );

        });
        return (
            <div>
                <Search
                    filteredImg={this.filteredImg}
                />
                {allCardArr}
            </div>
        );
    };


};
export default Main;
import React, { Component } from 'react';
import BizCard from './BizCard';
import FormComponent from './FormComponent';
import './CardContainer.css';

class CardContainer extends Component {

    state = { business: [] }

    //gets json from node server when component mounts at start (this only runs once)
    componentDidMount() {
        var search = {
            term: 'food',
            city: 'portland'
        }
        fetch('/business', {
            method: 'POST',
            body: JSON.stringify(search),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json(search))
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

        fetch('/business')
            .then(res => res.json())
            .then(business => this.setState({ business }))
    }

    //gets call from
    formCallBack = () => {
        fetch('/business')
            .then(res => res.json())
            .then(business => this.setState({ business }))

    }

    width = () => {
        var viewWidth = document.documentElement.clientWidth;
        var cardWidth = viewWidth / 8;
        return cardWidth;
    }

    render() {
        //check if state.business is loaded up
        // if(this.state.business.length > 0)
        //     console.log(this.state.business[0].name);
        console.log(this.state.business);
        var cardWidth = 300;
        var cardHeight = .35 * document.documentElement.clientHeight;
        var countCol = Math.floor(document.documentElement.clientWidth / cardWidth);
        var countRow = Math.floor(document.documentElement.clientHeight / cardHeight);
        let cards = [];
        var arrayMarker = 0; //keep track of location of array in business object
        var colCount = 0; //count business in array when looping through the columns
        for (var i = 0; i < countRow; i++) {
            arrayMarker = colCount;
            arrayMarker *= i;
            for (var j = 0; j < countCol; j++) {
                colCount++;
                if (this.state.business.length > 0)
                    cards.push(<BizCard
                        name={this.state.business[j + arrayMarker].name}
                        phone={this.state.business[j + arrayMarker].phone}
                        image={this.state.business[j + arrayMarker].image_url}
                        id={this.state.business[j + arrayMarker].id}
                    />);
            }
            console.log("after col count");
            console.log(colCount);
        }

        return (
            <div className="content">
                <div className="form-container">
                    <FormComponent className="form" callBackFromParent={this.formCallBack} />
                </div>
                <div className="card-container">
                    {cards}
                </div>
            </div>
        )
    }
}

export default CardContainer;
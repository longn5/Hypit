import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import './FormComponent.css';

// const styles = {
//     formControl: {
//         margin: spacing.unit,
//     },
// }

class FormComponent extends React.Component {

    // state = {
    //     search: 'Search',
    //     city: 'Portland, OR',
    // }

    // handleChange = name => event => {
    //     this.setState({
    //         [name]: event.target.value });
    //     // this.setState({ city: event.target.value });
    // };


    sendSearch = () => {
        var search = {
            term: document.getElementById('search-term').value,
            city: document.getElementById('city-term').value
        }
        fetch('/business', {
            method: 'POST',
            body: JSON.stringify(search),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json(search))
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response))

        this.props.callBackFromParent();
        // fetch('/business')
        //     .then(res => res.json())
        //     .then(business => this.setState({business}))
    };

    render() {
        // const {classes} = this.props;

        return (
            <div className="container">
                <FormControl className="term-input">
                    <span className="input-container">
                        <InputLabel className="input-label" htmlFor="search-simple">Search</InputLabel>
                        <Input id="search-term" className="input-active" placeholder="ice cream, pizza, cleaners..." />
                    </span>
                    <span className="input-container">
                        <InputLabel className="input-label" htmlFor="city-simple">City</InputLabel>
                        <Input id="city-term" className="input-active" placeholder="Portland OR"/>
                    </span>
                    <Button variant="outlined" className="submit-button" onClick={this.sendSearch}>
                        Submit
                </Button>
                </FormControl>
            </div>
        )
    }
}

export default FormComponent;
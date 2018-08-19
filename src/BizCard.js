import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import blue from './img/blue-star.PNG';
import './BizCard.css';

class BizCard extends Component {

    styles = {
        card: {
            minWidth: 275,
        },
        title: {
            marginBottom: 16,
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    }

    render() {
        return (
            <Card className="card">
                <CardMedia
                    className="card-media"
                    image={this.props.image}
                />
                <CardContent>
                    <Typography className="card-text" gutterBottom variant="headline" color="textSecondary" component="h2">
                        {this.props.name}
                    </Typography>
                    <Typography component="p">
                        {this.props.phone}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Click Here</Button>
                </CardActions>
            </Card>
        );
    };
}

export default BizCard;


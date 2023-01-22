import React, { Component } from 'react';

import './Cards.scss'

//add mui components

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

//add loader for projects json

import LoaderService from '../LoadService/LoadService'


const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});



class Cards extends Component {

    state = {
        infoLoaded: false,
        projects: []
    };

    loaderService = new LoaderService('http://localhost:3000/assets/');

    componentDidMount() {
        if (this.state.infoLoaded === false) {
            this.loaderService.getInfo('projects')
                .then(result => {
                    this.setState(
                        {
                            infoLoaded: true,
                            projects: result
                        }
                    );
                })
                .catch();
        }
    }

    renderCards = (input) => {
        return input.map((item, index) => {
            return (
                <Card className='project-cards' key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={item.imgLink}
                            alt={'project preview' + item.projName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.projName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={e => { window.open(item.demoLink) }} size="small">Demo Link</Button>
                    </CardActions>
                </Card>
            )
        });
    }

    render() {
        const cards = this.renderCards(this.state.projects);
        return (

            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                {cards}
            </ThemeProvider>
        );
    }
}

export default Cards;
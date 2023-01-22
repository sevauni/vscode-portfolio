import React, { Component } from 'react';
import './Cards.scss'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

import { Description } from '@mui/icons-material';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});



class Cards extends Component {


    projects = [
        {
            description: 'TestDescription',
            projName: 'TestName',
            demoLink: 'https://yandex.ru',
            imgLink: './assets/img (1).png'
        },
        {
            description: 'TestDescription',
            projName: 'TestName',
            demoLink: 'https://yandex.ru',
            imgLink: './assets/img (1).png'
        },
        {
            description: 'TestDescription',
            projName: 'TestName',
            demoLink: 'https://yandex.ru',
            imgLink: './assets/img (1).png'
        },
        {
            description: 'TestDescription',
            projName: 'TestName',
            demoLink: 'https://yandex.ru',
            imgLink: './assets/img (1).png'
        },


    ];

    renderCards = (input) => {

        return input.map((item, index) => {
            return (
                <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image='./assets/img%20(2).png'
                            alt="green iguana"
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
                        <Button size="small">Demo Link</Button>
                    </CardActions>
                </Card>
            )
        });

    }


    render() {
        const cards = this.renderCards(this.projects);
        return (

            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                {cards}
            </ThemeProvider>
        );
    }
}

export default Cards;
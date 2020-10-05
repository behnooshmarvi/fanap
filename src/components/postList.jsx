import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import data from '../data.json';
import image0 from '../assets/postImages/1.png'
import image1 from '../assets/postImages/2.png'
import image2 from '../assets/postImages/3.png'
import image3 from '../assets/postImages/4.png'
import image4 from '../assets/postImages/5.png'
import image5 from '../assets/postImages/6.png'
import image6 from '../assets/postImages/7.png'
import image7 from '../assets/postImages/8.png'
import image8 from '../assets/postImages/9.png'
import image9 from '../assets/postImages/10.png'
import image10 from '../assets/postImages/11.png'
import image11 from '../assets/postImages/12.png'
import image12 from '../assets/postImages/13.png'
import image13 from '../assets/postImages/14.png'
import image14 from '../assets/postImages/15.png'
import image15 from '../assets/postImages/16.png'
import image16 from '../assets/postImages/17.png'
import image17 from '../assets/postImages/18.png'
import Moment from 'react-moment';
import SinglePost from './singlePost';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const images=[image0,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17]
export default function PostList() {
  const [selectedPostId,setSelectedPostId]=useState(-1);
  console.log(selectedPostId)
   const handleSelectPost= (id) => {
        setSelectedPostId(id)
  }  
  const classes = useStyles();
  if (selectedPostId === -1) {  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            {data.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>
                    <Moment>{card.created}</Moment>
                  </Typography>
                  <CardMedia
                    className={classes.cardMedia}
                    image={images[card.id-1]}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>

                    <Typography>
                        {card.description}
                    </Typography>
                    
                  </CardContent>
                  <Typography>
                    {card.body}
                  </Typography>
                  <CardActions>
                    <Button className={classes.button} size="small" color="primary" onClick={()=>handleSelectPost(card.id)}>
                      Read more
                    </Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </div>
  );
}
return <SinglePost handleSelectPost={handleSelectPost} post={data[selectedPostId-1]} image={images[selectedPostId-1]}/>

}
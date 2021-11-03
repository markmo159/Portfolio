import React, {useState} from "react";
import { 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button, 
  CardActionArea, 
  CardActions,
  Modal,
  Box,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};


const PostingNews = ({data}) => {
  const [open, setOpen] = useState(false);
  const [articleIndex, setArticleIndex] = useState(0);

  const handleOpen = (event) => {setOpen(true); setArticleIndex(event.target.value)}
  const handleClose = () => setOpen(false);

  if (data.totalResults === 0){
    return <div>No results found</div>
  }
  if (data.status === 'error'){
    return (
      <div>
        {data.status.code};
        {data.status.message}
      </div>
    );
  }
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding:'30px 0'}}>
      {data.articles.map((article,index) => (
        <Grid item xs={2} sm={4} md={4} key={index} >
          <Card sx={{ maxWidth: 345 }} >
            <CardActionArea >
              <CardMedia
                component="img"
                height="140"
                image={article.urlToImage}
                alt="article image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {article.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}} >
              <Button onClick={handleOpen} value={index} size="small" >Read More</Button>
              <Modal
                open={open}
                sx={{background:'rgb(117, 181, 210)'}}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <CardMedia
                  component="img"
                  height="auto"
                  image={data.articles[articleIndex].urlToImage}
                  alt="article image"
                  />
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {data.articles[articleIndex].title}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {data.articles[articleIndex].description}
                  </Typography>
                </Box>
              </Modal>
              <Button href={article.url} size="small" >
                Go To
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PostingNews;



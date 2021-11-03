import React ,{useState} from 'react';
import BookError from './BookError'

import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  Zoom,
} from '@mui/material';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';


const SearchResults = ({results, addBookToTable,books}) => {
  const data = results.data.items
  const [isBookTwice, setIsBookTwice] = useState(false)

  const checkHere = (index, target) => {
    let existingBook  = false
  loop1:
    for (let categorie in books) {
      for (let bookInCategorie = 0; books[categorie] && bookInCategorie < books[categorie].length; bookInCategorie++) {
        if(books[categorie][bookInCategorie].id === data[index].id) {
          existingBook = true;
          setIsBookTwice(true)
          break loop1;
        }
      }
    }
    if (!existingBook) {
      addBookToTable(index,target)
    }
  }

  const closeError = (close) => {
    setIsBookTwice(close)
  }

  return (
    <List sx={{ width: '100%'}}>
      {data.map((value,index) => (
        <ListItem
          divider
          key={index}
          disableGutters
        >
          <img src={value.volumeInfo.imageLinks ? value.volumeInfo.imageLinks.thumbnail : null} alt='' />
          <ListItemText sx={{paddingLeft:'10px'}} primary={value.volumeInfo.title} />
          <Tooltip TransitionComponent={Zoom} title="Already Read">
            <IconButton onClick={() => checkHere(index,'read')}>
              <BookmarkAddedIcon fontSize='large' color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Reading">
            <IconButton onClick={() => checkHere(index,'reading')} >
              <BookmarkRemoveIcon fontSize='large' color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="To Read">
            <IconButton onClick={() =>  checkHere(index,'to read')} >
              <BookmarkAddIcon fontSize='large' color="primary" />
            </IconButton>
          </Tooltip>
        </ListItem>
      ))}
      <BookError status={isBookTwice}  closeError={closeError} />
    </List>
  );
}

export default SearchResults;
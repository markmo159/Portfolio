import React, { useState } from 'react';
import MyBooks from './libraryComponents/MyBooks';
import FetchBooks from './libraryComponents/FetchBooks'
import SearchResults from './libraryComponents/SearchResults';


import { 
  Container, 
  Button, 
  Modal,
  Box,
  IconButton,
  Paper,
  InputBase,
} from '@mui/material';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import SearchIcon from '@mui/icons-material/Search';

const style = {
  position: 'absolute',
  top: '15%',
  left: '10%',
  right: '10%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  hieght:'auto',
  maxHeight: '1000px',
  overflow: 'auto'
};

const books = {
  'read': [],
  'reading': [],
  'to read': []
};



const Library = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState()


  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      const response = await FetchBooks(searchTerm);
      setData(response)
    }
  }

  const addBookToTable = (index,target) => {
    const book = data.data.items[index]
    books[target].push({
      id: book.id,
      img: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
      title: book.volumeInfo.title
    })
  }

  const deleteBook = (index, target) => {
    books[target].splice(index, 1)
  }

  return (
    <Container fixed>
      <Box sx={{ 
        display:'flex', 
        justifyContent: 'end', 
        marginTop:'20px'
        }}>
        <Button onClick={() => setOpen(!open)}>
          <AddBoxTwoToneIcon sx={{marginRight:'5px'}}/>Add Book
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(!open)}
        >
          <Box sx={style}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
            >

              <InputBase 
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find Book"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value) }
              />
              <IconButton type="submit" onClick={onSubmit} sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            {data ? <SearchResults addBookToTable={addBookToTable} results={data} books={books} /> : null}
          </Box>
        </Modal>
      </Box>
      <MyBooks deleteBook={deleteBook} books={books} />
    </Container>
  );
}

export default Library;
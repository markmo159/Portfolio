import React, { useState } from 'react';
import ShowBooks from './ShowBooks';

import {
  Box,
  Tab,
} from '@mui/material';
import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab';

const style ={  
  hieght:'auto', 
  maxHeight: '1050px', 
  overflow: 'auto'
}


const MyBooks = ({books, deleteBook}) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <Box sx={{width: '100%', typography: 'body1', marginTop:'20px'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Books I Read" value="1" />
            <Tab label="Books I Have Read" value="2" />
            <Tab label="Books To Read" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={style} value="1"><ShowBooks deleteBook={deleteBook} books={books['read']} target={'read'} /></TabPanel>
        <TabPanel sx={style} value="2"><ShowBooks deleteBook={deleteBook} books={books['reading']} target={'reading'} /></TabPanel>
        <TabPanel sx={style} value="3"><ShowBooks deleteBook={deleteBook} books={books['to read']} target={'to read'} /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default MyBooks;
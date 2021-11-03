import React, { useState, useEffect } from 'react';

import { endpoints, 
  languages, 
  sortBy, 
  categories, 
  countries 
} from './newsComponents/searchData'
import FetchData from './newsComponents/FetchData';
import PostingNews from './newsComponents/PostingNews';

import { Container, 
  Box,
  TextField,
  MenuItem,
  Button,
  AlertTitle,
  Alert,
  Stack
} from '@mui/material';


const News = () => {
  const [data, setData] = useState()
  const [isError, setIsError] = useState(true)
  const [helperText, setHelperText] = useState('Nothing to search')
  const [search, setSearch] = useState('')
  const [endpoint, setEndpoint] = useState('everything');
  const [language, setLanguage] = useState('en');
  const [sorting, setSorting] = useState('publishedAt');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  

  useEffect (() => {
    document.body.style.overflow='visible'
    const firstLoad = async () => {
      const response = await FetchData();
    setData(response)
    };
    firstLoad()
  },[])

  useEffect(() => {
      if (!search) {
        setIsError(true);
        setHelperText('Nothing to search')
      }else {
        setIsError(false);
        setHelperText('')
      }
      const listener = event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          event.preventDefault();
          onSearchClick()
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
         // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search]);


  const handleChange = (event) => {
    if(event.target.name === 'endpoint'){
      setEndpoint(event.target.value);
      setIsDisabled(!isDisabled)
    }
    if(event.target.name === 'language'){
      setLanguage(event.target.value);
    }
    if(event.target.name === 'sorting'){
      setSorting(event.target.value);
    }
    if(event.target.name === 'category'){
      setCategory(event.target.value);
    }
    if(event.target.name === 'country'){
      setCountry(event.target.value);
    }
  };

  const onSearchClick = async () => {
    if (search){
      const response = await FetchData(endpoint, search, language, sorting, category, country);
      setData(response)
    }
  }

  const searchResults = () => {
    if (data) {
      if (data.data.status === 'error'){
        return (
          <div>
            <Stack sx={{ width: '100%', marginTop:'50px' }} spacing={2}>
              <Alert severity="error">
                <AlertTitle>{`Error ${data.status}`}</AlertTitle>
                {data.data.message}
              </Alert>
            </Stack>
          </div>
        );
      }else {
        return <PostingNews data={data.data} />
      }
    }
  }

  return (
    <Container fixed>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{ width: 200 }}
          size = 'small'
          id="outlined"
          select
          label="Select"
          name='endpoint'
          value={endpoint}
          onChange={handleChange}
        >
          {endpoints.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          error={isError}
          fullWidth
          required
          id="outlined"
          label="Search"
          helperText={helperText}
          onChange={(e) => { setTimeout(() => { 
            setSearch(e.target.value);
          }, 500); }}
        />
          <TextField 
            disabled={!isDisabled}
            sx={{ width: 200 }}
            size = 'small'
            id="outlined"
            select
            name='language'
            label="Language"
            value={language}
            onChange={handleChange}
          >
            {languages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            disabled={!isDisabled}
            sx={{ width: 200 }}
            size = 'small'
            id="outlined"
            select
            name='sorting'
            label="Sort by"
            value={sorting}
            onChange={handleChange}
          >
            {sortBy.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        <TextField
          disabled={isDisabled}
          sx={{ width: 200 }}
          size = 'small'
          id="outlined"
          name='category'
          select
          label="Category"
          value={category}
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          disabled={isDisabled}
          sx={{ width: 200 }}
          size = 'small'
          id="outlined"
          name="country"
          select
          label="Country"
          value={country}
          onChange={handleChange}
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    <div style={{display:'flex', justifyContent:'center'}} >
      <Button sx={{  width:'200px'}} variant="contained" onClick={onSearchClick} >Search</Button>
    </div>
    
    {searchResults()}

    </Container>
  );
}

export default News;


// 70f3117458644a38ad406e7dd376becc
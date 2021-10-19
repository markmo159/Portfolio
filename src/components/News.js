import React, { useState, useEffect } from 'react';
import { endpoints, languages, sortBy, categories, countries } from './newsComponents/searchData'

import { Container, Box, TextField, MenuItem, Button  } from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

const News = () => {
  const [isError, setIsError] = useState(true)
  const [helperText, setHelperText] = useState('Nothing to search')
  const [search, setSearch] = useState('')
  const [endpoint, setEndpoint] = useState('everything');
  const [language, setLanguage] = useState('en');
  const [sorting, setSorting] = useState('publishedAt');
  const [fromDate, setFromDate] = useState('01-01-1900');
  const [toDate, setToDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('us');
  const [isDisabled, setIsDisabled] = useState(true);
  
  useEffect(() => {
    if (!search) {
      setIsError(true);
      setHelperText('Nothing to search')
    }else {
      setIsError(false);
      setHelperText('')
    }

  },[search])

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

  const onSearchClick = () => {
    if (search){
      console.log('good')
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
          }, 1000); }}
        />
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <Stack sx={{ width: 200, display: 'inline', }}>
              <DatePicker
                disabled={!isDisabled}
                disableFuture
                label="From"
                openTo="year"
                views={['year', 'month', 'day']}
                value={fromDate}
                onChange={(newValue) => {
                  setFromDate(newValue);
                }}
                renderInput={(params) => <TextField sx={{ width: 200 }}
                size = 'small' {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <Stack sx={{ width: 200, display: 'inline', }}>
              <DatePicker
                disabled={!isDisabled}
                disableFuture
                label="To"
                openTo="year"
                views={['year', 'month', 'day']}
                value={toDate}
                onChange={(newValue) => {
                  setToDate(newValue);
                }}
                renderInput={(params) => <TextField sx={{ width: 200 }}
                size = 'small' {...params} />}
              />
            </Stack>
          </LocalizationProvider>
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
        </div>
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
      <Button sx={{  width:'200px'}} variant="contained" onClick={onSearchClick}>Search</Button>
    </div>
    </Container>
  );
}

export default News;


// 70f3117458644a38ad406e7dd376becc
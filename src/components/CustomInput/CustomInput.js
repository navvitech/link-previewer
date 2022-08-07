import axios from 'axios';
import { IconButton, Grid, Paper, InputBase } from '@mui/material';
import { Clear, Search } from '@mui/icons-material';
import { useState } from 'react';
import bird from '../../assets/bird.json';
import Lottie from 'lottie-react';
import './CustomInput.css';

export default function CustomInput({ setLoading, setMeta }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  const resetState = () => {
    setSearchTerm('');
    setLoading(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 500);
    } else {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.linkpreview.net/?key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}`
        );
        setMeta(data);
        resetState();
      } catch (error) {
        console.log(error);
        const {
          response: { data },
        } = error;
        setMeta(data);
        resetState();
      }
    }
  };

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={11} sm={8} md={6}>
          <div
            style={{
              float: 'right',
            }}
          >
            <p className='p'>Paste a link to preview it</p>
            <Lottie
              className={error && 'bird-nod'}
              animationData={bird}
              loop={false}
              style={{
                width: 200,
                marginBottom: -30,
                float: 'right',
              }}
            />
          </div>
          <Paper
            component='form'
            elevation={4}
            sx={{
              p: '10px 15px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              borderRadius: '10px',
              background: '#1C1656',
              position: 'relative',
              marginBottom: '10px',
            }}
            onSubmit={submit}
          >
            <IconButton
              onClick={submit}
              sx={{ p: '10px', color: 'lightgray' }}
              aria-label='search'
            >
              <Search sx={{ fontSize: '30px' }} />
            </IconButton>
            <div style={{ flex: 1 }}>
              <InputBase
                sx={{
                  ml: 1,
                  width: '98%',
                  fontSize: '18px',
                  color: 'lightgray',
                }}
                placeholder='Paste a link and click enter to preview'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <IconButton
              onClick={() => setSearchTerm('')}
              sx={{ p: '10px' }}
              aria-label='search'
            >
              <Clear sx={{ fontSize: '30px', color: 'lightgray' }} />
            </IconButton>
            <button type='submit' style={{ display: 'none' }}></button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

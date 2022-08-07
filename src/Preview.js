import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Lottie from 'lottie-react';
import CustomInput from './components/CustomInput/CustomInput';
import CenteredTabs from './components/Tabs/Tabs';
import hello from './assets/hello.json';
import './App.css';

const Preview = () => {
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);
  const [first, setfirst] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setfirst(true);
    }, 200);
  }, []);
  return (
    <div
      style={{
        height: '100vh',
      }}
      className={`clip ${first && 'active'}`}
    >
      <Box sx={{ height: '94vh' }}>
        <Lottie style={{ height: '100%' }} animationData={hello} />
      </Box>
      <Box sx={{ my: 3 }}>
        <CustomInput setLoading={setLoading} setMeta={setMeta} />
      </Box>
      <Grid container justifyContent='center'>
        <Grid item xs={11} sm={8} md={5}>
          <CenteredTabs loading={loading} metaData={meta} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Preview;

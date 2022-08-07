import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WhatsApp from '../Cards/WhatsApp';
import Email from '../Cards/Email';
import Telegram from '../Cards/Telegram';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';
import NotFound from '../../assets/404.json';
import TabPanel from './TabPanel';

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'Capitalize',
    fontWeight: 600,
    fontSize: '2.2rem',
    color: '#167CE2',
    borderRadius: 7,
    padding: '10px 25px',
    minHeight: 30,
    margin: '4px',
    '&:hover': {
      background: '#D1E4F9',
    },
    '&.Mui-selected': {
      color: 'white',
      background: '#167CE2',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

export default function CustomizedTabs({ metaData, loading }) {
  const [value, setValue] = React.useState(0);
  console.log(Object.keys(metaData).includes('error'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons={false}
          allowScrollButtonsMobile
          TabIndicatorProps={{ style: { display: 'none', width: 0 } }}
          sx={{
            alignItems: 'center',
            background: '#E8F2FC',
            px: 0.7,
          }}
        >
          <StyledTab label='WhatsApp' />
          <StyledTab label='Telegram' />
          <StyledTab label='Gmail' />
        </Tabs>
      </Box>
      {loading ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            height: '200px',
          }}
        >
          <Lottie animationData={loadingAnimation} />
        </Box>
      ) : Object.keys(metaData).includes('error') ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            height: '400px',
          }}
        >
          <Lottie style={{ background: '#131345' }} animationData={NotFound} />
        </Box>
      ) : (
        <>
          <TabPanel value={value} index={0}>
            <WhatsApp metaData={metaData} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Telegram metaData={metaData} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Email metaData={metaData} />
          </TabPanel>
        </>
      )}
    </Box>
  );
}

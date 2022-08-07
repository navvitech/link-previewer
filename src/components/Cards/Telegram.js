import React from 'react';
import { Box, Divider, Link } from '@mui/material';
import Lottie from 'lottie-react';
import imageAnimation from '../../assets/image.json';
import MockPreview from './MockPreview';
import TelegramIcon from '@mui/icons-material/Telegram';
import './index.css';

const Telegram = (props) => {
  const { image, url, title, description } = props.metaData;
  if (!title) {
    return <MockPreview color='#5288c1' title='Telegram' Icon={TelegramIcon} />;
  }
  return (
    <Box
      sx={{
        background: '#5288c1',
        p: 0.5,
        borderRadius: '7px',
        maxHeight: '500px',
        fontSize: '13px',
        lineHeight: '16px',
        cursor: 'pointer',
        maxWidth: '98vw',
      }}
      component={Link}
      href={url}
    >
      <a style={{ color: 'yellow', fontWeight: 600 }} href={url}>
        {url}
      </a>
      <Box sx={{ display: 'flex', mb: 0.7 }}>
        <Divider
          sx={{
            height: 420,
            m: '0 5px',
            width: '2px',
            background: '#fff',
          }}
          orientation='vertical'
        />
        <Box>
          <Box sx={{ p: 0.5 }}>
            <p
              title={title}
              style={{ color: 'white', paddingBottom: '4px', fontWeight: 600 }}
            >
              {title}
            </p>
            <p
              title={description}
              style={{ color: 'white', paddingBottom: '4px' }}
            >
              {description?.slice(0, 50)}
            </p>
          </Box>
          <Box sx={{ borderRadius: '7px' }}>
            {image ? (
              <img
                src={image}
                alt={title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'contain',
                  paddingBottom: '4px',
                  borderRadius: 7,
                }}
              />
            ) : (
              <Lottie
                style={{ height: '300px', width: '100%' }}
                animationData={imageAnimation}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Telegram;

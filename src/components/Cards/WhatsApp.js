import React from 'react';
import { Box, Link } from '@mui/material';
import Lottie from 'lottie-react';
import imageAnimation from '../../assets/image.json';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './index.css';
import MockPreview from './MockPreview';

const WhatsApp = (props) => {
  const { image, url, title, description } = props.metaData;
  if (!title) {
    return <MockPreview color='#41CBA5' title='WhatsApp' Icon={WhatsAppIcon} />;
  }
  return (
    <Box
      sx={{
        background: '#015C4B',
        p: 0.5,
        borderRadius: '7px',
        fontSize: '13px',
        lineHeight: '16px',
        cursor: 'pointer',
        maxWidth: '98vw',
      }}
      component={Link}
      href={url}
    >
      <Box sx={{ background: '#025143', borderRadius: '7px' }}>
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
        <Box sx={{ p: 0.5 }}>
          <p title={title} style={{ color: '#E9EdEf', paddingBottom: '4px' }}>
            {title}
          </p>
          <p
            title={description}
            style={{ color: '#8696A0', paddingBottom: '4px' }}
          >
            {description?.slice(0, 50)}
          </p>
        </Box>
      </Box>
      <a style={{ color: '#53BDEB' }} href={url}>
        {url}
      </a>
    </Box>
  );
};

export default WhatsApp;

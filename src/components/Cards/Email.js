import React from 'react';
import Lottie from 'lottie-react';
import imageAnimation from '../../assets/image.json';
import gmail from '../../assets/Gmail.png';
import './index.css';

const Email = (props) => {
  const { image, url, title } = props.metaData;
  const youtube = url?.includes('youtu.be');
  if (!title) {
    return (
      <div style={{ color: '#EB4031', textAlign: 'center' }}>
        <img
          style={{
            width: 100,
            height: 100,
            marginBottom: 10,
            objectFit: 'contain',
          }}
          src={gmail}
          alt='gmail logo'
        />
        <p style={{ fontSize: '2.5rem' }}>Email preview</p>
      </div>
    );
  }
  return (
    <a href={url}>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          clipPath: 'polygon(0px 0px, 0px 100%, 88% 100%, 100% 70%, 100% 0px)',
          border: '1px solid lightgray',
        }}
        className='email'
      >
        {youtube && (
          <div className='email-backdrop'>
            <img
              style={{ width: '100px' }}
              alt='youtube logo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png'
            />
          </div>
        )}
        {image ? (
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '400px', objectFit: 'contain' }}
          />
        ) : (
          <Lottie
            style={{ height: '300px', width: '100p%' }}
            animationData={imageAnimation}
          />
        )}
        <footer
          className={`email-footer ${youtube ? 'email-foolter-hover' : ''}`}
        >
          <p style={{ color: 'white', fontWeight: 600, padding: '0 10px' }}>
            {title?.slice(0, 50)}
          </p>
        </footer>
      </div>
    </a>
  );
};

export default Email;

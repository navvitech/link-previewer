import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '12rem', marginBottom: 10 }}>Link previewer</h1>
        <p
          style={{ fontSize: '2.5rem', color: 'orangered', fontWeight: 'bold' }}
        >
          Get to know about a website before actually visiting it
        </p>
        <button
          style={{
            border: '4px solid green',
            color: 'red',
            width: '13rem',
            height: '13rem',
            borderRadius: '50%',
            background: 'transparent',
            fontWeight: 'bold',
            marginTop: 50,
            fontSize: '2rem',
          }}
          onClick={() => navigate('/preview')}
        >
          <span className='preview'>Preview</span>
        </button>
      </div>
    </div>
  );
}

export default App;

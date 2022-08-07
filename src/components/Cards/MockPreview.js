const MockPreview = ({ Icon, title, color }) => {
  return (
    <div style={{ color, textAlign: 'center' }}>
      <Icon sx={{ fontSize: 100 }} />
      <p style={{ fontSize: '2.5rem' }}>{title} preview</p>
    </div>
  );
};

export default MockPreview;

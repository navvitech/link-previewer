import { Box } from '@mui/material';

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 7, justifyContent: 'center', display: 'flex' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

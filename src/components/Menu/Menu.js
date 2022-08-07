import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Box, ClickAwayListener, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Menu.css';

export default function BasicMenu() {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
    setExpanded((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
    setExpanded(false);
  };

  const styles = {
    position: 'absolute',
    top: 68,
    zIndex: 1,
  };
  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: 'relative' }}>
          <Button
            disableRipple
            disableFocusRipple
            onClick={handleClick}
            sx={{ p: 2 }}
            endIcon={
              <ExpandMoreIcon
                className={expanded ? 'fade' : ''}
                sx={{
                  fontSize: '20px',
                  ml: 2,
                  '&.MuiSvgIcon-root': {
                    stroke: 'black',
                    strokeWidth: '1.5px',
                    fill: 'black',
                    fontSize: 23,
                    transition: '500ms',
                  },
                }}
              />
            }
          >
            Socials
          </Button>
          {open ? (
            <Box sx={styles}>
              <Paper elevation={4} sx={{ py: 1 }}>
                <MenuItem sx={{ px: 4, py: 1 }} value='Whatsapp'>
                  Whatsapp
                </MenuItem>
                <MenuItem sx={{ px: 4, py: 1 }} value='Instagram'>
                  Instagram
                </MenuItem>
                <MenuItem sx={{ px: 4, py: 1 }} value='eMail'>
                  eMail
                </MenuItem>
              </Paper>
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    </div>
  );
}

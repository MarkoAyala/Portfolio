import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-scroll';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem key={'inicio'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Navbar' smooth={true} >
              <ListItemText primary={'Inicio'} />
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem key={'Servicios'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Services' smooth={true} >
              <ListItemText primary={'Servicios'} />
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem key={'Experiencia'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Experience' smooth={true} >
              <ListItemText primary={'Experiencia'} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={'Portfolio'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Portfolio' smooth={true} >
              <ListItemText primary={'Portfolio'} />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem key={'Contact'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Contact' smooth={true} >
              <ListItemText primary={'Contactame'} />
              </Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
      <ListItem key={'Linkedin'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Contact' smooth={true} >
              <ListItemText primary={'Mi Linkedin'} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={'github'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Contact' smooth={true} >
              <ListItemText primary={'Mi GitHub'} />
              </Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={'left'}>
          <Button sx={{display:{sm:'flex',md:'none', lg:'none'},}} onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
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
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-scroll';
import WorkIcon from '@mui/icons-material/Work';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
      sx={{ width:250 , height:'100vh', justifyContent:'space-between'}}
      display='flex'
      flexDirection='column'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Navbar' smooth={true} >
          <ListItem key={'inicio'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={'Inicio'} />
            </ListItemButton>
          </ListItem>
              </Link>

              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Services' smooth={true} >
          <ListItem key={'Servicios'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon/>
              </ListItemIcon>
              <ListItemText primary={'Servicios'} />
            </ListItemButton>
          </ListItem>
              </Link>

              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Experience' smooth={true} >
          <ListItem key={'Experiencia'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkspacePremiumIcon/>
              </ListItemIcon>
              <ListItemText primary={'Experiencia'} />
            </ListItemButton>
          </ListItem>
              </Link>
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Portfolio' smooth={true} >
          <ListItem key={'Portfolio'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BeenhereIcon/>
              </ListItemIcon>
              <ListItemText primary={'Portfolio'} />
            </ListItemButton>
          </ListItem>
              </Link>
          <Divider />
              <Link onClick={toggleDrawer(anchor, false)} spy={true} to='Contact' smooth={true} >
          <ListItem key={'Contact'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactMailIcon/>
              </ListItemIcon>
              <ListItemText primary={'Contactame'} />
            </ListItemButton>
          </ListItem>
              </Link>
      </List>
      <List sx={{margin:'0 0 2rem 0'}}>
              <a href='https://www.linkedin.com/in/markoayaladev/' target='_blank' style={{textDecoration:'none' ,color:'rgb(0,0,0)'}}>
      <ListItem key={'Linkedin'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkedInIcon/>
              </ListItemIcon>
              <ListItemText primary={'Linkedin'} />
            </ListItemButton>
          </ListItem>
              </a>
              <a href='https://github.com/MarkoAyala' target='_blank' style={{textDecoration:'none' ,color:'rgb(0,0,0)'}}>
          <ListItem key={'github'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GitHubIcon/>
              </ListItemIcon>
              <ListItemText primary={'GitHub'} />
            </ListItemButton>
          </ListItem>
              </a>
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={'left'}>
          <Button sx={{display:{sm:'flex',md:'flex', lg:'none'},}} onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
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
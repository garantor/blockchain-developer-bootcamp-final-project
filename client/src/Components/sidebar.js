import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Home from "./Home";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom'
import { Settings, SubjectOutlined } from "@material-ui/icons";
import { makeStyles } from "@mui/styles";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from '@mui/material/Fade';
import { Transaction } from "@solana/web3.js";


const drawerWidth = 240;
const menuItem = [
  {
    text: "Transactions",
    icon: <SubjectOutlined />,
    link: "/transactions",
    menulist :[
     " Add Transaction",
     " View Transactions",
     "Create Transaction",
    ]
  },
  {
    text: "Signers",
    icon: <MailIcon />,
    link: "/signers",
  },
  {
    text: "Revoke",
    icon: <MailIcon />,
    link: "/revoke",
  },
  {
    text: "Settings",
    icon: <Settings />,
    link: "/settings",
  },

];

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export default function ClippedDrawer({ handleListBtn }) {
  const history = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            classes: { paper: { width: drawerWidth } },
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
              
              {menuItem.map((item) => (
            <List>

                <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
               { item.text}
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </List>
            
                
              ))}
              
              
              {/* {menuItem.map(
                (item) => (
                  console.log(item.text),
                  (
                    <ListItem
                      button
                      key={item.text}
                      onClick={() => history(item.link)}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  )
                )
              )} */}
            <Divider />
          </Box>
        </Drawer>
      </div>
      <Toolbar />
    </Box>
  );
}

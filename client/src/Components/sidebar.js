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

const drawerWidth = 240;
const menuItem = [
  {
    text: "Transactions",
    icon: <SubjectOutlined />,
    link: "/transactions",
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

export default function ClippedDrawer({ handleListBtn }) {
  const history = useNavigate();
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
          <List>
            <Button variant="contained">Contained</Button>
            {menuItem.map((item) => (
                console.log(item.text),
                (
                 
                    <ListItem button key={item.text} onClick={() => history(item.link)}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
               
                )
              )
            )}
          </List>
          <Divider />
        </Box>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
        <Toolbar />
        {/* <Home /> */}
      </Box>
    // </Box>
  );
}

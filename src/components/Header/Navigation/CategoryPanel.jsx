import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoCloseSharp } from "react-icons/io5";

const CategoryPanel = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
        <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
            Shop By Categories <IoCloseSharp className={"cursor-pointer text-[20px]"} onClick={toggleDrawer(false)}/>
        </h3>


      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>


    </Box>
  );
    
    return(
        <>
            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default CategoryPanel;
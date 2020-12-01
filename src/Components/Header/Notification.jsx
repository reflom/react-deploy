import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Card from 'react-bootstrap/Card';
import Notificationbell from './Notificationbell';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function Notification() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
        <div className={classes.root}>
           
            <div>
               
                    <IconButton 
                        component="span" 
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsNoneIcon fontSize='large' />
                        </Badge>
                    </IconButton>

                    <Popper 
                    open={open} 
                    anchorEl={anchorRef.current} 
                    role={undefined} 
                    transition 
                    disablePortal 
                    placement="bottom-end"
                    
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                                <Paper elevation={3} style={{width:"380px",zIndex:"1 !important",position:'absolute',right:'20px'}} >
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
                                        <MenuItem onClick={handleClose} style={{padding:'1px'}}>
                                               
                                                Notification 1

                                               
                                        </MenuItem>

                                            <MenuItem onClick={handleClose} style={{ padding: '1px' ,alignItems:'center'}}>
                                               notification  2
                                        
                                        </MenuItem>
                                            <MenuItem  className="text-center"  onClick={handleClose} >
                                                <Notificationbell/>
                                        </MenuItem>

                                            <MenuItem onClick={handleClose} style={{ padding: '20px'}}>
                                               

                                            </MenuItem>

                                            <MenuItem onClick={handleClose} style={{ padding: '20px'}}>
                                               

                                            </MenuItem>

                                        
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    </>
    );
}


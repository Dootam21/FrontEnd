import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import styles from './Home.module.css';
const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export default function HomePage() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={styles.contain}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}
                    sx={{
                        backgroundColor: 'white'
                    }}>
                    <Toolbar>
                        <IconButton
                            color="#222943"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            noWrap component="div"
                            color="#222943"
                            sx={{
                                position: 'absolute',
                                right: 30,
                            }}
                        >
                            <PopupState variant="popover" popupId="demo-popup-popover">
                                {(popupState) => (
                                    <div>
                                        <IconButton variant="contained" {...bindTrigger(popupState)}>
                                            <PersonIcon style={{ width:"35px", height:"35px" }}></PersonIcon>
                                        </IconButton>
                                        <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                        >
                                            <Typography sx={{ p: 1 }}>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <AccountCircleIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary='Thông tin tài khoản' />
                                                    </ListItemButton>
                                                </ListItem>
                                            </Typography>
                                            <Typography sx={{ p: 1 }}>
                                                <ListItem disablePadding>
                                                    <ListItemButton onClick={() => window.location.href = "/login"}>
                                                        <ListItemIcon>
                                                            <LogoutIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary='Đăng xuất' />
                                                    </ListItemButton>
                                                </ListItem>

                                            </Typography>
                                        </Popover>
                                    </div>
                                )}
                            </PopupState>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#222943',
                            color: 'white'
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider style={{ backgroundColor: 'white' }} />
                    <Stack
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            src="/broken-image.jpg"
                            sx={{
                                width: 110,
                                height: 110,
                                marginTop: 10,
                            }}
                        />
                        <h1>ADMIN</h1>
                        <List>
                            <IconButton>
                                <AccountCircleIcon className={styles.icon} />
                            </IconButton>
                            <IconButton onClick={() => window.location.href = "/login"}>
                                <LogoutIcon className={styles.icon} />
                            </IconButton>
                        </List>
                    </Stack>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon className={styles.icon} />
                                </ListItemIcon>
                                <ListItemText primary='Trang chủ' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CategoryIcon className={styles.icon} />
                                </ListItemIcon>
                                <ListItemText primary='Danh mục' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ManageAccountsIcon className={styles.icon} />
                                </ListItemIcon>
                                <ListItemText primary='Quản lý' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>

                <Main open={open}>
                    <DrawerHeader />
                </Main>

            </Box>
        </div >
    );
}
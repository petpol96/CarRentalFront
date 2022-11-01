import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import ApiIcon from "@mui/icons-material/Api";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Grid from "@mui/material/Grid";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ReservationsView from "./reservation/ReservationsView";
import TraitsView from "./traits/TraitsView";
import Test from "./reservation/Test";
import LanguageView from "./language/LanguageView";
import LanguageIcon from "@mui/icons-material/Language";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AdminPanelView from "./admin/AdminPanelView";
import VehicleView from "./vehicle/VehicleView";
import LocationsView from "./location/LocationsView";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogIn from "./LogIn";
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "#2E3B55",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentScreen, setcurrentScreen] = useState('Settings');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function sideBarHandler(text) {
    setcurrentScreen(text);
  }

  function redirect() {
    if (currentScreen === "Reservations") {
      return <ReservationsView />;
    } else if (currentScreen === "Vehicles") {
      return <VehicleView />;
    } else if (currentScreen === "Traits") {
      return <TraitsView />;
    } else if (currentScreen === "Language") {
      return <LanguageView />;
    } else if (currentScreen === "Admin Panel") {
      return <AdminPanelView />;
    } else if (currentScreen === "Locations") {
      return <LocationsView />;
    } else if (currentScreen === "Settings") {
      return <LocationsView />;
    }
  }

  return (
    <Box>
      {isLoggedIn ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <Grid
                container
                spacing={9}
                direction="row"
                z
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h6" noWrap component="div">
                    {currentScreen}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton>
                    <ExitToAppIcon
                      fontSize="large"
                      style={{ color: "white" }}
                      align="right"
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Typography variant="h5" align="center">
              Menu
            </Typography>
            <Divider />
            <List>
              <ListItem button onClick={() => sideBarHandler("Reservations")}>
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText primary="Reservations" />
              </ListItem>

              <ListItem button onClick={() => sideBarHandler("Vehicles")}>
                <ListItemIcon>
                  <DriveEtaIcon />
                </ListItemIcon>
                <ListItemText primary="Vehicles" />
              </ListItem>
              <ListItem button onClick={() => sideBarHandler("Traits")}>
                <ListItemIcon>
                  <ApiIcon />
                </ListItemIcon>
                <ListItemText primary="Traits" />
              </ListItem>
              <ListItem button onClick={() => sideBarHandler("Language")}>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Languages" />
              </ListItem>
              <ListItem button onClick={() => sideBarHandler("Locations")}>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Locations" />
              </ListItem>
              <ListItem button onClick={() => sideBarHandler("Admin Panel")}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Admin Panel" />
              </ListItem>
              <ListItem button onClick={() => sideBarHandler("Settings")}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            {redirect()}
          </Main>
        </Box>
      ) : (
        <LogIn logIn={setIsLoggedIn} />
      )}
    </Box>
  );
}

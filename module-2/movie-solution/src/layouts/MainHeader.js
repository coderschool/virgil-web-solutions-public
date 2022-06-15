import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MSearchBar from "../components/MSearchBar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ChairIcon from "@mui/icons-material/Chair";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StarIcon from "@mui/icons-material/Star";
import { useAuth } from "../contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";

export default function PrimarySearchAppBar() {
  let location = useLocation();
  let auth = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    console.log(location);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    handleMenuClose(); //menu close before signout so that login won't pop up.
    auth.signout();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {auth.user ? (
        <>
          <Button
            color="inherit"
            component={Link}
            to="/favorite"
            onClick={handleMenuClose}
          >
            {auth.user}
          </Button>
          <Button color="inherit" onClick={() => handleLogout()}>
            Logout
          </Button>
        </>
      ) : (
        <Button
          color="inherit"
          component={Link}
          to="/form"
          state={{ backgroundLocation: location, from: location }}
          onClick={handleMenuClose}
        >
          Login
        </Button>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/discovery/1">
        <IconButton
          size="large"
          color="inherit"
          disableRipple={true}
          children={<YouTubeIcon />}
        />
        <p>Discovery</p>
      </MenuItem>

      <MenuItem component={Link} to="/favorite">
        <IconButton
          size="large"
          color="inherit"
          disableRipple={true}
          children={<StarIcon />}
        />

        <p>Favorite</p>
      </MenuItem>
      <MenuItem component={Link} to="/form">
        <IconButton
          size="large"
          //cool styling ui props
          aria-label="account of current user"
          aria-controls={menuId}
          disableRipple={true}
          aria-haspopup="true"
          color="inherit"
          children={<AccountCircle />}
        />

        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            component={Link}
            to="/"
            children={<ChairIcon />}
          />
          <MSearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <IconButton
              component={Link}
              to="/favorite"
              size="large"
              color="inherit"
              children={<StarIcon />}
            />
            <IconButton
              component={Link}
              to="/discovery/1"
              size="large"
              color="inherit"
              children={<YouTubeIcon />}
            />
            <IconButton
              size="large"
              //cool styling ui props
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              children={<AccountCircle />}
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

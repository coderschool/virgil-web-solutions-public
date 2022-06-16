import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React from 'react';

const CUSTOM = {
	main: '#919191',
	red: '#E3350D',
	orange: '#ee6b2f',
	yellow: '#e6bc2f',
	green: '#4dad5b',
	lightBlue: '#30a7d7',
	blue: '#1b53ba',
};
export const TYPE = {
	bug: '#729f3f',
	bugText: '#fff',
	dragon: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)',
	dragonText: '#fff',
	fairy: 'linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%)',
	fairyText: '#000',
	fire: '#fd7d24',
	fireText: '#fff',
	ghost: '#7b62a3',
	ghostText: '#fff',
	ground: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
	groundText: '#212121',
	normal: '#a4acaf',
	normalText: '#212121',
	psychic: '#f366b9',
	psychicText: '#fff',
	steel: '#9eb7b8',
	steelText: '#212121',
	dark: '#707070',
	darkText: '#fff',
	electric: '#eed535',
	elelectricText: '#212121',
	fighting: '#d56723',
	fightingText: '#fff',
	flyingText: '#212121',
	flying: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
	grass: '#9bcc50',
	grassText: '#212121',
	ice: '#51c4e7',
	iceText: '#212121',
	poison: '#b97fc9',
	poisonText: '#fff',
	rock: '#a38c21',
	rockText: '#fff',
	water: '#4592c4',
	waterText: '#fff',
};

const theme = createTheme({
	palette: {
		custom: CUSTOM,
		type: TYPE,
	},
});

export const MThemeProvider = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

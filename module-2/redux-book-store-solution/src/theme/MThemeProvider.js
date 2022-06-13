import { CssBaseline } from "@mui/material";
import {
    createTheme,
    ThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
    lighter: "#0b8c12",
    light: "#0a8211",
    main: "#08660D",
    dark: "#064a09",
    darker: "#042d06",
    contrastText: "#FFF",
};
const SECONDARY = {
    lighter: "#FFD07F",
    light: "#FDA65D",
    main: "#FF8243",
    dark: "#E26A2C",
    darker: "#cc571f",
    contrastText: "#FFF",
};


function MThemeProvider({ children }) {
    const themeOptions = {
        palette: {
            primary: PRIMARY,
            secondary: SECONDARY,
        }
    };

    const theme = createTheme(themeOptions);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default MThemeProvider;
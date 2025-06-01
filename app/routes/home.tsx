import Container from "@mui/material/Container";
import { Box, createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import '@fontsource/petit-formal-script';
import '@fontsource-variable/cormorant-garamond';
import "./app.css";
import { HomePage } from "../homepage/homepage.tsx";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#304a8a',
    }
  },
  typography: {
    fontFamily: 'Cormorant Garamond Variable',
    fontSize: 18,
    allVariants: {
      color: '#304a8a'
    },
    fontWeightRegular: 500
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: ({theme}) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: '12pt'
          }
        }),
        body2: ({theme}) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: '10pt'
          }
        }),
        h2: ({theme}) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: '20pt'
          }
        }),
        h4: ({theme}) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: '16pt'
          }
        }),
        h5: ({theme}) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: '14pt'
          }
        }),
        h6: ({theme}) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: '12pt'
          }
        })
      }
    } // TODO override custom styled component styles
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)


function Home() {
  return <ThemeProvider theme={theme}>
    <Container maxWidth={false} disableGutters>
      <Header />
      <HomePage />
    </Container>
  </ThemeProvider>;
}

function Header() {
  return <Box >
    <Container maxWidth={false} sx={(theme) => ({ 
      p: 5,
      [theme.breakpoints.down("lg")]: {
        p: 2
      }
    })
  }>
      <Typography fontFamily={'Petit Formal Script'} variant="h5" align="center">The wedding of</Typography>
      <Grid container alignItems="center" justifyContent={"center"} letterSpacing={2} spacing={2} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" align="center">
          Ben
          <Typography fontFamily={'Petit Formal Script'} variant="h6" sx={{ display: 'inline' }}> and </Typography>
          Emma
        </Typography>
      </Grid>
      <Typography fontWeight={"bold"} variant="h6" align="center">Saturday 30th May 2026</Typography>
      <Typography variant="h6" align="center">Dorothy Clive Garden, TF9 4EU</Typography>
    </Container>
  </Box>
}
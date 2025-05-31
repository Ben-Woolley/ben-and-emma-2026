import type { Route } from "./+types/home";
import { HomePage } from "../homepage/homepage";
import Container from "@mui/material/Container";
import { Box, createTheme, Grid, ThemeProvider, Typography } from "@mui/material";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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
  }
})

export default function Home() {
  return <ThemeProvider theme={theme}>
    <Container maxWidth={false} disableGutters>
      <Header />
      <HomePage />
    </Container>
  </ThemeProvider>;
}

function Header() {
  return <Box >
    <Container maxWidth={false} sx={{ p: 5 }}>
      <Typography fontFamily={'Petit Formal Script'} variant="h4" align="center">The wedding of</Typography>
      <Grid container alignItems="center" justifyContent={"center"} letterSpacing={2} spacing={2}>
        <Typography variant="h1" align="center">Ben</Typography>
        <Typography fontFamily={'Petit Formal Script'} variant="h5"> and </Typography>
        <Typography letterSpacing={2} variant="h1" align="center">Emma</Typography>
      </Grid>
      <Typography fontWeight={"bold"} variant="h5" align="center">Saturday 30th May 2026</Typography>
      <Typography variant="h5" align="center">Dorothy Clive Garden, TF9 4EU</Typography>
    </Container>
  </Box>
}
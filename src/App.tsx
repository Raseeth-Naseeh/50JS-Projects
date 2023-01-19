import './App.css'
import * as Router from 'react-router-dom'
import * as Routes from 'src/routes'
import * as Mui from '@mui/material'

const theme = Mui.createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        // color: 'white',
        fontFamily: 'Fira Sans sans-serif',
      },
    },
  },
})

export const Main = () => (
  <Router.BrowserRouter>
    <Mui.ThemeProvider theme={theme}>
      <Routes.Main />
    </Mui.ThemeProvider>
  </Router.BrowserRouter>
)

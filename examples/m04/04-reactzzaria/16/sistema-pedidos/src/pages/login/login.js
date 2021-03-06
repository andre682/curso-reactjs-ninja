import React from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

const Login = () => (
  <Container>
    <Grid container justify='center' spacing={40}>
      <Grid item>
        <Logo />
      </Grid>

      <Grid item xs={12}>
        <GitHubButton variant='contained' fullWidth>
          Entrar com GitHub
        </GitHubButton>
      </Grid>
    </Grid>
  </Container>
)

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button)`
  && {
    font-size: 20px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login

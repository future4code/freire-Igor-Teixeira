import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import {Container} from './Styled'

export const Loader = () => {
  return(
    <Container>
      <CircularProgress color="primary" />
    </Container>
  )
}


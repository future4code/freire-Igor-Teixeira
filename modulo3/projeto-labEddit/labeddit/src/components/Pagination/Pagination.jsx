import  React, {useContext} from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {GlobalStateContext} from '../../Global/GlobalStateContext'
import {Container} from './Styled'

export const PaginationControlled = () => {
 
  const {page,setPage} = useContext(GlobalStateContext)
  const handleChange = (event, value) => {
    setPage(value);
  };

 
  return (
   <Container>
        <Pagination color="primary" count={10} page={page} onChange={handleChange} />  
   </Container>

  );
}
import * as React from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { increment } from '../store';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Hello GitHub Pages
      </Typography>
      <Typography variant="h6" gutterBottom>
        Count: {count}
      </Typography>
      <Button variant="contained" onClick={handleIncrement}>
        Increment
      </Button>
    </Box>
  );
}

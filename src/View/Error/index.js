import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';

export default function Error() {
    const error = useSelector(state=>state.error.main);
  return (
    <div className = 'error-main'>{error && error}</div>
  )
}

import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import './Filter.css';

const Filter = ({ onTitleChange, onManufacturerChange }) => {
  const [title, setTitle] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const manufacturers = useSelector(state => Object.values(state.manufacturers));

  const handleTitleChange = useCallback((event) => {
    const { value } = event.target;
    setTitle(value.toLowerCase());
    onTitleChange(value.toLowerCase());
  }, [setTitle, onTitleChange])

  const handleManufacturerChange = useCallback((event) => {
    const value = +event.target.value || '';
    setManufacturer(value);
    onManufacturerChange(value);
  }, [setManufacturer, onManufacturerChange])

  return (
    <div className="Filter">
      <input
        className="Filter-Title"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <select value={manufacturer} onChange={handleManufacturerChange}>
        <option value={''}>Filter by manufacturer</option>
        {manufacturers.map(({ id, name }) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
    </div>
  )
}

export default Filter;

import React from 'react';
import Button, { buttonStyles } from '../Button/Button';

import './RemoveContainer.css';

const RemoveContainer = ({ onRemove, onCancel }) => (
  <div className="RemoveContainer">
    <h3 className="RemoveContainer-Title">Are you sure?</h3>
    <div className="RemoveContainer-Actions">
      <Button style={buttonStyles.RED} onClick={onRemove}>Yes</Button>
      <Button onClick={onCancel}>No</Button>
    </div>
  </div>
)

export default RemoveContainer;

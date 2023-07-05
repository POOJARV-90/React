import React, { useState } from 'react';
const DynamicStyle = () => {
  const [backgroundColor, setBackgroundColor] = useState('lavender');
  const handleButtonClick = () => {
    setBackgroundColor('pink');
  };
  const styles = {
    backgroundColor,
    color: 'white',
    padding: '20px',
    borderRadius: '5px',
    cursor: 'pointer'

  };
  return (

    <div style={styles} onClick={handleButtonClick}>
      Click me to change color!
    </div>

  );
};
export default DynamicStyle;

import React, { useState } from 'react';
import BodyMass from './BodyMass'

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const handleCalculate = (calculatedBMI) => {
    setBMI(calculatedBMI);
  };

  return (
    <div>
      <BodyMass
        weight={weight}
        height={height}
        onCalculate={handleCalculate}
      />
      {bmi && (
        <div>
          <h3>BMI: {bmi.toFixed(2)}</h3>
          {/* Add status calculation here if needed */}
        </div>
      )}
    </div>
  );
};

export default App;

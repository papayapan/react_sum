// export const Sum = () => ();
// export const Sum = () => ();

import React from 'react';

export const Sum = ({ a, b }) => {
  const copyA = a !== undefined ? a : 0;
  const copyB = b !== undefined ? b : 0;
  const result = copyA + copyB;

  return (
    <p>
      Sum of {copyA} and {copyB} is {result}
    </p>
  );
};

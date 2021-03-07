import { useState } from 'react';

export default function useForm(inital = {}) {
  const [inputs, setInputs] = useState(inital);

  const handleChange = (e) => {
    let { value, name, type } = e.target;

    // Overide HTML form forcing value return to be of type string
    if (type === 'file') [value] = e.target.files;
    if (type === 'number') value = parseInt(value);

    // Key is the name of the target and value is the value
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputs(inital);
  };

  const clearForm = () => {
    // Nifty one liner that makes a obj an array, clears the values and then turns the array
    // back into a object where each key's value is null
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankState);
  };

  return { inputs, handleChange, resetForm, clearForm };
}

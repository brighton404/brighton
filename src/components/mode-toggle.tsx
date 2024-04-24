import React, { useEffect, useState } from 'react';
import { useTheme } from "./theme-provider"

const VariantSwitcher: React.FC = () => {
  const { setTheme } = useTheme()
  const [isChecked, setIsChecked] = useState<boolean>(() => {
    const storedValue = localStorage.getItem('isChecked');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
  }, [isChecked]);
  
  const handleChange = () => {
    setIsChecked(prevState => !prevState);
    if (!isChecked) {
      handleChecked();
    } else {
      handleUnchecked();
    }
  };

  const handleChecked = () => {
    console.log('Checkbox is checked.');
      setTheme("dark")
  };

  const handleUnchecked = () => {
    console.log('Checkbox is unchecked.');
    setTheme("light")
  };

  return (
    <div className="flex items-center gap-2">
      {isChecked ? (
        <label htmlFor="IChangeTheme:)" className='sr-only'>Dark Mode</label>
      ) : (
        <label htmlFor="IChangeTheme:)" className='sr-only'>Light Mode</label>
      )}
      <input id="IChangeTheme:)" type="checkbox" checked={isChecked}   onChange={handleChange} />
    </div>
  );
};

export default VariantSwitcher;

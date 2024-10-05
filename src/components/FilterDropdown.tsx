// FilterDropdown.tsx
import React from 'react';

interface FilterDropdownProps {
  states: any[];
  onChange: (state: any) => void;
  placeholder?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ states, onChange, placeholder }) => {
  return (
    <select onChange={(e) => onChange(states[e.target.selectedIndex])}>
      <option disabled selected>{placeholder}</option>
      {states.map((state) => (
        <option key={state.name} value={state.name}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;

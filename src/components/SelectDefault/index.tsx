import React from 'react';
import Select from 'react-select';
import { Container } from './styles';

interface SelectProps {
  placeholder: string;
  options: any[];
  label?: string;
  isMulti?: boolean;
  isLoading?: boolean;
  noOptionsMessage?:
    | ((arg: { inputValue: string }) => string | null)
    | undefined;
  onChange?: (event: any) => any;
  id: string;
  name?: string;
  error?: boolean
  value?: any
 
}

const SelectDefault: React.FC<SelectProps> = ({
  placeholder,
  isMulti = false,
  noOptionsMessage = () => 'Nada encontrado',
  options,
  onChange,
  error = false,
  isLoading,
  label,
  id,
  name,
  value
}) => {
  return (
    <Container error={error}>
      <span>{label}</span>
      <Select
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isLoading={isLoading}
        className="select-component-container"
        classNamePrefix="select-component"
        noOptionsMessage={noOptionsMessage}
        onChange={onChange}
        components={{
          IndicatorSeparator: () => null,
        }}
        
        // components={{ Control: ControlComponent }}
        // defaultValue={colourOptions[0]}
        isSearchable
      />
    </Container>
  );
};

export default SelectDefault;

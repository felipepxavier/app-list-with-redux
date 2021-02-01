import React, {
  useState,
  InputHTMLAttributes,
  useCallback,
  useRef,
  memo,
} from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: boolean;
  isPassword?: boolean;
  id?: string;
  defaultValue?: any;
  label?: string;
  type?: string;
  className?: string;
  eventEnter?: boolean;
  eventEnterCallback?(event: any): Promise<void> | void;
}

const Input: React.FC<InputProps> = ({
  error,
  label,
  name,
  className = 'defaultInput',
  type = 'text',
  isPassword,
  eventEnterCallback,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [typeOfInput, setTypeOfInput] = useState('password');

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      eventEnterCallback && eventEnterCallback(event);
    }
  };

  const handleToggleViewPassword = () => {
    if (typeOfInput === 'password') {
      setTypeOfInput('text');
    } else {
      setTypeOfInput('password');
    }
  };

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <Container
        isFilled={isFilled}
        isFocused={isFocused}
        isError={error || false}
      >
       
        <input
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          type={isPassword ? typeOfInput : type}
          ref={inputRef}
          onKeyPress={eventEnterCallback ? handleEnter : undefined}
         
        />

        {isPassword && typeOfInput === 'password' && (
          <RiEyeOffLine
            onClick={handleToggleViewPassword}
            className="password"
            size={20}
          />
        )}
        {isPassword && typeOfInput === 'text' && (
          <RiEyeLine
            onClick={handleToggleViewPassword}
            className="password"
            size={20}
          />
        )}
      </Container>
    </div>
  );
};
export default memo(Input);

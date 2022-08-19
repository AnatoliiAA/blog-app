import { InputField, InputWrapper, Label } from './Input.css';

type InputType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  type?: string;
  labelText?: string;
  additionalText?: string;
  placeholder?: string;
  testId?: string;
};

const Input = ({
  id,
  name,
  type,
  labelText,
  placeholder,
  testId,
  value,
  onChange,
}: InputType): JSX.Element => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <InputField
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        data-testid={testId}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;

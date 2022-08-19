import { TextAreaField, InputWrapper, Label } from './TextArea.css';

type TextAreaType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  name?: string;
  labelText?: string;
  placeholder?: string;
  testId?: string;
};

const TextArea = ({
  id,
  name,
  labelText,
  placeholder,
  testId,
  value,
  onChange,
}: TextAreaType): JSX.Element => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <TextAreaField
        id={id}
        name={name}
        placeholder={placeholder}
        data-testid={testId}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default TextArea;

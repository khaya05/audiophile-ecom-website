function FormInput({
  label,
  name,
  type,
  required,
  placeholder,
  onChange,
  value,
  errorMessage,
  pattern
}) {
  return (
    <fieldset>
      <div className="field-container">
        <label htmlFor={name}>{label}</label>
        {/* <span>{errorMessage}</span> */}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e)}
        value={value}
        pattern={pattern}
      />
    </fieldset>
  );
}

export default FormInput;

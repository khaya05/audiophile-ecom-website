function FormInput({
  label,
  name,
  type,
  required,
  placeholder,
  onChange,
  value,
  errorMessage,
}) {
  return (
    <div>
      <div className="field-container">
        <label htmlFor={name}>{label}</label>
        <span>{errorMessage}</span>
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e)}
        value={value}
      />
    </div>
  );
}

export default FormInput;

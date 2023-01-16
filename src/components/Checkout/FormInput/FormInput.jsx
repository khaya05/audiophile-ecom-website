function FormInput({
  label,
  name,
  type,
  required,
  placeholder,
  onChange,
  value,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
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

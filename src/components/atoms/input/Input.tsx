const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  labelFor: string;
  name: string;
  type: string;
  isRequired?: boolean;
  placeholder: string;
  customClass?: string;
}

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass = "",
}: InputProps) {
  return (
    <div className="mb-5">
      <label htmlFor={labelFor} className="not-sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}

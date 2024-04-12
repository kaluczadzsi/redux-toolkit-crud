import { InputField as InputFieldProps } from '../../types/inputfield';

const InputField = ({ label, id }: InputFieldProps) => (
  <div className="flex flex-col">
    <label className="text-[#404756] mb-2 font-semibold" htmlFor={id}>
      {label}
    </label>
    <input
      className="bg-slate-100 p-2 rounded outline-none"
      type="text"
      id={id}
    />
  </div>
);

export default InputField;

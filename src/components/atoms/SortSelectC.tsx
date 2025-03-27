import { FC } from "react";

type SortSelectCProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

const SortSelectC: FC<SortSelectCProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="w-full">
      <label className="text-neutral-300 block text-sm font-extrabold mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2.5 rounded-lg bg-[#0a192f] border border-[#8892B0] text-neutral-300 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#0a192f]">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelectC;

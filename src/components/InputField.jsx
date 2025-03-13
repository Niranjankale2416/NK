import React, { useState, useMemo } from "react";

const InputField = ({
  field,
  label,
  icon: Icon,
  formData,
  handleChange,
  bgColor = "bg-gray-800",
  focusColor = "focus:ring-[#ff6b6b]",
  textColor = "text-white",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Generate dynamic input classes
  const inputClasses = useMemo(() => {
    return `
      w-full p-4 rounded-xl ${bgColor} ${textColor} placeholder-transparent 
      focus:outline-none ${focusColor} focus:ring-2 focus:ring-offset-2 
      focus:ring-offset-gray-900 transition-all duration-300 peer
      ${isFocused ? "shadow-lg border-[#ff6b6b]" : "border-gray-600 hover:border-[#ff6b6b]"}
    `;
  }, [isFocused, bgColor, textColor, focusColor]);

  return (
    <div className="relative w-full group">
      {/* Icon and Label */}
      <div className="absolute left-4 top-4 flex items-center space-x-2 text-gray-400 transition-colors group-hover:text-[#ff6b6b]">
        <Icon className="w-5 h-5" aria-hidden="true" />
        <label
          htmlFor={field}
          className={`absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm transition-all duration-300
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0
            peer-focus:text-[#ff6b6b] peer-focus:text-sm`}
        >
          {label}
        </label>
      </div>

      {/* Input or Textarea */}
      {field === "message" ? (
        <textarea
          id={field}
          name={field}
          placeholder={label}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${inputClasses} h-52 pt-12`}
          required
          aria-label={label}
        />
      ) : (
        <input
          id={field}
          type={field === "email" ? "email" : "text"}
          name={field}
          placeholder={label}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${inputClasses} pl-12`}
          required
          aria-label={label}
        />
      )}
    </div>
  );
};

export default InputField;

"use client";

import { generateErrorMessage } from "@/app/utility/generateErrorMessage";
import { validateInput } from "@/app/utility/validateInput";
import { InputBlackBorderProps } from "@/types/app/website/types";
import { useState } from "react";

function InputBlackBorder({
  className,
  type = "text",
  name,
  required = false,
}: InputBlackBorderProps) {
  const [inpOk, setInpOk] = useState<boolean>(false);
  const [inpValue, setInpValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpValue(e.target.value);
  };
  const onBlurInput = (value: string, type: string) => {
    setMessage("");
    const isValid = validateInput(value, type);
    if (isValid) {
      setInpOk(true);
      setMessage("✔");
    } else {
      setInpOk(false);
      setMessage(generateErrorMessage(type));
    }
  };

  return (
    <>
      <input
        className={`w-full border-2 mt-4 p-2  border-ghost-600 bg-ghost-100 shadow-xl outline-none ${className}`}
        type="text"
        name={name}
        onChange={onInputChange}
        onBlur={(e) => {
          onBlurInput(e.target.value, type);
        }}
        value={inpValue}
        required={required}
      />
      <div
        style={{ color: inpOk ? "#94D82D" : "#F4495C" }}
        className="w-full h-7 text-xs py-1"
      >
        {message}
      </div>
    </>
  );
}

export default InputBlackBorder;

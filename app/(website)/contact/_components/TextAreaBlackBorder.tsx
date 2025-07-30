"use client";

import { generateErrorMessage } from "utility/validation/generateErrorMessage";
import { validateInput } from "utility/validation/validateInput";
import { TextAreaBlackBorderProps } from "@/types/app/website/types";
import { useState } from "react";

function TextAreaBlackBorder({
  row = 10,
  name,
  className,
  type = "textarea",
}: TextAreaBlackBorderProps) {
  const [inpOk, setInpOk] = useState<boolean>(false);
  const [inpValue, setInpValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea
        className={`w-full border-2 mt-4 p-2  border-ghost-600 bg-ghost-100 shadow-xl outline-none ${className} `}
        name={name}
        onChange={onInputChange}
        onBlur={(e) => {
          onBlurInput(e.target.value, type);
        }}
        value={inpValue}
        rows={row}
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

export default TextAreaBlackBorder;

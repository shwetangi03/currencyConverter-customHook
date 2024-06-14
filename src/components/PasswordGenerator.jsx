import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [allowedNumber, setAllowedNumber] = useState(false);
  const [allowedChar, setAllowedChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowedNumber) str += "0123456789";
    if (allowedChar) str += "~!@#$%^&*(){}[]?/|";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowedNumber, allowedChar, setPassword]);

  const copyToClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowedNumber, allowedChar, passwordGenerator]);

  return (
    <div>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-10 my-8 text-orange-500 bg-gray-800 p-10">
        <h1 className=" text-white text-center my-1 p-2">Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            ref={passwordRef}
            className="outline-none w-full py-1 px-3"
            readOnly
          />
          <button
            onClick={copyToClip}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className=" flex text-sm gap-x-8">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowedNumber}
              id="numberInput"
              onChange={() => {
                setAllowedNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowedChar}
              id="charInput"
              onChange={() => {
                setAllowedChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;

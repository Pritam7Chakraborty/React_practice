import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setLength] = useState(4);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charactersallowed, setCharactersallowed] = useState(false);
  const [password, setPassword] = useState("");
  //useref hook
  const passwordRef= useRef(null);
  //usecallback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charactersallowed) str += "!@#$%^&*()__+=~`[]{}";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, charactersallowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window .navigator.clipboard.writeText(password);

  },[password]);
  
  //useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, charactersallowed, numberallowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
            
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-green-600 hover:text-black" onClick={copyPasswordToClipBoard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={12}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setNumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charactersallowed}
              id="CharacterInput"
              onChange={() => {
                setCharactersallowed((prev) => !prev);
              }}
            />
            <label htmlFor="CharacterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

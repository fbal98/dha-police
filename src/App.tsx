import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div className="flex h-[calc(100dvh)] flex-col items-center">
      {/* make the background transparent */}
      <div className="flex flex-col justify-around items-center h-[70vh] w-full">
        <h1 className="text-2xl font-bold mb-4 text-[#833650]">شرطة الضاد</h1>
        <img className="drop-shadow-xl w-3/5" src="./image.png" />
      </div>
      <div className="w-full h-[30vh] flex flex-col item-center text-center px-10 gap-1">
        <h4 className="mt-5 text-gray-500">
          الي ارسل لك حاب يقول لك تعلم الفرق بين الضاد والظاد{" "}
        </h4>
        <h2 className="text-xl font-semibold mb-3">
          غلطكم هو "أنتظركم" بالظاء.
        </h2>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder="أدخل الكلمة هنا"
          className="mb-4"
        />
        <Button
          onClick={handleClick}
          className="text-white px-4 py-2 rounded-xl w-full bg-[#833650] shadow-sm"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
"use client";
import Image from "next/image";
import CalcButton from "./components/CalcButton";
import { Container } from "postcss";
import CalcOperations from "./components/CalcOperations";

function handleNumber() {}
export default function Home() {
  return (
    <main className="flex justify-center content-center">
      <div className="w-16 md:w-32 lg:w-2/5 bg-indigo-500 p-4">
        <div className="display py-2 px-4">
          <p className="text-white">0</p>
        </div>
        <div className="flex flex-row">
          <CalcButton number={7} onClick={handleNumber} />
          <CalcButton number={8} onClick={handleNumber} />
          <CalcButton number={9} onClick={handleNumber} />
          <CalcOperations operation={"+"} />
        </div>

        <div className="flex flex-row">
          <CalcButton number={4} onClick={handleNumber} />
          <CalcButton number={5} onClick={handleNumber} />
          <CalcButton number={6} onClick={handleNumber} />
          <CalcOperations operation={"-"} />
        </div>
        <div className="flex flex-row">
          <CalcButton number={1} onClick={handleNumber} />
          <CalcButton number={2} onClick={handleNumber} />
          <CalcButton number={3} onClick={handleNumber} />
          <CalcOperations operation={"x"} />
        </div>
        <div className="flex flex-row">
          <CalcButton number={0} onClick={handleNumber} />
          <CalcOperations operation={"."} />
          <CalcOperations operation={"="} />
          <CalcOperations operation={"/"} />
        </div>
      </div>
    </main>
  );
}

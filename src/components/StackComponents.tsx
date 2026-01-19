import php from "../assets/stack/php.png";
import javascript from "../assets/stack/js.png";
import ts from "../assets/stack/ts.png";
import jquery from "../assets/stack/jquery.png";
import next from "../assets/stack/next.png";
import ci from "../assets/stack/ci.png";
import laravel from "../assets/stack/laravel.png";
import express from "../assets/stack/express.png";
import react from "../assets/stack/react.png";
import mysql from "../assets/stack/mysql.png";

const StackComponents = () => {
  return (
    <div id="skills" className="my-5 max-w-2xl mx-auto ">
      <h1 className="text-2xl font-semibold text-center">Stack What I Use</h1>
      <div className="grid mt-10 gap-2 grid-cols-3 justify-items-center md:grid-cols-5">
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={php} width={"80px"} />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={javascript} width={"50px"} />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={ts} width={"50px"} />
          <div className="w-1.5 h-1.5 bg-green-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={jquery} width={"50px"} />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={next} width={"50px"} />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={ci} width={"50px"} />
          <div className="w-1.5 h-1.5 bg-red-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={laravel} width={"50px"} />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={react} width={"50px"} />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={express} width={"80px"} />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded absolute bottom-1"></div>
        </div>
        <div className="relative h-24 w-full flex justify-center items-center border-2 hover:bg-blue-100 hover:scale-95 transition-all duration-200 rounded-xl border-blue-100">
          <img src={mysql} width={"50px"} />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded absolute bottom-1"></div>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div> Beginner
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div> Advanced
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div> Intermediete
        </div>
      </div>
    </div>
  );
};

export default StackComponents;

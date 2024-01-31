
import React from "react";

const Index = () => {

  return (
    <div>
      <h1 className="p-10 bg-white text-green-400">Rollins</h1>

      <div className="relative bg-red-400 w-full flex flex-col space-y-5 ">
        <div className="fixed  left-20 bg-yellow-400 flex z-50">
          <a href="#demo"> Demo </a>
          <a href="#demo1"> Demo 1</a>
          <a href="#demo2"> Demo 2</a>
        </div>

        <div>
          <section className="h-screen bg-green-400 " id="demo">
            Demo
          </section>

          <section className="h-screen bg-indigo-400 " id="demo1">
            demo1
          </section>

          <section className="h-screen bg-purple-400 " id="demo2">
            demo2
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;

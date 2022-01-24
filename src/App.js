function App() {
  return (
    <div className="h-screen">
      <div className="h-5/6 bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">
        <div className="text-5xl font-bold text-yellow-400 text-center border-dotted border-2 rounded-3x1 border-yellow-500  ">
          Main Website Content
        </div>
      </div>
      <div className="h-1/6 bg-sky-800 flex justify-center items-center mx-auto">
        <div className="w-1/2 bg-slate-300/40 rounded-br-lg rounded-tl-lg flex-wrap flex ">
          {/* Random profile image circler with gradient border */}
          <div className=" w-1/4 ">
            <img
              className="p-1 w-40 md:w-40 lg:w-40 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500"
              src="https://raw.githubusercontent.com/wodsuz/port-ongun/master/public/images/Propic/ongun1.jpg"
              alt="The developer Ongun Demirag's photo"
              layout="responsive"
              quality="100"
            ></img>
          </div>
          <div className="bg-red-400 w-1/4"> 2</div>
          <div className="bg-red-500 w-1/4"> 3</div>
          <div className="bg-red-600 w-1/4"> 4</div>

          {/*  <div className="text-2xl text-center "> Ongun Demirag </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;

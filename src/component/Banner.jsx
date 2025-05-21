export default function Banner() {
  return (
    <div className="relative">
      <img src="public/background-image.png" alt="" className="" />
      <div className="absolute top-60 right-50 flex justify-between text-center flex-col gap-4">
        {/* <p className="text-2xl before:absolute before:coontent-[''] before:w-[50px] before:h-[2px] before:bg-slate-900 before:top-[18px] before:left-[5rem] after:absolute after:w-[50px] after:h-[2px] after:bg-slate-900 after:top-[6x] after:right-[4rem]"> Stylish </p> */}
       
      <div className="flex items-center gap-4 justify-center">
        <span className="inline-block w-[50px] h-[2px] bg-slate-900"></span>
        <h3 className="font-semibold text-2xl">Stylish</h3>
        <span className="inline-block w-[50px] h-[2px] bg-slate-900"></span>
      </div>
        <h1 className=" font-semibold text-8xl">Male Clothes</h1>
        <p className="font-semibold">30% off for summer vacation</p>
        <button className="border px-4 py-3 mx-auto w-[150px] cursor-pointer text-white bg-black font-semibold hover:bg-transparent hover:text-slate-900 transition-all duration-800">SHOP NOW</button>
      </div>

    </div>
  );
}

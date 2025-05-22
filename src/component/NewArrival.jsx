import ProductCard from "./ProductCard";



function NewArrival() {
  return(
    <div>
        <div className="flex justify-center text-center flex-col items-center gap-1.5 pb-[5rem]">
            <h1 className="font-bold text-2xl">New Arrivals</h1>
            <span className=" inline-block w-[50px] h-[2px] bg-black "></span>
            <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>



        <ProductCard/>
    </div>
    
  )
}

export default NewArrival;

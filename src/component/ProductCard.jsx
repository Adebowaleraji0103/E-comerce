import { CiHeart } from "react-icons/ci";

function ProductCard() {
  return (
    <div>
      <div className="w-[200px]">
        <div className="bg-gray-100 h-[250px] w-[200px] relative mb-3">
          <p className="absolute top-3 right-3 text-pink-800">-10%</p>
          <img className="p-[10px] px-[20px]" src="shirt.png" alt="" />
        </div>

        <div className="flex justify-between">
          <p>Product Name</p>
          <CiHeart />
        </div>

        <div>
            <span>$100 -</span> <span className="text-pink-800 ml-1">$150</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

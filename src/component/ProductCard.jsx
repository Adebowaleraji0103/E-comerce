import { CiHeart } from "react-icons/ci";

function ProductCard({ productDetails }) {
  return (
    <div className="shadow-xl relative">
      <div className="bg-gray-100 mb-3">
        <p className="absolute top-3 right-3 text-pink-800 font-semibold">
          -10%
        </p>
        <img
          className="w-full h-[300px] object-contain block"
          src={productDetails.productImage}
          alt=""
        />
      </div>

      <div className="px-5 pb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-[16px]">T Shirt</p>
          <CiHeart className="text-xl"/>
        </div>
        <span className="font-semibold">$100 -</span> <span className="text-pink-800 ml-1 line-through">$150</span>
      </div>
    </div>
  );
}

export default ProductCard;

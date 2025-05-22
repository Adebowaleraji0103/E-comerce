import ProductCard from "./ProductCard";

const products = [
  {
    productImage: "/Product/shirt.png",
    discount: 10,
    productName: "T Shirt",
    oldPrice: "$150",
    newPrice: () => this.oldPrice - this.discount,
  },

  {
    productImage: "/Product/Bag.png",
    discount: 15,
    productName: "Jeans",
    oldPrice: "$200",
    newPrice: () => this.oldPrice - this.discount,
  },

  {
    productImage: "/Product/Glasses.png",
    discount: 20,
    productName: "Jacket",
    oldPrice: "$300",
    newPrice: () => this.oldPrice - this.discount,
  },

  {
    productImage: "/Product/Hat.png",
    discount: 25,
    productName: "Shoes",
    oldPrice: "$250",
    newPrice: () => this.oldPrice - this.discount,
  },

  {
    productImage: "/Product/Bag.png",
    discount: 10,
    productName: "Hat",
    oldPrice: "$50",
    newPrice: () => this.oldPrice - this.discount,
  },

  {
    productImage: "/Product/belt.png",
    discount: 15,
    productName: "Scarf",
    oldPrice: "$60",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: 8,
    productName: "Gloves",
    oldPrice: "$60",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: 12,
    productName: "Sunglasses",
    oldPrice: "$80",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: 18,
    productName: "Watch",
    oldPrice: "$500",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: 22,
    productName: "Bag",
    oldPrice: "$350",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: 7,
    productName: "Belt",
    oldPrice: "$80",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: 30,
    productName: "Dress",
    oldPrice: "$180",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: 15,
    productName: "Skirt",
    oldPrice: "$90",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: 25,
    productName: "Boots",
    oldPrice: "$400",
    newPrice: () => this.oldPrice - this.discount,
  },
  {
    productImage: "/Product/Bag.png",
    discount: -20,
    productName: "Hoodie",
    oldPrice: "$150",
    newPrice: () => this.oldPrice - this.discount,
  },
];

function NewArrival() {
  return (
    <div className="px-15">
      <div className="flex justify-center text-center flex-col items-center gap-1.5 pb-[5rem]">
        <h1 className="font-bold text-2xl">New Arrivals</h1>
        <span className=" inline-block w-[50px] h-[2px] bg-black "></span>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <section className="grid grid-cols-5 gap-x-4 gap-y-7">
        {products.map((product)=> <ProductCard productDetails = {product}/>)}
      </section>
    </div>
  );
}

export default NewArrival;

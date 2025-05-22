function Footer() {
  return (
    <div className="bg-gray-100 grid grid-cols-5 px-20 py-10 items-center">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Flone</h1>
        <span>2019 flone</span>
        <p className="capitalize">all right reserved</p>
      </div>
      <div>
        <h2 className="font-bold text-1.5xl uppercase">About us</h2>
        <p>About us</p>
        <p>Store location</p>
        <p>Contact</p>
        <p>Orders tracking</p>
      </div>

      <div>
        <h2 className="font-bold text-1.5xl uppercase">USEFUL LINK</h2>
        <p>Return </p>
        <p>Support policy</p>
        <p>Size guide</p>
        <p>FAQ</p>
      </div>

      <div>
        <h2 className="font-bold text-1.5xl uppercase">FOLLOW US</h2>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Youtube</p>
      </div>

      <div>
        <h2 className="font-bold text-1.5xl uppercase">SUBSCRIBE</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <p>Enter your email here</p>
        <span className="inline-block w-[250px] h-[1px] bg-black"></span>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;

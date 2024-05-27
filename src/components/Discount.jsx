import Product from "./Product";

const productdata = [
  {
    img: "/product-6.jpg",
    name: "McCormick Gourmet Orange",
    price: "$65.7",
  },
  {
    img: "/product-7.jpg",
    name: "Organic Broicoli 1 lb",
    price: "$69.7",
  },
  {
    img: "/product-8.jpg",
    name: "Bluberry Orgnaic, 7 ounce",
    price: "$45.7",
  },
  {
    img: "/product-9.jpg",
    name: "Dried Pineappple Fruit Bar",
    price: "$85.7",
  },
];

const Discount = () => {
  return (
   
    <div className=" py-20">
      <div className=" container">
        <h1
          className="text-xl md:text-4xl pb-4 sm:pb-0">
          Discount
        </h1>

        <div className=" pt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4 xl:grid-cols-5">
        <div className=" relative w-fit mx-auto">
              <img className=" h-full object-cover" 
              src="/discount-bg.jpg" alt="discount" />
              <div className=" absolute  top-0
               left-0 grid place-items-center text-white">

                <div className=" mt-20 text-xl p-4 text-center flex flex-col gap-4">
                    <h1 className=" text-[30px] font-bold">$20</h1>
                    <div>
                        <p>Under Products</p>
                        <p>Limited Time Only</p>
                    </div>
                    </div>
                </div>

              </div>
        
          {productdata.map((product) => (
            <Product
              key={product.name}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        </div>
      
    </div>
    
  );
};

export default Discount;

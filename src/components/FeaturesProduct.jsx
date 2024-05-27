import Product from "./Product"

const productData = [
    {
        img:'/product-1.jpg',
        name:'Organic Bartlett Pear',
        price:"$34.76"
    },
    {
        img:'/product-2.jpg',
        name:'Organic Strawberriesm, 1 lb',
        price:"$57.76"
    },
    {
        img:'/product-3.jpg',
        name:'Blueberry Organic, 6 Outce',
        price:"$67.26"
    },
    {
        img:'/product-4.jpg',
        name:'Kiwi Organic 1, Each',
        price:"$39.76"
    },
    {
        img:'/product-5.jpg',
        name:'Organic Banana',
        price:"$124.76"
    },
    {
        img:'/product-6.jpg',
        name:'Organic Bartlett Pear',
        price:"$674.76"
    },
    {
        img:'/product-7.jpg',
        name:'Organic Broccoli 1 lb',
        price:"$94.76"
    },
    {
        img:'/product-8.jpg',
        name:'Bluberry Organic, 6 Once',
        price:"$35.26"
    },
    {
        img:'/product-9.jpg',
        name:'Dried Pinaepple Fruit Bar',
        price:"$77.76"
    },
    {
        img:'/product-10.jpg',
        name:'Holidayn Nuts Gift Basket',
        price:"$334.76"
    },
]
const FeaturesProduct = () => {
  return (
    <div className=" pt-20">
        <div className=" container">
            <div className=" sm:flex justify-between items-center">
                <div className=" text-xl md:text-4xl pb-4 sm:pb-0">
                  Feature Products
                </div>
                <div className=" flex gap-8 items-center
                 text-[14px] md:text-lg">
                    <button className=" border-b
                     border-[#000]">Best Sellers</button>
                     <button>Most Popular</button>
                </div>
            </div>

            {/* Grid  */}

            <div className=" pt-10 grid sm:grid-cols-2
             md:grid-cols-3 gap-8 lg:grid-cols-4 xl:grid-cols-5">
               {
                productData.map((product,index)=>(
                    <Product 
                    key={index}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    />
                ))
               }
            </div>

        </div>
      
    </div>
  )
}

export default FeaturesProduct

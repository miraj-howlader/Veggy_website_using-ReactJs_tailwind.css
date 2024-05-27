import { BsShieldCheck } from "react-icons/bs"
import { FiGift } from "react-icons/fi"
import { RiCustomerServiceFill } from "react-icons/ri"
import { TfiShoppingCartFull } from "react-icons/tfi"
import ServiceCard from "./ServiceCard"

const data = [
    {
        title:'FAST ADD FREE DELEVERY',
        icon: <TfiShoppingCartFull />,
        desc:"Free delivery for all orders over $140"
    },
    {
        title:'245/5 CUSTOMER SUPPORT',
        icon: <RiCustomerServiceFill />,
        desc:"Friendly 24/7 customer support"
    },
    {
        title:'MONEY BACK GURANTEE',
        icon: <BsShieldCheck />,
        desc:"We return money within 30 days"
    },
    {
        title:'MEMBERS GIFTS',
        icon: <FiGift />,
        desc:"Discount coupons weekends"
    },
]






const Services = () => {
  return (
    <div className=" bg-[#f7f5ee]">
        <div className=" container grid gap-8
         md:grid-cols-2 xl:grid-cols-4 py-10">


         {
            data.map((item)=>(
                <ServiceCard 
                key={item.title}
                title={item.title}
                icon={item.icon}
                desc={item.desc}
                />
            ))
         }
        </div>
      
    </div>
  )
}

export default Services

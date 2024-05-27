import Blogcart from "./Blogcart";


const blogData = [
  {
    img: "/post-1.jpg",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero officia sint tenetur harum dicta voluptate odit, itaque similique est!",
  },
  {
    img: "/post-2.jpg",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero officia sint tenetur harum dicta voluptate odit, itaque similique est!",
  },
  {
    img: "/post-3.jpg",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero officia sint tenetur harum dicta voluptate odit, itaque similique est!",
  },
  {
    img: "/post-4.jpg",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero officia sint tenetur harum dicta voluptate odit, itaque similique est!",
  },
];

const Blogs = () => {
  return (
    <div className=" py-20">
      <div className=" container">
        <h1 className="text-xl md:text-4xl pb-4 sm:pb-0">Our Blogs</h1>

        <div className=" pt-10 grid sm:grid-cols-2
             md:grid-cols-3 gap-8 lg:grid-cols-4 ">
               {
                blogData.map((blog,index)=>(
                    <Blogcart 
                    key={index}
                    img={blog.img}
                    desc={blog.desc}
                    
                    />
                ))
               }
            </div>
      </div>
    
    </div>
  );
};

export default Blogs;

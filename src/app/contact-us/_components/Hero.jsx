const Hero = ({data}) => {
  return (
    <div className="mt-16 overflow-x-hidden">
      <div className=" mt-5 bg-cover bg-center h-96 relative bg-[url('https://media.istockphoto.com/id/1263114732/photo/customer-support-executive.jpg?s=612x612&w=0&k=20&c=NWlhuJzGJiNGchGg--3Zj6_RJwtn-YWfusWqcASMRYI=')] bg-no-repeat ">
        <div className="absolute bg-black bg-opacity-85 top-0 left-0 h-96  w-1/2 flex items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl font-bold">{ data.header}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

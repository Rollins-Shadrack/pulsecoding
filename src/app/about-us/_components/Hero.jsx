import data from '@/constants/data.json'

const Hero = () => {
  const { header, about} = data.aboutpage.herosection;
  return (
    <div className="mt-16 overflow-x-hidden">
      <div className=" mt-5 bg-cover bg-center h-80 relative bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat ">
        <div className="absolute bg-black bg-opacity-85 top-0 left-0 h-80  w-1/2 flex items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl font-bold">{header}</h1>
        </div>
      </div>
      <div className="px-5 mt-10" style={{ fontSize: "16px", lineHeight: "1.5", textAlign: "justify" }}>
        <div dangerouslySetInnerHTML={{ __html: about }} />
      </div>
    </div>
  );
};

export default Hero;

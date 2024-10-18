import Image from 'next/image';

const About = () => {
  const teamMembers = [
    { name: "Brendah Khamali", role: "Software Developer", imgSrc: "/images/brenda.png" },
    { name: "Maureen Gatweri", role: "Software Developer", imgSrc: "/images/Gatweri.jpg" },
    { name: "Valentine Kinyua", role: "Software Developer", imgSrc: "/images/ValentineN.jpg" },
    { name: "Nakato Musana", role: "Software Developer", imgSrc: "/images/NakatoM.jpg" },
    { name: "Gloria Nyaga", role: "Software Developer", imgSrc: "/images/gloria.jpg" },
  ];

  const firstGroup = teamMembers.slice(0, 3);
  const secondGroup = teamMembers.slice(3); 

  return (
    <div className="mx-2 md:mx-4 lg:mx-8 font-jost">
        <div id='About'> </div>

        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/3 sm:w-1/2 border-t-2 ml-4 border-[#3E1C00] mb-3" />
          <h1 className="mx-6 text-[30px] sm:text-[30px] md:text-[35px] font-bold lg:text-[35px] text-center">About_Us</h1>
          <hr className="w-1/3 sm:w-1/2 border-t-2 border-[#3E1C00] mb-3" />
        </div>
      <h4 className="text-center text-black mb-8 text-[18px] sm:text-[20px] md:text-3xl lg:text-[25px] mt-2 px-2 sm:px-0">Learn more about our talented team</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8  md:gap-y-12 gap-x-12 mt-8">
        {firstGroup.map((member, index) => (
          <div key={index} className="flex flex-col items-center ">
            <Image
              src={member.imgSrc}
              height={400}
              width={400}
              alt={member.name}
              className="h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-lg object-cover"
            />
            <h1 className="text-[16px] sm:text-[16px] md:text-[25px] lg:text-[25px] text-center font-bold mt-3">
  {member.name}
</h1>
<h5 className="text-[16px] sm:text-[16px] md:text-[25px] lg:text-[25px] text-center">
  {member.role}
</h5>

          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 ">
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 gap-y-8 md:gap-y-12 md:gap-x-24 lg:gap-x-16 xl:gap-x-64">
          {secondGroup.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.imgSrc}
                height={400}
                width={400}
                alt={member.name}
                className="h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-lg object-cover"
              />
              <h1 className="text-[16px] sm:text-[16px] md:text-[25px] lg:text-[25px] text-center font-bold mt-3">
  {member.name}
</h1>
<h5 className="text-[16px] sm:text-[16px] md:text-[25px] lg:text-[25px] text-center">
  {member.role}
</h5>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
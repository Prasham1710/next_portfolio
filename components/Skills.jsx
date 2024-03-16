import Image from "next/image";

function Skills() {
  const skill = [
    {
      id: 1,
      name: "Github",
      image: "/assets/github.png",
    },
    {
      id: 2,
      name: "CSS",
      image: "/assets/css.png",
    },
    {
      id: 3,
      name: "HTML",
      image: "/assets/html.png",
    },
    {
      id: 4,
      name: "Javascript",
      image: "/assets/javascript.png",
    },
    {
      id: 5,
      name: "Reactjs",
      image: "/assets/react.png",
    },
    {
      id: 6,
      name: "Tailwind",
      image: "/assets/tailwind.png",
    },
    {
      id: 7,
      name: "Nextjs",
      image: "/assets/next.png",
    },
    {
      id: 8,
      name: "Node",
      image: "/assets/node.png",
    },
    {
      id: 9,
      name: "python",
      image: "/assets/Python.png",
    },
    {
      id: 10,
      name: "MongoDb",
      image: "/assets/mongo.png",
    },
    {
      id: 11,
      name: "Firebase",
      image: "/assets/firebase.png",
    },
 
    {
      id: 12,
      name: "Typescript",
      image: "/assets/ts.png",
    },
    {
      id: 13,
      name: "Prisma",
      image: "/assets/prisma.png",
    },
    {
      id: 14,
      name: "C++",
      image: "/assets/Cplusplus.png",
    },
    
  ];
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skill.map((skills) => (
            <div
              key={skills.id}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skills.image}
                    alt={skills.name}
                    width={70}
                    height={40}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skills.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
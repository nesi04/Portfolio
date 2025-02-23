import React from 'react'
const skillList = [
    {name:"JavaScript",image:"/js.png"},
    {name:"React",image:"/react.png"},
    {name:"Node JS",image:"/node-js.png"},
    {name:"MongoDB",image:"/MongoDB.png"},
    {name:"Tailwind",image:"/Tailwind CSS.png"},
    {name:"Java",image:"/Java.png"},
   
];
const Skills = () => {
   
  return (
    <div className='flex flex-wrap gap-14'>
        {skillList.map((skill,index)=>(
            <div className="skill size-16 flex flex-col items-center justify-center gap-2 relative hover:drop-shadow-md shadow-blue-400 hover:size-18 transition-size duration-200" key={index}>
                <img src={skill.image} alt={skill.name} className='rounded-xl w-full h-full'/>
                <span>{skill.name}</span>
               
            </div>
        ))}
    </div>
  )
}

export default Skills;
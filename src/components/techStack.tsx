import React from "react";
const Stacks = () => {

    const stacks = [{name: "HTML", icon: "html.png"}, 
                    {name: "JS", icon:"js.png"},
                    {name: "TS", icon:"ts.png"},
                 {name: "CSS", icon:"css.png"},
                 {name: "Tailwind", icon:"tailwind.png"},
                 {name: "Bootstrap", icon:"bootstrap.png"},
                 {name: "React", icon:"react.png"},
                 {name: "React Native", icon:"RN.png"},
                 {name: "Expo", icon:"expo.png"},
                 {name: "Next js", icon:"next.png"},
                 {name: "Solid js", icon:"solid.png"},
                 {name: "PHP", icon:"PHP.png"},
                 {name: "Laravel", icon:"laravel.png"},
                 {name: "Photoshop", icon:"ps.png"},
                 {name: "Canva", icon:"canva.png"}];
                 ;
    return ( <>
    <div className=" flex space-x-2 my-2 flex-wrap items-center max-lg:justify-center">
        {stacks.map(stack => (
            <div className=" w-6 mb-2" key={stack.name}>
            <img src={"/icons/"+stack.icon} alt={stack.name} className="grayscale-0 w-full h-full  smooth hover:grayscale" />
            </div>
        ))}


    </div>
    </> );
}
 
export default Stacks;
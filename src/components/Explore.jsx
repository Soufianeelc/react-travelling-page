import React from "react";
import Gallery from "./Gallery";

function Explore() {
    return ( 
        <section className="container mx-auto flex flex-col my-16 space-y-8">
            <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="font-graphikBold text-3xl"> Explore the world </h2>
                <p className="font-graphikRegular max-w-xl px-16 text-center text-slate-500"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur accusantium accusamus necessitatibus perferendis,
                    laborum maiores
                </p>
            </div>
            <Gallery />
        </section>
     );
}

export default Explore;
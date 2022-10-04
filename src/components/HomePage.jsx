import React from "react";
import NavBar from "./NavBar";
import { AiOutlineDownCircle } from "react-icons/ai"

function HomePage(){
    return (
        <section id="home" className=" mx-auto flex flex-col items-center space-y-60 lg:space-y-80">
            <NavBar />

            <main className="flex flex-col items-center space-y-24">
                <div className="flex flex-col space-y-2 text-white items-center">
                    <h1 className="text-5xl md:text-6xl text-center font-graphikBold"> The Great Outdoors </h1>
                    <p className="font-graphikRegular">Wander Ofter. Wonder Always</p>
                </div>

                <div className="py-16">
                    <AiOutlineDownCircle color="white" size="30" />
                </div>
            </main>
        </section>
    );
}

export default HomePage;
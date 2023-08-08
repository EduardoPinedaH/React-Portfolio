import React from "react";
import Image from "next/image";
import roomiehunt from "../public/roomiehunt.png";
import encriptador from "../public/encriptador.png";
import solarwaffle from "../public/solarwaffle.png";
import oregonracing from "../public/oregonracing.png";
import videoportfolio from "../public/videoportfolio.png";
import codingquiz from "../public/codingquiz.png";

export default function Projects() {
  return (
    <section>
      <div className="myProjects">
        <h3 className="text-3xl py-1 font-poppins font-bold dark:text-white">
          My Projects
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 font-poppins dark:text-slate-100">
          Some of the work I&#39;ve done throught my time{" "}
          <span className="text-cyan-800 font-bold">coding.</span> Where I showcase some of
          my knlowedge with <span className="text-cyan-800 font-bold">HTML, CSS</span>{" "}
          and <span className="text-cyan-800 font-bold">JavaScript,</span> 3d modelling
          and animation with <span className="text-cyan-800 font-bold">Blender,</span>{" "}
          functionality apps with <span className="text-cyan-800 font-bold">MySql </span>{" "}
          databases and much more!
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <a href="https://eduardopinedah.com/" target="_blank">
            <Image
              src={videoportfolio}
              alt="videoportfolio"
              className="rounded-lg object-cover cursor-pointer"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </a>
          <h3 className="text2xl pt-5 pb-3 font-poppins font-medium md:text-center md:text-4xl dark:text-white">Eduardo Pineda&#39;s Portfolio</h3>
            <p className="text-md leading-8 text-gray-800 font-poppins dark:text-slate-100">
              As a filmmaker and video editor I needed a professional portfolio, on this website I showcase my knowledge of
              <span className="text-sky-950 dark:text-white font-bold"> HTML, CSS</span> and <span className="text-sky-950 dark:text-white font-bold">JavaScript</span> by
              creating a responsive portfolio where I can share some of my work with a well polised UI and interactive videos.
            </p>
        </div>
        <div className="basis-1/3 flex-1">
          <a
            href="https://arcane-tundra-44281-d362c28aef30.herokuapp.com/"
            target="_blank"
          >
            <Image
              src={roomiehunt}
              alt="roomiehunt"
              className="rounded-lg object-cover cursor-pointer"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </a>
          <h3 className="text2xl pt-5 pb-3 font-lora font-medium md:text-center md:text-4xl dark:text-white">roomiehunt</h3>
            <p className="text-md  leading-8 text-gray-800 font-poppins dark:text-slate-100">
              This site allows you to search for a <span className="text-sky-950 dark:text-white font-bold">roomie-hungry</span> house or apartment depending on preferences like location and pet-friendlyness. 
              Or if you need more tenants for your home, you can <span className="text-sky-950 dark:text-white font-bold">upload</span> it and <span className="text-sky-950 dark:text-white font-bold">find</span> the best person to share with.  
            </p>
        </div>
        <div className="basis-1/3 flex-1">
          <a href="https://oregonracing.club/" target="_blank">
            <Image
              src={oregonracing}
              alt="oregonracing"
              className="rounded-lg object-cover cursor-pointer"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </a>
          <h3 className="text2xl pt-5 pb-3 font-openSans font-medium md:text-center md:text-4xl dark:text-white">Oregon Racing</h3>
          <p className="text-md leading-8 text-gray-800 font-poppins dark:text-slate-100">
              Oregon Racing is a website created for the chain supplier <span className="text-sky-950 dark:text-white font-bold">OregonTool</span> and a campaign they got in order to give the best seller a 
              free trip to <span className="text-sky-950 dark:text-white font-bold">Brasil</span> and tickets for the <span className="text-sky-950 dark:text-white font-bold">F1 Racing</span>.
          </p>
        </div>
        <div className="basis-1/3 flex-1">
          <a
            href="https://eduardopinedah.github.io/Encriptador-de-Texto/"
            target="_blank"
          >
            <Image
              src={encriptador}
              alt="encriptador"
              className="rounded-lg object-cover cursor-pointer"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </a>
          <h3 className="text2xl pt-5 pb-3 font-poppins font-medium md:text-center md:text-4xl dark:text-white">Text Encriptor</h3>
          <p className="text-md leading-8 text-gray-800 font-poppins dark:text-slate-100">
              This site allows you to type in any word or phrase you want, and <span className="text-sky-950 dark:text-white font-bold">encrypt</span> it via <span className="text-sky-950 dark:text-white font-bold">JavaScript</span>. 
              It also allows to paste encrypted text and turn it back <span className="text-sky-950 dark:text-white font-bold">desencrypted</span>.
          </p>
        </div>
        <div className="basis-1/3 flex-1">
          <a href="https://santis1001.github.io/solar-waffle/" target="_blank">
            <Image
              src={solarwaffle}
              alt="solarwaffle"
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              cursor-pointer
            />
          </a>
          <h3 className="text2xl pt-5 pb-3 font-poppins font-medium md:text-center md:text-4xl dark:text-white">Solar Waffle</h3>
          <p className="text-md leading-8 text-gray-800 font-poppins dark:text-slate-100">
          This website allows users to navigate between the different planets of our solar system and view their information. 
          The app offers user <span className="text-sky-950 dark:text-white font-bold">interaction and animation</span> for the planets.
          Once on the planet information screen, the <span className="text-sky-950 dark:text-white font-bold">3D object</span> of the planet will enable interaction with the user, 
          allowing them to move it around with the mouse.
          </p>
        </div>
        <div className="basis-1/3 flex-1">
          <a
            href="https://eduardopinedah.github.io/Code-Quiz-Game/"
            target="_blank"
          >
            <Image
              src={codingquiz}
              alt="codingquiz"
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              cursor-pointer
            />
          </a>
          <h3 className="text2xl pt-5 pb-3 font-poppins font-medium md:text-center md:text-4xl dark:text-white">Coding Quiz</h3>
          <p className="text-md leading-8 text-gray-800 font-poppins dark:text-slate-100">
            On this site you can find <span className="text-sky-950 dark:text-white font-bold">code-related</span> quiz game with <span className="text-sky-950 dark:text-white font-bold">multiple answers</span>, 
            with <span className="text-sky-950 dark:text-white font-bold">time limit</span> and a <span className="text-sky-950 dark:text-white font-bold">highscore</span> that keeps track of the scores.
          </p>
        </div>
      </div>
    </section>
  );
}

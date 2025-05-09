import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/images/logo_portfolio.png'
import imageComptence from '../../assets/images/image-comptence.png'
import dev from '../../assets/images/dev.jpg'
import afriXport from '../../assets/images/afrixport.png'
import bonneBouffe from '../../assets/images/bonneBouffe.png'
import burger from '../../assets/images/burger.png'
import headBoot from '../../assets/images/headBoot.png'
import legume from '../../assets/images/legume.png'
import luxeCare from '../../assets/images/luxeCare.png'

const Base = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en ms
          once: true,     // Si true, l'animation ne se joue qu'une fois
        });
      }, []);

  return (
    <div className='w-ful'>
        {/* HAEDER  */}
        <div className=" w-full h-screen bg-blue-950 flex flex-col px-42">
          {/* navBar  */}
          <nav className=" py-3 flex justify-between  items-center">
            {/* LOGO  */}
            <div className="h-18 ">
              <img data-aos="fade-up" className=" w-42 object-contain" src={logo} alt={logo}/>
            </div>
            {/* MENU  */}
            <div className=" flex items-center gap-3">
              <ul data-aos="fade-up" className=" flex gap-3 text-white font-semibold">
                <li>
                  <a className=" uppercase hover:text-white hover:bg-red-500/25 hover:px-3 hover:py-2 hover:rounded-lg duration-300" href="#">Accueil</a>
                </li>
                <li>
                  <a className=" uppercase hover:text-white hover:bg-red-500/25 hover:px-3 hover:py-2 hover:rounded-lg duration-300" href="#">A Propos</a>
                </li>
                <li>
                  <a className=" uppercase hover:text-white hover:bg-red-500/25 hover:px-3 hover:py-2 hover:rounded-lg duration-300" href="#">Expérience</a>
                </li>
                <li>
                  <a className=" uppercase hover:text-white hover:bg-red-500/25 hover:px-3 hover:py-2 hover:rounded-lg duration-300" href="#">Projets</a>
                </li>
                <li>
                  <a className=" uppercase hover:text-white hover:bg-red-500/25 hover:px-3 hover:py-2 hover:rounded-lg duration-300" href="#">Contact</a>
                </li>
              </ul>
              {/* BUTTON CONNEXION  */}
              <button data-aos="fade-up" className=" px-4 py-2 b-transparent border-2 border-red-500 rounded-lg text-white cursor-pointer bg-red-500/25 hover:bg-red-500/50">Connexion</button>
            </div>
          </nav>
          {/* CONTENT HEADER  */}
          <div className=" flex  items-center py-8">
            <div className="  w-full flex flex-col gap-3">
              <h3 className=" text-white text-2xl">Hi, Am </h3>
              <h1 className=" font-extrabold text-red-400 text-7xl uppercase">SALIOU ABOUDOU</h1>
              <h3 className=" font-light text-white text-xl uppercase">Développeur web full stack & Designer</h3>
              {/* <p className="text-justify text-white">Je suis [Ton Prénom NOM], développeur web Full Stack et designer graphique passionné par l’union entre créativité et logique.</p> */}
              <p className="text-justify text-white">Depuis plusieurs années, je conçois des applications web à la fois belles, fluides et puissantes, en alliant une expérience utilisateur soignée à une architecture technique solide.</p>
              {/* <p className="text-justify text-white">Mon objectif ? Créer des interfaces intuitives, esthétiques et performantes qui répondent à des besoins concrets.</p> */}
            </div>
            <div className="w-full flex flex-col">
              <img src={imageComptence} alt={imageComptence} />
            </div>
          </div>
        </div>
        {/* SECTION A PROPOS  */}
        <div className=" w-full  flex flex-col px-42 py-12 -mt-64 bg-white rounded-4xl">
          <div className=" flex gap-6">
            <div className=" h-32 w-88  ">
              <img className=" object-contain rounded-lg" src={dev} alt={dev} />
            </div>
            <div className=" flex flex-col gap-4">
                <div className="max-w-5xl mx-auto text-justify">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6">À propos de moi</h2>

                      <p data-aos="zoom-in" className="text-lg text-gray-700 mb-6 border border-gray-300 rounded-lg shadow px-4 py-2">
                      Passionné par la création de solutions web performantes et intuitives, je suis développeur full-stack avec plusieurs années d'expérience dans la conception, le développement et la mise en production d'applications web sur mesure. Mon approche est centrée sur la qualité du code, l'expérience utilisateur et l'efficacité des processus métier.
                      </p>

                     

                      
                </div>
            </div>
          </div>
          <div className=" flex">
            <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 rounded-lg shadow px-4 py-2">
                  <div data-aos="zoom-in">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 border border-gray-300 rounded-lg shadow px-4 py-2">Compétences techniques</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Langages :</strong> HTML, CSS, JavaScript, TypeScript, PHP</li>
                      <li><strong>Frameworks :</strong> Angular, React, Laravel, Node.js</li>
                      <li><strong>Bases de données :</strong> MySQL, MongoDB</li>
                      <li><strong>Déploiement :</strong> Git, Docker, CI/CD</li>
                    </ul>
                  </div>

                  <div data-aos="zoom-in">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 border border-gray-300 rounded-lg shadow px-4 py-2">UI/UX & Design</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Outils : Figma, Adobe XD, Illustrator, Photoshop</li>
                      <li>Intégration <em>pixel-perfect</em> & responsive design</li>
                      <li>Accessibilité et ergonomie optimisées</li>
                      <li>UX centrée sur la performance utilisateur</li>
                    </ul>
                  </div>
                </div>

                <div data-aos="zoom-in" className="mt-8 border border-gray-300 rounded-lg shadow px-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Ce qui me distingue</h3>
                  <p className="text-gray-700 text-base">
                    Je maîtrise tout le cycle de développement d’une application, du croquis à la mise en ligne.  
                    Grâce à ma double compétence technique et graphique, je crée des produits qui allient 
                    élégance visuelle et performance robuste.
                  </p>
                </div>
          </div>
        </div>
        {/* PROJETS  */}
        <div className=" w-full flex flex-col px-42 py-12 rounded-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Mes projets récents</h1>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className=" w-98 py-3 px-4 rounded-lg flex flex-col gap-5 overflow-hidden">
                <div className=" w-98">
                  <img className=" object-contain" src={afriXport} alt={afriXport} /> 
                </div>
                <h2>Afrixport</h2>
                <p className=" text-justify text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptate velit sed nisi earum dolor a odio doloribus alias voluptatibus quisquam dolore? Porro delectus maiores necessitatibus. Unde praesentium labore magni.</p>
                <button className="mx-auto w-full bg-blue-950 text-white rounded-lg py-2">Visiter</button>
              </div>

              <div className=" w-98 py-3 px-4 rounded-lg flex flex-col gap-5">
                <div className=" w-98 ">
                  <img className=" object-contain" src={bonneBouffe} alt={bonneBouffe} /> 
                </div>
                <h2>bonneBouffe</h2>
                <p className=" text-justify text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptate velit sed nisi earum dolor a odio doloribus alias voluptatibus quisquam dolore? Porro delectus maiores necessitatibus. Unde praesentium labore magni.</p>
                <button className="mx-auto w-full bg-blue-950 text-white rounded-lg py-2">Visiter</button>
              </div>

              <div className=" w-98 py-3 px-4 rounded-lg flex flex-col gap-5">
                <div className=" w-98 ">
                  <img className=" object-contain" src={headBoot} alt={headBoot} /> 
                </div>
                <h2>Head Boot</h2>
                <p className=" text-justify text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptate velit sed nisi earum dolor a odio doloribus alias voluptatibus quisquam dolore? Porro delectus maiores necessitatibus. Unde praesentium labore magni.</p>
                <button className="mx-auto w-full bg-blue-950 text-white rounded-lg py-2">Visiter</button>
              </div>


              <div className=" w-98 py-3 px-4 rounded-lg flex flex-col gap-5">
                <div className=" w-98 ">
                  <img className=" object-contain" src={legume} alt={legume} /> 
                </div>
                <h2>Legume</h2>
                <p className=" text-justify text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptate velit sed nisi earum dolor a odio doloribus alias voluptatibus quisquam dolore? Porro delectus maiores necessitatibus. Unde praesentium labore magni.</p>
                <button className="mx-auto w-full bg-blue-950 text-white rounded-lg py-2">Visiter</button>
              </div>


              <div className=" w-98 py-3 px-4 rounded-lg flex flex-col gap-5">
                <div className=" w-98 ">
                  <img className=" object-contain" src={luxeCare} alt={luxeCare} /> 
                </div>
                <h2>Luxe Care</h2>
                <p className=" text-justify text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptate velit sed nisi earum dolor a odio doloribus alias voluptatibus quisquam dolore? Porro delectus maiores necessitatibus. Unde praesentium labore magni.</p>
                <button className="mx-auto w-full bg-blue-950 text-white rounded-lg py-2">Visiter</button>
              </div>

              <div className=" w-98 py-3 px-4 rounded-lg flex flex-col gap-5">
                <div className=" w-98 ">
                  <img className=" object-contain" src={burger} alt={burger} /> 
                </div>
                <h2>Burger</h2>
                <p className=" text-justify text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptate velit sed nisi earum dolor a odio doloribus alias voluptatibus quisquam dolore? Porro delectus maiores necessitatibus. Unde praesentium labore magni.</p>
                <button className="mx-auto w-full bg-blue-950 text-white rounded-lg py-2">Visiter</button>
              </div>
          </div>
        </div>

        {/* PROJETS  */}
        <div className=" w-full h-screen flex flex-col px-42 rounded-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Expérience Professionnelles</h1>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
              
          </div>
        </div>
    </div>
    
  )
}

export default Base
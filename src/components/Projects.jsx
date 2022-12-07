import React from "react";
import "./Proyects.css";
import appMovies from  '../assets/appMovies.png'
import pokemon from  '../assets/pokemon.png'
import ecomerce from  '../assets/ecomerce.png'
import pokedex from  '../assets/pokedex.png'


const Proyects = () => {
  return (
    <>
      <div className="proyects">
        <div className="grid">
          <div className="grid__item">
            <div className="card">
              {" "}
              <img
                className="card__img"
                src={ecomerce}
                alt="ecomerce"
              />
              <div className="card__content">
                <h1 className="card__header">E-comerce</h1>
                <p className="card__text">
                  Desarrollado con React + Vite, se utilizo CSS para el estilo, un 
                  sitio responsvive, para el deployment se realizo con FireBase.
                </p>
              <a href="https://ecomerce-d548b.web.app/" target="blank_" >
              <button className="card__btn">
                  Explore <span>&rarr;</span>
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>




        <div className="grid">
          <div className="grid__item">
            <div className="card">
              {" "}
              <img
                className="card__img"
                src={pokemon}
                alt="pokemon"
              />
              <div className="card__content">
                <h1 className="card__header">App Pokemon</h1>
                <p className="card__text">
                  Desarrolado con Vue js + Vite, consumiendo una api, tambien
                  se utilizo CSS para el estilo, el deployment se realizado en Netlify
                </p>
                <a href="https://vue3-pokemons.netlify.app/" target="blank_" > <button className="card__btn">
                  Explore <span>&rarr;</span>
                </button></a>
              </div>
            </div>
          </div>
        </div>


        <div className="grid">
          <div className="grid__item">
            <div className="card">
              {" "}
              <img
                className="card__img"
                src={appMovies}
                alt="appMovies"
              />
              <div className="card__content">
                <h1 className="card__header">App Movies </h1>
                <p className="card__text">
                  Desarrollado con React + CreateReactApp,
                  consumiendo una api de peliculas, realizado el deployment en Netlify.
                </p>
          <a href="https://movie-react2022.netlify.app/" target="blank_">   <button className="card__btn">
              Explore   <span>&rarr;</span>
                </button>  </a>
                
                   
              </div>
            </div>
          </div>
        </div>



        <div className="grid">
          <div className="grid__item">
            <div className="card">
              {" "}
              <img
                className="card__img"
                src={pokedex}
                alt="pokedex"
              />
              <div className="card__content">
                <h1 className="card__header">App Movies </h1>
                <p className="card__text">
                  Desarrollado con React + CreateReactApp,
                  consumiendo una api de peliculas, realizado el deployment en Netlify.
                </p>
          <a href="https://pokedex-react2023.netlify.app/" target="blank_">   <button className="card__btn">
              Explore   <span>&rarr;</span>
                </button>  </a>
                
                   
              </div>
            </div>
          </div>
        </div>


        
      </div>
    </>
  );
};

export default Proyects;

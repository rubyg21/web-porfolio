import React from "react";
import "./Proyects.css";
import appMovies from  '../assets/appMovies.png'
import pokemon from  '../assets/pokemon.png'
import ecomerce from  '../assets/ecomerce.png'


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
                  Look up at the night sky, and find yourself{" "}
                  <strong>immersed</strong> in the amazing mountain range of
                  Aspen.
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
                  Look up at the night sky, and find yourself{" "}
                  <strong>immersed</strong> in the amazing mountain range of
                  Aspen.
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
                  Look up at the night sky, and find yourself{" "}
                  <strong>immersed</strong> in the amazing mountain range of
                  Aspen.
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
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
                alt="Snowy Mountains"
              />
              <div className="card__content">
                <h1 className="card__header">A starry night</h1>
                <p className="card__text">
                  Look up at the night sky, and find yourself{" "}
                  <strong>immersed</strong> in the amazing mountain range of
                  Aspen.
                </p>
                <button className="card__btn">
                  Explore <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyects;

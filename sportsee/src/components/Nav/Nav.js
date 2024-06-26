import React from "react";
import Logo from "@/asset/logo.svg";
import { Link } from "react-router-dom";
import IconYoga from "@/asset/Yoga.svg";
import IconSwimming from "@/asset/Swimming.svg";
import IconCycling from "@/asset/cyclo.svg";
import IconBodybuilding from "@/asset/muscu.svg";
import "./Nav.css";

export const NavHorizontal = () => {
  return (
    <>
      <header className="NavHorizontal">
        <img src={Logo} alt="logo SportSee " className="NavLogo" />
        <nav className="HeaderNav">
          <Link to="/" className="NavLink">
            <p className="NavText">Accueil</p>
          </Link>
          <Link to="" className="NavLink">
            <p className="NavText">Profil</p>
          </Link>
          <Link to="" className="NavLink">
            <p className="NavText">Réglage</p>
          </Link>
          <Link to="" className="NavLink">
            <p className="NavText">Communauté</p>
          </Link>
        </nav>
      </header>
    </>
  );
};

export const NavVertical = () => {
  return (
    <>
      <section className="NavActivity">
        <nav className="NavActivityNav">
          <ul>
            <li className="NavActivityLink">
              <img src={IconYoga} alt="" />
            </li>
            <li className="NavActivityLink">
              <img src={IconSwimming} alt="" />
            </li>
            <li className="NavActivityLink">
              <img src={IconCycling} alt="" />
            </li>
            <li className="NavActivityLink">
              <img src={IconBodybuilding} alt="" />
            </li>
          </ul>
        </nav>
        <p className="NavActivityText">Copyright, SportSee 2024</p>
      </section>
    </>
  );
};

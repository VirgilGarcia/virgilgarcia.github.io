import React, { Component } from 'react'

export default class AboutMe extends Component {
  render() {
    return (
      <div className='AboutMeContainer'>
        <div className="sectionContent">
          <div className="box">
          <img src="/assets/moi.png" alt="Moi même" style={{ filter: "grayscale(100%)" }} />
          </div>
          <div className="box">
              Bonjour et bienvenue !<br /><br />
              Je m'appelle Virgil et je suis passionné par l’univers de l’IT depuis mon plus jeune âge.<br />
              Mon parcours a débuté à l’âge de 12 ans avec Minecraft, où j’ai découvert la programmation.<br/>Fasciné par le potentiel du développement, j’ai rapidement élargi mes compétences en créant mon premier site web. <br />
              <br/>Autodidacte à mes débuts, j’ai exploré HTML, CSS, JavaScript et PHP à travers divers projets personnels avant de me former plus en profondeur avec LE WAGON en 2023. J’ai ensuite poursuivi mon apprentissage chez EPITECH, où je me spécialise en tant qu’Architecte Logiciel avec un focus sur l’IoT. Ces expériences m’ont permis d’acquérir une expertise en développement full-stack, en conception d’architectures logicielles et en systèmes connectés.<br /><br />
              Aujourd’hui, je maîtrise un large éventail de technologies et cherche constamment à approfondir mes compétences.<br />
              Curieux et toujours en quête de nouveaux défis, j’aime explorer les différents domaines de l’informatique. Mon objectif est de concevoir des architectures logicielles efficaces et innovantes, adaptées aux besoins métiers et technologiques. <br /><br />
              Je serais ravi d’échanger autour de sujets techniques et de partager mon expertise au sein d’une équipe dynamique !<br />
          </div>
          <div className="box">
            <span id="index">1</span>
            Baccalauréat Technologique STMG<br/><br/>
            Lycée Joliot-Curie - Aubagne<br/><br/>
            Filière Science Technologique du Management et de la Gestion avec Spécialité Système Informatique de Gestion

            <span id="degree">(Bac +3)</span>
          </div>
          <div className="box">
            <span id="index">2</span>
            Concepteur Développeur d'Application<br/><br/>
            LE WAGON - Marseille<br/><br/>
            Formation intensive fullstack en Programmation WEB

            <span id="degree">(Bac +3)</span>
          </div>
          <div className="box">
            <span id="index">3</span>
            MsC pro Architecte logiciel, Concepteur d'application<br/><br/>
            EPITECH - Marseille<br/><br/>
            Ecole d'informatique, Programmation et réseaux

            <span id="degree">(Bac +5)</span>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class AboutMe extends Component {
  render() {
    return (
      <div className='AboutMeContainer'>
        <div className="sectionContent">
          <div className="box">
            <img src="/assets/moi.jpg" alt="Moi même" />
          </div>
          <div className="box">
            Hello World !<br /><br />
            Moi c'est Virgil, 23 ans, Français et passionné IT <br />
            J'avais 13 ans quand j'ai découvert la programmation grâce à Minecraft. J'ai alors décidé de compléter l'expérience avec un site web.<br />
            J'ai exploré différents tutoriels pour apprendre le HTML et le CSS, et ma curiosité a fait le reste.<br />
            Mon aventure s'est intensifiée avec LE WAGON et se poursuit chez EPITECH Marseille. J'ai plongé dans le développement front-end et back-end, et j'ai accumulé un ensemble varié de compétences.
            Aujourd'hui, je maîtrise différentes technologies que je ne cesse d'approfondir tous les jours.<br /><br />
            Passionné par la création et la résolution de défis techniques, mon approche priorise toujours l'utilisateur en cherchant à créer des expériences en ligne engageantes et faciles d'utilisation.
            Toujours en quête d'apprentissage et de nouveaux défis, je suis ouvert à de nouvelles opportunités pour continuer à me perfectionner en tant que jeune développeur. Je suis enthousiaste à l'idée de contribuer à des projets passionnants dans le domaine.
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

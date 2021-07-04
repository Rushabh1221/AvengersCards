import React, { Component } from 'react';
import Card from "./Card";
import img from "../src/assests/a.png";
import img1 from "../src/assests/iron-man.jpg";
import img2 from "../src/assests/cap.jpeg";
import img3 from "../src/assests/thor.jpg";
import img4 from "../src/assests/hulk.jpg";
import img5 from "../src/assests/blackwidow.jpeg";
import img6 from "../src/assests/hawkye.jpeg";
import img7 from "../src/assests/capmarvel.jpeg";
import img8 from "../src/assests/antman.jpeg";

//Class Component:   
export default class Cards extends Component {

    render() {  //specify 100% width: use container-fluid
        return <> 
          <h2  className="p-2 mb-2 bg-dark text-white text-center">The <img src={img} alt="logo" width="140px" height="40px"/></h2>
          
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">

              <div className="col-sm-3">
                <Card img={img1} title="Iron Man" para="Tony Stark is charismatic and eccentric, he is also very proud, but also very altruist and heroic.
                 Stark is very smart, and a very talented inventor. His technology is always very advanced, and Iron Man is his greatest piece of work." /> 
              </div>  

              <div className="col-sm-3">
                <Card img={img2} title="Captain America" para="Captain America aka Steve Rogers is a Super Soldier of America. Captain America has agility, strength, speed and reaction 
                 time superior to any Olympic athlete. He is honest, loyal, extremely noble, and unfailingly dependable." /> 
              </div>

              <div className="col-sm-3">
                <Card img={img3} title="Thor" para="Thor is the god of thunder and lightning in Norse mythology, associated with strength, storms and fertility. Thor is described as being fierce eyed, 
                 with red hair and a full beard, and he is quick to anger and has an enormous appetite." /> 
              </div>

              <div className="col-sm-3">
                <Card img={img4} title="Hulk" para="Hulk aka Bruce Banner has an Incredible superhuman strength, durability, and healing factor. As Banner, possesses a genius-level intellect and
                 is an expert in multiple scientific fields, studies of physics and radiation." /> 
              </div>
               
              <div className="col-sm-3">
                <Card img={img5} title="Black Widow" para="Black Widow aka Natasha Romanoff's is one of the most talented super spy, one of S.H.I.E.L.D.'s
                 most deadly assassins and a frequent member of the Avengers." /> 
              </div>

              <div className="col-sm-3">
                <Card img={img6} title="Hawkeye" para="Hawkeye aka Clint Barton has wonderful skilled with bow-arrow, self-defense, a performer who specialized 
                in tricks with blades and also play a key role in avengers team." /> 
              </div>

              <div className="col-sm-3">
                <Card img={img7} title="Captain Marvel" para="Captain Marvel is one of the most powerful lady of marvel has a power of the photon energy she accidentally absorbed.
                 She can fly, has superhuman strength and can project photon energy." /> 
              </div>

              <div className="col-sm-3">
                <Card img={img8} title="Antman" para="Antman aka Scott Lang is key avenger who has special ability suit that infused by Pym particles and also has power to become 
                small as well as big in size with strong strength." /> 
              </div>                                                        

            </div>
          </div>
        </>
    }
}


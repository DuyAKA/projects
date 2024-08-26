import React from "react";
import koblenzImage from '../assets/koblenz.jpg';
import hamburgImage from '../assets/hamburg.jpg';
import frankfurtImage from '../assets/frankfurt.jpg';
import berlinImage from '../assets/berlin.jpg';
import footballImgae1 from '../assets/football1.jpg';
import footballImage2 from '../assets/football2.jpg';
import footballImage3 from '../assets/football3.jpg';
import footballImage4 from '../assets/football4.jpg';
import brayImage from '../assets/bray.jpeg';
import younghImage from '../assets/youngh.webp';
import lowerImage from '../assets/lower.jpg';
import nfImage from '../assets/nf.jpg';

const Interests = () => {
  
  return (
    <>
      <h1 className="interests-text">
        <span>Interests</span>
      </h1>

        <div className="left-images row">
          <div className="left-images-interests col-md-6">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={koblenzImage} className="d-block w-100" alt="Koblenz" />
                    <div className="images-title">
                      <p>Deutsches Eck, Koblenz</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={hamburgImage} className="d-block w-100" alt="Hamburg" />
                    <div className="images-title">
                      <p>Rathaus, Hamburg</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={frankfurtImage} className="d-block w-100" alt="Frankfurt" />
                    <div className="images-title">
                      <p>Frankfurt am Main Hauptbahnhof (Frankfurt Central Station)</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={berlinImage} className="d-block w-100" alt="Berlin" />
                    <div className="images-title">
                      <p>Brandenburger Tor, Berlin</p>
                    </div>
                  </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="right-text-interests col-md-4">
            <p><span className="first-letter-paragraph">T</span><span className="remaining-paragraph">raveling is one of my most interesting hobbies. It makes me feel relaxed after hours of sitting and coding. I like traveling to Europe, especially Germany, one of the countries with beautiful sceneries, wonderful mountains and castles. One interesting fact is that Germany has 1/3 of its area covered with trees and forests. Located in the heart of Europe, it has borders with 9 other countries and plays an important role in developing the economy of all Europe. Surprisingly, I have had a chance to travel to Germany in 2022 as an exchange student in Frankfurt for 6 months, having lots of fascinating experiences and unforgettable memories here.</span></p>
            </div>
        </div>

        <div className="right-images row">
          <div className="left-text-interests col-md-4">
          <p><span className="first-letter-paragraph1">F</span><span className="remaining-paragraph1">ootball is also one of my favorite hobbies. Playing sport is a way to release stress after a hard working day and it has taught me the importance of teamwork, discipline, and perseverance, making it an integral part of my life. Each year, my university organizes a sport week which has different kinds of sports including football to maintain student's health and and create a playground for students to interact with each other, making new relationships all over the university's environment.</span></p>
          </div>

          <div className="right-images-interests col-md-6">
          <div id="carouselExampleIndicators1" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={footballImgae1} className="d-block w-100" alt="FB1" />
                    <div className="images-title1  mt-2">
                      <p>Champion of University's Cup 2021</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={footballImage2} className="d-block w-100" alt="FB2" />
                    <div className="images-title1  mt-2">
                      <p>Friendly Match In Vung Tau City</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={footballImage3} className="d-block w-100" alt="FB3" />
                    <div className="images-title1  mt-2">
                      <p>Champion Of University's Cup 2023</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={footballImage4} className="d-block w-100" alt="FB4" />
                    <div className="images-title1  mt-2">
                      <p>Champion Of University's Cup 2024</p>
                    </div>
                  </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
          </div>
        </div>

        <div className="left-images row mt-5">
          <div className="left-images-interests col-md-6">
              <div id="carouselExampleIndicators2" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={brayImage} className="d-block w-100" alt="bray" />
                    <div className="images-title2 mt-2">
                      <p>Bray - Master of storytelling rap in Vietnam</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={younghImage} className="d-block w-100" alt="youngh" />
                    <div className="images-title2 mt-2">
                      <p>Young H and Bray - A legend couple of Vietnamese Rap</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={lowerImage} className="d-block w-100" alt="lower" />
                    <div className="images-title2 mt-2">
                      <p>Lower - Young and enthusiastic in lyrics</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={nfImage} className="d-block w-100" alt="nf" />
                    <div className="images-title2 mt-2">
                      <p>NF - A hidden gem in a broken soul</p>
                    </div>
                  </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="right-text-interests col-md-4">
            <p><span className="first-letter-paragraph2">S</span><span className="remaining-paragraph2">torytelling rap music - an effective cure for my lack of motivation at work. It helps me figure out who I am and what I can do as I grow in my awareness. Usually, people listen to rap just for entertainment. Those rap songs help people create dopamine, energy, and relieve stress after a tiring day of work. But for me, honestly, I'm fascinated by the value of lyrics and stories that a rapper brings. The type of rap I like makes listeners get goosebumps, ponder and sympathize with rap verses filled with deep emotions and sometimes, I can find myself somewhere in those stories.</span></p>
            </div>
        </div>


    </>
  );
};

export default Interests;
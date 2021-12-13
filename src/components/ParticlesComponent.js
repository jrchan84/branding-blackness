import Particles from "react-tsparticles";
import React, {Component} from 'react';
import './ParticlesComponent.css';

class ParticlesComponent extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return(
      <div className="container">
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
              zIndex: 99
            },
            detectRetina: false,
            fpsLimit: 45,
            interactivity: {
              detectsOn: "parent",
              events: {
                onHover: {
                  enable: true,
                  mode: ["connect", "grab"]
                },
                resize: true
              },
              modes: {
                connect: {
                  distance: 15,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 150
                },
                grab: {
                  distance: 150,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 0.2
                  }
                }
              }
            },
            particles: {
              color: {
                value: "#05f7c0",
                animation: {
                  enable: false,
                  speed: 10,
                  sync: true
                }
              },
              lineLinked: {
                blink: false,
                color: "#05f7c0",
                consent: false,
                distance: 35,
                enable: true,
                opacity: 0.3,
                width: 0.7
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 0.2,
                straight: true
              },
              number: {
                limit: 0,
                value: 200
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.05,
                  speed: 2,
                  sync: false
                },
                random: true,
                value: 2
              },
              shape: {
                type: "circle"
              },
              size: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 40,
                  sync: false
                },
                random: true,
                value: 1
              }
            },
            polygon: {
              draw: {
                enable: true,
                lineColor: "rgba(255,255,255,0.4)",
                lineWidth: 0.5
              },
              move: {
                radius: 2,
                type: "path"
              },
              inlineArrangement: "equidistant",
              scale: 1,
              type: "inline",
              url: "https://cdn.jrchan.dev/mask-2.svg",
              position: {
                x: 30,
                y: 0
              }
            }
          }}
        />
      </div>
    )
  }
}

export default ParticlesComponent;

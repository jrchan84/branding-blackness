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
            fpsLimit: 30,
            interactivity: {
              detectsOn: "parent",
              events: {
                onHover: {
                  enable: true,
                  mode: "connect"
                },
                resize: false
              },
              modes: {
                connect: {
                  distance: 20,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 50
                },
                grab: {
                  distance: 50,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 0.25
                  }
                }
              }
            },
            particles: {
              color: {
                value: "#05f7c0"
              },
              lineLinked: {
                blink: false,
                color: "#05f7c0",
                consent: false,
                distance: 30,
                enable: true,
                opacity: 0.3,
                width: 0.5
              },
              move: {
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
                random: true,
                value: 0.5
              },
              shape: {
                type: "circle"
              },
              size: {
                random: true,
                value: 1.5
              }
            },
            polygon: {
              draw: {
                enable: true,
                lineColor: "rgba(255,255,255,0.5)",
                lineWidth: 0.6
              },
              move: {
                radius: 4,
                type: "path"
              },
              inlineArrangement: "equidistant",
              scale: 1,
              type: "inline",
              url: "https://cdn.jrchan.dev/mask-2.svg",
              position: {
                x: 20,
                y: 15
              }
            }
          }}
        />
      </div>
    )
  }
}

export default ParticlesComponent;

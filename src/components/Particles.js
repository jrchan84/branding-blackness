import Particles from "react-tsparticles";
import React, {Component} from 'react';

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
          fpsLimit: 60,
          interactivity: {
            detectsOn: "parent",
            events: {
              onHover: {
                enable: true,
                mode: ["connect", "grab"],
                parallax: {
                  enable: false,
                  force: 5,
                  smooth: 5
                }
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 60,
                duration: 20,
                opacity: 8,
                size: 5,
                speed: 1
              },
              connect: {
                distance: 20,
                links: {
                  opacity: 0.5,
                },
                radius: 200
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
              value: "#ff0000",
              animation: {
                enable: true,
                speed: 20,
                sync: true
              }
            },
            lineLinked: {
              blink: false,
              color: "random",
              consent: false,
              distance: 30,
              enable: true,
              opacity: 0.2,
              width: 0.5
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
              density: {
                enable: false,
                area: 2000
              },
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
              random: false,
              value: 1
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
              lineColor: "rgba(255,255,255,0.2)",
              lineWidth: 0.3
            },
            move: {
              radius: 10,
              type: "path"
            },
            inlineArrangement: "equidistant",
            scale: 1,
            type: "inline",
            url: "https://cdn.jrchan.dev/mask-1.svg",
            position: {
              x: 35,
              y: -25
            }
          }
        }}
      />
    )
  }
}

export default ParticlesComponent;

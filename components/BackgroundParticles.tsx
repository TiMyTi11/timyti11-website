import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function BackgroundParticles() {
  const particlesInit = async (main: Engine) => {
    await loadSlim(main)
  };

  return <Particles id="tsparticles"
                    init={particlesInit}
                    options={{
                      autoPlay: true,
                      detectRetina: true,
                      duration: 0,
                      fpsLimit: 60,
                      fullscreen: true,
                      interactivity: {
                        detectsOn: "canvas",
                        events: {
                          onClick: {
                            enable: true,
                            mode: "repulse"
                          },
                          onHover: {
                            enable: true,
                            mode: "bubble"
                          },
                          resize: true
                        },
                        modes: {
                          attract: {
                            distance: 200,
                            duration: 0.4,
                            factor: 1,
                            maxSpeed: 30,
                            speed: 1
                          },
                          bubble: {
                            distance: 250,
                            duration: 2,
                            mix: false,
                            opacity: 0,
                            size: 0
                          },
                          connect: {
                            distance: 100,
                            links: {
                              opacity: 0.5
                            },
                            radius: 60
                          },
                          grab: {
                            distance: 400,
                            links: {
                              blink: false,
                              consent: false,
                              opacity: 1
                            }
                          },
                          push: {
                            default: true,
                            groups: [],
                            quantity: 4
                          },
                          remove: {
                            quantity: 2
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.4,
                            factor: 50,
                            speed: 1,
                            maxSpeed: 30,
                          },
                          slow: {
                            factor: 3,
                            radius: 200
                          },
                        }
                      },
                      motion: {
                        disable: false,
                        reduce: {
                          factor: 4,
                          value: true
                        }
                      },
                      particles: {
                        bounce: {
                          horizontal: {
                            value: 1
                          },
                          vertical: {
                            value: 1
                          }
                        },
                        color: {
                          value: "#ffffff"
                        },
                        move: {
                          angle: {
                            offset: 0,
                            value: 90
                          },
                          decay: 0,
                          distance: {},
                          direction: "none",
                          drift: 0,
                          enable: true,
                          outModes: {
                            default: "out",
                            bottom: "out",
                            left: "out",
                            right: "out",
                            top: "out"
                          },
                          random: true,
                          size: false,
                          speed: 1,
                          straight: false,
                          vibrate: false,
                          warp: false
                        },
                        number: {
                          density: {
                            enable: true,
                            area: 800,
                            factor: 1000
                          },
                          limit: 0,
                          value: 80
                        },
                        opacity: {
                          random: {
                            enable: true,
                            minimumValue: 0.1
                          },
                          value: {
                            min: 0,
                            max: 1
                          },
                          animation: {
                            count: 0,
                            enable: true,
                            speed: 1,
                            sync: false,
                            destroy: "none",
                            startValue: "random",
                            minimumValue: 0
                          }
                        },
                        reduceDuplicates: false,
                        shape: {
                          type: "circle"
                        },
                        size: {
                          random: {
                            enable: true,
                            minimumValue: 1
                          },
                          value: {
                            min: 1,
                            max: 3
                          }
                        },
                        stroke: {
                          width: 0
                        }
                      },
                      pauseOnBlur: true,
                      pauseOnOutsideViewport: true
                    }}
  />;
}

import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import flowershoplogo from '../assets/flowershoplogo.png'; // Make sure the path is correct

export const FlowerShopLogo = ({ className }) => {
  console.log('FlowerShopLogo rendered'); // This will log every time the component is rendered
  const sketchRef = useRef();

  useEffect(() => {
    // Define the p5.js sketch
    const sketch = (p) => {
      let particles = [];
      let img;
      let scaleFactor = 0.8; // Scale down the image
      let stepSize = 1; // Create a particle for every stepSize pixels for efficiency

      p.preload = () => {
        img = p.loadImage(flowershoplogo); // Preload the image
      };

      p.setup = () => {
        p.createCanvas(500, 200).parent(sketchRef.current);
        p.noStroke();
        img.loadPixels();

        let offsetX = (p.width - img.width * scaleFactor) / 2;
        let offsetY = (p.height - img.height * scaleFactor) / 2;

        for (let y = 0; y < img.height; y += stepSize) {
          for (let x = 0; x < img.width; x += stepSize) {
            let index = (x + y * img.width) * 4;
            let r = img.pixels[index];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let alpha = img.pixels[index + 3];
            if (alpha > 128) {
              let scaledX = x * scaleFactor + offsetX;
              let scaledY = y * scaleFactor + offsetY;
              let col = p.color(r, g, b, alpha);
              particles.push(new Particle(scaledX, scaledY, col, p));
            }
          }
        }

        console.log(`Created ${particles.length} particles.`);
      };

      p.draw = () => {
        p.clear();
        particles.forEach(particle => {
          particle.update();
          particle.show();
        });
      };

      class Particle {
        constructor(x, y, col, p) {
          this.origin = p.createVector(x, y);
          this.pos = p.createVector(x, y);
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.col = col;
          this.p = p; // Store the p5 instance
          this.damping = 0.95;
        }

        applyForce(force) {
          this.acc.add(force);
        }

        update() {
          let mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
          if (mouse.dist(this.pos) < 50) {
            let repelForce = p5.Vector.sub(this.pos, mouse);
            repelForce.normalize();
            repelForce.div(mouse.dist(this.pos));
            repelForce.mult(5);
            this.applyForce(repelForce);
          }

          let returnForce = p5.Vector.sub(this.origin, this.pos);
          returnForce.mult(0.02);
          this.applyForce(returnForce);

          this.vel.add(this.acc);
          this.vel.mult(this.damping);
          this.pos.add(this.vel);
          this.acc.mult(0);
        }

        show() {
          this.p.fill(this.col);
          this.p.noStroke();
          this.p.rect(this.pos.x, this.pos.y, stepSize * scaleFactor);
        }
      }
    };

    // Create the p5.js instance
    new p5(sketch);

    // Cleanup function to remove the p5.js instance when the component unmounts
    return () => {
      sketchRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={sketchRef} className={className}></div>;
};


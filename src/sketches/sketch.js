export default function sketch(p){
    let canvas;
    let x = 0;
    let y = 0;
    let right = true;
    let down = true;
    let userX;
    let userY;
    let userXopp;
    let userYopp;
    let userRight = true;
    let userDown = true;

    p.setup = () => {
      canvas = p.createCanvas(1600, 1600);
      p.noStroke();
    }

    p.draw = () => {
      p.background('black');
      p.ellipse(x, y, 3, 3);
      p.ellipse(x, 1400 - y, 3, 3);
      p.ellipse(1400 - x, y, 3, 3);
      p.ellipse(1400 - x, 1400 - y, 3, 3);
      p.ellipse(userX, userY, 3, 3)
      p.ellipse(userXopp, userYopp, 3, 3)
      p.ellipse(userXopp, userY, 3, 3)
      p.ellipse(userX, userYopp, 3, 3)
      if (right){
        x+=4
        if (x >= 1400){
          right = false;
        }
      }
      else if (!right){
        x-=4
        if (x <= 0){
          right = true;
        }
      }
      if (down){
        y+=4
        if (y >= 1400){
          down = false;
        }
      }
      else if (!down){
        y-=4
        if (y <= 0){
          down = true;
        }
      }
      if (x === 700 & right){
        let c = p.color(255, 255, 255)
        p.fill(c)
        p.noStroke()
        p.ellipse(698, 698, 40, 40);
      }
      if (x === 704){
        let c = p.color(255, 0, 0)
        p.fill(c)
        p.noStroke()
        p.ellipse(698, 698, 20, 20);
      }
      if (x === 708){
        let c = p.color(255, 255, 255)
        p.fill(c)
        p.noStroke()
        p.ellipse(698, 698, 20, 20);
      }


      userX+=4
      userY+=4
      userXopp-=4
      userYopp-=4



      if (p.mouseIsPressed) {
        userX = p.mouseX;
        userY = p.mouseY;
        userXopp = p.mouseX;
        userYopp = p.mouseY;
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
      }
    }

}

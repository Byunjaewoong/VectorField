import {Calculate} from "./tool.js"
import {Perlin, Perlindot, PerlinGroup} from "./vectorfield.js"

class App {
    constructor(){
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.pixelRatio = 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));

        //mode
        this.mode = 0;

        //perlin scale
        this.scale = 10;


        window.addEventListener("click", (e) => {
            //mode 변경
            this.mode += 1;
            switch(this.mode){
                case 0:

                break;
                case 1:
                    
                break;
                case 2:

                break;
                default:
                this.mode = 0;
                break;
            }
            
        });

    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);

        switch(this.mode){
            case 0:
                
            break;
            case 1:
                
            break;
            case 2:

            break;
            default:
            this.mode = 0;
            break;
        }
    }    
}


window.onload = () => {
    new App();
}

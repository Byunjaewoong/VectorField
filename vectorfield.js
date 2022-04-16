import {Calculate} from "./tool.js"

export class field{
    constructor(canvas,scale,stageWidth,stageHeight){
        this.ctx = canvas.getContext('2d');
        this.scale = scale;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.perlinGroup = new PerlinGroup;
        this.get1DGrid();
    }

    get1DGrid(){
        this.dotAmount = this.scale;
        this.interval = Math.round(this.stageWidth/this.scale);
        for(let i=0;i<this.dotAmount;i++){
            const dot = new Perlindot(this.interval*i,this.stageHeight/2+this.stageHeight/4*Math.random(-1,1),0)
            this.perlinGroup.arry[i] = dot;
            console.log(this.perlinGroup.arry[i]);
        }
    }

    getGradient(dot){
        dot.y = Math.random(-1,1);
    }

    cubicInterPolate(a,b,c,d,x){
        const P = (d.y-c.y)-(a.y-b.y);
        const Q = (a.y-b.y)-P;
        const R = c.y - a.y;
        const S = b.y;

        return P*x*x*x + Q*x*x + R*x + S;
    }

    draw1Dperlin(){
        for(let i=0;i<this.stageWidth;i++){
            let j = Math.round(i/this.scale);
            /*if(this.perlinGroup.arry[j+1]&&this.perlinGroup.arry[j+2]**this.perlinGroup.arry[j+3]){
                this.height = this.cubicInterPolate(this.perlinGroup.arry[j],this.perlinGroup.arry[j+1],this.perlinGroup.arry[j+2],this.perlinGroup.arry[j+3],i-j*this.interval);
            }*/
            this.height = this.stageHeight/2;
            if(i==0){
                console.log(this.height);
            }
            this.ctx.fillStyle = "rgba(255,255,255,1)";
            this.ctx.beginPath();
            this.ctx.arc(
                i, //* ratio_w,
                this.height, //* ratio_h,
                2,
                0 * 2/8 * Math.PI, 8 * 2/8 * Math.PI  
                );
            this.ctx.fill();
        }

    }



}


export class GridGroup{
    constructor(stageWidth,stageHeight,pointScaleX,pointScaleY,cellScale){
        this.pointArry = [];
        this.gridArry = [];
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.pointScaleX = pointScaleX;
        this.pointScaleY = pointScaleY;
        this.cellScale = cellScale;
        this.genGrid(this.stageWidth,this.stageHeight);
    }

    genGrid(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        
        for(let i=0;i<=this.pointScaleX;i++){
            for(let j=0;j<=this.pointScaleY;j++){
                let gradient = Calculate.getRandomArbitrary(0,1);
                this.pointArry[i][j] = new GridPoint(i,j,i*(this.stageWidth/this.pointScaleX),j*(this.stageHeight/this.pointScaleY),gradient);
            }
        }

        for(let i=0;i<this.pointScale;i++){
            for(let j=0;j<Math.floor(this.stageHeight/this.pointScale);j++){
                this.gridArry[i][j] = new GridUnit(this.pointArry[i][j],this.pointArry[i+1][j],this.pointArry[i][j+1],this.pointArry[i+1][j+1],this.cellScale);
            }
        }

    }
}

export class GridUnit{
    constructor(point00,point01,point10,point11,cellScale){
        this.point00 = point00;
        this.point01 = point01;
        this.point10 = point10;
        this.point11 = point11;
        this.cellScale = cellScale;
        this.cellArry = [];
        this.genCell();
    }

    genCell(){
        for(let i=0;i<this.cellScale;i++){
            for(let j=0;j<this.cellScale;j++){
                this.cellArry[i][j] =new CellUnit((this.point11.x-this.point00.x)/this.cellScale*i,(this.point11.y-this.point00.y)/this.cellScale*y,gradient) ;
            }
        }
    }

}

export class CellUnit{
    constructor(x0,y0,gradient){

    }
}

export class GridPoint{
    constructor(numx,numy,x,y,gradient){
        this.numx = numx;
        this.numy = numy;
        this.x = x;
        this.y = y;
        this.gradient = gradient;
    }
}
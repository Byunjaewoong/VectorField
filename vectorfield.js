import {Calculate} from "./tool.js"

export class field{
    constructor(canvas,stageWidth,stageHeight,pointScaleX,pointScaleY,cellScale,mode){
        this.ctx = canvas.getContext('2d');
        this.pointScaleX = pointScaleX;
        this.pointScaleY = pointScaleY;
        this.cellScale = cellScale;
        this.mode = mode;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.GridGroup = new GridGroup(this.stageWidth,this.stageHeight,this.pointScaleX,this.pointScaleY,this.cellScale);
    }

    drawField(){
        switch(this.mode){
            case 0:
                this.modeStick();
            break;
            case 1:
                
            break;
            case 2:

            break;
            default:
            break;
        }
    }

    modeStick(){

    }

}


export class GridGroup{
    constructor(stageWidth,stageHeight,pointScaleX,pointScaleY,cellScale){
        this.pointArry = []; // point 모음
        this.gridArry = []; // point를 정사각형 그룹으로 모음, 내부에 cell 그룹도 있음
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.pointScaleX = pointScaleX; // X, point 갯수
        this.pointScaleY = pointScaleY; // y, point 갯수
        this.cellScale = cellScale; // point 로 둘러쌓인 내부의 정사각형의 cell 갯수
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

        for(let i=0;i<this.pointScaleX;i++){
            for(let j=0;j<this.pointScaleY;j++){
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
                let buf = new Calculate.cubicInterPolate
                let gradient = 
                this.cellArry[i][j] =new CellUnit((this.point11.x-this.point00.x)/this.cellScale*i,(this.point11.y-this.point00.y)/this.cellScale*j,(this.point11.x-this.point00.x)/this.cellScale,(this.point11.y-this.point00.y)/this.cellScale,gradient) ;
            }
        }
    }

    

}

export class CellUnit{
    constructor(x0,y0,lengthX,lengthY,gradient){
        this.x0 = x0;
        this.y0 = y0;
        this.length = {x:lengthX,y:lengthY};
        this.gradient = gradient;
        this.cellCenter = {x:this.x0+this.length.x/2,y:this.y0+this.length.y/2};
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
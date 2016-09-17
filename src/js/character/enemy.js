import { config, properties } from '../config.js'
import State from '../state.js'


/**
 * よしこ
 */
export default class Enemy{
    constructor(x, y){

        // 新しいimageインスタンスを作成する
        // Object.assignでdeepcopyしたインスタンスをcreatejsが読み込めない
        this.img = new createjs.Sprite(State.object.spritesheet.YOSHIKO.spriteSheet);

        this.img.x = x;
        this.img.y = y;

        this.img.regX = State.object.spritesheet.YOSHIKO.regX;
        this.img.regY = State.object.spritesheet.YOSHIKO.regY;
        this.img.scaleY = this.img.scaleX = State.screenScale * 0.7;
        this.img.alpha = properties.spritesheet.YOSHIKO.alpha;

        this.collisionRadius = properties.spritesheet.YOSHIKO.frames.width * properties.spritesheet.YOSHIKO.scale /2 * State.screenScale * 1.2;

        this.img.gotoAndPlay("wait");

        // // デバッグ用当たり判定円
        // var g = new createjs.Graphics();
        // g.beginStroke("#000");
        // g.beginFill("#000");
        // g.drawCircle(this.img.x,this.img.y,this.collisionRadius);
        // var shape=new createjs.Shape(g);
        // State.gameStage.addChild(shape)
    }

    /**
     * 当たり判定半径内の座標かを判定する
     * @param targetX
     * @param targetY
     * @returns {boolean}
     */
    doseColideWithFeather(feather){
        let distanceX = this.img.x - feather.img.x;
        let distanceY = this.img.y - feather.img.y;
        let distance = Math.sqrt(Math.pow(distanceX,2) + Math.pow(distanceY,2));

        return distance < this.collisionRadius;
    }

    /**
     * 羽が当たり堕天するモーションを開始する
     */
    hit(){
        this.img.gotoAndPlay("hit");
        createjs.Tween.get(this.img)
            .wait(200)
            .to({alpha: 0}, 200)
            .call(function(){});
    }
}
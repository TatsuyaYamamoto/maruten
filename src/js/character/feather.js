import State from '../state.js';
import config from '../static/config.js'
import properties from '../static/properties.js'

/**
 * ずら丸が投げる黒い羽
 */
export default class Feather{
    constructor(){
        this.startX = State.gameScrean.width  * 1/2;
        this.startY = State.gameScrean.height * 9/10;

        this.img = new createjs.Bitmap(State.object.image.FEATHER.image);
        this.img.regX = State.object.image.FEATHER.regX;
        this.img.regY = State.object.image.FEATHER.regY;
        this.img.x = this.startX;
        this.img.y = this.startY;
        this.img.scaleY = this.img.scaleX = State.screenScale * properties.image.FEATHER.scale;
        this.img.alpha = properties.image.FEATHER.alpha;
    }

    /**
     * 指定された角度で羽が飛ぶモーションを開始する
     * @param angle
     */
    move(angle, callback){
        // 羽の角度をimageインスタンスにセット
        this.img.rotation = angle * 180 / Math.PI - 90;

        // 羽を投げる距離をcanvasDOMの縦横から算出
        let destination = Math.sqrt(Math.pow(State.gameScrean.height, 2) + Math.pow(State.gameScrean.width, 2));
        // x, y方向に分解
        let destinationX = this.img.x + destination * Math.cos(angle);
        let destinationY = this.img.y + destination * Math.sin(angle);

        createjs.Tween.get(this.img)
            .to({x: destinationX, y : destinationY}, config.system.featherFlyTime)
            .call(()=>{
                callback();
            });
    }
}
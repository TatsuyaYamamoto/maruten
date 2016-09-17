import State from '../state.js';


/**
 * ずら丸クラス
 */
export default class Player{
    constructor() {
        switch (State.playCharacter) {
            case "hanamaru":
                this.img = State.object.spritesheet.HANAMARU;
                break;
        }

        this.img.gotoAndPlay("wait");
        // this.direction = "N";
        // this.wait();
    }

    wait(){
        this.img.gotoAndPlay("wait");
    }

    prepareThrow(){
        this.img.gotoAndPlay("prepareThrow");
    }

    throw(){
        this.img.gotoAndPlay("throw");
    }


    /**
     * ゲームオーバー時のモーションを実行する
     */
    finish(){
        this.img.gotoAndPlay("FINISH");
    }
}
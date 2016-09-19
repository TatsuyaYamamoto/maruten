import State from '../state.js';
import Util from '../util.js'
import GameEngine from './game-engine.js'
import Feather from '../character/feather.js';
import Enemy from '../character/enemy.js';

export default class HowToPlayEngine extends GameEngine{
    constructor(tick, callbackMenuGameState){
        super(tick, callbackMenuGameState);
    }

    // @Override
    start(){
        this.handleLinkButtonEventListener().add();

        Util.addChildren([
            State.object.image.BACKGROUND,
            State.object.image.BUTTON_BACK_MENU_FROM_HOW,
            State.object.image.ITEM_MICAN,
            State.object.text.HOW_TO_PLAY,
            State.object.text.INTRODUCTION_ITEM,
            this.player.img
        ]);

        this.appearYoshiko();

        // HowToPlayアニメーション開始
        this.tick.add(()=>{
            this.process();
        });
    }

    // @Override
    process(){
        this.gameFrame ++;
        if(this.gameFrame % 20 == 0){
            if(this.gameFrame/20 % 2 == 0){
                this.throwFeather(- Math.PI * 3/8)
            }else{
                this.throwFeather(- Math.PI * 5/8)
            }
        }
        if(this.gameFrame % 60 == 0){
            this.appearYoshiko();
        }

        this.checkHit();

        State.gameStage.update();
    }

    // @Override
    checkHit(){
        if(this.enemy != null){
            this.feathers.forEach((feather)=>{
                if(this.enemy.doseColideWithFeather(feather)){
                    this.enemy.hit();
                    State.object.sound.DATEN.play("none",0,0,0,1,0);

                    this.enemy = null;
                }
            })
        }
    }

    // @Override
    appearYoshiko(){
        if(this.enemy == null){
            let newYoshiko;
            switch(Math.floor( Math.random() * 2)){
                case 0:
                    newYoshiko = new Enemy(
                        gameScrean.width * 2/10,
                        gameScrean.height * 4/10);
                    break;
                case 1:
                    newYoshiko = new Enemy(
                        gameScrean.width * 8/10,
                        gameScrean.height * 4/10);
                    break;
            }

            State.gameStage.addChild(newYoshiko.img);

            this.enemy = newYoshiko;
        }
    }

    /*******************************
     * 画面遷移ボタンイベント
     * @returns {{add: add, remove: remove}}
     */
    handleLinkButtonEventListener(){
        const backMenu = ()=>{
            State.object.sound.BACK.play("none",0,0,0,1,0);

            this.tick.remove();
            this.handleLinkButtonEventListener().remove();

            this.callbackState();
        };

        return {
            add: ()=> {
                State.object.image.BUTTON_BACK_MENU_FROM_HOW.addEventListener("mousedown", backMenu)

            },
            remove: ()=> {
                State.object.image.BUTTON_BACK_MENU_FROM_HOW.removeAllEventListeners("mousedown")
            }
        }
    }
}
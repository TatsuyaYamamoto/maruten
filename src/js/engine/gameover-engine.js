import State from '../state.js';
import Util from '../util.js'
import Network from '../network.js'

export default class GameoverEngine {
    constructor(tick, player, callbackMenuState, callbackGameState){
        this.tick = tick;
        this.player = player;
        this.callbackMenuState = callbackMenuState;
        this.callbackGameState = callbackGameState;

        this.handleLinkButtonEventListener().add();
    }

    start(){
        // ランキング登録
        if(State.isLogin){
            Network.postScore(State.gameScore);
        }
        // ロギング
        Network.postPlayLog(State.gameScore);

        // フィニッシュアニメーション
        this.player.finish();

        // 表示スコア設定
        State.object.text.RESULT_SCORE.text = `×${State.gameScore}`;

        Util.addChildren([
            State.object.image.BACKGROUND,
            State.object.image.BUTTON_BACK_MENU_FROM_GAME,
            State.object.image.BUTTON_RESTART,
            State.object.image.GAMEOVER_IMAGE,
            State.object.text.RESULT_SCORE,
            State.object.image.RESULT_COUNT_YOSHIKO,
            State.object.image.GAMEOVER_TITLE
        ]);
        switch(State.playCharacter){
            case "hanamaru":
                State.gameStage.addChild(State.object.image.BUTTON_TWITTER_GAMEOVER_HANAMARU);
                break;
        }
        this.tick.add(()=>{
            State.gameStage.update();
        });
    }

    /*******************************
     * 画面遷移ボタンイベント
     * @returns {{add: add, remove: remove}}
     */
    handleLinkButtonEventListener(){
        const goToMenue = ()=>{
            this.tick.remove();
            this.handleLinkButtonEventListener().remove();

            State.object.sound.BACK.play("none",0,0,0,1,0);
            this.callbackMenuState();
        };
        const restart = ()=>{
            this.tick.remove();
            this.handleLinkButtonEventListener().remove();

            State.object.sound.BACK.play("none",0,0,0,1,0);
            this.callbackGameState();
        };
        const tweet = ()=>{
            window.location.href=
                `https://twitter.com/intent/tweet?hashtags=まるてん！&text=${this.getTweetText()}&url=http://games.sokontokoro-factory.net/maruten/`;
        };

        return {
            add: ()=> {
                State.object.image.BUTTON_BACK_MENU_FROM_GAME.addEventListener('mousedown', goToMenue);
                State.object.image.BUTTON_RESTART.addEventListener('mousedown', restart);
                State.object.image.BUTTON_TWITTER_GAMEOVER_HANAMARU.addEventListener('mousedown', tweet);
            },
            remove: ()=> {
                State.object.image.BUTTON_BACK_MENU_FROM_GAME.removeAllEventListeners('mousedown');
                State.object.image.BUTTON_RESTART.removeAllEventListeners('mousedown');
                State.object.image.BUTTON_TWITTER_GAMEOVER_HANAMARU.removeAllEventListeners('mousedown');
            }
        }
    }

    /************************************
     * ツイート文言を返却する
     * @returns {string}
     */
    getTweetText(){
        switch(State.playCharacter){
            case "hanamaru":
                if(State.gameScore == 0){
                    switch(Math.floor(Math.random() * 2)){
                        case 0:
                            return `まる「いや、まるには無理ず、、、いや、むり、、。」`;
                        case 1:
                            return `まる「おらには無理ずら、、、、、。」`;
                    }
                }

                switch(Math.floor(Math.random() * 4)){
                    case 0:
                        return `まる「やーっぱり、よしこちゃんは${State.gameScore}ヨハネじゃないと！」`;
                    case 1:
                        return `まる「ずら！まるがお願い聞いたずら！危なくなったら止めてと！」${State.gameScore}ヨハネ！`;
                    case 2 :
                        return `まる「さぁ！まるてん行くずらー！」 ${State.gameScore}ヨハネ！`;
                    case 3 :
                        return `まる「まさか${State.gameScore}ヨハネも堕天するとは思わなかったずら」`;
                }
        }
        return State.gameScore + "ヨハネ！";
    }
}
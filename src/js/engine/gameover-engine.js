import State from '../state.js';
import Util from '../util.js'
import Network from '../network.js'
import { CHARACTER } from '../static/constant.js'

export default class GameoverEngine {
    constructor(tick, callbackMenuState, callbackGameState){
        this.tick = tick;
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

        // 表示スコア設定
        State.object.text.RESULT_SCORE.text = `×${State.gameScore}`;

        const targetChildren = [State.object.image.BACKGROUND];

        switch(State.playCharacter){
            case CHARACTER.HANAMARU:
                targetChildren.push(
                    State.object.image.BUTTON_BACK_MENU_FROM_GAME,
                    State.object.image.BUTTON_RESTART,
                    State.object.image.GAMEOVER_IMAGE,
                    State.object.image.BUTTON_TWITTER_GAMEOVER_HANAMARU,
                    State.object.image.RESULT_COUNT_YOSHIKO
                );
                break;
            case CHARACTER.YOU:
                targetChildren.push(
                    State.object.image.BUTTON_BACK_MENU_FROM_GAME_YOU,
                    State.object.image.BUTTON_RESTART_YOU,
                    State.object.image.GAMEOVER_IMAGE_YOU,
                    State.object.image.BUTTON_TWITTER_GAMEOVER_YOU,
                    State.object.image.RESULT_COUNT_RIKO
                );
                break;
        }
        targetChildren.push(
            State.object.text.RESULT_SCORE,
            State.object.image.GAMEOVER_TITLE
        );
        Util.addChildren(targetChildren);

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
`https://twitter.com/intent/tweet
?hashtags=まるてん！+%23そこんところ工房
&text=${GameoverEngine.getTweetText()}
&url=http://games.sokontokoro-factory.net/maruten/`;
        };

        return {
            add: ()=> {
                switch(State.playCharacter){
                    case CHARACTER.HANAMARU:
                        State.object.image.BUTTON_BACK_MENU_FROM_GAME.addEventListener('mousedown', goToMenue);
                        State.object.image.BUTTON_RESTART.addEventListener('mousedown', restart);
                        State.object.image.BUTTON_TWITTER_GAMEOVER_HANAMARU.addEventListener('mousedown', tweet);
                        break;
                    case CHARACTER.YOU:
                        State.object.image.BUTTON_BACK_MENU_FROM_GAME_YOU.addEventListener('mousedown', goToMenue);
                        State.object.image.BUTTON_RESTART_YOU.addEventListener('mousedown', restart);
                        State.object.image.BUTTON_TWITTER_GAMEOVER_YOU.addEventListener('mousedown', tweet);
                        break;
                }
            },
            remove: ()=> {
                switch(State.playCharacter){
                    case CHARACTER.HANAMARU:
                        State.object.image.BUTTON_BACK_MENU_FROM_GAME.removeAllEventListeners('mousedown');
                        State.object.image.BUTTON_RESTART.removeAllEventListeners('mousedown');
                        State.object.image.BUTTON_TWITTER_GAMEOVER_HANAMARU.removeAllEventListeners('mousedown');
                        break;
                    case CHARACTER.YOU:
                        State.object.image.BUTTON_BACK_MENU_FROM_GAME_YOU.removeAllEventListeners('mousedown');
                        State.object.image.BUTTON_RESTART_YOU.removeAllEventListeners('mousedown');
                        State.object.image.BUTTON_TWITTER_GAMEOVER_YOU.removeAllEventListeners('mousedown');
                        break;
                }

            }
        }
    }

    /************************************
     * ツイート文言を返却する
     * @returns {string}
     */
    static getTweetText(){
        switch(State.playCharacter){
            case CHARACTER.HANAMARU:
                if(State.gameScore == 0){
                    switch(Math.floor(Math.random() * 2)){
                        case 0:
                            return `まる「いや、まるには無理ず、、、いや、むり、、。」`;
                        case 1:
                        default:
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
                    default:
                        return `まる「まさか${State.gameScore}ヨハネも堕天するとは思わなかったずら」`;
                }
                break;

            case CHARACTER.YOU:
                if(State.gameScore == 0){
                    switch(Math.floor(Math.random() * 2)){
                        case 0:
                            return `りこ「やっぱりなれないわ、本当にこんなに短くて大丈夫なの、、、」`;
                        case 1:
                        default:
                            return `よう「一回も当てられないなんて、バカヨウだ、、、」`;
                    }
                }

                switch(Math.floor(Math.random() * 4)){
                    case 0:
                        return `よう「${State.gameScore}リリー！スクールアイドルだもんね！」`;
                    case 1:
                        return `よう「おっ、${State.gameScore}リリーなんて、なかなかのリコちゃんマニアだね？！」`;
                    case 2 :
                        return `よう「堕天使だってタダじゃないんだから、リコちゃんもがんばルビィして！」 ${State.gameScore}リリー！`;
                    case 3 :
                    default:
                        return `よう「船も水泳も堕天使も、ユニフォームがあるところがいいんだよね。リコチャンもかわいくて最高♪」${State.gameScore}リリー！`;
                }
                break;

            default:
                return State.gameScore + "ヨハネ！";
        }
    }
}
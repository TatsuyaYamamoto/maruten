import State from '../state.js';
import {config} from '../config.js'
import Util from '../util.js'
import Player from '../character/player.js';
import Enemy from '../character/enemy.js';
import Feather from '../character/feather.js';
import ThrowAction from './throwAction.js';
import Timer from  '../timer.js';

export default class GameEngine{
	constructor(tick, callbackState){
		this.tick = tick;
		this.callbackState = callbackState;

		this.datenCount = 0;
		this.gameFrame = 0;
		this.nextCheckFrame = 20;
		this.throwAction = null;

		this.player = new Player();

		this.enemy = null;
		this.feathers = [];

		this.timer = new Timer(config.system.gameTime, ()=>{
			this.finish();
		});

		this.touchEvent = this.touchEvent.bind(this);
	}

	//ゲーム初期化-----------------------------------------
	start(){
		Util.removeAllChildren();
		Util.addChildren([
			State.object.image.BACKGROUND,
			State.object.text.GAMESTART_COUNT,
			this.player.img
		]);

		// ゲームスタートカウントスタート
		this.tick.add(()=>{
			this.countdown();
		})
	}

	// 開始カウントダウン-----------------------------------------
	countdown(){
		this.gameFrame ++;

		switch(this.gameFrame){
			case 10:
				State.object.sound.PI1.play();
				State.object.text.GAMESTART_COUNT.text = "-2-";
				State.gameStage.update();
				break;
			case 30:
				State.object.sound.PI1.play();
				State.object.text.GAMESTART_COUNT.text = "-1-";
				State.gameStage.update();
				break;

			case 50:
				State.object.sound.PI2.play();
				Util.removeAllChildren();

				this.handleTouchEventListener().add();

				Util.addChildren([
					State.object.image.BACKGROUND,
					this.player.img,
					State.object.text.SCORE_COUNT,
					State.object.spritesheet.YOSHIKO
				].concat(this.timer.getElementArray()));

				this.tick.remove();

				this.timer.start();
				// ゲームメインプロセス開始
				this.tick.add(()=>{
					this.process();
				});

				this.appearYoshiko();
				break;
		}
	}

	// ゲームメインプロセス-----------------------------------------
	process(){
		this.gameFrame ++;
		State.object.text.SCORE_COUNT.text = `×${this.datenCount}`;
		this.checkHit();
		State.gameStage.update();
	}

	/**
	 * 羽とよしこの当たり判定確認
     */
	checkHit(){
		if(this.enemy != null){
			this.feathers.forEach((feather)=>{
				if(this.enemy.doseColideWithFeather(feather)){
					this.enemy.hit();
					State.object.sound.DATEN.play("none",0,0,0,1,0);

					this.datenCount ++;
					this.appearYoshiko();
				}
			})
		}
	}

	/**
	 * 羽をよしこに投げる
	 *
	 * @param radian 投げる角度
     */
	throwFeather(radian){
		// 画面上方向の角度の場合はねを投げるモーションへ移行
		if(radian < 0){
			let feather = new Feather();
			this.feathers.push(feather);
			State.gameStage.addChildAt(feather.img, State.gameStage.getChildIndex(this.player.img));
			feather.move(radian, ()=>{
				this.feathers.shift();
			});

			this.player.throw();
			State.object.sound.THROW.play("none",0,0,0,1,0);
		}else{
			// 画面下方向の角度の場合、待機モーションに移行して終了
			this.player.wait();
		}
	}




	// 敵出現---------------------------------------
	appearYoshiko(){
		let newYoshiko = new Enemy(this.getRandomX(), this.getRandomY());
		State.gameStage.addChild(newYoshiko.img);

		this.enemy = newYoshiko;
	}

	getRandomX(){
		// 1-9のランダムな整数を取得する
		let rand = Math.floor( Math.random() * 9 ) + 1;

		return State.gameScrean.width *rand / 10;
	}
	getRandomY(){
		// 1-5のランダムな整数を取得する
		let rand = Math.floor( Math.random() * 5 ) + 1;
		return State.gameScrean.height* rand/10;
	}

	/*******************************
	 * ゲーム終了
     */
	finish(){
		// 得点登録
		State.gameScore = this.datenCount;

		// イベント削除
		this.tick.remove();
		this.handleTouchEventListener().remove();

		State.gameStage.update();

		this.callbackState(this.player)
	}

	/************************************
	 * タッチイベント
	 * @returns {{add: (function()), remove: (function())}}
     */
	handleTouchEventListener(){
		return {
			add: ()=>{
				State.gameStage.addEventListener("pressup", this.touchEvent);
				State.gameStage.addEventListener("mousedown", this.touchEvent);
			},
			remove: ()=>{
				State.gameStage.removeEventListener("pressup", this.touchEvent);
				State.gameStage.removeEventListener("mousedown", this.touchEvent);
			}
		}
	}

	touchEvent(event) {
		switch (event.type) {
			case "mousedown" :
				this.throwAction = new ThrowAction();
				this.throwAction.startX = event.stageX;
				this.throwAction.startY = event.stageY;

				this.player.prepareThrow();
				break;

			case "pressup" :
				if(this.throwAction == null){
					break;
				}
				this.throwAction.endX = event.stageX;
				this.throwAction.endY = event.stageY;

				this.throwFeather(this.throwAction.getAngle());
				this.throwAction = null;
				break;
		}
	};
}
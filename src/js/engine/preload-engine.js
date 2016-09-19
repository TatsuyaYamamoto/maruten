import State from '../state.js';
import loadImageBase64 from '../loadImageBase64.js'
import { config, properties, manifest } from '../config.js';

export default class PreloadState{
    constructor(tick, callback){
        this.tick = tick;
        this.queue = new createjs.LoadQueue();
        this.callback = callback;
    }

    /*****************************
     * ContentStateのエントリーメソッド
     */
    start(){
        const loadImage = new createjs.Bitmap(loadImageBase64);
        loadImage.scaleY = loadImage.scaleX = State.screenScale;
        loadImage.x = State.gameScrean.width * 0.5;
        loadImage.y = State.gameScrean.height * 0.5;
        loadImage.regX = loadImage.image.width * 0.5;
        loadImage.regY = loadImage.image.height * 0.5;

        var loadText = new createjs.Text();
        loadText.x = State.gameScrean.width * 1/2;
        loadText.y = State.gameScrean.height * 7/8;
        loadText.font = State.gameScrean.width * 1/10 + "px " + "Courier";
        loadText.textAlign = "center";

        State.gameStage.removeAllChildren();
        State.gameStage.addChild(loadText);
        State.gameStage.addChild(loadImage);

        this.queue.installPlugin(createjs.Sound);
        this.queue.setMaxConnections(6);

        this.queue.loadManifest(manifest.image, false);
        this.queue.loadManifest(manifest.spritesheet, false);
        this.queue.loadManifest(manifest.sound, false);

        this.queue.on("progress", (event)=>{
            loadImage.rotation = event.loaded * 360;
            loadImage.x = State.gameScrean.width * event.loaded;

            loadText.text = `loading...${Math.floor(event.loaded * 100)}%`
        });

        this.queue.on("complete", ()=>{
            // すべてのコンテンツに設定を付与する
            Object.keys(properties.spritesheet).forEach((key)=> {
                State.object.spritesheet[key] = this.getSpriteSheetContents(properties.spritesheet[key]);
            });
            Object.keys(properties.sound).forEach((key)=> {
                State.object.sound[key] = this.getSoundContent(properties.sound[key]);
            });
            Object.keys(properties.text).forEach((key)=> {
                State.object.text[key] = this.getTextContent(properties.text[key]);
            });
            Object.keys(properties.image).forEach((key)=> {
                State.object.image[key] = this.getImageContent(properties.image[key]);
            });

            State.deferredCheckLogin.then(
                (response)=>{
                    Object.keys(properties.asyncImage).forEach((key)=> {
                        State.object.image[key] = this.getAsyncImageContent(properties.asyncImage[key]);
                    });
                    this.tick.remove();
                    this.callback();
                },
                (error)=>{
                    this.tick.remove();
                    this.callback();
                });
        });

        /* 読み込み開始 */
        this.tick.add(()=>{
            State.gameStage.update();
        });
        this.queue.load();
    }

    //ロードしたコンテンツをセット------------------------------------------
    getImageContent(property){
        var image = new createjs.Bitmap(this.queue.getResult(property.id));
        image.x = State.gameScrean.width * property.ratioX;
        image.y = State.gameScrean.height * property.ratioY;
        image.regX = image.image.width/2;
        image.regY = image.image.height/2;
        image.scaleY = image.scaleX = State.screenScale * property.scale;
        image.alpha = property.alpha;
        image.rotation = property.rotation;
        return image;
    }

    getAsyncImageContent(property){

        var image = new createjs.Bitmap(property.url);
        image.x = State.gameScrean.width * property.ratioX;
        image.y = State.gameScrean.height * property.ratioY;
        // image.regX = image.width/2;
        // image.regY = image.height/2;
        image.scaleY = image.scaleX = State.screenScale * property.scale;
        image.alpha = property.alpha;

        // _imageObj.TWITTER_ICON.regX = 0;
        // _imageObj.TWITTER_ICON.regY = 73;

        return image;
    }

    getSpriteSheetContents(property){
        var spriteSheet = new createjs.SpriteSheet({
            images:[this.queue.getResult(property.id)],
            frames: property.frames,
            animations: property.animations
        });
        var ss = new createjs.Sprite(spriteSheet, property.firstAnimation);
        ss.x = State.gameScrean.width * property.ratioX;
        ss.y = State.gameScrean.height * property.ratioY;
        ss.regX = property.frames.width/2;
        ss.regY = property.frames.height/2;
        ss.scaleY = ss.scaleX = State.screenScale  * property.scale;

        return ss;
    }

    getSoundContent(property){
        return createjs.Sound.createInstance(property.id);
    }
    getTextContent(property){
        var text = new createjs.Text();
        text.x = State.gameScrean.width * property.ratioX;
        text.y = State.gameScrean.height * property.ratioY;
        text.font = State.gameScrean.width * property.size + "px " + property.family;
        text.color = property.color;
        text.textAlign = property.align;
        text.lineHeight = State.gameScrean.width * property.lineHeight;
        text.text = property.text;
        text.rotation = property.rotation;

        return text;
    }
}
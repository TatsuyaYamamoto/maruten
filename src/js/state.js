export default {
    gameStage: null,
    gameScrean: null,
    screenScale: null,

    gameFrame: 0,
    nextCheckFrame: 0,
    gameScore: 0,

    tickListener: null,

    isSoundMute: false,

    playCharacter: "hanamaru",
    player: null,

    deferredCheckLogin: null,
    isLogin: false,

    user: {
        id: "",
        name: "",
        iconURL: ""
    },
    object: {
        image: {},
        spritesheet: {},
        sound: {},
        text: {}
    }
};
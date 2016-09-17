// 設定ファイル---------------------------------
const apiServerOrigin = "http://localhost:8888";
const contextPath = "/lovelive";

export var config = {
    system: {
        FPS: 30,
        timeLength: 26000,
        gamescrean: {
            width: 640,
            height: 896
        },
        anime: {
            registrationFeedinTime: 500
        },
        difficultyLength: 0.3, 
        firstCheckFrame: 10,
        featherFlyTime: 700,
        gameTime: 20
    },
    api:{
        login:      apiServerOrigin + contextPath + "/auth/twitter/login?redirect=shakarin",
        logout:     apiServerOrigin + contextPath + "/auth/twitter/logout/",
        score:      apiServerOrigin + contextPath + "/scores/maruten/me/",
        user:       apiServerOrigin + contextPath + "/users/me/",
        playlog:    apiServerOrigin + contextPath + "/scores/maruten/playlog/"
    },
    link: {
        t28_twitter: "https://twitter.com/t28_tatsuya",
        sokontokoro: "http://sokontokoro-factory.net",
        sanzashi:    "https://twitter.com/xxsanzashixx",
        soundeffect: "http://soundeffect-lab.info/",
        on_jin:      "http://on-jin.com/"
    }
};


//定数----------------------------------------

export var properties = {
    player: {
        HANAMARU: 'hanamaru'
    },
    image: {
        TITLE_LOGO: {
            id : "TITLE_LOGO",
            ratioX: 0.5,
            ratioY: 0.5,
            scale: 1,
            alpha: 1
        },
        BACKGROUND: {
            id : "BACKGROUND",
            ratioX: 0.5,
            ratioY: 0.5,
            scale: 1,
            alpha: 1
        },
        GAMEOVER_TITLE: {
            id : "GAMEOVER_TITLE",
            ratioX: 0.5,
            ratioY: 0.25,
            scale: 1,
            alpha: 1
        },
        GAMEOVER_IMAGE: {
            id : "GAMEOVER_IMAGE",
            ratioX: 0.5,
            ratioY: 0.65,
            scale: 1,
            alpha: 1
        },
        MENU_LOGO: {
            id : "MENU_LOGO",
            ratioX: 0.5,
            ratioY: 0.5,
            scale: 1,
            alpha: 1
        },
        BUTTON_LEFT: {
            id : "BUTTON_LR",
            ratioX: 0.1,
            ratioY: 0.6,
            scale: 1,
            alpha: 1
        },
        BUTTON_RIGHT: {
            id : "BUTTON_LR",
            ratioX: 0.9,
            ratioY: 0.6,
            scale: 1,
            alpha: 1
        },
        BUTTON_TOP: {
            id : "BUTTON_UD",
            ratioX: 0.48,
            ratioY: 0.3,
            scale: 1,
            alpha: 1
        },
        BUTTON_BOTTOM: {
            id : "BUTTON_UD",
            ratioX: 0.5,
            ratioY: 0.92,
            scale: 1,
            alpha: 1
        },
        RAMEN: {
            id : "RAMEN",
            ratioX: 0.1,
            ratioY: 0.12,
            scale: 1,
            alpha: 1
        },
        BUTTON_START: {
            id : "BUTTON_START",
            ratioX: 0.42,
            ratioY: 0.25,
            scale: 1,
            alpha: 1
        },
        BUTTON_HOW: {
            id : "BUTTON_HOW",
            ratioX: 0.55,
            ratioY: 0.67,
            scale: 1,
            alpha: 1
        },
        BUTTON_RANKING: {
            id : "BUTTON_RANKING",
            ratioX: 0.35,
            ratioY: 0.63,
            scale: 1,
            alpha: 1
        },
        BUTTON_CREDIT: {
            id : "BUTTON_CREDIT",
            ratioX: 0.4,
            ratioY: 0.5,
            scale: 1,
            alpha: 1
        },
        BUTTON_BACK_MENU_FROM_CREDIT: {
            id : "BUTTON_BACK_MENU",
            ratioX: 0.5,
            ratioY: 0.9,
            scale: 1,
            alpha: 1
        },
        BUTTON_BACK_MENU_FROM_HOW: {
            id : "BUTTON_BACK_MENU",
            ratioX: 0.15,
            ratioY: 0.9,
            scale: 1,
            alpha: 1
        },
        BUTTON_TWITTER_TOP: {
            id : "BUTTON_TWITTER_TOP",
            ratioX: 0.4,
            ratioY: 0.92,
            scale: 1,
            alpha: 1
        },
        BUTTON_TWITTER_GAMEOVER_HANAMARU: {
            id : "BUTTON_TWITTER_GAMEOVER_HANAMARU",
            ratioX: 0.8,
            ratioY: 0.1,
            scale: 1,
            alpha: 1
        },
        BUTTON_TWITTER_LOGIN: {
            id : "BUTTON_TWITTER_LOGIN",
            ratioX: 0.75,
            ratioY: 0.94,
            scale: 1,
            alpha: 1
        },
        BUTTON_TWITTER_LOGOUT: {
            id : "BUTTON_TWITTER_LOGOUT",
            ratioX: 0.4,
            ratioY: 0.94,
            scale: 1,
            alpha: 1
        },
        BUTTON_BACK_MENU_FROM_GAME: {
            id : "BUTTON_BACK_MENU",
            ratioX: 0.5,
            ratioY: 0.1,
            scale: 1,
            alpha: 1
        },
        BUTTON_RESTART: {
            id : "BUTTON_RESTART",
            ratioX: 0.2,
            ratioY: 0.1,
            scale: 1,
            alpha: 1
        },
        FLAG_START: {
            id : "FLAG_START",
            ratioX: 0.1,
            ratioY: 0.1,
            scale: 1,
            alpha: 1
        },
        FLAG_END: {
            id : "FLAG_END",
            ratioX: 0.9,
            ratioY: 0.1,
            scale: 1,
            alpha: 1
        },
        FEATHER: {
            id : "FEATHER",
            ratioX: 0.5,
            ratioY: 0.5,
            scale: 1,
            alpha: 1
        }

    },
    spritesheet: {
        HANAMARU: {
            id : "SS_HANAMARU",
            ratioX: 0.5,
            ratioY: 0.9,
            scale: 1,
            alpha: 1,
            frames: {
                // width: 467,
                // height: 467
                width: 383,
                height: 383
            },
            animations: {
                wait: {
                    frames: [0]
                },
                prepareThrow: {
                    frames: [1]
                    // speed: 0.5,
                    // next: "wait"
                },
                throw: {
                    frames: [2,3],
                    speed: 0.5,
                    next: "wait"
                }
            },
            firstAnimation: "wait"
        },
        YOSHIKO: {
            id : "SS_YOSHIKO",
            ratioX: 0.8,
            ratioY: 0.91,
            scale: 0.4,
            alpha: 1,
            frames: {
                // width: 467,
                // height: 467
                width: 147,
                height: 240
            },
            animations: {
                wait: {
                    frames: [0, 1],
                    speed: 0.1,
                    next: true
                },
                hit: {
                    frames: [2]
                }
            },
            firstAnimation: "hit"
        },
        BUTTON_SOUND_SPRITESHEET: {
            id : "BUTTON_SOUND_SS",
            ratioX: 0.2,
            ratioY: 0.92,
            scale: 1,
            alpha: 1,
            frames:{
                width : 123,
                height : 112
            },
            animations: {
                on:{
                    frames: 0
                },
                off: {
                    frames: 1
                }
            },
            firstAnimation: "on"
        }
    },
    sound: {
        OK: {
            id: "SOUND_OK",
            canMute: true
        },
        BACK: {
            id: "SOUND_BACK",
            canMute: true
        },
        THROW: {
            id: "SOUND_THROW",
            canMute: true
        },
        DATEN: {
            id: "SOUND_DATEN",
            canMute: true
        },
        GAME_LOOP: {
            id: "SOUND_GAME_LOOP",
            canMute: true
        },
        GAME_END: {
            id: "SOUND_GAME_END",
            canMute: true
        },
        ZENKAI: {
            id: "SOUND_ZENKAI",
            canMute: true
        },
        PI1: {
            id: "SOUND_PI1",
            canMute: true
        },
        PI2: {
            id: "SOUND_PI2",
            canMute: true
        },
        TURN_SWITCH: {
            id: "TURN_SWITCH",
            canMute: false
        }
    },
    text: {
        START: {
            ratioX: 0.5,
            ratioY: 0.93,
            size: 0.05,
            family: "Courier",
            align: "center",
            lineHeight: 0.04,
            text : "-Please tap on the display!-"
        },
        HOW_TO_PLAY: {
            ratioX: 0.5,
            ratioY: 0.05,
            size: 0.04,
            family: "Courier",
            align: "center",
            lineHeight: 0.05,
            text :
                `やっぱり善子ちゃんはそうじゃないと！\n無理に普通になろうとする善子ちゃんに羽を挿して堕天させよう！\n善子ちゃんに向かって画面をスライドさせるずら！`
        },
        SCORE_COUNT: {
            ratioX: 0.85,
            ratioY: 0.9,
            size: 0.05,
            family: "Courier",
            align: "left",
            lineHeight: 0.04,
            text: ""
        },
        TIME_LEFT: {
            ratioX: 0.25,
            ratioY: 0.85,
            size: 0.05,
            family: "Courier",
            align: "right",
            lineHeight: 0.04,
            text: ""
        },
        GAMESTART_COUNT: {
            ratioX: 0.5,
            ratioY: 0.2,
            size: 0.1,
            family: "Impact",
            align: "center",
            lineHeight: 0.07,
            text: ""
        },
        LINK_SOKONTOKORO: {
            ratioX: 0.5,
            ratioY: 0.15,
            size: 0.05,
            family: "Arial",
            align: "center",
            lineHeight: 0.07,
            text: "プログラム、音楽、思いつき：T28\rhttp://sokontokoro-factory.net"
        },
        LINK_SANZASHI: {
            ratioX: 0.5,
            ratioY: 0.3,
            size: 0.05,
            family: "Verdana",
            align: "center",
            lineHeight: 0.07,
            text: "イラスト：さんざし\rhttps://twitter.com/xxsanzashixx"
        },
        LINK_SOUNDEFFECT: {
            ratioX: 0.5,
            ratioY: 0.5,
            size: 0.04,
            family: "Courier",
            align: "center",
            lineHeight: 0.05,
            text: "効果音：効果音ラボ 樣\rhttp://soundeffect-lab.info/"
        },
        LINK_ONJIN: {
            ratioX: 0.5,
            ratioY: 0.6,
            size: 0.04,
            family: "Courier",
            align: "center",
            lineHeight: 0.05,
            text: "効果音：On-Jin ～音人～ 樣\rhttp://on-jin.com/"
        },
        LINK_LOVELIVE: {
            ratioX: 0.5,
            ratioY: 0.7,
            size: 0.04,
            family: "Courier",
            align: "center",
            lineHeight: 0.05,
            text: "プロジェクトラブライブ！\rhttp://www.lovelive-anime.jp"
        },
        REGISTRATION: {
            ratioX: 0.4,
            ratioY: 0.9,
            size: 0.04,
            family: "Courier",
            align: "center",
            color: "#ffffff",
            lineHeight: 0.1, 
            text: "ランキングシステム　通信完了！"
        }
    },
    asyncImage: {
        TWITTER_ICON: {
            url : "",
            ratioX: 0.04,
            ratioY: 0.91,
            scale: 1.3,
            alpha: 1          
        }
    }
};

// 画像、音声ファイル---------------------------------
export var manifest = {
    image: [
        {
            id : "TITLE_LOGO",
            src: "img/TITLE_LOGO.png"
        },
        {
            id : "BACKGROUND",
            src: "img/BACKGROUND.png"
        },
        {
            id : "MENU_LOGO",
            src: "img/MENU_LOGO.png"
        },
        {
            id : "BUTTON_START",
            src: "img/BUTTON_START.png"
        },
        {
            id : "BUTTON_HOW",
            src: "img/BUTTON_HOW.png"
        },
        {
            id : "BUTTON_CREDIT",
            src: "img/BUTTON_CREDIT.png"
        },
        {
            id : "BUTTON_RANKING",
            src: "img/BUTTON_RANKING.png"
        },
        {
            id : "BUTTON_LR",
            src: "img/BUTTON_LR.png"
        },
        {
            id : "BUTTON_UD",
            src: "img/BUTTON_UD.png"
        },
        {
            id : "BUTTON_TWITTER_TOP",
            src: "img/BUTTON_TWITTER_TOP.png"
        },
        {
            id : "RAMEN",
            src: "img/RAMEN.png"
        },
        {
            id : "GAMEOVER_TITLE",
            src: "img/GAMEOVER_TITLE.png"
        },
        {
            id : "GAMEOVER_IMAGE",
            src: "img/GAMEOVER_IMAGE.png"
        },
        {
            id : "BUTTON_BACK_MENU",
            src: "img/BUTTON_BACK_MENU.png"
        },
        {
            id : "BUTTON_RESTART",
            src: "img/BUTTON_RESTART.png"
        },
        {
            id : "BUTTON_TWITTER_LOGIN",
            src: "img/BUTTON_TWITTER_LOGIN.png"
        },
        {
            id : "BUTTON_TWITTER_LOGOUT",
            src: "img/BUTTON_TWITTER_LOGOUT.png"
        },
        {
            id : "BUTTON_TWITTER_GAMEOVER_HANAMARU",
            src: "img/BUTTON_TWITTER_GAMEOVER_HANAMARU.png"
        },
        {
            id : "FLAG_START",
            src: "img/FLAG_START.png"
        },
        {
            id : "FLAG_END",
            src: "img/FLAG_END.png"
        },
        {
            id : "YOSHIKO",
            src: "img/YOSHIKO.png"
        },
        {
            id : "FEATHER",
            src: "img/FEATHER.png"
        }
    ],
    spritesheet:[
        {
            id : "SS_HANAMARU",
            src: "img/SPRITESHEET_HANAMARU.png"
        },
        {
            id : "SS_YOSHIKO",
            src: "img/SPRITESHEET_YOSHIKO.png"
        },
        {
            id : "BUTTON_SOUND_SS",
            src: "img/BUTTON_SOUND_SPRITESHEET.png"
        }
    ],
    sound: [
        {
            id : "SOUND_OK",
            src: "sound/OK.mp3"
        },
        {
            id : "SOUND_BACK",
            src: "sound/BACK.mp3"
        },
        {
            id : "SOUND_THROW",
            src: "sound/THROW.mp3"
        },
        {
            id : "SOUND_DATEN",
            src: "sound/DATEN.mp3"
        },
        {
            id : "SOUND_GAME_LOOP",
            src: "sound/GAME_LOOP.mp3"
        },
        {
            id : "SOUND_GAME_END",
            src: "sound/GAME_END.mp3"
        },
        {
            id : "SOUND_ZENKAI",
            src: "sound/ZENKAI.mp3"
        },
        {
            id : "SOUND_PI1",
            src: "sound/PI1.mp3"
        },
        {
            id : "SOUND_PI2",
            src: "sound/PI2.mp3"
        },
        {
            id : "TURN_SWITCH",
            src: "sound/TURN_SWITCH.mp3"
        }
    ],
    load: [
        {
            id : "LOAD_IMG",
            src: "img/LOAD_KOTORI.png"
        }
    ],
    api: [
        {
            id : "TWITTER_ICON",
            src: ""
        }
    ]
};
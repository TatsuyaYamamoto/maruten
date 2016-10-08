// 設定ファイル---------------------------------
const apiServerOrigin = "http://api.sokontokoro-factory.net";
const contextPath = "/lovelive";

export default {
    system: {
        FPS: 30,
        gamescrean: {
            width: 640,
            height: 896
        },
        featherFlyTime: 700,
        gameTime: 20,
        additionalTimeByItem: 4,
    },
    api:{
        login:      apiServerOrigin + contextPath + "/auth/twitter/login?redirect=maruten",
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
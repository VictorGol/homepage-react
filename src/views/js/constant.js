const commands = [
  { name: "ahhhhfs", link: "https://www.abskoop.com", tag: ["info"], desc: "" },
  {
    name: "apipost",
    link: "https://console.apipost.cn/",
    tag: ["dev", "debug"],
    desc: "",
  },
  { name: "astro", link: "https://astro.build/", tag: ["framework"], desc: "" },
  {
    name: "axios",
    link: "https://www.axios-http.cn/docs/intro",
    tag: ["request", "lib"],
    desc: "",
  },
  {
    name: "baidu",
    link: "https://www.baidu.com/",
    tag: ["search", "engine"],
    desc: "",
  },
  { name: "BgSub", link: "https://bgsub.cn/webapp/", tag: ["img"], desc: "" },
  { name: "bili", link: "https://t.bilibili.com/", tag: ["info"], desc: "" },
  {
    name: "bilibili",
    link: "https://www.bilibili.com/",
    tag: ["info"],
    desc: "",
  },
  { name: "bing", link: "https://cn.bing.com/", tag: ["info"], desc: "" },
  { name: "bing-new", link: "https://www.bing.com/", tag: ["info"], desc: "" },
  {
    name: "blog",
    link: "https://victorgol.github.io/DDD-BLOG/",
    tag: ["info"],
    desc: "",
  },
  { name: "brave", link: "https://search.brave.com/", tag: ["info"], desc: "" },
  { name: "cai", link: "https://www.runoob.com", tag: ["info"], desc: "" },
  { name: "can i use", link: "https://caniuse.com", tag: ["info"], desc: "" },
  {
    name: "chatgpt",
    link: "https://chat.openai.com/chat",
    tag: ["info"],
    desc: "",
  },
  { name: "csdn", link: "https://www.csdn.net/", tag: ["info"], desc: "" },
  { name: "cupfox", link: "https://cupfox.app", tag: ["info"], desc: "" },
  { name: "date-fns", link: "https://date-fns.org", tag: ["info"], desc: "" },
  {
    name: "DB-EnginesRanking",
    link: "https://db-engines.com/en/ranking",
    tag: ["info"],
    desc: "",
  },
  {
    name: "deepl",
    link: "https://www.deepl.com/translator",
    tag: ["info"],
    desc: "",
  },
  { name: "diduan", link: "https://ddys.tv", tag: ["info"], desc: "" },
  { name: "docus", link: "https://docus.dev", tag: ["info"], desc: "" },
  { name: "douyu", link: "https://www.douyu.com", tag: ["info"], desc: "" },
  { name: "douyin", link: "https://www.douyin.com/", tag: ["info"], desc: "" },
  {
    name: "duckduckgo",
    link: "https://duckduckgo.com",
    tag: ["info"],
    desc: "",
  },
  {
    name: "electron",
    link: "https://www.electronjs.org/zh/docs/latest/tutorial/process-model",
    tag: ["info"],
    desc: "",
  },
  {
    name: "elementplus",
    link: "https://element-plus.gitee.io/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "elementui",
    link: "https://element.eleme.cn/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "es-checker",
    link: "http://ruanyf.github.io/es-checker/index.cn.html",
    tag: ["info"],
    desc: "",
  },
  {
    name: "Fighting Design-vue3",
    link: "https://fighting.tianyuhao.cn/components/button.html",
    tag: ["info"],
    desc: "",
  },
  { name: "figma", link: "https://www.figma.com", tag: ["info"], desc: "" },
  {
    name: "Font Awesome",
    link: "https://fontawesome.com/search?o=r&m=free",
    tag: ["info"],
    desc: "",
  },
  {
    name: "fanyi",
    link: "https://translate.google.cn/",
    tag: ["info"],
    desc: "",
  },
  { name: "fitacg-anime", link: "https://fitacg.com", tag: ["info"], desc: "" },
  {
    name: "flickr-img",
    link: "https://www.flickr.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "fsou-search",
    link: "https://fsoufsou.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "genshin",
    link: "https://ys.mihoyo.com/main/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "genshin-map",
    link: "https://webstatic.mihoyo.com/ys/app/interactive-map/index.html",
    tag: ["info"],
    desc: "",
  },
  { name: "git", link: "https://git-scm.com", tag: ["info"], desc: "" },
  { name: "gitee", link: "https://gitee.com", tag: ["info"], desc: "" },
  { name: "github", link: "https://github.com/", tag: ["info"], desc: "" },
  { name: "go-cn", link: "https://studygolang.com", tag: ["info"], desc: "" },
  { name: "google", link: "https://www.google.com/", tag: ["info"], desc: "" },
  {
    name: "googleimg",
    link: "https://www.google.com.tw/imghp",
    tag: ["info"],
    desc: "",
  },
  {
    name: "hackernews",
    link: "https://news.ycombinator.com",
    tag: ["info"],
    desc: "",
  },
  {
    name: "hifini-music",
    link: "https://www.hifini.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "hikari-animeSearchEngine",
    link: "https://hikari.obfs.dev",
    tag: ["info"],
    desc: "",
  },
  {
    name: "honeyimpact-genshin",
    link: "https://genshin.honeyhunterworld.com",
    tag: ["info"],
    desc: "",
  },
  {
    name: "houdunren",
    link: "https://doc.houdunren.com",
    tag: ["info"],
    desc: "",
  },
  { name: "hupu", link: "https://bbs.hupu.com", tag: ["info"], desc: "" },
  { name: "huya", link: "https://www.huya.com", tag: ["info"], desc: "" },
  {
    name: "iconfinder",
    link: "https://www.iconfinder.com/",
    tag: ["info"],
    desc: "",
  },
  { name: "iconGo", link: "https://icongo.github.io", tag: ["info"], desc: "" },
  {
    name: "icons.download",
    link: "https://icons.download/",
    tag: ["info"],
    desc: "",
  },
  { name: "ip", link: "https://www.ip138.com/", tag: ["info"], desc: "" },
  {
    name: "ipaddress",
    link: "https://www.ipaddress.com/",
    tag: ["info"],
    desc: "",
  },
  { name: "jd", link: "https://www.jd.com", tag: ["info"], desc: "" },
  { name: "juejin", link: "https://juejin.cn", tag: ["info"], desc: "" },
  {
    name: "juejin-challenge",
    link: "https://juejin.cn/challenge/1?utm_source=code_nav",
    tag: ["info"],
    desc: "",
  },
  { name: "kagi", link: "https://kagi.com/", tag: ["info"], desc: "" },
  { name: "kaifa", link: "https://kaifa.baidu.com", tag: ["info"], desc: "" },
  {
    name: "konachan",
    link: "https://konachan.net/post",
    tag: ["info"],
    desc: "",
  },
  { name: "lodash", link: "https://lodash.com", tag: ["info"], desc: "" },
  {
    name: "markdown",
    link: "https://markdown.com.cn/",
    tag: ["info"],
    desc: "",
  },
  { name: "me", link: "https://bento.me/ddd", tag: ["info"], desc: "" },
  { name: "meiju1", link: "https://mjw21.com/", tag: ["info"], desc: "" },
  {
    name: "mdn",
    link: "https://developer.mozilla.org/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "miyoushe-genshin",
    link: "https://bbs.mihoyo.com/ys/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "mormalize.css",
    link: "https://necolas.github.io/normalize.css/",
    tag: ["info"],
    desc: "",
  },
  { name: "nestjs", link: "https://www.nestjs.com", tag: ["info"], desc: "" },
  {
    name: "nestjs-cn",
    link: "https://www.nestjs.com.cn",
    tag: ["info"],
    desc: "",
  },
  { name: "nextjs", link: "https://nextjs.org/", tag: ["info"], desc: "" },
  {
    name: "nga",
    link: "https://bbs.nga.cn/thread.php?fid=650",
    tag: ["info"],
    desc: "",
  },
  { name: "nodejs", link: "https://nodejs.org/en/", tag: ["info"], desc: "" },
  { name: "notion", link: "https://www.notion.so/", tag: ["info"], desc: "" },
  {
    name: "nowcoder-niuke",
    link: "https://www.nowcoder.com/exam/company",
    tag: ["info"],
    desc: "",
  },
  { name: "nuxtjs", link: "https://nuxt.com", tag: ["info"], desc: "" },
  {
    name: "nuxt-cn",
    link: "https://www.nuxtjs.org.cn",
    tag: ["info"],
    desc: "",
  },
  { name: "openai", link: "https://openai.com/", tag: ["info"], desc: "" },
  { name: "petal", link: "https://petalsearch.com", tag: ["info"], desc: "" },
  {
    name: "php教程-w3cschool",
    link: "https://www.w3cschool.cn/php/",
    tag: ["info"],
    desc: "",
  },
  { name: "pinia", link: "https://pinia.vuejs.org", tag: ["info"], desc: "" },
  { name: "pixiv", link: "https://www.pixiv.net/", tag: ["info"], desc: "" },
  {
    name: "potplayer",
    link: "https://daumpotplayer.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "proxy-web-storage",
    link: "https://github.com/KID-joker/proxy-web-storage",
    tag: ["info"],
    desc: "",
  },
  { name: "qidian", link: "https://www.qidian.com/", tag: ["info"], desc: "" },
  { name: "qqmusic", link: "https://y.qq.com/", tag: ["info"], desc: "" },
  { name: "react", link: "https://react.dev/", tag: ["info"], desc: "" },
  { name: "reddit", link: "https://www.reddit.com/", tag: ["info"], desc: "" },
  { name: "rust", link: "https://www.rust-lang.org/", tag: ["info"], desc: "" },
  {
    name: "ryf",
    link: "http://www.ruanyifeng.com/blog/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "ryf-github",
    link: "https://github.com/ruanyf/weekly",
    tag: ["info"],
    desc: "",
  },
  {
    name: "ryf-vercel",
    link: "https://ruanyf-weekly.vercel.app/",
    tag: ["info"],
    desc: "",
  },
  { name: "ruoyi", link: "http://www.ruoyi.vip", tag: ["info"], desc: "" },
  {
    name: "start-page",
    link: "https://www.startpage.com",
    tag: ["info"],
    desc: "",
  },
  { name: "sougou", link: "https://www.sogou.com", tag: ["info"], desc: "" },
  { name: "twitter", link: "https://twitter.com/", tag: ["info"], desc: "" },
  {
    name: "uniapp",
    link: "https://uniapp.dcloud.net.cn",
    tag: ["info"],
    desc: "",
  },
  { name: "unsplash", link: "https://unsplash.com", tag: ["info"], desc: "" },
  {
    name: "uviewUI",
    link: "https://www.uviewui.com/components/intro.html",
    tag: ["info"],
    desc: "",
  },
  { name: "v2ex", link: "https://www.v2ex.com", tag: ["info"], desc: "" },
  { name: "v8", link: "https://v8.dev/", tag: ["info"], desc: "" },
  {
    name: "VexipUI_vue3_typescript",
    link: "https://www.vexipui.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "video-HDmoli",
    link: "https://www.hdmoli.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "vitepress",
    link: "https://vitepress.vuejs.org",
    tag: ["info"],
    desc: "",
  },
  {
    name: "vmware教程",
    link: "https://zhuanlan.zhihu.com/p/272541376",
    tag: ["info"],
    desc: "",
  },
  { name: "vue", link: "https://vuejs.org/", tag: ["info"], desc: "" },
  {
    name: "vue-color-avatar",
    link: "https://vue-color-avatar.vercel.app/",
    tag: ["info"],
    desc: "",
  },
  { name: "vuecn", link: "https://cn.vuejs.org", tag: ["info"], desc: "" },
  {
    name: "vuerouter",
    link: "https://router.vuejs.org/",
    tag: ["info"],
    desc: "",
  },
  { name: "vueuse", link: "https://vueuse.org", tag: ["info"], desc: "" },
  { name: "wallhaven", link: "https://wallhaven.cc/", tag: ["info"], desc: "" },
  { name: "wallhere", link: "https://wallhere.com/", tag: ["info"], desc: "" },
  {
    name: "wallpaper-anime-pictures",
    link: "https://anime-pictures.net/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "webstore-chrome",
    link: "https://chrome.google.com/webstore/category/extensions",
    tag: ["info"],
    desc: "",
  },
  { name: "wechat", link: "https://mp.weixin.qq.com", tag: ["info"], desc: "" },
  { name: "weread", link: "https://weread.qq.com", tag: ["info"], desc: "" },
  {
    name: "weibo",
    link: "https://weibo.com/login.php/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "wexin-developers",
    link: "https://developers.weixin.qq.com/doc/",
    tag: ["info"],
    desc: "",
  },
  { name: "wyy", link: "https://music.163.com/", tag: ["info"], desc: "" },
  { name: "yande", link: "https://yande.re/post", tag: ["info"], desc: "" },
  {
    name: "yandex",
    link: "https://yandex.com/images/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "youdao",
    link: "https://fanyi.youdao.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "ysmuskreef-genshin",
    link: "http://ysmuskreef.com/",
    tag: ["info"],
    desc: "",
  },
  {
    name: "zhengze",
    link: "https://www.runoob.com/jsref/jsref-obj-regexp.html",
    tag: ["info"],
    desc: "",
  },
  { name: "zhihu", link: "https://www.zhihu.com/", tag: ["info"], desc: "" },
  {
    name: "zlib",
    link: "https://zlibsearch.1kbtool.com",
    tag: ["info"],
    desc: "",
  },
  {
    name: "zlibrary",
    link: "https://singlelogin.me/",
    tag: ["info"],
    desc: "",
  },
  { name: "云效", link: "https://devops.aliyun.com/", tag: ["info"], desc: "" },
  {
    name: "域名备案查询",
    link: "https://beian.miit.gov.cn/#/Integrated/index",
    tag: ["info"],
    desc: "",
  },
  {
    name: "星辰",
    link: "https://wudixingxing.com/user",
    tag: ["info"],
    desc: "",
  },
  {
    name: "f-TNT",
    link: "https://github.com/tnfe/TNT-Weekly",
    tag: ["info"],
    desc: "",
  },
  {
    name: "f-focus",
    link: "https://frontendfoc.us/issues",
    tag: ["info"],
    desc: "",
  },
  {
    name: "f-javascript-weekly",
    link: "https://javascriptweekly.com/issues",
    tag: ["info"],
    desc: "",
  },
  {
    name: "f-juejin",
    link: "https://juejin.cn/frontend",
    tag: ["info"],
    desc: "",
  },
  {
    name: "f-nodejs-weekly",
    link: "https://nodeweekly.com/issues",
    tag: ["info"],
    desc: "",
  },
  {
    name: "f-前端精读",
    link: "https://github.com/ascoders/weekly",
    tag: ["info"],
    desc: "",
  },
  {
    name: "f-live-longer",
    link: "https://github.com/geekan/HowToLiveLonger",
    tag: ["info"],
    desc: "",
  },
];

for (let i in commands) {
  commands.id = "c" + i;
}

export default commands;

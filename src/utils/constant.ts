interface Command {
  name: string;
  link: string;
  tag: string[];
  desc: string;
  id?: string;
}

const commands: Command[] = [
  { name: "ahhhhfs", link: "https://www.abskoop.com", tag: ["info"], desc: "" },
  {
    name: "apipost",
    link: "https://console.apipost.cn/",
    tag: ["dev", "debug"],
    desc: "",
  },
  {
    name: "astro",
    link: "https://astro.build/",
    tag: ["framework"],
    desc: "Astro is the all-in-one web framework designed for speed.",
  },
  {
    name: "axios",
    link: "https://axios-http.com/",
    tag: ["request", "lib"],
    desc: "Promise based HTTP client for the browser and node.js",
  },
  {
    name: "baidu",
    link: "https://www.baidu.com/",
    tag: ["search", "engine"],
    desc: "中文搜索引擎",
  },
  {
    name: "BgSub",
    link: "https://bgsub.cn/webapp/",
    tag: ["img"],
    desc: "抠图",
  },
  {
    name: "bili",
    link: "https://t.bilibili.com/",
    tag: ["video"],
    desc: "b站动态页",
  },
  {
    name: "bilibili",
    link: "https://www.bilibili.com/",
    tag: ["video"],
    desc: "b站首页",
  },
  {
    name: "bing",
    link: "https://www.bing.com/",
    tag: ["search", "engine"],
    desc: "必应搜索",
  },
  {
    name: "blog",
    link: "https://victorgol.github.io/DDD-BLOG/",
    tag: ["article", "technology"],
    desc: "我自己的博客",
  },
  {
    name: "brave",
    link: "https://search.brave.com/",
    tag: ["search", "engine"],
    desc: "一个搜索引擎",
  },
  {
    name: "cai",
    link: "https://www.runoob.com",
    tag: ["tutorail", "technology"],
    desc: "菜鸟教程",
  },
  {
    name: "can i use",
    link: "https://caniuse.com",
    tag: ["tool"],
    desc: "检查css属性是否能用",
  },
  {
    name: "chatgpt",
    link: "https://chat.openai.com/chat",
    tag: ["ai", "chat"],
    desc: "",
  },
  {
    name: "crates",
    link: "https://crates.io/",
    tag: ["rust", "registry"],
    desc: "",
  },
  { name: "csdn", link: "https://www.csdn.net/", tag: ["forum"], desc: "" },
  { name: "cupfox", link: "https://cupfox.app", tag: ["video"], desc: "" },
  { name: "date-fns", link: "https://date-fns.org", tag: ["lib"], desc: "" },
  {
    name: "DB-EnginesRanking",
    link: "https://db-engines.com/en/ranking",
    tag: ["database", "ranking"],
    desc: "",
  },
  {
    name: "deepl",
    link: "https://www.deepl.com/translator",
    tag: ["translate"],
    desc: "",
  },
  { name: "diduan", link: "https://ddys.tv", tag: ["video"], desc: "" },
  { name: "douyu", link: "https://www.douyu.com", tag: ["live"], desc: "" },
  { name: "douyin", link: "https://www.douyin.com/", tag: ["video"], desc: "" },
  {
    name: "duckduckgo",
    link: "https://duckduckgo.com",
    tag: ["search", "engine"],
    desc: "",
  },
  {
    name: "electron",
    link: "https://www.electronjs.org/zh/docs/latest/tutorial/process-model",
    tag: ["framework"],
    desc: "",
  },
  {
    name: "elementplus",
    link: "https://element-plus.gitee.io/",
    tag: ["vue3", "ui"],
    desc: "",
  },
  {
    name: "elementui",
    link: "https://element.eleme.cn/",
    tag: ["vue2", "ui"],
    desc: "",
  },
  {
    name: "es-checker",
    link: "http://ruanyf.github.io/es-checker/index.cn.html",
    tag: ["ryf"],
    desc: "",
  },
  {
    name: "Fighting Design-vue3",
    link: "https://fighting.tianyuhao.cn/components/button.html",
    tag: ["ui"],
    desc: "",
  },
  { name: "figma", link: "https://www.figma.com", tag: ["design"], desc: "" },
  {
    name: "Font Awesome",
    link: "https://fontawesome.com/search?o=r&m=free",
    tag: [],
    desc: "",
  },
  {
    name: "fanyi",
    link: "https://translate.google.cn/",
    tag: ["translate"],
    desc: "",
  },
  { name: "fitacg", link: "https://fitacg.com", tag: ["anime"], desc: "" },
  {
    name: "flickr",
    link: "https://www.flickr.com/",
    tag: ["img"],
    desc: "",
  },
  {
    name: "fsou",
    link: "https://fsoufsou.com/",
    tag: ["search", "engine"],
    desc: "",
  },
  {
    name: "genshin",
    link: "https://ys.mihoyo.com/main/",
    tag: ["game"],
    desc: "",
  },
  {
    name: "genshin-map",
    link: "https://webstatic.mihoyo.com/ys/app/interactive-map/index.html",
    tag: ["game"],
    desc: "",
  },
  { name: "git", link: "https://git-scm.com", tag: [], desc: "" },
  { name: "gitee", link: "https://gitee.com", tag: ["code"], desc: "" },
  { name: "github", link: "https://github.com/", tag: ["code"], desc: "" },
  {
    name: "go-cn",
    link: "https://studygolang.com",
    tag: ["language", "china"],
    desc: "",
  },
  {
    name: "google",
    link: "https://www.google.com/",
    tag: ["search", "engine"],
    desc: "",
  },
  {
    name: "googleimg",
    link: "https://www.google.com.tw/imghp",
    tag: [],
    desc: "",
  },
  {
    name: "hackernews",
    link: "https://news.ycombinator.com",
    tag: [],
    desc: "",
  },
  {
    name: "hifini",
    link: "https://www.hifini.com/",
    tag: ["music"],
    desc: "",
  },
  {
    name: "hikari",
    link: "https://hikari.obfs.dev",
    tag: ["anime-search"],
    desc: "",
  },
  {
    name: "honeyimpact",
    link: "https://genshin.honeyhunterworld.com",
    tag: ["genshin", "game"],
    desc: "",
  },
  {
    name: "houdunren",
    link: "https://doc.houdunren.com",
    tag: ["programming"],
    desc: "",
  },
  { name: "hupu", link: "https://bbs.hupu.com", tag: ["forum"], desc: "" },
  { name: "huya", link: "https://www.huya.com", tag: ["live"], desc: "" },
  {
    name: "iconfinder",
    link: "https://www.iconfinder.com/",
    tag: [],
    desc: "",
  },
  { name: "iconGo", link: "https://icongo.github.io", tag: [], desc: "" },
  {
    name: "icons.download",
    link: "https://icons.download/",
    tag: [],
    desc: "",
  },
  { name: "ip", link: "https://www.ip138.com/", tag: [], desc: "" },
  {
    name: "ipaddress",
    link: "https://www.ipaddress.com/",
    tag: [],
    desc: "",
  },
  { name: "jd", link: "https://www.jd.com", tag: ["shopping"], desc: "" },
  { name: "juejin", link: "https://juejin.cn", tag: ["forum"], desc: "" },
  {
    name: "kagi",
    link: "https://kagi.com/",
    tag: ["search", "engine"],
    desc: "",
  },
  {
    name: "kaifa",
    link: "https://kaifa.baidu.com",
    tag: ["baidu", "dev"],
    desc: "",
  },
  {
    name: "konachan",
    link: "https://konachan.net/post",
    tag: ["img"],
    desc: "",
  },
  { name: "lodash", link: "https://lodash.com", tag: ["lib"], desc: "" },
  {
    name: "markdown",
    link: "https://markdown.com.cn/",
    tag: ["note", "tool"],
    desc: "",
  },
  { name: "me", link: "https://bento.me/ddd", tag: [], desc: "" },
  {
    name: "meiju1",
    link: "https://mjw21.com/",
    tag: ["american-video"],
    desc: "",
  },
  {
    name: "mdn",
    link: "https://developer.mozilla.org/",
    tag: ["dev", "knowleadge"],
    desc: "",
  },
  {
    name: "miyoushe",
    link: "https://bbs.mihoyo.com/ys/",
    tag: ["genshin"],
    desc: "",
  },
  {
    name: "mormalize.css",
    link: "https://necolas.github.io/normalize.css/",
    tag: [],
    desc: "",
  },
  {
    name: "nestjs",
    link: "https://www.nestjs.com",
    tag: ["framework"],
    desc: "",
  },
  {
    name: "nestjs-cn",
    link: "https://www.nestjs.com.cn",
    tag: ["framework"],
    desc: "",
  },
  { name: "nextjs", link: "https://nextjs.org/", tag: ["framework"], desc: "" },
  {
    name: "nga",
    link: "https://bbs.nga.cn/thread.php?fid=650",
    tag: ["forum"],
    desc: "",
  },
  { name: "nodejs", link: "https://nodejs.org/en/", tag: [], desc: "" },
  {
    name: "notion",
    link: "https://www.notion.so/",
    tag: ["note", "tool"],
    desc: "",
  },
  {
    name: "nowcoder-niuke",
    link: "https://www.nowcoder.com/exam/company",
    tag: [],
    desc: "",
  },
  {
    name: "nuxtjs",
    link: "https://nuxt.com",
    tag: ["frontend", "framework"],
    desc: "",
  },
  {
    name: "nuxt-cn",
    link: "https://www.nuxtjs.org.cn",
    tag: ["frontend", "framework"],
    desc: "",
  },
  { name: "openai", link: "https://openai.com/", tag: [], desc: "" },
  {
    name: "petal",
    link: "https://petalsearch.com",
    tag: ["search", "engine"],
    desc: "",
  },
  {
    name: "php教程-w3cschool",
    link: "https://www.w3cschool.cn/php/",
    tag: ["tutorial"],
    desc: "",
  },
  {
    name: "pinia",
    link: "https://pinia.vuejs.org",
    tag: ["vue", "state"],
    desc: "",
  },
  { name: "pixiv", link: "https://www.pixiv.net/", tag: ["img"], desc: "" },
  {
    name: "potplayer",
    link: "https://daumpotplayer.com/",
    tag: ["video"],
    desc: "",
  },
  {
    name: "proxy-web-storage",
    link: "https://github.com/KID-joker/proxy-web-storage",
    tag: [],
    desc: "",
  },
  { name: "qidian", link: "https://www.qidian.com/", tag: ["read"], desc: "" },
  { name: "qqmail", link: "https://mail.qq.com/", tag: [""], desc: "" },
  { name: "qqmusic", link: "https://y.qq.com/", tag: ["music"], desc: "" },
  {
    name: "radix",
    link: "https://www.radix-ui.com/",
    tag: ["react", "component", "library"],
    desc: "",
  },
  {
    name: "react",
    link: "https://react.dev/",
    tag: ["frontend", "ui-lib"],
    desc: "",
  },
  { name: "reddit", link: "https://www.reddit.com/", tag: ["forum"], desc: "" },
  {
    name: "rust",
    link: "https://www.rust-lang.org/",
    tag: ["language"],
    desc: "",
  },
  {
    name: "ryf",
    link: "http://www.ruanyifeng.com/blog/",
    tag: ["blog"],
    desc: "",
  },
  {
    name: "ryf-github",
    link: "https://github.com/ruanyf/weekly",
    tag: ["blog"],
    desc: "",
  },
  {
    name: "ryf-vercel",
    link: "https://ruanyf-weekly.vercel.app/",
    tag: ["blog"],
    desc: "",
  },
  { name: "ruoyi", link: "http://www.ruoyi.vip", tag: ["framework"], desc: "" },
  {
    name: "start-page",
    link: "https://www.startpage.com",
    tag: ["search", "engine"],
    desc: "",
  },
  {
    name: "sougou",
    link: "https://www.sogou.com",
    tag: ["search", "engine"],
    desc: "",
  },
  {
    name: "multitranslate",
    link: "https://www.multitranslate.xyz/",
    tag: ["translate"],
    desc: "",
  },
  { name: "twitter", link: "https://twitter.com/", tag: [], desc: "" },
  {
    name: "typescript",
    link: "https://www.typescriptlang.org/",
    tag: ["language"],
    desc: "",
  },
  {
    name: "uniapp",
    link: "https://uniapp.dcloud.net.cn",
    tag: ["vue", "framework"],
    desc: "",
  },
  {
    name: "unsplash",
    link: "https://unsplash.com",
    tag: ["img", "free"],
    desc: "",
  },
  {
    name: "uviewUI",
    link: "https://www.uviewui.com/components/intro.html",
    tag: ["uniapp"],
    desc: "",
  },
  {
    name: "v2ex",
    link: "https://www.v2ex.com",
    tag: ["forum", "tech"],
    desc: "",
  },
  {
    name: "v8",
    link: "https://v8.dev/",
    tag: ["engine", "js", "javascript"],
    desc: "",
  },
  {
    name: "VexipUI",
    link: "https://www.vexipui.com/",
    tag: ["vue3", "ts", "typescript"],
    desc: "",
  },
  {
    name: "HDmoli",
    link: "https://www.hdmoli.com/",
    tag: ["video"],
    desc: "",
  },
  {
    name: "vitepress",
    link: "https://vitepress.vuejs.org",
    tag: [],
    desc: "",
  },
  {
    name: "vmware教程",
    link: "https://zhuanlan.zhihu.com/p/272541376",
    tag: ["tutorial"],
    desc: "",
  },
  {
    name: "vue",
    link: "https://vuejs.org/",
    tag: ["frontend", "framework"],
    desc: "",
  },
  {
    name: "vue-color-avatar",
    link: "https://vue-color-avatar.vercel.app/",
    tag: ["vue"],
    desc: "",
  },
  { name: "vuecn", link: "https://cn.vuejs.org", tag: [], desc: "" },
  {
    name: "vuerouter",
    link: "https://router.vuejs.org/",
    tag: [],
    desc: "",
  },
  { name: "vueuse", link: "https://vueuse.org", tag: ["lib"], desc: "" },
  { name: "wallhaven", link: "https://wallhaven.cc/", tag: ["img"], desc: "" },
  { name: "wallhere", link: "https://wallhere.com/", tag: ["img"], desc: "" },
  {
    name: "wallpaper-anime-pictures",
    link: "https://anime-pictures.net/",
    tag: ["img", "anime"],
    desc: "",
  },
  {
    name: "wallpaperflare",
    link: "https://www.wallpaperflare.com",
    tag: ["img"],
    desc: "",
  },
  {
    name: "webstore-chrome",
    link: "https://chrome.google.com/webstore/category/extensions",
    tag: ["browser", "google"],
    desc: "",
  },
  { name: "wechat", link: "https://mp.weixin.qq.com", tag: [], desc: "" },
  { name: "weread", link: "https://weread.qq.com", tag: [], desc: "" },
  {
    name: "weibo",
    link: "https://weibo.com/login.php/",
    tag: [],
    desc: "",
  },
  {
    name: "wexin-developers",
    link: "https://developers.weixin.qq.com/doc/",
    tag: ["wechat"],
    desc: "",
  },
  { name: "wyy", link: "https://music.163.com/", tag: ["music"], desc: "" },
  { name: "yande", link: "https://yande.re/post", tag: ["img"], desc: "" },
  {
    name: "yandex",
    link: "https://yandex.com/images/",
    tag: ["russian", "search", "img"],
    desc: "",
  },
  {
    name: "youdao",
    link: "https://fanyi.youdao.com/",
    tag: ["translate"],
    desc: "",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/",
    tag: ["video"],
    desc: "",
  },
  {
    name: "ysmuskreef-genshin",
    link: "http://ysmuskreef.com/",
    tag: [],
    desc: "",
  },
  {
    name: "zhengze",
    link: "https://www.runoob.com/jsref/jsref-obj-regexp.html",
    tag: ["cai"],
    desc: "",
  },
  {
    name: "zhihu",
    link: "https://www.zhihu.com/",
    tag: ["question"],
    desc: "",
  },
  {
    name: "zlib",
    link: "https://zlibsearch.1kbtool.com",
    tag: ["book", "read"],
    desc: "",
  },
  {
    name: "zlibrary",
    link: "https://singlelogin.me/",
    tag: ["book", "read"],
    desc: "",
  },
  { name: "云效", link: "https://devops.aliyun.com/", tag: ["code"], desc: "" },
  {
    name: "域名备案查询",
    link: "https://beian.miit.gov.cn/#/Integrated/index",
    tag: ["domain"],
    desc: "",
  },
  {
    name: "星辰",
    link: "https://wudixingxing.com/user",
    tag: [],
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
  commands[i].id = "c" + i;
}

export { commands, Command };

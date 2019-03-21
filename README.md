# VuxFrame

> Vue+VueRouter+Vuex+Vux+Spritesmith

## 开始

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 简介
框架中综合了Vue.js全家桶。UI组件启用的Vux。配置均已完善，对照Vux库使用即可。如需禁用eslint，请自行配置。

整个项目中仅做了基本的配置，有其他的要求请自行拓展。

### Spritesmith
启用了方便的雪碧图，因为是手机端的项目，所以单位适配为rem。

icons请放在static/phoneIcons文件夹中。

对应的Spritesmith配置在build/webpack.dev.conf.js中。部分注释了的内容时是适配web端的雪碧图生成配置。请按需修改。

在assets的handler中remCss.handlebars是配置雪碧图的模板，因为未能找到适配rem单位的模板，所以启用了Sass来进行转义。最后编译的效果正常。

请注意，对应的设计稿宽度需要为750px,对应调试375px宽设备时，html指定的font-size应为20px。如有不同，请对应修改remCss.handlebars中的$browser-default-font-size以及对应的pxToRem函数。

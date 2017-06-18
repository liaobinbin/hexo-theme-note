# 更新日志
- 2017-06-18 修复归档页面的链接问题。已可直接跳转到相关文章

# 该主题没有任何正版授权

# 安装教程
```bash
cd 博客目录/themes
git clone https://github.com/liaobinbin/hexo-theme-note.git note
```

## 安装依赖插件
```bash
npm install hexo-rander-pug --save 
# 在博客主目录下执行
```
## 标签云页面
创建一个标签页面
```bash
hexo new page tags
```
在`tags`页面的`index.md`文件中添加一个属性`type: "tags"`
特别属性说明: 根据标签出现的频率在最大和最小的范围内设置一个字体，频率越高字体越大。
```js
min_font: 10 //最小字号
min_max: 20 //最大字号
amount: 40 //最多标签实现数量
```
主题已经完成了归档页面也标签云页面

技术强的自己修改，技术不好的请支持原作者。


## 完成度80%

# 未完成部分
- 评论功能
- 文章内标签
- 打赏功能
原主题作者已发布`hexo`版，以后此版将不会更新。

# 更新日志
- 2017-06-20
    - 增加`disqus`评论。博客主题基本可用了
- 2017-06-19
    - 修复文章页底部的标签
    - 修复添加了文章内标签后`hexo d`.`hexo g`报错的问题，更换为辅助函数生成标签
- 2017-06-18 
    - 修复归档页面的链接问题。已可直接跳转到相关文章
    - 修复文章内容区块中插入的图片进行居中显示，并且大小为原图大小，修正宽度100%导致的图片放大而画质变差的问题

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


## 完成度90%

# 未完成部分
- 评论功能
- ~~文章内标签~~
- 打赏功能

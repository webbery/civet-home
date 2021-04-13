# 扩展  

civet的扩展为`civet-extend`，是一个js库。它跟vscode的扩展不一样的地方在于，vscode扩展`vscode.d.ts`只是一个接口文件，而`civet-extend`则是一个真实的库。  
之所以这么设计，是因为存在civet的浏览器扩展，它是独立于civet之外的。因此不能像vscode那样，将`civet-extend.d.ts`劫持掉。  
同时，为了降低扩展开发者的学习成本，`civet-extend`也没有拆分成浏览器扩展和本地扩展这两种，而是将其中的差异，隐藏在库的实现当中。  

如果您开发了不错的扩展，欢迎添加链接介绍并提交到此处  

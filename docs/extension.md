# 扩展  

civet的扩展为`civet-extend`，是一个js库。它跟vscode的扩展不一样的地方在于，vscode扩展`vscode.d.ts`只是一个接口文件，而`civet-extend`则是一个真实的库。  
之所以这么设计，是因为存在civet的浏览器扩展，它是独立于civet之外的。因此不能像vscode那样，将`civet-extend.d.ts`劫持掉。  
同时，为了降低扩展开发者的学习成本，`civet-extend`也没有拆分成浏览器扩展和本地扩展这两种，而是将其中的差异，隐藏在库的实现当中。  

如果您开发了不错的扩展，欢迎添加链接介绍并提交到此处  

## 编写你的第一个扩展  
以下示例是一个浏览器扩展，因此，你需要先下载一个模板，以便能够方便的安装和打包扩展。  

如果你对浏览器扩展开发已经很熟练了，那么可以跳过下述内容。  
   
    执行`git clone https://github.com/webbery/browser-extension-for-civet.git`命令，下载浏览器扩展模板。  
    执行`npm install`命令，安装依赖项。  

接下来安装`civet-extend`:  

    npm install civet-extend@latest

环境就搭好了，非常简单。  

接下来开始给扩展添加内容了。  

打开模板下`src/scripts`目录，打开`background.js`，在顶部引入如下内容  
```javascript
import * as civet from 'civet-extend'
```
然后我们添加一个右键图片操作，将图片保存到`Civet`中。  
```javascript
let menu = {
  id: 'add-image',
  title: '添加到civet',
  contexts: ['image']
}

ext.contextMenus.create(menu)
ext.contextMenus.onClicked.addListener(
  function(info, tab) {
    switch(info.menuItemId) {
      case 'add-image':
        civet.resource.load(info.srcUrl)
        break;
      default:
        break;
    }
  }
)
```
其中第12行，表示将右键的图片保存到`Civet`中。  
编写完成后，执行如下命令：  

    npm run build

在`dist`目录下，将会出现chrome、firefox、opera三种浏览器的扩展。

下面可以通过浏览器扩展加载它们，进行调试了。  

## 主环境配置  
当然，一个完整的扩展不会如上面那般简单。例如，如果`Civet`没有启动，那么扩展应该将这个URL保存起来，直到`Civet`启动事件触发之后，同步更新。诸如此类的业务逻辑并不属于该部分内容。  

本部分主要描述扩展的基本生命周期，以及之间的基本事件和参数结构。
## 浏览器扩展  
## 前台扩展  
## 后台扩展  
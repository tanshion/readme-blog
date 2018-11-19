(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{183:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("查看是否已经安装过 virtualenv")]),t._v(" "),t._m(5),s("p",[t._v("安装 virtualenv")]),t._v(" "),t._m(6),s("p",[t._v("使用 virtualenv 创建一个 Python 虚拟环境")]),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("查看虚拟环境下的pip安装包")]),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("退出虚拟环境")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("安装 virtualenvwrapper")]),t._v(" "),t._m(15),s("p",[t._v("创建并进入虚拟环境")]),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("如果想更改虚拟环境储存的目录，需要设置一个 "),s("strong",[t._v("WORKON_HOME")]),t._v(" 的系统环境变量， 关于如何设置 Windows 环境变量，请找 "),s("a",{attrs:{href:"https://www.baidu.com",title:"百度",target:"_blank",rel:"noopener noreferrer"}},[t._v("度娘"),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://www.google.com.hk",title:"谷歌",target:"_blank",rel:"noopener noreferrer"}},[t._v("谷哥"),s("OutboundLink")],1)]),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("进入虚拟环境")]),t._v(" "),t._m(19),s("p",[t._v("删除虚拟环境")]),t._v(" "),t._m(20),s("p",[t._v("查看所有虚拟环境")]),t._v(" "),t._m(21),s("p",[t._v("进入当前虚拟环境所在的目录")]),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),s("Valine")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"windows-下-python-虚拟环境全解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-下-python-虚拟环境全解","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows 下 Python 虚拟环境全解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("每个Python应用可能需要各自拥有一套“独立”的Python运行环境。虚拟环境 就是用来为一个应用创建一套“隔离”的 Python运行环境")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"virtualenv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv","aria-hidden":"true"}},[this._v("#")]),this._v(" virtualenv")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"virtualenv-的基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv-的基本用法","aria-hidden":"true"}},[this._v("#")]),this._v(" virtualenv 的基本用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("A tool for creating isolated 'virtual' python environments.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("pip list\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("pip install virtualenv\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 创建使用系统默认Python 版本的虚拟环境\nvirtualenv myenv\n\n# 创建指定 Python 版本的 虚拟环境\nvirtualenv -p C:\\Python37\\python.exe myenv\n\ncd myenv\n\n# 进入虚拟环境\n# powershell 默认不允许执行未签名的脚本，为了能成功进入虚拟环境，请先执行：\n# Set-ExecutionPolicy -Scope CurrentUser\n# ExecutionPolicy: RemoteSigned\n.\\Scripts\\activate\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("成功进入虚拟环境的标志是，在命令提示符前面显示 用括号包裹的 Python 虚拟环境名："),e("strong",[this._v("(myenv) PS D:\\code\\myenv")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("pip list\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以看到只有 "),e("strong",[this._v("pip")]),this._v(" , "),e("strong",[this._v("setuptools")]),this._v(" , "),e("strong",[this._v("wheel")]),this._v(" 三个默认安装包")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# 在虚拟环境的任意目录下\ndeactivate\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"virtualenvwrapper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenvwrapper","aria-hidden":"true"}},[this._v("#")]),this._v(" virtualenvwrapper")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("virtualenvwrapper 基于 virtualenv， 可以更方便的管理 Python 虚拟环境， 如果使用 virtualenvwrapper-win 作为 Python 虚拟环境的管理工具，完全可以不必安装 virtualenv")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("需要注意的是， virtualenvwrapper 在 Windows 系统中 只能通过 cmd 才能正常使用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# 非Windows\n# pip install virtualenvwrapper\n\n# Windows\npip install virtualenvwrapper-win\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br"),e("span",{staticClass:"line-number"},[this._v("5")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mkvirtualenv myenv\n\n# 指定 Python 版本创建 虚拟环境\nmkvirtualenv --python=D:\\\\app\\\\python37\\\\python.ext myenv\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("通过以上命令创建的虚拟环境，会统一储存在 "),e("strong",[this._v("C:\\Users\\Administrator\\Envs\\")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-c7037731f61af48a.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/362/format/webp",alt:"WORKON_HOME",title:"WORKON_HOME"}}),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# 可以在任意目录，下切换虚拟环境\n# 注意， 该命令在powershell 终端无效， 在 cmd 中才有效果\nworkon myenv\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("rmvirtualenv myenv\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("lsvirtualenv\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("cdvirtualenv\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pycharm-与-virtualenvwrapper-的配合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pycharm-与-virtualenvwrapper-的配合","aria-hidden":"true"}},[this._v("#")]),this._v(" Pycharm 与 virtualenvwrapper 的配合")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("pycharm 本身集成了 virtualenv， 创建新项目时会要求生成虚拟环境， 只要把pycharm生成的虚拟环境安装到 virtualenvwrapper 的虚拟环境目录 ，那么 virtualenvwrapper 同样可以管理 Pycharm生成的是虚拟环境")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-1fdaa9871675a5ed.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/778/format/webp",alt:"Pycharm 创建虚拟环境",title:"Pycharm 创建虚拟环境"}}),e("br")])}],!1,null,null,null);a.options.__file="virtualenv-win.md";e.default=a.exports}}]);
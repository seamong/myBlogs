(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{204:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[s._m(0),s._v(" "),t("p",[s._v("配置ssh")]),s._v(" "),s._m(1),t("p",[s._v("添加远程仓库")]),s._v(" "),s._m(2),t("p",[s._v("本地创建远程分支")]),s._v(" "),s._m(3),t("p",[s._v("本地删除远程分支")]),s._v(" "),s._m(4),t("p",[s._v("本地分支绑定远程分支")]),s._v(" "),s._m(5),t("p",[s._v("创建本地分支")]),s._v(" "),s._m(6),t("p",[s._v("删除本地分支")]),s._v(" "),s._m(7),t("p",[s._v("添加远程仓库")]),s._v(" "),s._m(8),t("p",[s._v("回退一次版本(强制)")]),s._v(" "),s._m(9),t("p",[s._v("提交代码出现错误时，解决办法")]),s._v(" "),s._m(10),t("p",[s._v("强制更新")]),s._v(" "),s._m(11),s._m(12),s._v(" "),t("p",[t("a",{attrs:{href:"https://harttle.land/2016/03/22/purge-large-files-in-gitrepo.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文"),t("OutboundLink")],1),t("br"),s._v("\n寻找大文件的ID")]),s._v(" "),s._m(13),s._m(14),t("p",[s._v("文件名与ID映射")]),s._v(" "),s._m(15),t("p",[s._v("得到文件名列表")]),s._v(" "),s._m(16),t("p",[s._v("删除所有大文件")]),s._v(" "),s._m(17),t("p",[s._v("同步远程仓库")]),s._v(" "),s._m(18),s._m(19),s._v(" "),t("p",[s._v("删除指定文件")]),s._v(" "),s._m(20),t("p",[s._v("同步远程仓库")]),s._v(" "),s._m(21)])},[function(){var s=this.$createElement,a=this._self._c||s;return a("h1",{attrs:{id:"git命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git命令","aria-hidden":"true"}},[this._v("#")]),this._v(" git命令")])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("ssh-keygen -t rsa -b 4096 -C "),a("span",{attrs:{class:"token string"}},[this._v('"****@****.****"')]),this._v("\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" remote add origin git@github.com:seamong/gitbook\n"),a("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" push -u origin master\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br"),a("span",{staticClass:"line-number"},[this._v("2")]),a("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("本地分支"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("远程分支"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("远程分支"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream-to"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("origin/"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("远程分支"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("本地分支"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("本地分支"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D "),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("本地分支"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" remote add origin https://github.com/**/**.git\n"),a("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" push -u origin master\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br"),a("span",{staticClass:"line-number"},[this._v("2")]),a("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("git reset --hard HEAD^\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),t("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("# 订单以及地址样式修改")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{attrs:{class:"token string"}},[s._v('""')]),s._v("  //"),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("test 4dffb5e"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" index\n"),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),t("span",{attrs:{class:"token function"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" pull -f origin "),a("span",{attrs:{class:"token function"}},[this._v("test")]),this._v("  //该命令  无视本地文件修改.直接将远程仓库的代码覆盖本地文件\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h4",{attrs:{id:"删除历史记录中文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除历史记录中文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 删除历史记录中文件")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-list --objects --all\\\n "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v('"'),t("span",{attrs:{class:"token variable"}},[t("span",{attrs:{class:"token variable"}},[s._v("$(")]),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" verify-pack -v .git/objects/pack/*.idx\\\n  "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("sort")]),s._v(" -k 3 -n "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("tail")]),s._v(" -5 "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'{print"),t("span",{attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),t("span",{attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-list --objects --all\\\n "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v('"'),t("span",{attrs:{class:"token variable"}},[t("span",{attrs:{class:"token variable"}},[s._v("$(")]),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" verify-pack -v .git/objects/pack/*.idx\\\n  "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("sort")]),s._v(" -k 3 -n "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("tail")]),s._v(" -5 "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'{print"),t("span",{attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),t("span",{attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\nf846f156d16f74243b67e3dabec58a3128744352\n4a1546e732b2e2a352b7bf220c1a22ad859abf89\nf72d04efe6d0b41b067f9fbbc62455f28d3670d2\n49bdf300ddf57d1946bc9c6570d94a38ac9d6a50\n9c073d4177af5d2e43ada41f92efb18d9462a536\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-list --objects --all\nc252878ac09a3979a80520b82a71dc2dae4529f9\n7bc7d05c6097063f531580ba4c32921464a6c456 _drafts\ndcce26ed53fbb869dc7d5b71742d2f9e523bfe42 _layouts\n414186c794a0d58695abb75c548bdbfec1de2763 _layouts/default.html\n1934eeffe3d242375510dff28cffa6de6b3de367 _layouts/post.html\n5f14647875f2177a6d37b8bfbcdb4629af595b64 _posts\n6cdbb293d453ced07e6a07e0aa6e580e6a5538f4 _posts/2013-10-12-2.md\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-list --objects --all\\\n "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v('"'),t("span",{attrs:{class:"token variable"}},[t("span",{attrs:{class:"token variable"}},[s._v("$(")]),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" verify-pack -v .git/objects/pack/*.idx\\\n  "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("sort")]),s._v(" -k 3 -n "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("tail")]),s._v(" -5 "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'{print"),t("span",{attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),t("span",{attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\nf846f156d16f74243b67e3dabec58a3128744352 assets/img/recent-badge.psd\n4a1546e732b2e2a352b7bf220c1a22ad859abf89 assets/img/album/me/IMG_0276.JPG\nf72d04efe6d0b41b067f9fbbc62455f28d3670d2 assets/img/album/me/IMG_0389.JPG\n49bdf300ddf57d1946bc9c6570d94a38ac9d6a50 assets/img/album/me/IMG_0813.JPG\n9c073d4177af5d2e43ada41f92efb18d9462a536 assets/img/album/me/IMG_0891.JPG\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch -f --prune-empty --index-filter\\\n "),t("span",{attrs:{class:"token string"}},[s._v('"git rm -rf --cached --ignore-unmatch '),t("span",{attrs:{class:"token variable"}},[t("span",{attrs:{class:"token variable"}},[s._v("`")]),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("需要删除的文件的相对路径+文件名"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v("\\\n  --tag-name-filter "),t("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" -- --all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" push origin --force --all\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h4",{attrs:{id:"or"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#or","aria-hidden":"true"}},[this._v("#")]),this._v(" or")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("# 语法")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --force --index-filter\\\n "),t("span",{attrs:{class:"token string"}},[s._v("'git rm -rf --cached --ignore-unmatch [需要删除的文件的相对路径+文件名]'")]),s._v("\\\n  --prune-empty --tag-name-filter "),t("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" -- --all\n"),t("span",{attrs:{class:"token comment"}},[s._v("# 实例")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --force --index-filter\\\n "),t("span",{attrs:{class:"token string"}},[s._v("'git rm -rf --cached --ignore-unmatch seaver/input.txt'")]),s._v("\\\n  --prune-empty --tag-name-filter "),t("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" -- --all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master --force\\\n "),t("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf .git/refs/original/\\\n  "),t("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog expire --expire"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("now --all\\\n   "),t("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" gc --prune"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("now\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])}],!1,null,null,null);e.options.__file="2018_10_22_01.md";a.default=e.exports}}]);
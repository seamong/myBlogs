(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{442:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"git-f-a-q"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-f-a-q"}},[s._v("#")]),s._v(" git~F.A.Q")]),s._v(" "),n("p",[s._v("在git的一般使用中，如果发现错误的将不想提交的文件add进入index之后，想回退取消，则可以使用命令："),n("code",[s._v("git reset HEAD <file>...")]),s._v("，同时git add完毕之后，git也会做相应的提示，比如：\n引用")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Changes to be committed:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# (use "git reset HEAD<file>..." to unstage)')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# new file: Test.scala")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("code",[s._v("git reset [--hard|soft|mixed|merge|keep] [<commit>或HEAD]")]),s._v("：将当前的分支重设（reset）到指定的"),n("code",[s._v("<commit>")]),s._v("或者HEAD（默认，如果不显示指定commit，默认是HEAD，即最新的一次提交），并且根据[mode]有可能更新index和working directory。\n下面列出一些git reset的典型的应用场景：\nA) 回滚add操纵")]),s._v(" "),n("p",[s._v("引用")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑文件frotz.c, filfre.c，做了些更改，并把更改添加到了index")]),s._v("\nedit\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" frotz.c filfre.c\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看邮件，发现某人要你pull，有一些改变需要你merge下来")]),s._v("\nmailx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然而，你已经把index搞乱了，因为index同HEAD commit不匹配了，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是你知道，即将pull的东西不会影响已经修改的frotz.c和filfre.c，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因此你可以revert这两个文件的改变。revert后，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 那些改变应该依旧在working directory中，因此执行git reset。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后，执行了pull之后，自动merge，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# frotz.c和filfre.c这些改变依然在working directory中。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull git://info.example.com/ nitfol "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"b-回滚最近一次commit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#b-回滚最近一次commit"}},[s._v("#")]),s._v(" B) 回滚最近一次commit")]),s._v(" "),n("p",[s._v("引用")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当提交了之后，你又发现代码没有提交完整，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者你想重新编辑一下提交的comment，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行git reset --soft HEAD^，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让working tree还跟reset之前一样，不作任何改变。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HEAD^指向HEAD之前最近的一次commit。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft HEAD^\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对working tree下的文件做修改")]),s._v("\nedit\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后使用reset之前那次commit的注释、作者、日期等信息重新提交。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意，当执行git reset命令时，git会把老的HEAD拷贝到文件.git/ORIG_HEAD中，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在命令中可以使用ORIG_HEAD引用这个commit。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit 命令中 -a 参数的意思是告诉git，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动把所有修改的和删除的文件都放进stage area，未被git跟踪的新建的文件不受影响。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit命令中-c <commit> 或者 -C <commit>意思是拿")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 已经提交的commit对象中的信息（作者，提交者，注释，时间戳等）提交，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 那么这条commit命令的意思就非常清晰了，把所有更改的文件加入stage area，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并使用上次的提交信息重新提交。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -c ORIG_HEAD\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"c-回滚最近几次commit，并把这几次commit放到叫做topic的branch上去。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c-回滚最近几次commit，并把这几次commit放到叫做topic的branch上去。"}},[s._v("#")]),s._v(" C) 回滚最近几次commit，并把这几次commit放到叫做topic的branch上去。")]),s._v(" "),n("p",[s._v("引用")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你已经提交了一些commit，但是此时发现这些commit还不够成熟，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不能进入master分支，但你希望在新的branch上润色这些commit改动。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因此执行了git branch命令在当前的HEAD上建立了新的叫做 topic/wip的分支。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch topic/wip\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后回滚master branch上的最近三次提交。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HEAD~3指向当前HEAD-3个commit的commit，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git reset --hard HEAD~3即删除最近的三个commit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#（删除HEAD, HEAD^, HEAD~2），将HEAD指向HEAD~3。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD~3\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到`topic/wip` 分支")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout topic/wip\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"d-永久删除最后几个commit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#d-永久删除最后几个commit"}},[s._v("#")]),s._v(" D) 永久删除最后几个commit")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后三个commit（即HEAD, HEAD^和HEAD~2）提交有问题，你想永久删除这三个commit。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD~3 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"e-回滚merge和pull操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#e-回滚merge和pull操作"}},[s._v("#")]),s._v(" E) 回滚merge和pull操作")]),s._v(" "),n("p",[s._v("引用")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从origin拉下来一些更新，但是产生了很多冲突，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你暂时没有这么多时间去解决这些冲突，因此你决定稍候有空的时候再重新pull。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\nAuto-merging nitfol\nCONFLICT "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Merge conflict innitfol\nAutomatic merge failed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fix conflicts andthen commit the result.\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于pull操作产生了冲突，因此所有pull下来的改变尚未提交，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仍然再stage area中，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这种情况下git reset --hard与 git reset --hard HEAD意思相同，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 即都是清除index和working tree中被搞乱的东西。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将topic/branch合并到当前的branch，这次没有产生冲突，并且合并后的更改自动提交。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" topic/branch\nUpdating from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("41223")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13134")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nFast-forward\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是此时你又发现将topic/branch合并过来为时尚早，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因此决定退滚merge，执行git reset --hard ORIG_HEAD回滚刚才的pull/merge操作。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 说明：前面讲过，执行git reset时，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git会把reset之前的HEAD放入.git/ORIG_HEAD文件中，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令行中使用ORIG_HEAD引用这个commit。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同样的，执行pull和merge操作时，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git都会把执行操作前的HEAD放入ORIG_HEAD中，以防回滚操作。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard ORIG_HEAD\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"f-在被污染的working-tree中回滚merge或者pull"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#f-在被污染的working-tree中回滚merge或者pull"}},[s._v("#")]),s._v(" F) 在被污染的working tree中回滚merge或者pull")]),s._v(" "),n("p",[s._v("引用")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 即便你已经在本地更改了一些你的working tree，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你也可安全的git pull，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前提是你知道将要pull的内容不会覆盖你的working tree中的内容。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\nAuto-merging nitfol\nMerge made by recursive.\nnitfol "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" +++++----\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git pull完后，你发现这次pull下来的修改不满意，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 想要回滚到pull之前的状态，从前面的介绍知道，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们可以执行git reset --hard ORIG_HEAD，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是这个命令有个副作用就是清空你的working tree，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 即丢弃你的本地未add的那些改变。为了避免丢弃working tree中的内容，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以使用git reset --merge ORIG_HEAD，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意其中的--hard 换成了--merge，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样就可以避免在回滚时清除working tree。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --merge ORIG_HEAD "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"g-被中断的工作流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#g-被中断的工作流程"}},[s._v("#")]),s._v(" G) 被中断的工作流程")]),s._v(" "),n("p",[s._v("在实际开发中经常出现这样的情形：你正在开发一个大的feature，此时来了一个紧急的bug需要修复，但是目前在working tree中的内容还没有成型，还不足以commit，但是你又必须切换的另外的branch去fix bug。请看下面的例子")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout feature "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# you were workingin "feature" branch and')]),s._v("\n$ work work work "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#got interrupted")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这次属于临时提交，因此随便添加一个临时注释即可。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"snapshot WIP"')]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n$ fix fix fix\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit with real log")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout feature\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这次reset删除了WIP commit，并且把working tree设置成提交WIP快照之前的状态。")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft HEAD^ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# go back to WIPstate")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时，在index中依然遗留着“snapshot WIP”提交时所做的uncommit changes，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# git reset将会清理index成为尚未提交"snapshot WIP"时的状态便于接下来继续工作。')]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"h-reset单独的一个文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#h-reset单独的一个文件"}},[s._v("#")]),s._v(" (H) Reset单独的一个文件")]),s._v(" "),n("p",[s._v("假设你已经添加了一个文件进入index，但是而后又不打算把这个文件提交，此时可以使用git reset把这个文件从index中去除。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把文件frotz.c从index中去除，")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset -- frotz.c\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把index中的文件提交")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Commit files inindex"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次把frotz.c加入index")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" frotz.c\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"i-保留working-tree并丢弃一些之前的commit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#i-保留working-tree并丢弃一些之前的commit"}},[s._v("#")]),s._v(" (I) 保留working tree并丢弃一些之前的commit")]),s._v(" "),n("p",[s._v("假设你正在编辑一些文件，并且已经提交，接着继续工作，但是现在你发现当前在working tree中的内容应该属于另一个branch，与这之前的commit没有什么关系。此时，你可以开启一个新的branch，并且保留着working tree中的内容。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag start\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b branch1\nedit\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这次是把在branch1中的改变提交了。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nedit\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时发现，之前的提交不属于这个branch，此时你新建了branch2，并切换到了branch2上。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b branch2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时你可以用reset --keep把在start之后的commit清除掉，但是保持working tree不变。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --keep start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
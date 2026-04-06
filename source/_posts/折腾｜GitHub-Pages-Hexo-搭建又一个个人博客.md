---
title: 折腾｜GitHub Pages + Hexo 搭建又一个个人博客
date: 2026-04-06 11:04:49
tags: [折腾, 教程]
categories: 长文

---

{% asset_img image-20260406141049916.png %}

一直以来好像都缺一个能够高度自定义定制化的博客。直到最近才了解到 GitHub Pages 的易用性，着实是有点过于火星人了。契机是需要一个静态网页的免费（低成本）存储空间，可以用来做一些试验性的 projects；后来就想着，为什么不干脆利用 GitHub Pages 搭一个博客呢？

<!-- more -->

## 渲染引擎：Hexo

GitHub Pages 实际上是一个非常好用的托管网页的服务；它可以托管你所有的网页，但在默认情况下，你可能需要从头开始手搓网站结构，包括设置 CSS 样式表、主页、文件夹以及各种链接等等。这个 AI 的时代尽管这样做也未尝不可，但如果你需要的功能越来越多，那么寻找一个现有的框架可能是更好的解决方式。

所以，对于个人博客来说，我更希望把外观等各项配置一次性设置好，之后就不用再操心网站结构和网页问题，而是可以直接开始撰写内容。所以，我选择了一个渲染引擎——Hexo。

**👍 Hexo 主要有以下几个优点：**

1. **轻量化、开源且速度快**
   (a) 它的配置文件（Configuration）非常小，可谓麻雀虽小，五脏俱全。
   (b) 部署速度非常快。以我目前的博客为例，只有几篇文章，整体部署时间不会超过一分钟。
   (c) 它可以直接将 Markdown 格式撰写的文字渲染成 HTML 网页，在这个过程中自动打理好所有的网页细节。虽然文章多起来后，渲染 HTML 的速度可能会略微变慢，但整体表现依然优秀。
2. **高度可自定义**
   (a) 支持非常多的主题（Themes）。比如我目前使用的主题叫做 [NexT](https://theme-next.js.org)，它可以对网页整体美化进行深度调试，包括布局样式、字体等外观元素。
   (b) 支持丰富的插件。这些插件通常由 JavaScript 编写，通过 Node.js 运行，可以实现更复杂的脚本操作。例如，我在网页中安插了 Cloudflare 的 Analytics 分析工具。

**⚠️ Hexo 的使用相对有一定的门槛**

1. **基础知识要求：** 对于 GitHub Pages 这种托管服务，你首先需要了解 Git 的基本操作和核心概念，此外还需要具备一定的网页基础知识。
2. **流程差异：** Hexo 不同于 [WordPress](https://wordpress.com/zh-cn/) 或 [Typlog](https://typlog.io)（之前用过的博客服务），它需要我们在本地以 Markdown 形式写好文章，然后再部署到服务器上。

整体而言，这是一个相对比较「极客」的建站方式。虽然部署过程稍微有些麻烦，但一旦搭建完成，它在 GitHub Pages 上会运行得非常稳定。

如果你想了解如何安装 Hexo，可以查看 Hexo 的 [官方文档](https://hexo.io/docs/)。如果你也决定使用 NexT 主题，可以查看 NexT 的文档的「[Getting Started](https://theme-next.js.org/docs/getting-started/)」部分，它也会教你如何在当前系统上安装一个 Hexo 实例并最终预览运行在本地的博客网页。

## 自动部署：GitHub Actions

在本地创建 Hexo 博客文件之后，我们肯定希望每一次博文更新并推送到了 GitHub 的 Repository 仓库时，GitHub 都能自动帮我们把所有的博客网页部署到 GitHub Pages 里面。

为此，我们需要配置 GitHub Actions：

1. 获取 Actions 脚本
   具体可以参考 [NexT 主题文档](https://theme-next.js.org/docs/getting-started/deployment) 或者 [Hexo 官方文档](https://hexo.io/docs/github-pages)，里面都有关于 GitHub Actions 如何进行部署的详细说明。

2. 在本地文件夹初始化 git 设置

3. 自动化流程
   设置好 GitHub Actions 之后，每当你使用 Git 把博文的源代码 push 到 GitHub 账户的仓库中之后，GitHub 就会自动执行这段 Actions 代码并生成你的博客。

{% asset_img image-20260406133728309.png %}

## IDE：Visual Studio Code

整个 hexo blog 文件夹的结构相对来说比较复杂，因此我还是用 Visual Studio Code（VS Code）的 IDE 来管理这些文件。它不仅可以预览和编辑配置和博客文档，还具备以下优势：

- 与 GitHub 紧密结合，可以直接在 VS Code 内部对代码进行 Commit（提交）操作，还能直接在编辑器里查看所有版本操作记录；
- 内置终端，并支持直接在当前文件夹位置打开，这样就不需要每次在系统终端里手动输入 `cd` 命令进入博客目录，而是可以直接执行 Hexo 的各种操作指令；
- 支持扩展，可以支持 Hexo 的 YAML 配置文件代码高亮，并且利用 Copilot 功能直接通过 AI 辅助编辑配置文件，当然，AI 还能回答一些关于 Hexo 部署和配置的相关问题。

整体来说，使用 Visual Studio Code 来管理和维护基于 GitHub Pages 的博客是非常高效的选择。

{% image-20260406133638911.png %}

## Markdown 编辑器：Typora

尽管 Visual Studio Code 万般好，但它在编辑 Markdown 文件方面还是稍微差了点。如果你觉得不需要在 IDE 环境之外编辑 Markdown，其实 Visual Studio Code 也可以直接安装插件（比如 [Markdown All-in-One](https://github.com/yzhang-gh/vscode-markdown)）来实现更顺畅的 Markdown 编辑。

但我个人还是更习惯使用其他的 Markdown 编辑器，比如我最常用的 Typora。之前我还为 Typora 手动写了一个主题（其实是从其他主题克隆过来，再找 AI 帮我一起修改的）。这事儿比较见仁见智，主要看个人习惯。

Typora 的优势主要体现在以下几点：

1. 所见即所得
   在使用 Typora 时，输入的 Markdown 代码可以直接转化为渲染引擎效果。并且 Typora 支持使用 Safari 的开发者模式进行直接的 CSS 调试，我们可以通过这种方式自定义写文章时的视觉体验。相对于 Visual Studio Code 来说，是一个纯粹的写作工具。

2. 自动化功能
   Typora 支持一定程度的自动化操作。例如，我们在插入图片时，它可以自动将图片复制到指定的文件夹。这样在后期部署博客时，能省去不少力气。

3. 日常写作与笔记
   除了发布博客文章，Typora 还可以用于日常写作和笔记。虽然我也见过一些极客大佬使用 Visual Studio Code 做笔记，但可能因为我对「颜值」有一定的要求，所以 Typora 始终是我的首选。

{% asset_img image-20260406134640531.png %}

## 域名管理：Namecheap

既然博客已经搭好了，还是需要一个响亮的名字，所以说域名还是很重要的。这次是换了一家叫 Namecheap 的供应商。在上面可以直接搜索到你想要的各种各样的域名，并且能直接做 DNS 管理。

GitHub 也提供了非常详细的文档，来帮助你把域名绑定到你的 GitHub Pages 上面。GitHub 还通过 [Let's Encrypt](https://letsencrypt.org/) 提供免费的 SSL 证书服务，可以使用 HTTPS 来保护我的网页连接。

{% asset_img image-20260406135733616.png %}

不过如果你使用了自定义域名，记得在 Hexo 博客的配置文件当中，把自己的网页链接修改为自定义域名，否则的话就会出现一些奇奇怪怪的问题。

## Troubleshooting：Gemini

以上就是这个博客搭建的大致过程。但在实际操作中，我还是遇到了不少问题：比如，一开始我并不太明白该如何将网页发布到 GitHub Pages 上。后来，又遇到了 Namecheap 的域名绑定问题，不知道该如何将其指向 GitHub Pages，也不知道什么情况下 SSL 证书可以免费获取。还遇到了一些像 Favicon 这样不太常见、但处理起来比较烦琐的细节问题。

在整个 Troubleshooting 的过程中，我大量使用了 AI：
*   Copilot：帮助我使用 Hexo 的语法，将图片转换成 Hexo 可以识别的渲染句式。
*   Gemini：帮我设置好了 Namecheap 上的域名，并解决了 Favicon 的显示问题。

当然，我也反反复复查阅了 Hexo 及其 Next 主题的官方文档。但综合来看，在 AI 时代，有一点非常好：当向 AI 描述一个问题时，它几乎每次都可以准确定位问题的根源，并提供非常清晰、可行的解决方案，一步步带着我解决掉。

{% asset_img image-20260406141126326.png %}

## 小结：AI 时代，写什么？

以前，我其实尝试过各种各样形态的「博客」，包括但不限于：自建 WordPress 站点、微信公众号、Typlog、Notion 等等。我发现自己其实还是蛮享受这个 **折腾** 的过程。我觉得在 AI 时代，写作确实已经变得没有那么遥不可及了，每个人好像都可以通过简单地跟 AI 对话，就写出非常多的东西。

但是，无论文章最终是用什么工具写出来的，它总是描写的是 AI 暂时无法生成的亲身经历和体验。这也是为什么我觉得自己一直对折腾抱有这么大的兴趣。其实就是保持一种好奇心，想要体验更多新鲜的事情吧。

所以，保持开放心态 —— 你会在这里见到各种各样的我。我也希望可以借助个人博客，探索各种各样的自己。☀️

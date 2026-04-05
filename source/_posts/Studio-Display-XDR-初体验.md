---
title: 快测｜Studio Display XDR 初体验
date: 2026-03-18 20:48:00
tags: [3C, 测评]
categories: 速记
---

*update*：Studio Display XDR 固件 26.4 看起来貌似修复了自适应刷新率会导致 kernel panic 的问题。

上周三自提了（有条件请不要自提，不然真的是堪比健身）Studio Display XDR。简单体验下来，以下几点供大家参考：

- 关于设备支持：M4 Mac mini、M5 MacBook Pro（均为非 Pro 芯片，均只有雷雳 4 接口）通过自带雷雳 5 线都可以正常开启 5K 分辨率 120Hz，以及自适应刷新率。但如果雷雳 4 带这款屏幕需要 DSC，目前遇到了自适应刷新率开启的情况下，macOS 会在 GPU 负载较高（例如游戏场景）下 panic 的问题，问题在两台机器上均可复现，但发生时间随机。网络上已经有其他遇到相似问题的人，目前我个人探索出来的 workaround 就是不要开自适应刷新率，而是固定在 60 或 120Hz。

{% asset_img IMG_2572.jpg %}

<!--more-->

- 关于菊花链：Studio Display XDR 有一个下行的雷雳 5 接口，可以用来菊花链连接第二台显示器。按照官网说明，M4 Mac mini 可以同时支持 5K 120Hz + 4K 60Hz 两台显示器；M5 MacBook 则只能同时支持 5K 60Hz + 4K 60Hz 两台显示器（无论合盖与否），尝试使用 5K 120Hz 时，4K 显示器就无法再点亮了。同时，菊花链连接时受限于带宽（仅为推测），Studio Display XDR 剩余的 2 个 USB-C 接口仅支持 USB 2（480Mbps）速度。如果是雷雳 5 的情况，应该不同。

- 关于 XDR：根据 UFO Test，画面 blooming 的现象相对来说很不明显，但是极端场景下仍然可见。一般 HDR 视频几乎不会看到黑色区域有光晕现象。

- 其他外围设备：连接 Mac 可以在屏幕锁定休眠时通过 Studio Display XDR 的麦克风启用 Hey Siri（应该是归功于 A19 Pro 处理器）。屏幕点亮速度在 1-2s 内，比一般显示器快 50%-100%。六扬声器非常清晰，人声、乐器混音可辨，偶尔是真能听得到用耳机听不出来的乐器。超广角摄像头支持人像居中和桌上视角，但…… 我的桌子比较小，桌上视角不如叫腿上视角。

总之，确实算得上是各方面都拉满的显示器体验，不过自适应刷新率的稳定性还需增强（估计 macOS 或者显示器的后续固件版本会 acknowledge 并修复这个问题）。5K 120Hz HDR 显示器，目前在售的款式很少、价格其实也都已经到了这个位置，如果希望获得最佳体验，Studio Display XDR 值得一试。

{% asset_img shown_with_severance.jpg %}
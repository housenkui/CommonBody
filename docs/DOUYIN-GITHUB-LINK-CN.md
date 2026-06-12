# 抖音分享 GitHub 链接指南

> 现象：抖音内打开 `commonbody.org` 常被屏蔽或无法跳转；`github.com` 链接一般可正常打开。  
> 仓库：[housenkui/CommonBody](https://github.com/housenkui/CommonBody)

---

## 一、推荐分享的链接（按优先级）

| 用途 | 链接 | 说明 |
|------|------|------|
| **六次手术经历全文** | https://github.com/housenkui/CommonBody/blob/main/src/content/stories/six-hemorrhoid-surgeries.md | **首选**，与官网故事页内容一致，手机 GitHub 可直接读 |
| 仓库首页（入口页） | https://github.com/housenkui/CommonBody | 适合放主页简介，读者点 README 里的链接 |
| 护理指南 | https://github.com/housenkui/CommonBody/tree/main/src/content/modules/gut-care | 模块 Markdown 目录 |
| 志愿者说明 | https://github.com/housenkui/CommonBody/blob/main/docs/VOLUNTEERS-CN.md | 仅简体 |

**不要分享：** 仓库里的 `commonbody-dist-*.tar.gz`（压缩包，读者打不开文章）。

---

## 二、抖音里怎么说（评论区 / 私信）

### 短版（评论区）

```
完整经历在 GitHub 免费看（抖音里 commonbody.org 有时打不开）：

https://github.com/housenkui/CommonBody/blob/main/src/content/stories/six-hemorrhoid-surgeries.md

个人经验仅供参考，重症请就医。不卖课不带货。
```

### 更短（怕链接被折叠）

```
经历全文放 GitHub 了，搜「housenkui CommonBody」进仓库，README 里有「六次痔疮手术的经历」链接。

或私信我发你链接。个人经验仅供参考，重症就医。
```

### 私信版

```
你好～完整经历在这里（GitHub 一般能打开）：

https://github.com/housenkui/CommonBody/blob/main/src/content/stories/six-hemorrhoid-surgeries.md

打开后往下划就是全文。和官网是一篇文章，抖音里官网链接有时打不开，所以用 GitHub 备份阅读。

有疑问可以语音聊。仅供参考，不能代替医生。
```

### 视频口播（15 秒）

```
我把六次手术的经历写在 GitHub 上了，免费看。抖音搜不到链接的话，搜「housenkui CommonBody」，进仓库点「六次痔疮手术的经历」。都是个人经验，重症一定要去医院。
```

---

## 三、抖音主页怎么设

| 位置 | 建议文案 |
|------|----------|
| **简介** | 六次痔疮手术过来人｜公益分享护理经验｜GitHub：housenkui/CommonBody｜非盈利·不卖货 |
| **网站栏** | 若只能填一个 URL，填 `https://github.com/housenkui/CommonBody`（比 commonbody.org 不易被拦） |
| **置顶视频** | 口播 + 字幕写「GitHub 搜 housenkui CommonBody」 |

---

## 四、为什么用 GitHub、读者怎么读

1. 用手机浏览器或 **GitHub App** 打开链接即可，无需下载仓库。  
2. 打开后是 **Markdown 文章页**，上下滑动阅读，和看长文差不多。  
3. 若显示代码/raw 视图不好看，点页面右上角 **「⋯」→ 在 GitHub 中查看** 或确保 URL 含 `/blob/main/` 而非 `/raw/`。  
4. 官网 `commonbody.org` 仍长期维护；GitHub 是 **抖音场景的阅读备份**，不是替代官网。

---

## 五、发布与同步注意

- 官网故事改完后，记得把同一段文字同步到 `src/content/stories/six-hemorrhoid-surgeries.md` 并 **push 到 GitHub**，否则两边内容会不一致。  
- 大段修改在 `docs/experiences/six-hemorrhoid-surgeries.md` 写完后，发布前复制到 `src/content/stories/` 再 push。

---

## 六、若 GitHub 链接以后也被限（备选）

| 方案 | 说明 |
|------|------|
| **私信发链接** | 比公开评论区更稳 |
| **口播「搜仓库名」** | 不依赖可点击链接 |
| **GitHub Pages 镜像** | 可部署为 `https://housenkui.github.io/CommonBody/`，需改构建配置，日后有需要再做 |
| **截图长图** | 兜底，但更新麻烦 |

---

## 七、群公告可加一句（病友群 / 志愿者群）

```
完整经历阅读：
· 首选 GitHub（抖音内易打开）：见仓库 README「阅读作者经历」
· 官网：commonbody.org（浏览器可开时）
```

---

## 文档维护

- **路径**：`docs/DOUYIN-GITHUB-LINK-CN.md`
- **关联**：`README.md`、`docs/DOUYIN-COPY-CN.md`
- **仓库**：https://github.com/housenkui/CommonBody

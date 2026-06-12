# CommonBody

**Human Open Source Health Project** · **人类健康开源计划**

> Every patient can contribute knowledge.  
> 每一个患者都可以贡献知识。

> Every recovered patient can become a light for others.  
> 每一个康复者都可以成为后来者的灯塔。

## 关于

[CommonBody.org](https://commonbody.org) 是一个非盈利公益网站，分享患者与康复者的真实经验，开源非药物、非手术的日常改善方法。

### 阅读作者经历（抖音 / 微信推荐入口）

部分平台可能无法直接打开 `commonbody.org`，可通过 **GitHub** 阅读完整 Markdown 原文（与官网同步）：

- **[六次痔疮手术的经历（简体全文）](https://github.com/housenkui/CommonBody/blob/main/src/content/stories/six-hemorrhoid-surgeries.md)** ← 抖音可分享此链
- [护理指南模块](https://github.com/housenkui/CommonBody/tree/main/src/content/modules/gut-care)
- [志愿者招募说明](https://github.com/housenkui/CommonBody/blob/main/docs/VOLUNTEERS-CN.md)

> 官网：https://commonbody.org · 仓库：https://github.com/housenkui/CommonBody

## 技术栈

- [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- Markdown 内容（构建时打包）

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 内容结构

```
src/content/
├── modules/          # 健康模块（如 gut-care）
└── pages/            # 静态页面（关于、免责、隐私等）
```

## 贡献

v1.0 阶段请通过邮件投稿：housenkui@gmail.com

详见站内 [贡献指南](https://commonbody.org/contribute) 或 `src/content/pages/contribute.md`。

## 免责声明

本站内容仅供参考，由患者经验整理，不构成医疗建议。详见 [免责声明](https://commonbody.org/disclaimer)。

## 许可

- 网站源码：MIT License（待添加 LICENSE 文件）
- 内容文档：CC BY 4.0

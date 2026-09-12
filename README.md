# 漫展场照摄影小站（免费方案）

这是一个基础的中文摄影接单网站，风格参考 mccona.com，功能简单：

- 首页介绍
- 关于我
- 精选作品画廊
- 更多照片
- 简单预约表单
- 微信二维码区域

完全静态，可免费部署到 GitHub Pages / Cloudflare Pages。

## 快速使用步骤

### 1. 替换图片
把你的照片放到 `images/` 文件夹，然后修改 `index.html` 里对应的图片标签。

目前用的是灰色占位，你只需要把：

```html
<div class="work-placeholder">作品 01</div>
```

改成：

```html
<img src="images/your-photo-01.jpg" alt="作品描述">
```

### 2. 配置预约表单（推荐用 Formspree，免费）

1. 去 https://formspree.io 注册（免费额度够用）
2. 新建一个 Form，拿到 Form ID（类似 `xyzabcde`）
3. 把 `index.html` 里这一行：

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

改成你的真实 ID。

如果不想用表单，可以删掉表单，只保留微信二维码。

### 3. 放微信二维码
把你的微信二维码图片放到 `images/wechat-qr.jpg`，然后把：

```html
<div class="qr-box">微信二维码<br>放这里</div>
```

改成：

```html
<img src="images/wechat-qr.jpg" alt="微信二维码" style="width:180px;height:180px;object-fit:cover;border-radius:8px;">
```

### 4. 部署到 GitHub Pages（完全免费）

1. 在 GitHub 新建一个仓库（比如 `photo-site`）
2. 把本文件夹所有文件上传上去
3. 进入仓库 Settings → Pages
4. Source 选择 `Deploy from a branch`，Branch 选 `main`，文件夹选 `/ (root)`
5. 保存后等一两分钟，就会得到一个免费网址：
   `https://你的用户名.github.io/photo-site/`

### 5. 想绑定自己的域名（可选）
买个便宜域名（阿里云 / 腾讯云 / Namesilo 都行，.com 大约 50-80 元/年），然后在 GitHub Pages 设置里添加自定义域名即可。

## 文件结构

```
photography-site/
├── index.html          # 主页面
├── css/style.css       # 样式
├── js/main.js          # 简单脚本
├── images/             # 放你的照片和二维码
└── README.md           # 本说明
```

## 自定义建议

- 修改标题、关于内容、服务说明：直接改 `index.html`
- 颜色风格：改 `css/style.css` 顶部的 `:root` 变量
- 想加更多作品：复制 `.work-item` 或 `.gallery-item` 即可

有问题随时问我，我可以继续帮你改。

# Simple Grid System

這是以 Flexbox 為基礎所建構而成的簡易網格系統，由於許多大型或自製的網頁內容都要自己切版設計，所以可能不太會去碰大型的 CSS framework，所以一個簡單好上手的網格系統框架就是您初期設計網頁與切版的好選擇。[View on demo page](https://visionyi.github.io/simple-grid-system/example/)

## Features
- 擁有 12、16、10 格的網格系統
- 只需要兩層 class 的樣式名稱就能使用 : `grid-*` + `column-*`
- 支援響應式設計 - 手機、平板、電腦 3 種螢幕尺寸上自動縮放
- 響應式設計只包含簡易常用的方式，不需煩惱每一格在不同螢幕尺寸下的變化與差異
- 可以調整每格的間格距離
- 不使用縮寫，可以清楚辨識每個 class 樣式名稱的意義
- 附加上與 CSS 框架 Bootstrap 類似的 container 樣式名稱
- 附加上響應式設計 - 區塊的顯示與隱藏

## Browser Support

| IE | Chrome | Firefox | Opera | Safari | Firefox OS | Android |
| --- | --- | --- | --- | --- | --- | --- |
| v11.0+ ✔ | v29.0+ ✔ | v22.0+ ✔ | v12.1+ ✔ | v9.0+ ✔ | v1.1+ ✔ | v4.4+ ✔ |

## Usage

直接使用 `grid-system.min.css` 這個已被壓縮最小化的檔案，此版本有使用 [Autoprefixer](https://github.com/postcss/autoprefixer) 加入 CSS prefixes，可以支援更多瀏覽器的使用。

### Include the CSS file in your page
```html
<link rel="stylesheet" href="grid-system.min.css" type="text/css">
```

### How to use CSS classes

#### 1. 基本使用 `grid-*` 與 `column-*`，可以使用 3 種網格，內容都是相容的
- `grid-10`、`grid-12`、`grid-16`
- `grid-10` > `column-1` ~ `column-10` 10 格
- `grid-12` > `column-1` ~ `column-12` 12 格
- `grid-16` > `column-1` ~ `column-16` 16 格

以下是將一列分成 2 個「欄位」的範例 :
```html
<div class="grid-12">
    <div class="column-6">Two</div>
    <div class="column-6">Column</div>
</div>
```

#### 2. 需要位移欄位或呈現左右空的欄位，可以在欄位 (column) 這一層加入 `prefix-*` 或 `suffix-*`
-  `grid-10` > `prefix-1` ~ `prefix-10`、 `suffix-1` ~ `suffix-10`
-  `grid-12` > `prefix-1` ~ `prefix-12`、 `suffix-1` ~ `suffix-12`
-  `grid-16` > `prefix-1` ~ `prefix-16`、 `suffix-1` ~ `suffix-16`

範例 :
```html
<div class="grid-12">
    <div class="column-4 suffix-2"></div>
    <div class="column-4 prefix-2"></div>
</div>
```

#### 3. 支持響應式設計，可以在網格 (grid) 這一層加入 `mobile-*` 或 `tablet-*`，當螢幕尺寸大小進入不同的版面時會觸發堆疊欄位，改變每個欄位的寬度比例
| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 .. 改變寬度比例 |
| ------- | --------- | ----------------- |
| `tablet-1` ~ `tablet-4` | 平板 | < 992px |
| `mobile-1` ~ `mobile-3` | 行動裝置(手機) | < 768px |

\# 特別說明觸發時的情況 :
- 此網格內的每個欄位都會堆疊成等寬的比例，例如: `mobile-1` 代表每個欄位的寬都會變成 100%
- 會把所有的 "左右空的欄位" 都消除

範例 :
```html
<div class="grid-12 mobile-1 tablet-2">
    ...
</div>
```

#### 4. 如果想分配一行中的欄位位置，可以在網格 (grid) 這一層加入 3 種方法來配置
- `center` 集中
- `spaceAround` 平均分配
- `spaceBetween` 分散分配

範例 :
```html
<div class="grid-12 center">
    ...
</div>
```

#### 5. 如果覺得欄位間格距離太狹窄，可以在網格 (grid) 這一層加入`relaxed`、`more-relaxed` 加大左右之間的距離，預設的間格距離為 15 px
- `relaxed` 間格距離: 30px
- `more-relaxed` 間格距離: 50px
- `equal-spacing` 使得上下間格距離也變成相同的，搭配前兩個樣式名稱

範例 :
```html
<div class="grid-12 relaxed">
    ...
</div>
<!--網格內每格的上下左右距離都會一樣-->
<div class="grid-12 relaxed equal-spacing">
    ...
</div>
```
#### 6. 響應式設計 - 區塊的隱藏與顯示，當螢幕尺寸大小進入不同的版面時會觸發
| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 .. 出現 |
| ------- | --------- | ----------------- |
| `computer-only` | 電腦 | ≥ 992px |
| `tablet-only` | 平板 | ≥ 768px && < 992px |
| `mobile-only` | 行動裝置(手機) | < 768px |
| `computer-tablet-only`</br>`tablet-computer-only` | 電腦或平板 | ≥ 768px |
| `tablet-mobile-only`</br>`mobile-tablet-only` | 平板或手機 | < 992px |
| `mobile-computer-only`</br>`computer-mobile-only` | 電腦或手機 | ≥ 992px \|\| < 768px |

#### 7. 容器 - 分為一般型與流動型，使用方式與 CSS Bootstrap framework 的 `container` 是相同的
- `container` 一般型
- `container-fluid` 流動型

#### 8. 其他特殊的 class 樣式名稱
- `auto-fill` 可加在欄位 (column) 這一層，自動填滿這一行的內容，常用於最後一行中補足空間
- `fix-extra-bottom` 可加在網格 (grid) 的外面一層上，假如外面這一層有使用背景屬性的 div 元素時，底部會產生多餘的背景，此樣式名稱能修補此 Bug

看更多的 Demo 範例請詳見: [View on demo page](https://visionyi.github.io/simple-grid-system/example/)

## License
[MIT](https://github.com/VisionYi/simple-grid-system/blob/master/LICENSE)

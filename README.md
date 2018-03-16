# Simple Grid System

這是以 CSS Flexbox 為基礎所建構而成的網格系統，簡易且直覺的使用方式，讓網頁在設計排版上可以輕鬆快速地完成。

如果你覺得現今流行的 CSS 框架中的網格設計，在使用上必須加入過多的樣式名稱是很麻煩的事，或是不想為每一個欄位都去思考排版方式，那你就應該要來試試這款 Simple Grid System。

\# [View on demo page](https://visionyi.github.io/simple-grid-system/example)

## Features
- 擁有 12、16、10 格欄位的網格系統
- 只需要兩層 class 的樣式名稱就能使用 : `grid-*` + `col-*`
- 支援 RWD 響應式網頁設計 - 電腦、平板、手機 3 種螢幕尺寸上自動縮放
- 可以調整欄位之間的間格距離
- 網格設計上的概念 :
    - 只包含常用且直覺的排版方式
    - 不需煩惱每一格或每一欄位在不同螢幕尺寸下的變化與差異
    - 加上**自動填滿**功能，可以讓排版方式更有彈性，且不失原始的排版基底概念
- 附加其他功能 :
    - 與 CSS 框架 Bootstrap 4.x 版類似的 `container` 樣式名稱
    - 響應式設計 - 區塊的顯示與隱藏

## Browser Support
| IE | Chrome | Firefox | Opera | Safari | Firefox OS | Android |
| --- | --- | --- | --- | --- | --- | --- |
| v11.0+ ✔ | v29.0+ ✔ | v22.0+ ✔ | v12.1+ ✔ | v9.0+ ✔ | v1.1+ ✔ | v4.4+ ✔ |

## Usage
直接使用 `dist` 資料夾裡的 `grid-system.min.css` 這個已被壓縮最小化的檔案，此版本有使用 [Autoprefixer](https://github.com/postcss/autoprefixer) 加入 CSS prefixes，可以支援更多瀏覽器的使用。

### Include the CSS file in your page
```html
<link rel="stylesheet" href="grid-system.min.css" type="text/css">
```

### How to use CSS classes

#### 1. 基本使用 `grid-*` 與 `col-*`，可以使用 3 種網格，內容都是相容的
- `grid-10`、`grid-12`、`grid-16`
- `grid-10` > `col-1` ~ `col-10` 10 格
- `grid-12` > `col-1` ~ `col-12` 12 格
- `grid-16` > `col-1` ~ `col-16` 16 格

以下是將一行分成 2 個「欄位」的範例 :
```html
<div class="grid-12">
    <div class="col-6">Two</div>
    <div class="col-6">Column</div>
</div>
```

#### 2. 需要位移欄位或呈現左右空的欄位，可以在欄位 (col) 這一層加入 `left-*` 或 `right-*`
-  `grid-10` > `left-1` ~ `left-10`、 `right-1` ~ `right-10`
-  `grid-12` > `left-1` ~ `left-12`、 `right-1` ~ `right-12`
-  `grid-16` > `left-1` ~ `left-16`、 `right-1` ~ `right-16`

範例 :
```html
<div class="grid-12">
    <div class="col-4 right-2"></div>
    <div class="col-4 left-2"></div>
</div>
```

#### 3. 支持響應式網頁設計，可以在網格 (grid) 這一層加入 `mobile-*` 或 `tablet-*`，當螢幕尺寸大小進入不同的版面時，會限制每一行的欄位格數而產生堆疊，改變每個欄位的寬度比例
| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 ... 改變寬度比例 |
| ------- | --------- | ----------------- |
| `tablet-1` ~ `tablet-4` | 平板 (包含以下) | < 992px |
| `mobile-1` ~ `mobile-3` | 行動裝置(手機) | < 768px |

\# 特別說明觸發時的情況 :
- 網格內的每個欄位都會改成等寬的比例，例如: `mobile-2` 欄位的寬都會改成 50%，每一行只會有 2 個等寬的欄位
- 會把內部所有的 `left-*` 與 `right-*` "左右空的欄位" 都消除掉

範例 :
```html
<div class="grid-12 tablet-2 mobile-1">
    ...
</div>
```

#### 4. 有時候在其他螢幕尺寸下，想讓某些欄位能夠"自動填滿剩餘的空間"時，可以在欄位 (col) 這一層加入 `fill` 系列的樣式名稱
| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 ... 欄位觸發自動填滿 |
| ------- | --------- | ----------------- |
| `auto-fill` | 全部尺寸 | --------- |
| `fill-tablet` | 平板 (包含以下) | < 992px |
| `fill-mobile` | 行動裝置(手機) | < 768px |

\# 特別說明觸發時的情況 :
- 當同時有兩個欄位以上都觸發效果時，會依照原始欄位大小的寬度比例去填滿剩餘的空間
- 會把附加在那個欄位上的 `left-*` 與 `right-*` 都消除掉

範例 :
```html
<div class="grid-12">
    <div class="col-3"></div>
    <div class="col-3 fill-mobile"></div>
    <div class="col-3 fill-tablet"></div>
</div>
```

\# 特殊使用 : `class="col- auto-fill"`，此樣式組合是**沒有原始的排版基底**，會依照欄位底下設置的內容去隨意變化寬度大小，比較不推薦使用此方式去做排版。

#### 5. 如果想分配或集中於一行中的欄位位置，可以在網格 (grid) 這一層加入以下方法來配置
| 樣式名稱 | 將所有欄位 ... |
| ------- | ------------- |
| `center`| 集中於中間 |
| `start` | 集中於最前頭(靠左側) |
| `end`   | 集中於最尾部(靠右側) |
| `space-around`  | 平均分配於一行中 |
| `space-between` | 散開分配於一行中 |

範例 :
```html
<div class="grid-12 center">
    ...
</div>
```

#### 6. 如果覺得欄位間格距離太狹窄，可以在網格 (grid) 這一層加入`relaxed`、`more-relaxed` 加大左右之間的欄位間隙，預設的間格距離為 15 px
- `relaxed` 間格距離: 30px
- `more-relaxed` 間格距離: 50px
- `equal-gap` 使得上下間格距離也變成相同的，用來搭配前兩個樣式名稱

範例 :
```html
<div class="grid-12 relaxed">
    ...
</div>
<!--網格內每個欄位的上下左右之間格距離都會一樣-->
<div class="grid-12 relaxed equal-gap">
    ...
</div>
```

#### 7. 響應式設計 - 區塊的隱藏與顯示，當螢幕尺寸大小進入不同的版面時會觸發
| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 ... 出現 |
| ------- | --------- | ----------------- |
| `computer-only` | 電腦 | ≥ 992px |
| `tablet-only` | 平板 | ≥ 768px && < 992px |
| `mobile-only` | 行動裝置(手機) | < 768px |
| `computer-tablet-only`</br>`tablet-computer-only` | 電腦或平板 | ≥ 768px |
| `tablet-mobile-only`</br>`mobile-tablet-only` | 平板或手機 | < 992px |
| `mobile-computer-only`</br>`computer-mobile-only` | 電腦或手機 | ≥ 992px \|\| < 768px |

#### 8. 容器 - 分為一般型與流動型，使用方式與 CSS 框架 Bootstrap v4.x 的 `container` 是類似的
- `container` 一般型
- `container-fluid` 流動型

#### 9. 其他特殊的 class 樣式名稱
- `w-100`
    - 強制中斷欄位跳到新的一行，擁有 `width:100%` 的特性，常用於搭配**分配、集中功能**
    - 可直接加入在欄位與欄位之間單獨成一行

- `fix-extra-bottom`
    - 可加在網格 (grid) 的外面一層上
    - 如果外面這一層有使用背景屬性的 div 元素時，底部會產生多餘的背景，此樣式名稱能修補此 Bug

\# 看更多的 Demo 範例請詳見: [View on demo page](https://visionyi.github.io/simple-grid-system/example)

## Update
### v1.2.2 (2018.03.05)
- 改善內容 :
    - `fill` 樣式系列的內容增加消除左右空欄的機制
    - demo 頁面修改
    - readme.md 說明簡介修改
- 更改名稱 :
    - `prefix-*`、`suffix-*` 改名為 `left-*`、`right-*`，可以更直覺地使用樣式名稱

### v1.2.1 (2018.02.25)
- 改善內容 :
    - 使用 SCSS 的 `@import` `@mixin` `@include` 功能
    - `col-*` 樣式系列與 `fill` 樣式系列的內容都增加 `max-width`，可控制長度不會隨著內層大小變動

### v1.2.0 (2018.02.20)
- 改善內容 :
    - `container` 樣式，更新為類似 CSS Bootstrap v4.x 的板本
    - `col-*` 樣式，不依靠 CSS `width: **%` 變化欄位，改使用 `flex: 0 0 **%` 更符合 CSS Flex 的性質
    - `auto-fill` 樣式，單獨使用 CSS `flex-grow`、`flex-shrink`，能夠向下相容 `col-*` 樣式
- 新增功能 :
    - `fill-tablet`、`fill-mobile` 樣式，此兩種為 `auto-fill` 的響應式設計版本
    - `start`、`end` 樣式，作為**分配、集中功能**的其中兩種
    - `w-100` 樣式，強制中斷欄位跳到新的一行，常用於搭配**分配、集中功能**
- 更改名稱 :
    - spacing 改成 gap，樣式名稱 `equal-spacing` 改為 `equal-gap`

### v1.1.0 (2017.08.19)
- 使用 SCSS 技術重新再製作，以便於日後擴充與修改
- 樣式名稱 `column` 改為縮寫 `col`
- 變更一些目錄路徑

## Todo List
- [ ] 新增功能: 使用者可自行修改 gap 間距的大小，使用 CSS Variables

## License
[MIT](https://github.com/VisionYi/simple-grid-system/blob/master/LICENSE)

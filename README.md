# Simple Grid System

這是以 CSS Flexbox 為基礎所建構而成的網格系統，簡易且直覺的使用方式，讓網頁在設計排版上可以輕鬆快速地完成。

如果你覺得現今流行的 CSS 框架中的網格設計，在使用上必須加入過多的樣式名稱是很麻煩的事，或是不想為每一個欄位都去思考排版方式，那你就應該要來試試這款 Simple Grid System。

\# [View on demo page](https://visionyi.github.io/simple-grid-system/example)

## Features
- 擁有 12、16、10 格欄位的網格系統
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
#### \# CSS 樣式種類
- grid 層的樣式名稱
  - grid 系列
  - 響應式設計系列
  - filled 系列
  - align 系列
  - no-gap 系列

- col 層的樣式名稱
  - col 系列
  - offset 系列
  - first, last 排序系列

#### 1. 基本使用 `grid-*` 與 `col-*`，可以使用 3 種網格，內容都是相容的
- `grid-10`、`grid-12`、`grid-16`
- `grid-10` > `col-1` ~ `col-10` 10 格
- `grid-12` > `col-1` ~ `col-12` 12 格
- `grid-16` > `col-1` ~ `col-16` 16 格
- `grid`、`col`、`col-auto`

以下是將一行分成 2 個「欄位」的範例 :
```html
<div class="grid-12">
    <div class="col-6">Two</div>
    <div class="col-6">Column</div>
</div>
```

#### 2. 需要推移欄位或製造空的欄位，可以在欄位 (col) 這一層加入 `offset-*`
-  `grid-10` > `offset-1` ~ `offset-9`
-  `grid-12` > `offset-1` ~ `offset-11`
-  `grid-16` > `offset-1` ~ `offset-15`
-  `offset-auto`

範例 :
```html
<div class="grid-12">
    <div class="col-4 offset-2"></div>
    <div class="col-4 offset-auto"></div>
</div>
```

#### 3. 支持響應式網頁設計，可以在網格 (grid) 這一層加入 `mobile-*`、`tablet-*`、`desktop-*`，當螢幕尺寸大小進入不同的版面時，會限制每一行的欄位格數而產生堆疊，改變每個欄位的寬度比例
| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 ... 改變寬度比例 |
| ------- | --------- | ----------------- |
| `desktop-1` ~ `desktop-8` | 電腦桌面 (大螢幕) | ≥ 992px |
| `tablet-1` ~ `tablet-6` | 平板 (中螢幕) | < 992px && ≥ 768px |
| `mobile-1` ~ `mobile-4` | 行動裝置 (手機) | < 768px |

\# 特別說明觸發時的情況 :
- 網格內的每個欄位都會改成等寬的比例，例如: `mobile-2` 欄位的寬都會改成 50%，每一行只會有 2 個等寬的欄位
- 會把內部所有的 `offset-*` "空的欄位" 都消除掉

範例 :
```html
<div class="grid desktop-3 tablet-2 mobile-1">
    ...
</div>
```

#### 4. 有時候在其他螢幕尺寸下，想讓欄位能夠**自動填滿剩餘的空間**時，可以在網格 (grid) 這一層加入 `filled` 系列的樣式名稱
| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 ... 所有欄位觸發自動填滿 |
| ------- | --------- | ----------------- |
| `filled` | 全部尺寸 | --------- |
| `tablet-filled` | 平板 (中螢幕) | < 992px && ≥ 768px |
| `mobile-filled` | 行動裝置(手機) | < 768px |

\# 特別說明觸發時的情況 :
- 當同時有兩個欄位以上都觸發效果時，會依照原始欄位大小的寬度比例去填滿剩餘的空間
- 會把內部所有的 `offset-*` "空的欄位" 都消除掉

範例 :
```html
<div class="grid-12 tablet-filled mobile-1">
    <div class="col-3"></div>
    <div class="col-5"></div>
</div>
```

#### 5. 集中、分配、對齊於一行中的欄位位置，可以在網格 (grid) 這一層加入 `align` 系列的樣式名稱
| 樣式名稱 | 將所有欄位 ... |
| ------- | ------------- |
| `align-center`| 集中於中間 |
| `align-right` | 集中於右側 |
| `align-space-around`  | 平均分配於一行中 |
| `align-space-between` | 散開分配於一行中 |
| `align-top`   | 靠上對齊 |
| `align-middle`| 置中對齊 |
| `align-bottom`| 靠下對齊 |

範例 :
```html
<div class="grid-12 align-center">
    ...
</div>
```

#### 6. 想在不同螢幕尺寸下排序欄位位置，可以在欄位 (col) 這一層加入 `*-first`、`*-last`
- `first` 將欄位移至最前的位置
- `last` 將欄位移至最後的位置

| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 ... 排序移動位置 |
| ------- | --------- | ----------------- |
| `desktop-first` `desktop-last` | 電腦桌面 (大螢幕) | ≥ 992px |
| `tablet-first` `tablet-last` | 平板 (中螢幕) | < 992px && ≥ 768px |
| `mobile-first` `mobile-last` | 行動裝置 (手機) | < 768px |

範例 :
```html
<div class="grid-12">
    <div class="col-4 tablet-last"></div>
    <div class="col-4 tablet-first"></div>
    <div class="col-4"></div>
</div>
```

#### 7. 如果想要消除網格中的間距，可以在網格 (grid) 這一層加入 `no-gap` 系列的樣式名稱
- `no-gap` 消除 **所有的間距**
- `no-gap-col` 消除 **欄與欄之間的間距**
- `no-gap-row` 消除 **行與行之間的間距**

範例 :
```html
<div class="grid-12 no-gap">
    ...
</div>
```

#### 8. 響應式設計 - 區塊的隱藏與顯示，當螢幕尺寸大小進入不同的版面時會觸發
| 樣式名稱 | 使用的裝置 | 當螢幕尺寸 ... 出現 |
| ------- | --------- | ----------------- |
| `desktop-only` | 電腦 | ≥ 992px |
| `tablet-only` | 平板 | ≥ 768px && < 992px |
| `mobile-only` | 行動裝置(手機) | < 768px |
| `desktop-tablet-only` </br>`tablet-desktop-only` | 電腦或平板 | ≥ 768px |
| `tablet-mobile-only` </br>`mobile-tablet-only` | 平板或手機 | < 992px |
| `mobile-desktop-only` </br>`desktop-mobile-only` | 電腦或手機 | ≥ 992px \|\| < 768px |

#### 9. 容器 - 分為一般型與流動型，使用方式與 CSS 框架 Bootstrap v4.x 的 `container` 是類似的
- `container` 一般型
- `container-fluid` 流動型

#### 10. 其他特殊的 class 樣式名稱
- `w-100`
    - 強制中斷欄位跳到新的一行，擁有 `width:100%` 的特性，常用於搭配**分配、集中功能**
    - 可直接加入在欄位與欄位之間單獨成一行

- `fix-extra-bottom`
    - 可加在網格 (grid) 的外面一層上
    - 如果外面這一層有使用背景屬性的 div 元素時，底部會產生多餘的背景，此樣式名稱能修補此 Bug

\# 看更多的 Demo 範例請詳見: [View on demo page](https://visionyi.github.io/simple-grid-system/example)

## Updates
See [Change Log](https://github.com/VisionYi/simple-grid-system/blob/master/CHANGELOG.md)

## Todo List
- [ ] 新增功能: 使用者可自行修改 gap 間距的大小，使用 CSS Variables

## License
[MIT](https://github.com/VisionYi/simple-grid-system/blob/master/LICENSE)

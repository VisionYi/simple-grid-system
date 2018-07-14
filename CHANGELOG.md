## v1.3.0-beta.2 (2018.07.13)
#### 修改內容:
- `filled` 改成 `flexible` 樣式名稱
  - 主要放置於 col 層可以更彈性運用，能夠自動調整欄位的寬度大小，用於填滿剩餘空間
  - 樣式種類有 `flexible`、`flexible-tablet`、`flexible-mobile`
- `container` 樣式內容加強了 CSS 屬性的覆蓋
- RWD breakpoints 斷點改善
- 改善 `grid` 與 `col` 系列的 CSS 間距屬性，還有 `no-gap` 樣式系列內容也跟著改善
- `align-top`、`align-middle`、`align-bottom` 樣式內容改善

#### 更改名稱:
- order 排序系列 -> `order-first-*`、`order-last-*`
- 隱藏與顯示系列 -> `hidden-*`、`show-only-*`

## v1.3.0-beta.1 (2018.06.15)
#### 修改內容:
- 改善 col 層相關的基礎屬性內容，可以更好地讓 flex & width 屬性互相搭配，減少程式碼行數
- 改善 `no-gap` 樣式系列與其相關的樣式內容

#### 新增內容:
- `col-auto` 樣式，使欄位寬度等於本身內容的長度，會隨著內容自動改變欄位寬度
- `offset-auto` 樣式，內容為 `margin-left: auto;`，使欄位推移到整個容器的最右側


## v1.3.0-beta.0 (2018.04.30)
#### 修改內容
- SASS/SCSS 目錄結構改善，使用 SASS mixin 重構程式碼
- CSS 選擇器改善，為了提高 CSS Selector 在瀏覽器執行的效率
- container 直接改成 bootstrap v4.x 版的 container 內容
- 集中與分配的功能重新修改，名稱也改為 `align-*`
- RWD breakpoints 斷點修改
  - 767.99 含以下 -- mobile
  - 768 含以上 ~ 991.99 含以下 -- tablet
  - 992px 含以上 -- desktop
- 響應式自動縮放 CSS 樣式
  - `mobile-1` ~ `mobile-4`
  - `tablet-1` ~ `tablet-6`
  - `desktop-1` ~ `desktop-8`
- **自動填滿剩餘空間的功能**大幅修改
  - 改加入到 grid 層，代表底下的每個 `col-*` 都會觸發功能，為了能更簡易地使用
  - 當觸發功能時，會以自身原始 `col-*` 的數字比例去填滿空間
  - 樣式名稱有 `filled`, `tablet-filled`, `mobile-filled`
  - > _例: 當 col 層只有 `col-3`, `col-7` 兩個欄位數時，會以 3:7 的比例去填滿剩餘的空間_

#### 新增內容
- `desktop-*` 樣式系列，響應式自動縮放的桌面(電腦)螢幕版
- `no-gap` 樣式系列，去除網格的間隙
- `first`, `last` 樣式系列，在不同螢幕大小下時可排序欄位
- `align-*` 樣式系列，垂直和平行的對齊功能，為原始的集中與分配功能之加強版
- `grid`, `col` 兩個樣式:
  - 為了更快速開發，不考慮傳統欄位數目，直接使用**響應式自動縮放 CSS 樣式**
  - `col` 預設為全屏寬度 100%

#### 更改名稱
- `computer` -> `desktop`
- `left-*` -> `offset-*`
- `fill` -> `filled`

#### 移除內容
- `relaxed`, `equal-gap` 樣式系列，由於讓使用者來自訂會比較方便，固定寬度會不夠彈性因此移除
- `left-*`, `right-*` 樣式系列，以後版本都會以 `offset-*` 來代替


## v1.2.2 (2018.03.05)
#### 修改內容
- `fill` 樣式系列的內容增加消除左右空欄的機制
- demo 頁面修改
- readme.md 說明簡介修改

#### 更改名稱
- `prefix-*`、`suffix-*` 改名為 `left-*`、`right-*`，可以更直覺地使用樣式名稱


## v1.2.1 (2018.02.25)
#### 修改內容
- 使用 SCSS 的 `@import` `@mixin` `@include` 功能
- `col-*` 樣式系列與 `fill` 樣式系列的內容都增加 `max-width`，可控制長度不會隨著內層大小變動


## v1.2.0 (2018.02.20)
#### 修改內容
- `container` 樣式，更新為類似 CSS Bootstrap v4.x 的板本
- `col-*` 樣式，不依靠 CSS `width: **%` 變化欄位，改使用 `flex: 0 0 **%` 更符合 CSS Flex 的性質
- `auto-fill` 樣式，單獨使用 CSS `flex-grow`、`flex-shrink`，能夠向下相容 `col-*` 樣式

#### 新增功能
- `fill-tablet`、`fill-mobile` 樣式，此兩種為 `auto-fill` 的響應式設計版本
- `start`、`end` 樣式，作為**分配、集中功能**的其中兩種
- `w-100` 樣式，強制中斷欄位跳到新的一行，常用於搭配**分配、集中功能**

#### 更改名稱
- spacing 改成 gap，樣式名稱 `equal-spacing` 改為 `equal-gap`


## v1.1.0 (2017.08.19)
- 使用 SCSS 技術重新再製作，以便於日後擴充與修改
- 樣式名稱 `column` 改為縮寫 `col`
- 變更一些目錄路徑

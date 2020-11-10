# Web_SliderUseJS
start on 109/11/5

#範例網站
https://fifisshh.github.io/Web_SliderUseJS/

##CDN

##架構
```
<!-- data-slider-dur可調整輪播時間 -->
<div id="wrapper" data-slider-dur="3000">

        <!-- .box可存放圖片及標題 [note].box-active只能有一個 -->
        <div class="box box-active">
            <img src="..." alt="Clone1">
            <h1>...</h1>
        </div>
        <div class="box">
            <img src="..." alt="Clone2">
            <h1>... ───</h1>
        </div>
        <div class="box">
            <img src="..." alt="Clone3">
            <h1>...</h1>
        </div>
        
        <!-- btn1 left+right -->
        <div id="btn-prev">
            <span class="sp1"></span>
            <span class="sp2"></span>
        </div>
        <div id="btn-next">
            <div class="c1"></div>
        </div>

        <!-- btn2 bottom -->
        <div id="btn-bottoms">
            <div class="btn-bottom btn-active" data-slider-item="1"></div>
            <div class="btn-bottom" data-slider-item="2"></div>
            <div class="btn-bottom" data-slider-item="3"></div>
        </div>
    </div>
    ```
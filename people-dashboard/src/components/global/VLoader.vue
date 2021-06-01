<template>
 <!--   <div class="loader-wrapper">
        <div class="loader">
            <div v-for="n in 8" :key="n" :class="`box box${n}`">
                <div></div>
            </div>
            <div class="ground">
                <div></div>
            </div>
        </div>
    </div>-->
    <div class="loading-container">
        <div id="circle4"></div>
    </div>
</template>

<script>
    export default {
        name: "VLoader"
    }
</script>
<style lang="scss" scoped>
    body {
        overflow: hidden;
    }

    .loading-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;

        overflow: hidden;
        background: #262626;
        animation-delay: 1s;
    }

    #circle4 {
        display: block;
        max-height: 60px;
        max-width: 60px;
        width: 5vw;
        height: 5vw;
        min-height: 50px;
        min-width: 50px;
        border: 3px #ffc107 solid;
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin4 1s infinite linear;
    &.dark-spinner {
         border-color: #6c6c6c;
         border-top-color: transparent;
     }
    }

    @-webkit-keyframes spin4 {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin4 {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
</style>
<!--
<style lang="scss">
    .loader-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader {
        &#45;&#45;duration: 3s;
        &#45;&#45;primary: rgba(39, 94, 254, 1);
        &#45;&#45;primary-light: #2f71ff;
        &#45;&#45;primary-rgba: rgba(39, 94, 254, 0);
        width: 200px;
        height: 320px;
        position: relative;
        transform-style: preserve-3d;
    }
    @media (max-width: 480px) {
        .loader {
            zoom: 0.44;
        }
    }
    .loader:before, .loader:after {
        &#45;&#45;r: 20.5deg;
        content: "";
        width: 320px;
        height: 140px;
        position: absolute;
        right: 32%;
        bottom: -11px;
        background: var(&#45;&#45;background);
        transform: translateZ(200px) rotate(var(&#45;&#45;r));
        animation: mask var(&#45;&#45;duration) linear forwards infinite;
    }
    .loader:after {
        &#45;&#45;r: -20.5deg;
        right: auto;
        left: 32%;
    }
    .loader .ground {
        position: absolute;
        left: -50px;
        bottom: -120px;
        transform-style: preserve-3d;
        transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
    }
    .loader .ground div {
        transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
        width: 200px;
        height: 200px;
        background: var(&#45;&#45;primary);
        background: linear-gradient(45deg, var(&#45;&#45;primary) 0%, var(&#45;&#45;primary) 50%, var(&#45;&#45;primary-light) 50%, var(&#45;&#45;primary-light) 100%);
        transform-style: preserve-3d;
        animation: ground var(&#45;&#45;duration) linear forwards infinite;
    }
    .loader .ground div:before, .loader .ground div:after {
        &#45;&#45;rx: 90deg;
        &#45;&#45;ry: 0deg;
        &#45;&#45;x: 44px;
        &#45;&#45;y: 162px;
        &#45;&#45;z: -50px;
        content: "";
        width: 156px;
        height: 300px;
        opacity: 0;
        background: linear-gradient(var(&#45;&#45;primary), var(&#45;&#45;primary-rgba));
        position: absolute;
        transform: rotateX(var(&#45;&#45;rx)) rotateY(var(&#45;&#45;ry)) translate(var(&#45;&#45;x), var(&#45;&#45;y)) translateZ(var(&#45;&#45;z));
        animation: ground-shine var(&#45;&#45;duration) linear forwards infinite;
    }
    .loader .ground div:after {
        &#45;&#45;rx: 90deg;
        &#45;&#45;ry: 90deg;
        &#45;&#45;x: 0;
        &#45;&#45;y: 177px;
        &#45;&#45;z: 150px;
    }
    .loader .box {
        &#45;&#45;x: 0;
        &#45;&#45;y: 0;
        position: absolute;
        animation: var(&#45;&#45;duration) linear forwards infinite;
        transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
    }
    .loader .box div {
        background-color: var(&#45;&#45;primary);
        width: 24px;
        height: 24px;
        position: relative;
        transform-style: preserve-3d;
        animation: var(&#45;&#45;duration) ease forwards infinite;
        transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
    }
    .loader .box div:before, .loader .box div:after {
        &#45;&#45;rx: 90deg;
        &#45;&#45;ry: 0deg;
        &#45;&#45;z: 12px;
        &#45;&#45;y: -12px;
        &#45;&#45;x: 0;
        content: "";
        position: absolute;
        background-color: inherit;
        width: inherit;
        height: inherit;
        transform: rotateX(var(&#45;&#45;rx)) rotateY(var(&#45;&#45;ry)) translate(var(&#45;&#45;x), var(&#45;&#45;y)) translateZ(var(&#45;&#45;z));
        filter: brightness(var(&#45;&#45;b, 1.2));
    }
    .loader .box div:after {
        &#45;&#45;rx: 0deg;
        &#45;&#45;ry: 90deg;
        &#45;&#45;x: 12px;
        &#45;&#45;y: 0;
        &#45;&#45;b: 1.4;
    }
    .loader .box.box0 {
        &#45;&#45;x: -220px;
        &#45;&#45;y: -120px;
        left: 58px;
        top: 108px;
    }
    .loader .box.box1 {
        &#45;&#45;x: -260px;
        &#45;&#45;y: 120px;
        left: 38px;
        top: 120px;
    }
    .loader .box.box2 {
        &#45;&#45;x: 120px;
        &#45;&#45;y: -190px;
        left: 35px;
        top: 64px;
    }
    .loader .box.box3 {
        &#45;&#45;x: 280px;
        &#45;&#45;y: -40px;
        left: 91px;
        top: 120px;
    }
    .loader .box.box4 {
        &#45;&#45;x: 60px;
        &#45;&#45;y: 200px;
        left: 58px;
        top: 132px;
    }
    .loader .box.box5 {
        &#45;&#45;x: -220px;
        &#45;&#45;y: -120px;
        left: 25px;
        top: 76px;
    }
    .loader .box.box6 {
        &#45;&#45;x: -260px;
        &#45;&#45;y: 120px;
        left: 91px;
        top: 76px;
    }
    .loader .box.box7 {
        &#45;&#45;x: -240px;
        &#45;&#45;y: 200px;
        left: 58px;
        top: 87px;
    }
    .loader .box0 {
        animation-name: box-move0;
    }
    .loader .box0 div {
        animation-name: box-scale0;
    }
    .loader .box1 {
        animation-name: box-move1;
    }
    .loader .box1 div {
        animation-name: box-scale1;
    }
    .loader .box2 {
        animation-name: box-move2;
    }
    .loader .box2 div {
        animation-name: box-scale2;
    }
    .loader .box3 {
        animation-name: box-move3;
    }
    .loader .box3 div {
        animation-name: box-scale3;
    }
    .loader .box4 {
        animation-name: box-move4;
    }
    .loader .box4 div {
        animation-name: box-scale4;
    }
    .loader .box5 {
        animation-name: box-move5;
    }
    .loader .box5 div {
        animation-name: box-scale5;
    }
    .loader .box6 {
        animation-name: box-move6;
    }
    .loader .box6 div {
        animation-name: box-scale6;
    }
    .loader .box7 {
        animation-name: box-move7;
    }
    .loader .box7 div {
        animation-name: box-scale7;
    }
    @keyframes box-move0 {
        12% {
            transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
        }
        25%, 52% {
            transform: translate(0, 0);
        }
        80% {
            transform: translate(0, -32px);
        }
        90%, 100% {
            transform: translate(0, 188px);
        }
    }
    @keyframes box-scale0 {
        6% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        14%, 100% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
    }
    @keyframes box-move1 {
        16% {
            transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
        }
        29%, 52% {
            transform: translate(0, 0);
        }
        80% {
            transform: translate(0, -32px);
        }
        90%, 100% {
            transform: translate(0, 188px);
        }
    }
    @keyframes box-scale1 {
        10% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        18%, 100% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
    }
    @keyframes box-move2 {
        20% {
            transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
        }
        33%, 52% {
            transform: translate(0, 0);
        }
        80% {
            transform: translate(0, -32px);
        }
        90%, 100% {
            transform: translate(0, 188px);
        }
    }
    @keyframes box-scale2 {
        14% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        22%, 100% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
    }
    @keyframes box-move3 {
        24% {
            transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
        }
        37%, 52% {
            transform: translate(0, 0);
        }
        80% {
            transform: translate(0, -32px);
        }
        90%, 100% {
            transform: translate(0, 188px);
        }
    }
    @keyframes box-scale3 {
        18% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        26%, 100% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
    }
    @keyframes box-move4 {
        28% {
            transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
        }
        41%, 52% {
            transform: translate(0, 0);
        }
        80% {
            transform: translate(0, -32px);
        }
        90%, 100% {
            transform: translate(0, 188px);
        }
    }
    @keyframes box-scale4 {
        22% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        30%, 100% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
    }
    @keyframes box-move5 {
        32% {
            transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
        }
        45%, 52% {
            transform: translate(0, 0);
        }
        80% {
            transform: translate(0, -32px);
        }
        90%, 100% {
            transform: translate(0, 188px);
        }
    }
    @keyframes box-scale5 {
        26% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        34%, 100% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
    }
    @keyframes box-move6 {
        36% {
            transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
        }
        49%, 52% {
            transform: translate(0, 0);
        }
        80% {
            transform: translate(0, -32px);
        }
        90%, 100% {
            transform: translate(0, 188px);
        }
    }
    @keyframes box-scale6 {
        30% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        38%, 100% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
    }
    @keyframes box-move7 {
        40% {
            transform: translate(var(&#45;&#45;x), var(&#45;&#45;y));
        }
        53%, 52% {
            transform: translate(0, 0);
        }
        80% {
            transform: translate(0, -32px);
        }
        90%, 100% {
            transform: translate(0, 188px);
        }
    }
    @keyframes box-scale7 {
        34% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        }
        42%, 100% {
            transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
        }
    }
    @keyframes ground {
        0%, 65% {
            transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
        }
        75%, 90% {
            transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1);
        }
        100% {
            transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
        }
    }
    @keyframes ground-shine {
        0%, 70% {
            opacity: 0;
        }
        75%, 87% {
            opacity: 0.2;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes mask {
        0%, 65% {
            opacity: 0;
        }
        66%, 100% {
            opacity: 1;
        }
    }
</style>-->

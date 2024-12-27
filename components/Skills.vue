<template>
    <section id="skills" class="bg-dark">
        <h2>SKILLS</h2>
        <ul>
            <li v-for="item in data.skills" :key="item.name">
                <span><img :src="getImageUrl(item.icon)" :alt="item.name" class="icon"></span>
            </li>
        </ul>
        <!-- ajax 설명 불러오기 -->
        <div class="text_area">
            <div class="text">
                <h3></h3>
                <p></p>
            </div>
        </div>
    </section>
</template>

<script setup>
import data from '@/assets/js/data.json'

const getImageUrl = (name) => {
    return new URL(`../assets/images/icon_${name}.svg`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
#skills {
    background: #1d3045;
    min-height: 100vh;
    padding-top: 100px;
    h2 {
        color: var(--color-light);
    }
    ul {
        position: relative;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        gap: 5vw;
        margin: 18vh auto 0;
        width: 100%;
        height: 70px;
        perspective: 1500px;
        li {
            position: relative;
            height: 100%;
            aspect-ratio: 1;
            transition: 1s all;
            span {
                position: relative;
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-content: center;
                height: 100%;
                transition: 1s all;
                z-index: 3;
                &:before {
                    position: absolute;
                    display: block;
                    content: '';
                    left: 50%;
                    top: 50%;
                    width: 100%;
                    height: 4px;
                    background: #1d3045;
                    transform: translate(-50%, -2px);
                    z-index: 2;
                }
                img {
                    position: relative;
                    z-index: 4; 
                }
            }
            &:nth-of-type(3) span::before,
            &:nth-of-type(4) span::before {
                width: 78%;
            }
            &:nth-of-type(6) span::before {
                width: 70%;
            }
            &:nth-of-type(7) span::before {
                width: 48%;
            }
        }
        &:hover li {
            transform: scale(.8);
            img {
                opacity: .3;
            }
            &:hover {
                span {
                    transform: scale(1.5) rotate3d(0, 1, 0, 360deg);
                    cursor: pointer;
                }
                img {
                    opacity: 1 !important;
                }
            }
        }
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, .2);
        }
    }
    .text_area {
        margin-top: -43px;
        padding: 130px 10% 0;
        width: 100%;
        height: 230px;
        text-align: center;
        color: #fff;
        h3 {
            margin-bottom: 20px;
            line-height: 1.5rem;
            word-break: keep-all;
        }
        p {
            word-break: keep-all;
            span {
                display: inline-block;
                margin: 2px;
                padding: 5px 8px;
                color: #fff;
                background-color: rgba(63, 114, 175, .5);
                border-radius: 15px;
            }
        }
    }
}
</style>
<template>
    <section id="works" class="bg-light">
        <div class="guide"><span>좌우로 스와이프 하세요</span></div>
        <h2>WORKS</h2>
        <ul class="work_lists">
            <li v-for="item in data.works" :key="item.title">
                <div class="text_wrap">
                    <p class="year">{{ item.year }}</p>
                    <p class="title" v-html="item.title"></p>
                    <p class="desc" v-html="item.desc"></p>
                    <p class="tags" v-for="(tag, i) in item.tags" :key="`tag-${i}`">
                        <span>{{ tag }}</span>
                    </p>
                    <figure :style="`background-color: #${randomBg()};`">
                        <template v-if="typeof(item.image) == 'object'">
                            <img :src="getImageUrl(item.image[0])" alt="" class="image haveGif" />
                        </template>
                        <img :src="getImageUrl(item.image)" alt="" class="image" v-else />
                    </figure>
                </div>
            </li>
        </ul>
        <div class="works_detail">
            <div class="pagination">
                <h3 class="works_year"></h3>
                <a href="" class="prev">PREV</a>
                <a href="" class="next">NEXT</a>
            </div>
            <p class="works_title"></p>
            <p class="works_desc"></p>
            <p class="works_tags"></p>
            <figure class="pc">
                <span class="frame"></span>
                <span class="img_wrap">
                    <img src="" alt="">
                </span>
            </figure>
            <div class="btn_close"><i class="fa-solid fa-xmark"></i></div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import data from '@/assets/js/data.json'

const getImageUrl = (name) => {
    return new URL(`../assets/images/works/${name}`, import.meta.url).href
}

const randomColor = ref(['1d3045', '6682a3', 'dbe2ef', 'fff'])

const randomBg = () => {
    let colorCount = randomColor.value.length;
    let order = Math.floor(Math.random() * colorCount);
    return randomColor.value[order];
}

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
})
</script>

<style lang="scss" scoped>
#works {
    padding: 100px 0;
    min-height: 100vh;
    background-color: var(--color-light);
    color: var(--color-dark);
    h2 {
        color: var(--color-dark);
    }
    .work_lists {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        padding: 0 7.8vw 80px;
        margin-top: 70px;
        width: 100%;
        z-index: 1;
        gap: 2.5vw;
        &:before {
            position: absolute;
            display: block;
            margin-top: 30px;
            left: 0;
            top: 0;
            content: '';
            width: 100%;
            height: 2rem;
            border-bottom: 1px solid var(--color-dark);
            z-index: 2;
        }
        li {
            position: relative;
            display: block;
            flex: 0 0 18vw;
            .text_wrap {
                font: 800 .875rem/1 var(--font-desc);
                .year {
                    display: inline-block;
                    padding: 30px 0 30px;
                    font: 500 1.325rem/2rem 'Oswald', sans-serif;
                    letter-spacing: -1px;
                    position: relative;
                    transition: .5s all;
                    &:after {
                        position: absolute;
                        left: 0;
                        top: 62px;
                        display: block;
                        content: '';
                        width: 100%;
                        height: 3px;
                        font-size: 0;
                        line-height: 0;
                        background: var(--color-dark);
                        transition: .5s all;
                    }
                }
                .title {
                    margin-bottom: 10px;
                }
                .desc {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    margin-bottom: 30px;
                    height: 1.125rem;
                    font-size: 0.75rem;
                    font-weight: 400;
                    line-height: 1.5;
                }
                .tags {
                    display: none;
                }
            }
            figure {
                position: relative;
                overflow: hidden;
                width: 100%;
                aspect-ratio: 1.75;
                background: var(--color-dark);
                img {
                    object-fit: cover;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 100%;
                    mix-blend-mode: luminosity;
                    opacity: .5;
                    transform: translate(-50%, -50%);
                    transition: .5s all;
                }
            }
            &:hover {
                .year {
                    padding: 20px 0 40px 0;
                    color: var(--color-mid);
                    &:after {
                        top: 0;
                        background-color: var(--color-mid);
                    }
                }
                figure {

                    img {
                        mix-blend-mode: normal !important;
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1.2);
                    }
                    &:after {
                        position: relative;
                        display: block;
                        content: '';
                        width: 100%;
                        height: 100%;
                        color: #fff;
                        text-align: center;
                        background: rgba(0, 0, 0, .5) url("../images/window_bg.png") no-repeat 50% 50%;
                        background-size: cover;
                        z-index: 5;
                    }
                }
            }
        }
    }
    .guide {
        content: '';
        position: absolute;
        display: none;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        z-index: 99;
        span {
            position: absolute;
            left: 50%;
            top: 70%;
            width: 150px;
            height: 150px;
            font-size: 0;
            line-height: 0;
            background: #fff url("../images/swipe.gif") no-repeat 50% 50%;
            background-size: 100px auto;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
swiper-container {
    
}


/* Works Detail*/
.works_detail {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    padding: 14.8vh 9.8vw 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background-color: #d9e4f2;
    .pagination {
        position: relative;
        margin-bottom: 130px;
        min-width: 250px;
        width: 30vw;
        max-width: 320px;
        text-align: center;
        z-index: 101;
        transition: .5s all;
        h3 {
            display: inline-block;
            font: 400 2.25rem/2rem 'Oswald', sans-serif;
            &:before {
                display: block;
                content: " ";
                margin-bottom: 20px;
                width: 100%;
                height: 5px;
                background-color: var(--color-dark);
            }
        }
        a {
            display: block;
            position: absolute;
            padding: 0 40px;
            top: 40px;
            font-size: .75rem;
            transition: .5s all;
            &.deactive {
                opacity: .3;
            }
            &:before,
            &:after {
                display: inline-block;
                position: absolute;
                top: 50%;
                content: '';
                width: 30px;
                height: 1px;
                background: var(--color-dark);
                transition: .5s all;
            }
            &.prev {
                padding-right: 0;
                left: 0;
                &:before,
                &:after {
                    left: 0;
                    transform-origin: 0 100%;
                }
                &:hover {
                    padding: 0 10px 0 30px;
                    &:before {
                        transform: rotate(45deg);
                    }
                    &:after {
                        transform: rotate(-45deg);
                    }
                }
            }
            &.next {
                padding-left: 0;
                right: 0;
                &:before,
                &:after {
                    right: 0;
                    transform-origin: 100% 0;
                }
                &:hover {
                    // padding-right: 40px;
                    padding: 0 30px 0 10px;
                    &:before {
                        transform: rotate(45deg);
                    }
                    &:after {
                        transform: rotate(-45deg);
                    }
                }
            }
        }
    }
    .works_title {
        margin-bottom: 50px;
        font: 800 1.125rem/1 var(--font-tit);
    }
    .works_desc {
        max-width: 30vw;
        font-size: .875rem;
        line-height: 1.5rem;
    }
    .works_tags {
        max-width: 30vw;
        margin: 40px 0 0 -5px;
        span {
            display: inline-block;
            margin: 5px;
            padding: 7px 13px;
            color: var(--color-mid);
            font-size: 0.725rem;
            background: rgba(255, 255, 255, .8);
            border-radius: 18px;
            &:before {
                content: "#";
            }
        }
    }
    figure {
        position: absolute;
        z-index: 1;
        transition: .5s left;
        .frame {
            position: relative;
            display: block;
            background-position: 0 0;
            background-repeat: no-repeat;
            background-size: 100% auto;
            z-index: 3;
        }
        .img_wrap {
            position: absolute;
            display: block;
            overflow: hidden;
            z-index: 2;
            img {
                width: 100%;
            }
        }
        &.pc {
            left: 43vw;
            top: 50%;
            width: 60vw;
            transform: translateY(-50%);
            .frame {
                aspect-ratio: 1.275;
                background-image: url("../images/frame_pc.png");
            }
            .img_wrap {
                left: 4%;
                top: 5.6%;
                width: 92.2%;
                height: 66.2%;
            }
        }
        &.tab {
            left: 45.2vw;
            top: 50%;
            width: 57vw;
            transform: translateY(-50%);
            .frame {
                aspect-ratio: 1.6;
                background-image: url("../images/frame_tab.png");
            }
            .img_wrap {
                left: 21.3%;
                top: 4.5%;
                width: 76.2%;
                height: 91%;
            }
        }
        &.mobile {
            left: 52vw;
            top: 14vh;
            width: 33.8vw;
            .frame {
                aspect-ratio: .5;
                background-image: url("../images/frame_mobile.png");
            }
            .img_wrap {
                left: 6.5%;
                top: 3.3%;
                width: 86.1%;
                height: 93.35%;
            }
        }
    }
}
.btn_close {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 45px;
    height: 45px;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 50%;
    background: #fff;
    border: 3px solid var(--color-dark);
    opacity: .8;
    transform: translate(-50%, -50%);
    z-index: 100;
    cursor: none;
    i {
        margin-top: 7px;
    }
}
</style>
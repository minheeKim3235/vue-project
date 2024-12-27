<template>
    <section id="contact" class="bg-dark">
        <h2>Get in Touch!</h2>
        <form method="POST" action="https://script.google.com/macros/s/AKfycbwiPtnHWPhKMG80IGuG5SSBSWPvP67QRadyEZmBepMDh0dAmLTu04yClyFHy-WIygFM/exec" target="frAttachFiles" name="contactForm" class="gform">
            <ul>
                <li>
                    <label for="name"><font-awesome :icon="['fas', 'user']" />이름</label>
                    <input type="text" placeholder="이름" id="name" name="name" autocomplete="username" required />
                </li>
                <li>
                    <label for="mail"><font-awesome :icon="['fas', 'envelope']" />이메일</label>
                    <input type="email" placeholder="메일" name="email" id="mail" autocomplete="email" required />
                </li>
                <li>
                    <label for="title"><font-awesome :icon="['fas', 'pen']" />제목</label>
                    <input type="text" placeholder="제목" id="title" name="contactText" autocomplete="off" required />
                </li>
                <li>
                    <label for="content" class="hidden">내용</label>
                    <textarea name="message" cols="30" rows="10" placeholder="내용을 입력하세요." autocomplete="off" id="content" required></textarea>
                </li>
            </ul>
            <button type="submit"><font-awesome :icon="['fas', 'paper-plane']" /> SEND MESSAGE</button>
            <div style="display:none" class="thankyou_message">
                <div class="inner_wrap">
                    <h2><em><i class="fa-solid fa-envelope-circle-check"></i><br />
                            Thanks!</em>연락주셔서 감사합니다!
                    </h2>
                    <span class="done"><i class="fa-solid fa-xmark"></i></span>
                </div>
                <!-- You can customize the thankyou message by editing the code below -->

            </div>
        </form>
    </section>
</template>

<script setup>
import { faUser } from '@fortawesome/free-solid-svg-icons'
</script>

<style lang="scss" scoped>
#contact {
    padding: 10vh 0;
    min-height: 100vh;
    background: #596c84;
    h2 {
        margin-bottom: 30px;
        font-size: 6vw;
        color: #fff;
        letter-spacing: 0;
    }
    form {
        position: relative;
        display: flex;
        flex-flow: column wrap;
        margin: 0 auto;
        min-width: 400px;
        width: 35vw;
    }
    label {
        position:relative;
        display: flex;
        align-items: center;
        margin-left: 30px;
        height: 50px;
        line-height: 100%;
        color: transparent;
        z-index: 2;
        svg {
            line-height: auto;
            color: #fff;
        }
        &.hidden {
            width: 0;
            height: 0;
            line-height: 0;
            color: transparent;
        }
    }
    input,
    textarea {
        position: relative;
        display: block;
        margin: -50px 0 15px;
        padding: 0 20px 0 80px;
        width: 100%;
        height: 50px;
        font-size: 0.825rem;
        color: #fff;
        background: #697a90;
        border: 1px solid rgba(255, 255, 255, .25);
        border-radius: 50vh;
        z-index: 1;
        transition: .5s all;
    }
    textarea {
        padding: 20px;
        margin-top: 0;
        height: 200px;
        line-height: 1.25rem;
        border-radius: 20px;
        resize: none;
    }
    input::placeholder,
    textarea::placeholder {
        color: #fff;
    }
    input:focus,
    textarea:focus {
        color: var(--color-dark);
        background: rgba(255, 255, 255, .5);
        border: none;
        outline: none;
        box-shadow: 0 0 15px rgba(0, 0, 0, .2);
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 50px;
        color: var(--color-dark);
        border-radius: 25px;
        background: rgba(255, 255, 255, .8);
        transition: .5s all;
        &:focus,
        &:active {
            background: rgba(29, 48, 69, .8);
            color: #fff;
            outline: none;
            box-shadow: 0 0 15px rgba(0, 0, 0, .2);
        }
    }
}
.thankyou_message {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: 101;
    .inner_wrap {
        position: absolute;
        display: flex;
        flex-flow: row wrap;
        justify-items: center;
        align-items: center;
        left: 50%;
        top: 50%;
        padding: 50px 20px !important;
        width: 400px !important;
        height: auto !important;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, .5);
        z-index: 101;
        transform: translate(-50%, -50%);
    }
    h2 {
        padding: 0;
        margin: 0 !important;
        width: 100%;
        text-align: center;
        font-family: var(--font-desc);
        font-size: 1rem;
        line-height: 1.125rem;
        letter-spacing: 0;
        color: #333 !important;
        em {
            display: block;
            margin-bottom: 40px;
            font: normal 400 2rem/1 var(--font-tit);
            i {
                margin-bottom: 20px;
            }
        }
    }
    .done {
        position: absolute;
        right: 15px;
        top: 15px;
        width: 40px;
        height: 40px;
        color: #333;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }
}
</style>
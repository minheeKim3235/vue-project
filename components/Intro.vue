    <template>
    <section id="intro" class="bg-light">
        <p class="greeting">
            <span>만나서 반갑습니다 :)</span>
            웹퍼블리셔 김민희입니다.
        </p>
        <div class="intro_wrap">
            <p>DILIGENCE</p>
            <p><span>CURIOUSITY</span><a class="send-mail" href="contact"><i class="fas fa-envelope"></i>
                    mhkim3235@gmail.com</a></p>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#intro {
    padding-bottom: 0;
    background-color: var(--color-light);

    .greeting {
        position: relative;
        margin-top: 100px;
        text-align: center;
        font: 500 1.25rem/2rem var(--font-desc);
        color: var(--color-dark);
        z-index: 3;

        span {
            display: block;
            font-weight: 800;
        }
    }
    .intro_wrap {
        margin-top: 10%;
        width: 100%;
        z-index: 1;
        p {
            width: 100%;
            text-align: center;
            font: 200 7vw/.73 var(--font-tit);
            color: var(--color-dark);
            letter-spacing: -5px;
            &:nth-of-type(1) {
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-end;
            }
            &:nth-of-type(2) {
                position: relative;
                overflow: hidden;
                min-height: 350px;
                padding-left: 5px;
                background-color: var(--color-dark);
                z-index: 1;
                span {
                    display: block;
                    line-height: .66;
                    color: var(--color-light);
                }
                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    background: url("@/assets/images/office.webp") no-repeat 50% 80%;
                    background-size: cover;
                    opacity: .1;
                    z-index: 2;
                }
            }
        }
    }
    .send-mail {
        position: relative;
        display: inline-flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        padding: 0 40px;
        margin: 100px auto 0;
        min-height: 50px;
        max-height: 70px;
        height: 4vw;
        font: 400 1.125rem/1 var(--font-desc);
        letter-spacing: 0;
        color: var(--color-light);
        background: rgba(255, 255, 255, .1);
        border: 1px solid rgba(255, 255, 255, .4);
        border-radius: 35px;
        z-index: 4;
        transition: .5s all;
        i {
            margin-right: 6px;
        }
    }
}
</style>
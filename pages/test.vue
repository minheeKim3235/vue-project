<template>
  <div class="global_content promotion_teacher_review">
      <div class="top">
          <div class="inner">
              <span class="obj0"><img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/top_1.png`" alt="이투스 기숙학원이 이투스 강사에 진짜 자신있는 이유" /></span>
              <span class="obj1"><img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/top_2.png`" alt="재원생 후기가 증명하니까!" /></span>
          </div>
      </div>
      <div class="cont1">
          <div class="inner">
              <img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont1_tit.png`" alt="이투스 기숙학원 재원생들의 극찬이 쏟아지는 이투스 기숙학원 강사 Real 후기" />
              <ul ref="realList">
                  <li v-for="(item, i) in realReview" :key="i" :style="`--space: ${item.space}`">
                      <img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont1_img${i + 1}.png`" :alt="item.text">
                  </li>
              </ul>
          </div>
      </div>
      <div class="cont2">
          <div class="pin_area">
              <img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont2_tit.png`" alt="이투스 기숙학원 강사 수업 후기 살펴보기" class="cont2_tit" />
              <p class="cont2_desc"><img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont2_img4.png`" alt="강사 이미지를 클릭하여 후기를 살펴보세요"><span></span></p>
              <ul class="teacher_slide" @mouseleave="clearName" ref="teacherWrap">
                  <li v-for="(item, i) in teacherImages" :key="i">
                      <button type="button" @mouseover="activeName(item, $event)" @click="selectTeacher(item, i)"><img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont2_tch${i + 1}.png`" alt="" @load="onImageLoad"></button>
                      <div class="teacher_name" ref="teacherNameFrame">
                          <em>{{ item.subj }} <b>{{ item.name }}</b></em>
                      </div>
                  </li>
              </ul>
              <div class="drag-proxy"></div>
              <p class="update">
                  <span class="obj3"></span>
                  <span class="obj4"></span>
                  <img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont2_img1.png`" alt="강사 수업 후기 업데이트 중">
              </p>
          </div>
      </div>
      <div class="cont3">
          <div class="inner">
              <img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont3_tit.png`" alt="ETOOS가 만든 REAL ETOOS 이투스 기숙학원 선생님들이 대입성공 할 여러분을 기다리고 있습니다." />
              <a href="/normal/introduce/teacher/main" target="_blank" class="link1"><span>NEW</span>강사라인업 보러가기</a>
              <a href="/normal/recruit/information?recruit_seq=1424" target="_blank" class="link2"><span>HOT</span>모집요강 살펴보기</a>
          </div>
      </div>

      <!-- 강사후기 상세 팝업 -->
      <Transition>
          <div class="modal" v-if="popItem !== ''">
              <div class="modal_cont">
                  <p class="teacher_info">
                      <span class="subj">{{ popItem.subj }}</span>
                      <span class="name">{{ popItem.name }}T</span>
                      <span class="pic"><img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont2_pop_tch${popItem.idx}.png`" :alt="`${popItem.name} 선생님 이미지`"></span>
                  </p>
                  <div class="pop_slide">
                      <div class="swiper" ref="popSlide">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="(item, i) in popItem.questions" :key="i">
                                  <p class="tit">
                                      <img :src="`${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont2_pop_${i}.png`" :alt="questions[i]">
                                  </p>
                                  <ul>
                                      <li v-for="list in item" :key="list" v-html="list"></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="swiper-pagination pop-swiper-pagination"></div>
                  </div>
                  <button type="button" class="pop_close" @click="popItem = ''">팝업닫기</button>
              </div>
          </div>
      </Transition>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import imageData from '@/assets/js/teacher_review.json';// 선생님 후기는 json 파일로 관리

// data
const resourceUrl = useRuntimeConfig().public.resourceUrl['BASE'];
const realReview = ref([
  { text: '이투스 기숙학원 현강에서만 재원생들에게 무료로 나눠주는 고퀄리티 자료 대박이에요!', space: '0 0 16px -13px' },
  { text: '현강이라 집중도 확실히 잘 되고, 바로 Q&A도 해주셔서 큰 도움이 됐어요. 현강에서만 알려주는 꿀팁까지!', space: '0 0 34px -248px' },
  { text: '쉬는 시간에도 학생들 개인별 피드백을 직접 찾아가서 해주시는 열정적인 모습에 감동했어요', space: '0 0 35px 82px' },
  { text: '정해진 시간 외에도 최선을 다해 현장에서 질의응답을 받아주셔서 진짜 실력이 향상되었어요!', space: '0 0 35px 32px' },
  { text: '오직 이투스 기숙에서만 가능한 이투스 쌤과 1:1 개별 생담으로 직접 조언들을 수 있다는 장점', space: '0 0 35px -9px' },
  { text: '수업이 머릿속에 제대로 각인되어서 어려운 문제 풀 때마다 수업이 생생하게 떠올라서 쉽게 풀려요', space: '0 0 35px -219px' },
  { text: '선생님과 적극적인 상호작용으로 수업 내용 이해가 쏙쏙 잘돼요', space: '0 0 35px 153px' },
  { text: '인강에서도 쓴소리 하시지만 역시 현장에서 생생하게 직접 들으면 나태해진 정신이 번쩍 들어요!', space: '0 0 0 -51px' },
])
const questions = ref({
  q1: '선생님의 현강이 좋았던 이유는?',
  q2: '선생님의 강의 특징은 무엇인가요?',
  q3: '해당강의를 선택하게 된 이유는 무엇인가요?',
  q4: '선생님의 강의를 듣기 전 기대했던 점이나 목표가 있나요?',
  q5: '선생님의 강의를 듣고 얻은 효과는 무엇이 있었나요?',
  q6: '선생님의 강의를 어떤 학생에게 추천하고 싶나요?',
  q7: '선생님께 하고 싶은 이야기'
})
const popItem = ref('');
const teacherNameFrame = ref(null);
const popSlide = ref(null);
const teacherImages = ref([]); // JSON 데이터를 저장할 변수
const imagesLoaded = ref(0); // 로드 완료된 이미지 수
const totalImages = ref(0); // 총 이미지 수
const imageUrls = Array.from({ length: 16 }, (_, i) => `${resourceUrl}/cs/pc/branch/images/commonmenu/teacher_review/cont2_pop_tch${i + 1}.png`);//팝업 이미지 사전 로드 경로
const preloadedImages = {}; // 사전 로드된 이미지 객체를 저장
const isStopped = ref(false); // 마우스 오버시 함수 실행 막기

//gsap
gsap.registerPlugin(ScrollTrigger, Draggable);
const realList = ref();
const teacherWrap = ref();

// methods
// 팝업 이미지를 사전 로드
const preloadImages = () => {
imageUrls.forEach((url) => {
  const img = new Image();
  img.src = url; // 이미지 로드
  preloadedImages[url] = img; // 로드된 Image 객체 저장
});
};
// JSON 데이터 로드
const loadImageData = () => {
  teacherImages.value = imageData.map((data) => ({
      name: data.name, 
      subj: data.subj, 
      questions: data.questions, 
  }));
totalImages.value = teacherImages.value.length;
};
// 강사 후기 모든 이미지가 로드될 때 호출
const onImageLoad = () => {
imagesLoaded.value += 1;
if (imagesLoaded.value === totalImages.value) {
  //console.log('모든 이미지가 로드되었습니다!'); // 추가 로직 실행
  // Real 후기 모션
  const listItem = realList.value.querySelectorAll('li');
      gsap.fromTo(listItem, { y: 100, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "elastic.out(1.25,0.75)",
          scrollTrigger: {
              trigger: '.cont1',
              start: "top 10%",
              toggleActions: 'play none none reset'
          }
      })

      // 강사 수업 후기 모션
      let sections = gsap.utils.toArray(".teacher_slide li");
      let maxWidth = 0;
      let horizontalScroll, verticalMotion, scrollTween, drag;
  
      // 가로 스크롤 최대 너비 계산
      const getMaxWidth = () => {
          maxWidth = 0;
          sections.forEach((section) => {
              maxWidth += section.offsetWidth + 30;
          });
      };
      let startPosition;
      const setStartPos = () => { return startPosition = "-50px" };
      
      // 초기화 함수
      const initializeScroll = () => {
          // 기존의 ScrollTrigger와 Draggable 제거
          if (horizontalScroll) {
              horizontalScroll.kill();
          }
          if (verticalMotion) {
              verticalMotion.kill();
          }
          if (drag) {
              drag.kill();
          }
          if (scrollTween) {
              scrollTween.kill();
          }
  
          setStartPos();
  
          // 가로 스크롤 애니메이션 설정
          scrollTween = gsap.to(".teacher_slide", {
              x: () => `-${maxWidth - window.innerWidth + 200}`,
              ease: "none",
          });
  
          // ScrollTrigger 가로 스크롤 생성
          horizontalScroll = ScrollTrigger.create({
              animation: scrollTween,
              trigger: ".pin_area",
              pin: true,
              scrub: true,
              start: `top ${startPosition}`,
              end: () => `+=${maxWidth}`,
              invalidateOnRefresh: true, // 리사이즈 시 재계산z
          });

          let isScrolling;
  
          // 세로 애니메이션 설정
          sections.forEach((li, i) => {
              const offsetLeft = li.getBoundingClientRect().left;
              verticalMotion = ScrollTrigger.create({
                  trigger: li,
                  start: () => `left+=${offsetLeft - 222} right`,
                  end: () => `left+=${offsetLeft * 1.25} left`,
                  scrub: true,
                  onUpdate: (self) => {
                      let progress = self.progress;
                      let offset = gsap.utils.interpolate(
                          -4.5,
                          1.39,
                          Math.abs(progress - 0.5) * 2
                      );
                      gsap.to(li, {
                          y: `${offset}vh`,
                          ease: "none",
                          overwrite: true,
                          duration: 0.2,
                          onComplete: () => {
                          }
                      });

                      clearTimeout(isScrolling);
                      isScrolling = setTimeout(() => {

                          // 스크롤 멈출 때 translateY 값이 가장 작은 li 찾기
                          findHighestCard(sections);
                      }, 500)
                  }
              });
          });
  
          // Drag 기능 초기화
          let dragRatio = maxWidth / (maxWidth - window.innerWidth);
          drag = Draggable.create(".drag-proxy", {
              trigger: ".teacher_slide",
              type: "x",
              inertia: true,
              allowContextMenu: true,
              onPress() {
                  this.startScroll = horizontalScroll.scroll();
              },
              onDrag() {
                  horizontalScroll.scroll(this.startScroll - (this.x - this.startX) * dragRatio);
              },
              onThrowUpdate() {
                  horizontalScroll.scroll(this.startScroll - (this.x - this.startX) * dragRatio);
              },
          })[0];
      };
  
      // 초기 실행
      getMaxWidth();
      initializeScroll();
      
      // 리사이즈 이벤트 핸들러
      window.addEventListener("resize", () => {
          getMaxWidth();
          ScrollTrigger.refresh(); // ScrollTrigger 트리거 위치 갱신
          initializeScroll(); // 스크롤 및 드래그 초기화
      });
}
};
// 선생님 카드 오버 시 이름 갱신
const activeName = (val, e) => {
  isStopped.value = true;
  teacherWrap.value.querySelectorAll('li').forEach((li) => {
      li.classList.remove('current');
  })
  if (e.target) {
      e.target.parentNode.parentNode.classList.add('current');
  }
};
// 선생님 카드 마우스 아웃
const clearName = () => {
  isStopped.value = false;
  var sections = teacherWrap.value.querySelectorAll('li');
  sections.forEach((li) => {
      li.classList.remove('current');
  })

  findHighestCard([...sections]);
}
// 선생님 선택
const selectTeacher = (val, i) => {
  popItem.value = val
  popItem.value.idx = i + 1
}
// 팝업 스와이퍼 생성
const popSwiper = () => {
  new Swiper(popSlide.value, {
      pagination: {
          el: '.pop-swiper-pagination',
          clickable: true
      }
  })
}
// 가장 높은 카드 찾기
const findHighestCard = (val) => {
  if (isStopped.value) {
      return;
  }
  const liTransforms = val.map((el) => {
      const transform = window.getComputedStyle(el).transform;
      let translateY = 0;
  
      // transform이 'matrix()' 형식일 경우만 파싱
      if (transform && transform.startsWith("matrix")) {
          const matrix = transform.match(/matrix\(([^)]+)\)/);
          if (matrix) {
              const values = matrix[1].split(", ").map(parseFloat);
              translateY = values[5]; // matrix의 마지막 값이 translateY
          }
      }
  
      return { el, translateY };
  });
  
  const minTranslateYLi = liTransforms.reduce((minLi, currentLi) => {
      return currentLi.translateY < minLi.translateY ? currentLi : minLi;
  });
  
  // 해당 li의 인덱스 찾기
  const minIndex = val.indexOf(minTranslateYLi.el);
  
  val.forEach((item) => item.classList.remove("current"));
  val[minIndex].classList.add('current');
}
// 팝업 클릭 시 해당 선생님 정보로 popItem 갱신
watch(popItem, (newVal) => {
  nextTick(() => {
      popSwiper();
  });
  // 팝업 생성 시 html 스크롤 막기
  if (popItem.value !== '') {
      document.querySelector('html').style.overflow = 'hidden';
  } else {
      document.querySelector('html').style.overflow = 'auto';
  }
})

// 컴포넌트 마운트 시 데이터 로드
onMounted(() => {
  preloadImages();
  loadImageData();
});
</script>

<style lang="scss" scoped>
.drag-proxy {
visibility: hidden;
position: absolute;
}
.promotion_teacher_review {
  overflow: hidden;
  .inner {
      text-align: center;
  }

  .top {

      background: #c9e2fc url('https://acaimg.etoos.com/cs/pc/branch/images/commonmenu/teacher_review/top_bg.png') no-repeat 50% 0;

      .inner {
          position: relative;
          height: 810px;

          span[class^='obj'] {
              display: block;
              position: absolute;
          }

          .obj0 {
              left: 90px;
              top: 193px;
          }

          .obj1 {
              right: 7px;
              top: 309px;
          }
      }
  }

  .cont1 {
      background: #39526b;

      .inner {
          padding-bottom: 180px;
      }

      li {
          margin: var(--space);
          opacity: 0;
      }
  }

  .cont2 {
      background: #fff;
      text-align: center;
      .pin_area {
          // padding: 12.58vh 0;
          display: flex;
          flex-direction:column;
          align-items: center;
          padding: 180px 0 90px;
      }
      .cont2_tit {
          flex: 0 0 auto;
          margin-bottom: 3.5vh;
          width: auto;
          height: clamp(95px, 9.53vh ,122px);
      }
      .cont2_desc {
          display: inline-block;
          position:relative;
          margin-bottom: calc(8.2vh + 30px);
          height: clamp(38px, 4.9vh , 70px);
          span {
              position: absolute;
              display: block;
              right: 3.8%;
              top: 15%;
              width: 4%;
              aspect-ratio: 0.7;
              background: #6d54d6;
              z-index: 2;
              animation: show 0.8s steps(2, jump-none) 0s infinite;
          }
          img {
              max-height: 100%;
          }
      }
      .teacher_slide {
          margin: 0 200px 2.3vh;
          // margin: 0 100px 115px;
          display: flex;
          align-self: flex-start;
          gap: 20px;
          li {
              position: relative;
              transition: all 0.3s ease-out;
              
              &:after {
                  content: '';
                  display: inline-block;
                  position: absolute;
                  top: -14px;
                  left: 50%;
                  width: 0;
                  height: 3px;
                  background: #6d54d6;
                  transform: translateX(-50%);
                  transition: all 0.3s 0.3s;
              }
              .teacher_name {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin: 7px auto 0;
                  width: 100%;
                  height: clamp(32px, 5vh, 58px);
                  font-size: clamp(22px, 1.7vmin, 30px);
                  font-weight: 300;
                  color: #fff;
                  opacity: 0;
                  background: #6d54d6;
                  border-radius: 1.05vmin;
                  transform: translateY(-10px);
                  transition: all 0.3s 0.3s;
                  
                  b {
                      font-weight: 800;
                  }
                  
              }
              &.current {
                  &:after {
                      width: 72px;
                  }
                  .teacher_name {
                      opacity: 1;
                      transform: translateY(0px);
                  }
              }
              &:hover {
                  padding-bottom: 30px;
                  margin-top: -30px;
                  
              }
              button {
                  cursor: pointer;
              }
              img {
                  width: auto;
                  height: clamp(330px, 40vh, 470px);
              }
              
          }
      }
      .update {
          position: relative;
          display: inline-block;
          //margin-bottom: 12.58vh;
          height: clamp(26px, 3.5vh, 48px);
          img {
              width: auto;
              height: 100%;
          }
          .obj3 {
              position: absolute;
              left: 5.1%;
              top: 17%;
              // width: 32px;
              height: 66%;
              aspect-ratio: 1;
              background: url('https://acaimg.etoos.com/cs/pc/branch/images/commonmenu/teacher_review/cont2_img2.png') no-repeat 50% 50% / 100% auto;
              animation: rotate 3s linear 0s infinite;
          }
          .obj4 {
              position: absolute;
              left: 60px;
              top: 8px;
              width: 372px;
              height: 32px;
              background: #222;
              opacity: 0;
              // animation: show 2.5s linear 0s infinite;
          }
      }
  }

  .cont3 {
      background: #032141;
      .inner {
          position: relative;
          a {
              display: block;
              position: absolute;
              bottom: 120px;
              width: 410px;
              height: 110px;
              font-size: 0;
              line-height: 0;
              span {
                  display: block;
                  position: absolute;
                  left: 48px;
                  top: 35px;
                  width: 80px;
                  height: 40px;
                  background: #fff;
                  animation: show .8s steps(2, jump-none) 0s infinite;
              }
              &.link1 {
                  left: 170px;
              }
              &.link2 {
                  right: 170px;
                  span {
                      left: 58px;
                  }
              }
              
          }
      }
  }
  .modal {
      z-index: 101 !important;
      .modal_cont {
          display: flex;
          margin-top: 30px;
          width: 1200px;
          height: 800px;
          max-height: 90%;
          background: #ededed;
          border-radius: 10px;
          overflow: visible;
          .teacher_info {
              flex: 0 0 auto;
              position: relaive;
              padding: 100px 0 0 68px;
              width: 380px;
              height: 100%;
              span {
                  display: block;
                  color: #222;
                  font-size: 24px;
                  line-height: 100%;
              }
              .name {
                  margin-top: 10px;
                  font-size: 34px;
                  font-weight: 700;
              }
              .pic {
                  position: absolute;
                  bottom: 0;
                  left: -22px;
                  z-index: 2;
              }
          }
          .pop_slide {
              position: relative;
              margin: 60px;
              margin-left: 0;
              padding: 58px 50px;
              width: 770px;
              background: #fff;
              border-radius: 10px;
              z-index: 1;
              box-sizing: border-box;
              .swiper {
                  height: 550px;
                  .swiper-slide {
                      p.tit {
                          margin-bottom: 35px;
                      }
                      li {
                          font-size: 16px;
                          line-height: 135%;
                          color: #222;
                          word-break: keep-all;
                          &:not(:last-child) {
                              margin-bottom: 30px;
                          }
                          &:before {
                              content: '- '
                          }
                      }
                  }
              }
          }
          .pop_close {
              position: absolute;
              right: 0;
              top: -54px;
              width: 36px;
              height: 36px;
              background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60' fill='%23d6d6d6' %3E%3Cpath d='M.3 59.7c.2.2.5.3.7.3s.5 0 .7-.3L30 31.4l28.3 28.3c.2.2.5.3.7.3s.5 0 .7-.3c.4-.4.4-1 0-1.4L31.4 30 59.7 1.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0L30 28.6 1.7.3C1.3 0 .7 0 .3.3s-.3 1 0 1.4L28.6 30 .3 58.3c-.4.4-.4 1 0 1.4Z'/%3E%3C/svg%3E") no-repeat 50% 50% / cover;
              font-size: 0;
              line-height: 0;
          }
      }
  }
}
:deep(.pop-swiper-pagination) {
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 60px;
  width: 100%;
  gap: 8px;
  .swiper-pagination-bullet {
      display: block;
      width: 10px;
      height: 10px;
      background: #e8e8e8;
      border-radius: 50%;
      cursor: pointer;
  }
  .swiper-pagination-bullet-active {
      background: #222;
  }
}
.v-enter-active,
.v-leave-active {
transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
opacity: 0;
}

@keyframes rotate {
  0% { transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
}
@keyframes show {
  0% { opacity: 0 }
  100% { opacity: 1 }
}
</style>
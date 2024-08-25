<template>
  <section class="content">
    <div class="cont3">
      <div class="cont3_ban">
        <p>전략담임 소개</p>
        학생과 가장 가까운 곳에서 체계적으로 분석하고<br>관리하는 <strong>대입 성공설계 전문가 그룹</strong>
      </div>
      <div class="teacher_list">
        <ColumnList :items="teacherList" :columns="2" :gap="6" :addClass="setBrand" v-if="isList">
          <template #default="{ item }">
            <PubTeacherList :item="item" @on-click="setActiveItem(item)"/>
          </template>
        </ColumnList>
        <PubTeacherView :item="selectItem" :brand="setBrand" v-else />
      </div>
    </div>
    <SelectBrand />
  </section>
</template>

<script setup>
import { ref } from 'vue';

// data
const setBrand = ref('CSnormal')
const isList = ref(true);
const selectItem = ref();
const teacherList = ref([
  { subj:'전략담임',
    name: '공병권',
    imgSrc: 'http://img.cheongsol.co.kr/web2018/cs/branch/images/cnt/teacherth/a0502_1.png',
    video: '',
    slogan: '알기만 하는 사람은 좋아하는 사람만 못하고 좋아하는 사람은 즐기는 사람보다 못하다',
    career: ['성균관대학교 심리학과 졸업(인지심리학 전공)','現) 강북청솔학원 전략담임','前) 목동 하이씨앤씨 컨설팅팀 팀장'], 
    point: ['인지심리학을 활용한 학습 전략과 동기 부여','강점, 약점 분석을 통해 가장 효율적인 방법 제시','개인별 맞춤 입시 전략 수립'], 
    story:[
      { title: '문OO', context: '상담 때 힘들었던 부분도 잘 들어주시고, 학습 전략에 대해서도 이야기들을 많이 해 주셨습니다. 공부에 흥미를 붙이지 못하는 편이고 고집도 쎈 저였지만, 끝까지 멘탈 잡아주셔서 중요한 시기에도 포기하지 않고 수능까지 끌고 갈 수 있었습니다.<br />특히 정시 준비가 미흡했던 와중에도 많은 제안도 해주시고, 상세한 이야기도 해주셔서 대학을 수월히 결정할 수 있었습니다.' },
      { title: '강OO', context: '선생님은 제가 일정 이상 오르지 않는 성적에 지쳐 있을 때 제 얘기를 잘 들어주시고, 공부법을 어떻게 보완해야 할지를 알려주셨습니다. 저는 덕분에 수험기간을 효율적으로 사용할 수 있었고, 자연스럽게 성적은 올라갈 수 있었습니다. 또 대학 원서를 어디에 써야 할지조차 모르고 있을 때, 수시 전략을 세우는 데 도움을 주셨고, 가장 희망하던 곳에 합격하게 되었습니다' }
    ]
  },
  { subj:'전략담임',
    name: '권승오',
    imgSrc: 'https://acaimg.etoos.com/cs/pc/branch/images/cnt/teacherth/a0772_1.png',
    video: '',
    slogan: '성공의 8할은 일단 출석하는 것이다',
    career: ['현) 강북청솔학원 전략담임','전) 백석고등학교 교사'], 
    point: ['Anyone can be anything!'], 
    story:[
      { title: 'OOO', context: '선생님! <br />지난 1년 동안 첫날부터 끝날까지, 항상 같은 모습으로 저희 곁에 있어 주셨어요. 지쳤을 때에도, 포기하고 싶었을 때에도, 성적이 좋을 때에도 나쁠 때에도, 다시 제자리로 돌아올 수 있도록 항상 같은 자리에서 저희 믿고 붙잡아 주셔서 감사합니다.<br />선생님의 믿음을 업고 1년 동안 열심히 달렸고 원하는 성적 나올 수 있었어요.<br /> 정말 감사합니다!' }
    ]
  },
  { subj:'전략담임',
    name: '김선영',
    imgSrc: 'https://acaimg.etoos.com/cs/pc/branch/images/cnt/teacherth/a0548_1.png',
    video: '',
    slogan: '너만의, 너만을 위한 전략',
    career: ['서강대학교 졸업','前) 이투스네오 전략담임','現) 강북청솔학원 전략담임'], 
    point: ['학생들과 소통이 가능한 진심으로 다가서는 멘토','나 자신을 믿는 순간 폭발적인 잠재력이 발휘됩니다.','다시 시작할 수 있다면 실패가 아닙니다.'], 
    story:[
      { title: '박○○', context: '선생님이 학생들을 대하는 자세와 열정을 지켜보고 있으면 선생님도 저렇게 열심히 하시는데 당사자인 내가 이러고 있으면 안 되겠다는 생각이 안 들 수가 없습니다. 저 자신보다도 선영쌤이 제 잠재력과 능력을 믿어주셨기 때문에 계속해서 힘을 얻을 수 있습니다. 선생님의 진심 어린 의사소통과 열정이 제 안에 숨어있던 도전할 용기를 일깨웠다고 생각합니다.' },
      { title: '이○○', context: '저에게 김선영선생님은 정신적 지주이자 공부 측면에서는 멘토였고, 담임선생님으로 학습조언을 구체적으로 잘 해주셔서 사소한 학습 고민거리도 매주 상담을 받았습니다.<br />선생님과 1년여의 과정을 지내면서 쌤처럼 열정적으로 살아가는 사람이 되고 싶어졌습니다. 바쁘신 와중에도 무언가를 목표로 삼고 뭐든 열정적으로 해내는 선생님이 참 멋졌습니다.' },
      { title: '이○○', context: ' 재수생활을 하면서 김선영선생님을 만난 건 저에게 엄청난 행운이라고 생각합니다.<br />지금까지 좋은 선생님들을 많이 만났지만 김선영선생님은 정말 선생님계의 G.O.A.T입니다 ㅎㅎ<br /> 2023년에 김선영선생님을 담임선생님으로 만나는 학생분들께 한마디 드리자면 선생님을 믿고 나 자신을 믿고 수험생활을 한다면 정말 만족할 수 있는 결과를 얻을 수 있다고 확신합니다.' }
    ]
  },
  { subj:'전략담임',
    name: '김형진',
    imgSrc: 'https://acaimg.etoos.com/cs/pc/branch/images/cnt/teacherth/a0637_1.png',
    video: '',
    slogan: '아쉬움은 남아도 후회는 없다. 후회하지 않도록 최선의 결과를 이끌겠습니다.',
    career: ['중등학교 2급 정교사 자격 (영어과)','現) 강북청솔학원 전략담임','前) 웨스턴학원 재수종합반 원장', '前) 청솔, 정일, 종로학원 재수종합반 영어과 대표강사', '前) 청솔, 정일, 종로학원 재수종합반 담임 경력 20년차'], 
    point: ['Seize the Day!'], 
    story:[
      { title: '신○○', context: '담임 선생님으로 김형진 선생님을 만나서 1년 동안 재수 생활을 잘 해내고 좋은 결과를 얻을 수 있었습니다. 늘 학생들 사이에 일어나는 사소한 일들이나 개인적인 여러 고민들도 적극적으로 관심 가지시고 해결해 주시려 애쓰시던 모습이 떠오릅니다. 질문도 잘 받아주시고 상담도 잘해주시고, 특히 그 사건 기억나시죠?!! 저를 끝까지 믿고 이해해 주셔서 감사했습니다.' },
      { title: '김○○', context: '짜증나던 재수학원 개강 날 아침 조회시간에 담임샘이 해주신 말씀이 1년 내내 힘이 되었던 것 같습니다. 재수 생활 동안 항상 오늘을 기억하라는 말씀, 나중에 재수 안했으면 큰일 날 뻔 했다고 말할 수 있는 날이 올 거라는 말씀, 여기 오기전 까지는 고민이 많았겠지만 이제부터는 아무 생각 없이 공부나 하면 된다는 말씀등등, 아침 저녁으로 듣던 잔소리가지 기억에 남네요.' },
      { title: '장○○', context: '음악하는 학생은 적응하기 힘들 거라는 말이 많지만 아침 시간이라도 잘 활용해 보자는 마음으로 별 기대없이 등록한 학원에서 나이 많은 장수생인 저에게 많은 용기를 주신 고마운 담임 선생님. 덕분에 공부 학원에 있는 동안은 일반 문과 학생들보다 더 열심히 질문도 하고 교무실도 편하게 자주 갔었던 것 같습니다. 저 숙대 붙었다고 전화드렸을 때 축하해주셔서 감사해요.' },
    ]
  },
  { subj:'전략담임',
    name: '박세웅',
    imgSrc: 'https://acaimg.etoos.com/cs/pc/branch/images/cnt/teacherth/a0734_1.png',
    video: '',
    slogan: '달을 향해 쏴라, 빗나가도 별이 될테니',
    career: ['성균관대학교 수학교육과 졸업','현)강북청솔학원 전략담임','전)고등학교 교사 17년(고3담임 10년)근속', '전)경기 진학 협의회 정회원', '전)아테네학원 원장'], 
    point: ['"드림멘토"','너만의 드림멘토, 믿는 대로 이루어진다!'], 
    story:[
      { title: '○○○', context: '헌신과 열정으로 가르침을 주시는 선생님께 깊은 존경과 감사의 말씀을 드립니다. <br />벼랑끝에 매달린 저에게 선생님의 따뜻한 격려와 응원은 저를 다시 한번 도전할 수 있는 용기를 얻을 수 있는 계기가 되었고 그 용기로 지금의 삶을 살 수 있겠 되었습니다. 저의 힘든 시간을 함께해 주셔서 진심으로 감사합니다.' }
    ]
  },
  { subj:'전략담임',
    name: '이찬희',
    imgSrc: 'http://img.cheongsol.co.kr/web2018/cs/branch/images/cnt/teacherth/a0116_1.png',
    video: '',
    slogan: '"1:1" 맞춤 분석 프로세스',
    career: ['현) 강북청솔학원 전략담임','전) 강남청솔학원 전략실장','전) 이투스앤써 강남 전략실장'], 
    point: ['"1:1" 맞춤 분석 프로세스'], 
    story:[
      { title: '중앙대 경영학과/이OO', context: '선생님의 컨설팅 수업은 매우 체계적이었고, 무엇보다 생활기록부를 자세하게 분석해 학교와 학과를 추천해 주셨습니다. 학교 선생님들은 중앙대 경영학과는 불가능하다고 말씀하셨지만, 선생님께서는 가능성이 있다고 지원하자고 하셨고 제가 지원했던 대학중 가장 높은 대학에 합격할 수 있었습니다. 선생님과 함께 나눴던 상담들은 제 입시 생활에 있어서 큰 힘이었습니다.' }
    ]
  },
  { subj:'전략담임',
    name: '임민석',
    imgSrc: 'http://img.cheongsol.co.kr/web2018/cs/branch/images/cnt/teacherth/a0332_1.png',
    video: '',
    slogan: '여러분은 이미 최고입니다. 다만 최선을 다할 뿐.',
    career: ['서울대학교 졸업', '現)강북청솔학원 전략담임', '前)강남청솔학원', '前)이투스앤써 강남'], 
    point: ['입시라는 힘들고 긴 여정에서','같이 걸어갈 수 있는 동반자가 되겠습니다.'], 
    story:[
      { title: '양OO', context: '무엇보다 재수 초반에 힘들었을 때 학원에 적응할 수 있도록 큰 힘이 되어주셨어요.<br />특히 상담할 때나 평소에 오며가며 말씀도 편하게 해주셔서 끝까지 잘 마무리 할 수 있었습니다. 또 입시에 관해서도 신경 많이 써주시고 필요한 것에 대해 시기적절한 조언도 많이 해주셨습니다.<br />힘들었던 재수생활 동안 학원을 즐겁게 다닐 수 있도록 많은 도움이 되었던 것 같아요.' }
    ]
  }
]);

// methods
const setActiveItem = (val) => {
  selectItem.value = val;
  isList.value = !isList.value;
}
</script>

<style lang="scss" scoped>
.cont3 {
  background: #dcdee2;
  padding: 40px 20px 0px;
  .cont3_ban {
    border: 1px solid #acadb0;
    position: relative;
    padding: 12px 10px;
    font-size: 13px;
    color: #000;
    margin-bottom: 15px;
  }
}
:deep(.common_column.CSneo) {
  .subj {
    display: none;
  }
}
</style>
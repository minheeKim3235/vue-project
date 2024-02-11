/****************** HEADER  ********************/

// 메뉴 이동에 필요한 변수 저장
const haeder = document.querySelector("header");
const menus = document.querySelectorAll("nav>ul>li a");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const navPadding = parseInt(window.getComputedStyle(nav).getPropertyValue("padding-top"));

let secId = document.querySelectorAll("main section");
let secTop = [];
let state = true; // works guide 한 번만 실행하기 위한 변수

// 각 섹션의 offsetTop과 문서 전체 길이를 배열로 저장
for (let list of secId) {
  let listTop = list.offsetTop;
  secTop.push(listTop);
}
secTop.push(document.body.scrollHeight);

// 스크롤 시 섹션에 따라 메뉴 색상 변경
window.onscroll = function(e) {
  let currentY = window.pageYOffset + navPadding + 10;
  for ( let n = 0; n < secTop.length; n++ ) {
    if( secTop[n] <= window.pageYOffset && window.pageYOffset < secTop[n] + navPadding ) {
      haeder.classList.remove("on");
    }
    else if ( secTop[n] < currentY && currentY < secTop[n + 1] ) {
      let bgState = secId[n].getAttribute("class");
      let bgId = secId[n].getAttribute("id");
      menuColor(bgState);
      haeder.classList.add("on");
      for( let list of menus) {
        list.classList.remove("on");
        if (list.getAttribute("href") == bgId ) {
          list.classList.add("on");
        }
      }
    } 
  }
  
  // works guide  한 번만 실행
  if ( state == true && secTop[3]<= window.pageYOffset && window.pageYOffset < secTop[3] + navPadding ) {
    $("#works .guide").fadeIn();
    setTimeout(function() {
      $("#works .guide").fadeOut();
    }, 1500);
    state = false;
  }
}


// menu 클릭 시 섹션 이동
for (let list of menus) {
  list.addEventListener("click", (e) => {
    e.preventDefault();
    let sectionId = list.getAttribute("href");

    sectionScroll(sectionId);
    haeder.classList.remove("on");
  });
}
// Intro 메일 클릭 시 contact 페이지로 스크롤
var btnMail = document.querySelector(".send-mail");
btnMail.addEventListener("click", (e) => {
  e.preventDefault();
  sectionScroll("contact");
});

// 스크롤 이동 함수
function sectionScroll(idx) {
  let sectionTop = document.getElementById(idx).offsetTop;
  window.scrollTo({
    top: sectionTop,
    left: 0,
    behavior: "smooth",
  });
}

// 메뉴 색 변경 함수
function menuColor(bgClass) {
  switch (bgClass) {
    case "bg-light":
      logo.classList.remove("change");
      menus.forEach((e) => {
        e.style.color = "var(--color-dark)";
      });
      break;
    case "bg-dark":
      logo.classList.add("change");
      menus.forEach((e) => {
        e.style.color = "var(--color-light)";
      });
      break;
  }
}

/****************** Skills  ********************/

// Skills 항목 ajax 데이터 불러오기
const skillArry = document.querySelectorAll("#skills .icon");
const skillTitle = document.querySelector("#skills .text h3");
const skillDesc = document.querySelector("#skills .text p");
const skillName = [];

for (let list of skillArry) {
  let listAlt = list.getAttribute("alt");

  skillName.push(listAlt); // 배열 생성

  // 각 skill 아이콘 오버 시 ajax 통신
  list.addEventListener("mouseover", (e) => {
    let listIdx = skillName.indexOf(listAlt);
    getJSONSkills(listIdx);
  });
  // 기본적으로 마지막 데이터 보이기
  list.addEventListener("mouseout", () => {
    getJSONSkills(skillName.length);
  });
}
getJSONSkills(skillName.length);

// skills list ajax 함수
function getJSONSkills(idx) {
  $.ajax({
    type: "get",
    url: "js/data.json",
    dataType: "json",
    success: function (data) {
      $(".text").hide();
      $(".text h3").text(data["skills"][idx].name);
      $(".text p").html(data["skills"][idx].description);
      $(".text").delay(500).fadeIn();
    },
    error: function () {
      console.log("통신에러");
    },
  });
}

/****************** Works  ********************/
// Works list figure 랜덤 배경
const randomColor = ["1d3045", "6682a3", "dbe2ef", "fff"];

// ajax로 Works list 불러오기
function getJSONWorks() {
  $.ajax({
    type: "get",
    url: "js/data.json",
    dataType: "json",
    success: function (data) {
      const worksCount = data["works"].length;
      const worksArticle = $(".work_lists .swiper-wrapper");

      for (var i = 0; i < worksCount; i++) {
        let colorCount = randomColor.length;
        let randomBg = Math.floor(Math.random() * colorCount);
        let dataWorks = data["works"][i];
        str = `<article class="swiper-slide" rel="${dataWorks.type}">`;
        str += `<div class='text_wrap'>
                  <p class='year'>${dataWorks.year}</p>
                  <p class='title'>${dataWorks.title}</p>
                  <p class='desc'>${dataWorks.desc}</p>
                  <p class='tags'>`;
          for (let n of dataWorks.tags) {
            str += `<span>${n}</span>`;
          }
        str += `</p>
                <figure style='background-color: #${randomColor[randomBg]}'>`;
          if (typeof(dataWorks.image) == "object") {
            if (dataWorks.image[1].includes('.mp4')) {
              console.log('this is mp4');
            } else {
              str +=  `<img src='images/works/${dataWorks.image[0]}' alt="" class="image haveGif">`;
            }
            
          } else {
            str += `<img src='images/works/${dataWorks.image}' alt="" class="image">`;
          }
        str += `</div>
                </figure>
                </article>`;

        worksArticle.append(str);
      }
    },
    error: function () {
      console.log("통신에러");
    },
  });
}
getJSONWorks();

// Works list Swiper
$(window).bind("load", function () {
  // works - swiper
  const swiper = new Swiper(".swiper", {
    
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  // Works list Detail
  const worksList = $(".swiper-slide");
  const worksDetail = $(".works_detail");
  const worksListArry = [...worksList];
  const prevBtn = document.querySelector(".works_detail .pagination .prev");
  const nextBtn = document.querySelector(".works_detail .pagination .next");
  let listNum;

  for ( let list of worksList) {
    list.addEventListener("click", showDetail);

    
  }
  function showDetail(e) {
    // 슬라이드 정보
    getDetail(e.currentTarget);
  }
  function getDetail(targetArticle) {
    
    const worksYear = targetArticle.querySelector(".year").innerText;
    const worksTitle = targetArticle.querySelector(".title").innerText;
    const worksDesc = targetArticle.querySelector(".desc").innerHTML;
    const worksTags = targetArticle.querySelector(".tags").innerHTML;
    const worksImage = targetArticle.querySelector("figure img").getAttribute("src");
    const figureType = targetArticle.getAttribute("rel");
    
    if (targetArticle.querySelector("figure img").classList.contains("haveGif")) {
      worksDetail.find(".img_wrap img").attr("src", worksImage.replace(/.webp/g, ".gif"));
    } else {
      worksDetail.find(".img_wrap img").attr({
        "src": worksImage,
        "id" : "slideUp"
      });
    }

    function loadImage(url) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Failed to load image from ${url}`));
        image.src = url;
      });
    }
    loadImage(worksImage).then(image => {
      worksDetail.find(".img_wrap img").attr("id", "");
      worksDetail.find(".works_year").text(worksYear);
      worksDetail.find(".works_title").text(worksTitle);
      worksDetail.find(".works_desc").html(worksDesc);
      worksDetail.find(".works_tags").html(worksTags);
      worksDetail.find("figure").removeClass().addClass(figureType);
    })
    .catch(error => {
      console.error(error);
    });
    

    let currentId = parseInt(targetArticle.getAttribute("aria-label").split("/")[0]);

    // 버튼 prev/next 맨 처음, 맨 뒤 비활성화
    if (worksListArry.indexOf(targetArticle) == 0) {
      prevBtn.classList.add("deactive");
    } else if (worksListArry.indexOf(targetArticle) == worksListArry.length - 1) {
      nextBtn.classList.add("deactive");
    } else {
      prevBtn.classList.remove("deactive");
      nextBtn.classList.remove("deactive");
    }

    // 상세 설명 보이기
    worksDetail.fadeIn().attr("rel", currentId);
    // html 스크롤 비활성화
    $("html").css("overflow", "hidden");
  }

  prevBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let crntWorks = e.target.parentElement.parentElement;
    let prevIdx = parseInt(crntWorks.getAttribute("rel")) - 2;
    getDetail(worksList[prevIdx]);
    
  });
  nextBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let crntWorks = e.target.parentElement.parentElement;
    let prevIdx = parseInt(crntWorks.getAttribute("rel"));
    getDetail(worksList[prevIdx]);
  });
    

  // 닫기 버튼 따라다니기, pagination 제외
  worksDetail.on({
    mousemove : function (e) {
      if(!$(e.target).is(".pagination, .prev, .next, .works_year")) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        $(".btn_close").css({
          "left": mouseX + "px",
          "top": mouseY + "px",
        }).fadeIn();
      } else {
        $(".btn_close").hide();
      }
    },
    touchmove : function (e) {
      if(!$(e.target).is(".pagination, .prev, .next, .works_year")) {
        const mouseX = e.changedTouches[0].clientX;
        const mouseY = e.changedTouches[0].clientY;
        $(".btn_close").css({
          "left": mouseX + "px",
          "top": mouseY + "px",
        }).fadeIn();
      } else {
        $(".btn_close").hide();
      }
    },
    click : function (e) {
      if(!$(e.target).is(".pagination, .prev, .next, .works_year")) {
        $(this).fadeOut().attr("rel", "");
        prevBtn.classList.remove("deactive");
        nextBtn.classList.remove("deactive");
        $("html").css("overflow", "auto");
      }
    }
  });
});

/****************** Contact  ********************/
// Contact
$('.thankyou_message .done').on("click", function(e) {
  $('.thankyou_message').fadeOut();
});
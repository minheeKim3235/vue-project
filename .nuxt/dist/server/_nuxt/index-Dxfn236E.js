import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext, mergeProps, defineComponent, computed, unref, ref } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { parse, icon, config } from "@fortawesome/fontawesome-svg-core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-4a3a1dec><nav data-v-4a3a1dec><ul data-v-4a3a1dec><li class="logo" data-v-4a3a1dec><h1 data-v-4a3a1dec><button type="button" data-v-4a3a1dec>Home <svg id="Layer_1" viewBox="0 0 95.9 95.9" data-v-4a3a1dec><path class="cls-1" d="m47.95,0C21.47,0,0,21.47,0,47.95s21.47,47.95,47.95,47.95,47.95-21.47,47.95-47.95S74.43,0,47.95,0Zm-22.81,59.14c0,1.36-1.11,2.46-2.49,2.46s-2.49-1.1-2.49-2.46v-21.67c0-1.36,1.11-2.46,2.49-2.46s2.49,1.1,2.49,2.46v21.67Zm17.95-6.89c.97.96.97,2.52,0,3.48-.97.96-2.55.96-3.52,0l-3.98-3.94-3.98,3.94c-.97.96-2.55.96-3.52,0-.97-.96-.97-2.52,0-3.48l3.98-3.94-4-3.96c-.97-.96-.97-2.52,0-3.48.97-.96,2.55-.96,3.52,0l4,3.96,4-3.96c.97-.96,2.55-.96,3.52,0,.97.96.97,2.52,0,3.48l-4,3.96,3.98,3.94Zm7.91,6.89c0,1.36-1.11,2.46-2.49,2.46s-2.49-1.1-2.49-2.46v-21.67c0-1.36,1.11-2.46,2.49-2.46s2.49,1.1,2.49,2.46v21.67Zm16.41-8.05h-11.94c-1.37,0-2.49-1.1-2.49-2.46s1.11-2.46,2.49-2.46h11.94c1.37,0,2.49,1.1,2.49,2.46s-1.11,2.46-2.49,2.46Zm9.45,8.05c0,1.36-1.11,2.46-2.49,2.46s-2.49-1.1-2.49-2.46v-21.67c0-1.36,1.11-2.46,2.49-2.46s2.49,1.1,2.49,2.46v21.67Z" data-v-4a3a1dec></path></svg></button></h1></li><li data-v-4a3a1dec><button type="button" data-v-4a3a1dec>profile</button></li><li data-v-4a3a1dec><button type="button" data-v-4a3a1dec>skills</button></li><li data-v-4a3a1dec><button type="button" data-v-4a3a1dec>works</button></li><li data-v-4a3a1dec><button type="button" data-v-4a3a1dec>contact</button></li></ul></nav></header>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-4a3a1dec"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "intro",
    class: "bg-light"
  }, _attrs))} data-v-2701ec21><div class="intro_wrap" data-v-2701ec21><div class="greeting" data-v-2701ec21><p data-v-2701ec21><span data-v-2701ec21>만나서 반갑습니다 :)</span> 웹퍼블리셔 김민희입니다. </p></div><div class="send-mail" data-v-2701ec21><a href="contact" data-v-2701ec21><i class="fas fa-envelope" data-v-2701ec21></i> mhkim3235@gmail.com</a></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-2701ec21"]]);
function transformIsMeaningful(transform) {
  const meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "icon",
  __ssrInlineRender: true,
  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: (value) => [true, false, "horizontal", "vertical", "both"].includes(value)
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: void 0
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: void 0,
      validator: (value) => ["right", "left"].includes(value)
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: void 0,
      validator: (value) => [90, 180, 270].includes(Number.parseInt(value, 10))
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: void 0,
      validator: (value) => ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].includes(
        value
      )
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: void 0
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: void 0
    },
    titleId: {
      type: String,
      default: void 0
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const icon$1 = computed(() => normalizeIconArgs(props.icon));
    const mask = computed(() => normalizeIconArgs(props.mask));
    const transform = computed(() => {
      if (props.transform) {
        const transform2 = typeof props.transform !== "object" ? parse.transform(props.transform) : props.transform;
        if (transform2 && transformIsMeaningful(transform2)) {
          return transformForSvg(transform2);
        }
      }
      return void 0;
    });
    const parsedIcon = computed(() => {
      return icon(icon$1.value, {
        classes: classes.value,
        title: props.title,
        titleId: props.titleId
      });
    });
    const parsedMask = computed(() => icon(mask.value));
    const properties = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const properties2 = {
        "aria-hidden": true,
        "data-prefix": (_a = parsedIcon.value) == null ? void 0 : _a.prefix,
        "data-icon": (_b = parsedIcon.value) == null ? void 0 : _b.iconName,
        class: classes.value,
        focusable: false,
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${(_c = parsedIcon.value) == null ? void 0 : _c.icon[0]} ${(_d = parsedIcon.value) == null ? void 0 : _d.icon[1]}`
      };
      if (props.symbol) {
        properties2.id = [(_e = parsedIcon.value) == null ? void 0 : _e.prefix, "fa", (_f = parsedIcon.value) == null ? void 0 : _f.iconName].join("-");
      }
      if (props.title) {
        properties2["aria-labelledby"] = uniqueId.value;
      }
      return properties2;
    });
    const htmlTag = computed(() => {
      const svg = getSVG();
      if (parsedMask.value) {
        const id = props.maskId || parsedMask.value.iconName;
        return `<defs>
      <clipPath id="clip-${id}">
        <path fill="currentColor" d="${parsedMask.value.icon[4]}"></path>
      </clipPath>
      <mask id="mask-${id}" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
        <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
        ${svg}
      </mask>
    </defs>
    <rect fill="currentColor" clip-path="url(#clip-${id})" mask="url(#mask-${id})" x="0" y="0" width="100%" height="100%"></rect>`;
      }
      return svg;
    });
    const classes = computed(() => {
      const classes2 = {
        "fa-spin": props.spin,
        "fa-pulse": props.pulse,
        "fa-fw": props.fixedWidth,
        "fa-border": props.border,
        "fa-li": props.listItem,
        "fa-inverse": props.inverse,
        "fa-flip": props.flip === true,
        "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
        "fa-flip-vertical": props.flip === "vertical" || props.flip === "both",
        [`fa-${props.size}`]: props.size !== void 0,
        [`fa-rotate-${props.rotation}`]: props.rotation !== void 0,
        [`fa-pull-${props.pull}`]: props.pull !== void 0,
        "fa-swap-opacity": props.swapOpacity,
        "fa-bounce": props.bounce,
        "fa-shake": props.shake,
        "fa-beat": props.beat,
        "fa-fade": props.fade,
        "fa-beat-fade": props.beatFade,
        "fa-spin-pulse": props.spinPulse,
        "fa-spin-reverse": props.spinReverse
      };
      const active = Object.keys(classes2).map((key) => classes2[key] ? key : null).filter((key) => key);
      return [config.replacementClass, ...active];
    });
    const uniqueId = computed(() => {
      return config.replacementClass + "-title-" + (props.titleId || nextUniqueId());
    });
    function normalizeIconArgs(icon2) {
      if (icon2) {
        if (typeof icon2 === "string") {
          const styles = {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab"
          };
          let prefix = styles[config.styleDefault] || "fas";
          let iconName = icon2.replace(/\bfa-/g, "");
          if (iconName.includes(" ")) {
            const tmp = iconName.split(/\s+/);
            if (tmp[0] in styles) {
              prefix = styles[tmp[0]];
            }
            iconName = tmp[1];
          }
          return { prefix, iconName };
        }
        if (Array.isArray(icon2) && icon2.length === 2) {
          return { prefix: icon2[0], iconName: icon2[1] };
        }
        if (typeof icon2 === "object" && "prefix" in icon2 && "iconName" in icon2) {
          return icon2;
        }
      }
      return void 0;
    }
    function transformForSvg(transform2) {
      var _a;
      const containerWidth = 512;
      const iconWidth = ((_a = parsedIcon.value) == null ? void 0 : _a.icon[0]) || 512;
      const x = transform2.x || 0;
      const y = transform2.y || 0;
      const size = transform2.size || 0;
      const rotate = transform2.rotate || 0;
      const flipX = transform2.flipX || 0;
      const flipY = transform2.flipY || 0;
      const outer = "translate(".concat(String(containerWidth / 2), " 256)");
      const innerTranslate = "translate(".concat(String(x * 32), ", ").concat(String(y * 32), ") ");
      const innerScale = "scale(".concat(String(size / 16 * (flipX ? -1 : 1)), ", ").concat(String(size / 16 * (flipY ? -1 : 1)), ") ");
      const innerRotate = "rotate(".concat(String(rotate), " 0 0)");
      const inner = "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate);
      const path = "translate(".concat(String(iconWidth / 2 * -1), " -256)");
      return { outer, inner, path };
    }
    function nextUniqueId() {
      const idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let size = 12;
      let id = "";
      while (size-- > 0) {
        id += idPool[Math.random() * 62 | 0];
      }
      return id;
    }
    function getSVG() {
      const fill = parsedMask.value ? "black" : "currentColor";
      const svg = [];
      let path = parsedIcon.value.icon[4];
      if (!Array.isArray(path)) {
        path = [path];
      }
      path.forEach((i) => {
        svg.push(
          `<path fill="${fill}"${transform.value ? ' transform="' + transform.value.path + '"' : ""} d="${i}"></path>`
        );
      });
      if (transform.value) {
        svg.unshift(`<g transform="${transform.value.outer}">`, `<g transform="${transform.value.inner}">`);
        svg.push("</g>", "</g>");
      }
      if (props.title) {
        svg.unshift(`<title id="${uniqueId.value}">${props.title}</title>`);
      }
      return svg.join("");
    }
    if (props.icon && !parsedIcon.value) {
      console.info("Could not find main icon", icon$1.value);
    }
    if (props.mask && !parsedMask.value) {
      console.info("Could not find mask icon", mask.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (parsedIcon.value && __props.symbol) {
        _push(`<svg${ssrRenderAttrs(mergeProps({ style: { "display": "none" } }, _attrs))}><symbol${ssrRenderAttrs(properties.value)}>${htmlTag.value ?? ""}</symbol></svg>`);
      } else if (parsedIcon.value) {
        _push(`<svg${ssrRenderAttrs(mergeProps(properties.value, _attrs))}>${htmlTag.value ?? ""}</svg>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@vesp/nuxt-fontawesome/dist/runtime/components/icon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("profile.Cx8V1ArL.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome = _sfc_main$5;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "profile",
    class: "bg-light"
  }, _attrs))} data-v-1fb6a4f1><h2 data-v-1fb6a4f1>Profile</h2><figure data-v-1fb6a4f1><span data-v-1fb6a4f1><img${ssrRenderAttr("src", _imports_0)} alt="프로필 일러스트" data-v-1fb6a4f1></span></figure><p class="introduce" data-v-1fb6a4f1></p><div class="wrapper" data-v-1fb6a4f1><article data-v-1fb6a4f1><h3 data-v-1fb6a4f1>Profile</h3><ul data-v-1fb6a4f1><li data-v-1fb6a4f1>`);
  _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cake-candles"] }, null, _parent));
  _push(` 1986년</li><li data-v-1fb6a4f1>`);
  _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "mobile-screen-button"] }, null, _parent));
  _push(` 010-6217-****</li><li data-v-1fb6a4f1>`);
  _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "envelope"] }, null, _parent));
  _push(` mhkim3235@gmail.com</li></ul></article><article data-v-1fb6a4f1><h3 data-v-1fb6a4f1>EDUCATION</h3><p data-v-1fb6a4f1><span class="year edu" data-v-1fb6a4f1>2010</span>경희대학교 화학과 졸업</p></article><article data-v-1fb6a4f1><h3 data-v-1fb6a4f1>CERTIFICATIONS</h3><ul data-v-1fb6a4f1><li data-v-1fb6a4f1>인터넷정보검색사 2급</li><li data-v-1fb6a4f1>컴퓨터그래픽스운용기능사</li></ul></article><article data-v-1fb6a4f1><h3 data-v-1fb6a4f1>CAREER</h3><ul data-v-1fb6a4f1><li data-v-1fb6a4f1><span class="year" data-v-1fb6a4f1>2023 ~ 2024</span> 이투스 교육 <span class="role" data-v-1fb6a4f1>퍼블리셔</span></li><li data-v-1fb6a4f1><span class="year" data-v-1fb6a4f1>2016 ~ 2023</span> 프리랜서 <span class="role" data-v-1fb6a4f1>퍼블리셔</span></li><li data-v-1fb6a4f1><span class="year" data-v-1fb6a4f1>2013 ~ 2016</span> 이안아이티 <span class="role" data-v-1fb6a4f1>프리랜서</span></li><li data-v-1fb6a4f1><span class="year" data-v-1fb6a4f1>2010 ~ 2013</span> (주)온라인파워스 <span class="role" data-v-1fb6a4f1>웹프로젝트팀</span></li><li data-v-1fb6a4f1><span class="year" data-v-1fb6a4f1>2008 ~ 2009</span> (주)아벤트코리아 <span class="role" data-v-1fb6a4f1>체인영업팀</span></li></ul></article></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1fb6a4f1"]]);
const skills = [
  {
    name: "Photoshop",
    description: "<span>디자인 및 편집 작업</span>을 능숙하게 수행합니다.",
    icon: "ps"
  },
  {
    name: "Illustrator",
    description: "다양한 사용자 환경을 고려한 <span>백터 이미지 작업</span>이 가능합니다.",
    icon: "ai"
  },
  {
    name: "HTML5",
    description: "<span>웹표준</span>과 <span>접근성</span>을 준수하고 SEO 최적화를 위한 <span>시멘틱 마크업</span>을 추구합니다.",
    icon: "html"
  },
  {
    name: "CSS3",
    description: "CSS3를 통해 <span>다양한 효과</span> 및 <span>에니메이션</span>, <span>화면 전환</span> 작업이 능숙하며 <span>반응형 웹</span>에도 대응 합니다.",
    icon: "css"
  },
  {
    name: "Javascript",
    description: "<span>ES6+</span>, <span>jQuery</span> 문법을 사용한 플러그인 및 API 사용을 통한 동적 화면 구성이 가능합니다.",
    icon: "js"
  },
  {
    name: "React",
    description: "SPA 사이트를 위한 리엑트 프레임워크를 익히는 중입니다.",
    icon: "react"
  },
  {
    name: "Vue",
    description: "SPA 사이트를 위한 리엑트 프레임워크를 익히는 중입니다.",
    icon: "vue"
  }
];
const works = [
  {
    year: "2024",
    title: "이투스북 디온",
    desc: "전자책 태블릿 앱<br />앱뷰 화면 구현",
    image: "works_dion.webp",
    type: "tab",
    tags: [
      "vue3",
      "scss",
      "Javascript",
      "Git"
    ]
  },
  {
    year: "2024",
    title: "이투스 교육",
    desc: "국내 온·오프라인 입시 교육 학원<br />웹 및 모바일 사이트 외주<br /> 운영 및 이벤트 페이지 구현",
    image: "works_etoos.webp",
    type: "pc",
    tags: [
      "HTML",
      "CSS3",
      "Javascript",
      "Git",
      "Tweenmax"
    ]
  },
  {
    year: "2023",
    title: "유니브",
    desc: "제약, 헬스케어 전문 마케팅 에이전시 프리랜서 작업<br />외주 메일링 퍼블리싱<br /> HTML5와 CSS 애니메이션 구현",
    image: [
      "works_univ.webp",
      "works_univ.gif"
    ],
    type: "tab",
    tags: [
      "HTML",
      "CSS3",
      "Javascript"
    ]
  },
  {
    year: "2020",
    title: "2022 인디게임페스티벌 ",
    desc: "2022 인디게임페스티벌 웹사이트 제작<br />웹 및 모바일 사이트 디자인 및 퍼블리싱<br />반응형 디자인",
    image: [
      "works_indie.webp",
      "works_indie.gif"
    ],
    type: "pc",
    tags: [
      "Photoshop",
      "HTML",
      "CSS3",
      "jQuery",
      "Resposible"
    ]
  },
  {
    year: "2018",
    title: "엔투게임",
    desc: "PC 웹게임 사이트 리뉴얼<br /> 디자인 및 퍼블리싱 기여 100%",
    image: [
      "works_ntogame.webp",
      "works_ntogame.gif"
    ],
    type: "pc",
    tags: [
      "Photoshop",
      "HTML",
      "CSS3",
      "jQuery"
    ]
  },
  {
    year: "2016",
    title: "CJ제일제당",
    desc: "웹 및 모바일 사이트 퍼블리싱 운영<br />컨텐츠 유지보수, 사용자 참여 이벤트 퍼블리싱",
    image: "works_cheiljedang.webp",
    type: "pc",
    tags: [
      "HTML",
      "CSS3",
      "Javascript"
    ]
  },
  {
    year: "2014",
    title: "Girl's Education",
    desc: "CJ와 & 유네스코 주최 캠페인 페이지 디자인<br />스타애장품 경매, 구매 페이지 및 이벤트성 기부 페이지 디자인 작업<br />디자인 시안 기여 100%",
    image: [
      "works_girls.webp",
      "works_girls.gif"
    ],
    type: "pc",
    tags: [
      "Photoshop",
      "Illustrator"
    ]
  },
  {
    year: "2014",
    title: "CJ그룹",
    desc: "사내 인트라넷 및 웹사이트 운영<br />디자인 및 퍼블리싱 지원",
    image: "works_cj.webp",
    type: "pc",
    tags: [
      "Photoshop",
      "Illustrator",
      "HTML",
      "CSS2"
    ]
  },
  {
    year: "2013",
    title: "CJ CGV",
    desc: "CGV영화관 웹사이트 시안<br />웹사이트 개편 시안 작업으로 사업 수주",
    image: "works_cgv.webp",
    type: "pc",
    tags: [
      "Photoshop",
      "Illustrator"
    ]
  },
  {
    year: "2013",
    title: "CJ 도너스캠프",
    desc: "웹 및 모바일 사이트 개편<br />웹접근성 준수 사이트<br />모바일 디자인 기여 100%, 퍼블리싱 지원",
    image: "works_donors.webp",
    type: "mobile",
    tags: [
      "Photoshop",
      "HTML",
      "CSS3"
    ]
  },
  {
    year: "2012",
    title: "(주)온라인파워스",
    desc: "웹 및 모바일 사이트 개편<br />반응형 디자인, parallex effect",
    image: "works_online.webp",
    type: "pc",
    tags: [
      "HTML",
      "CSS3",
      "Javascript"
    ]
  },
  {
    year: "2012",
    title: "인피니티 헬스케어",
    desc: "스마트넷 클라우드 웹사이트 제작<br />디자인 및 퍼블리싱 기여 100%",
    image: [
      "works_infinit.webp",
      "works_infinit.gif"
    ],
    type: "pc",
    tags: [
      "Photoshop",
      "HTML",
      "CSS3"
    ]
  }
];
const data = {
  skills,
  works
};
const _sfc_main$3 = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        class: "bg-dark"
      }, _attrs))} data-v-29f93cbc><h2 data-v-29f93cbc>SKILLS</h2><ul data-v-29f93cbc><!--[-->`);
      ssrRenderList(unref(data).skills, (item) => {
        _push(`<li data-v-29f93cbc><span data-v-29f93cbc><img${ssrRenderAttr("src", `_nuxt/assets/images/icon_${item.icon}.svg`)}${ssrRenderAttr("alt", item.name)} class="icon" data-v-29f93cbc></span></li>`);
      });
      _push(`<!--]--></ul><div class="text_area" data-v-29f93cbc><div class="text" data-v-29f93cbc><h3 data-v-29f93cbc></h3><p data-v-29f93cbc></p></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-29f93cbc"]]);
const _sfc_main$2 = {
  __name: "Works",
  __ssrInlineRender: true,
  setup(__props) {
    ref(["1d3045", "6682a3", "dbe2ef", "fff"]);
    const makeRandomColor = ref([]);
    ref([]);
    ref(0);
    ref(0);
    gsap.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "works",
        class: "bg-light"
      }, _attrs))} data-v-b2c3d736><div class="guide" data-v-b2c3d736><span data-v-b2c3d736>좌우로 스와이프 하세요</span></div><h2 data-v-b2c3d736>WORKS</h2><ul class="work_lists" data-v-b2c3d736><!--[-->`);
      ssrRenderList(unref(data).works, (item, i) => {
        _push(`<li data-v-b2c3d736><div class="text_wrap" data-v-b2c3d736><p class="year" data-v-b2c3d736>${ssrInterpolate(item.year)}</p><p class="title" data-v-b2c3d736>${item.title ?? ""}</p><p class="desc" data-v-b2c3d736>${item.desc ?? ""}</p><!--[-->`);
        ssrRenderList(item.tags, (tag, i2) => {
          _push(`<p class="tags" data-v-b2c3d736><span data-v-b2c3d736>${ssrInterpolate(tag)}</span></p>`);
        });
        _push(`<!--]--><figure style="${ssrRenderStyle(`background-color: #${makeRandomColor.value[i]};`)}" data-v-b2c3d736>`);
        if (Array.isArray(item.image)) {
          _push(`<img${ssrRenderAttr("src", `_nuxt/assets/images/works/${item.image[0]}`)} alt="" class="image haveGif" data-v-b2c3d736>`);
        } else {
          _push(`<img${ssrRenderAttr("src", `_nuxt/assets/images/works/${item.image}`)} alt="" class="image" data-v-b2c3d736>`);
        }
        _push(`</figure></div></li>`);
      });
      _push(`<!--]--></ul><div class="works_detail" data-v-b2c3d736><div class="pagination" data-v-b2c3d736><h3 class="works_year" data-v-b2c3d736></h3><a href="" class="prev" data-v-b2c3d736>PREV</a><a href="" class="next" data-v-b2c3d736>NEXT</a></div><p class="works_title" data-v-b2c3d736></p><p class="works_desc" data-v-b2c3d736></p><p class="works_tags" data-v-b2c3d736></p><figure class="pc" data-v-b2c3d736><span class="frame" data-v-b2c3d736></span><span class="img_wrap" data-v-b2c3d736><img${ssrRenderAttr("src", "")} alt="" data-v-b2c3d736></span></figure><div class="btn_close" data-v-b2c3d736><i class="fa-solid fa-xmark" data-v-b2c3d736></i></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b2c3d736"]]);
const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$5;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "bg-dark"
      }, _attrs))} data-v-c4909798><h2 data-v-c4909798>Get in Touch!</h2><form method="POST" action="https://script.google.com/macros/s/AKfycbwiPtnHWPhKMG80IGuG5SSBSWPvP67QRadyEZmBepMDh0dAmLTu04yClyFHy-WIygFM/exec" target="frAttachFiles" name="contactForm" class="gform" data-v-c4909798><ul data-v-c4909798><li data-v-c4909798><label for="name" data-v-c4909798>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "user"] }, null, _parent));
      _push(`이름</label><input type="text" placeholder="이름" id="name" name="name" autocomplete="username" required data-v-c4909798></li><li data-v-c4909798><label for="mail" data-v-c4909798>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "envelope"] }, null, _parent));
      _push(`이메일</label><input type="email" placeholder="메일" name="email" id="mail" autocomplete="email" required data-v-c4909798></li><li data-v-c4909798><label for="title" data-v-c4909798>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "pen"] }, null, _parent));
      _push(`제목</label><input type="text" placeholder="제목" id="title" name="contactText" autocomplete="off" required data-v-c4909798></li><li data-v-c4909798><label for="content" class="hidden" data-v-c4909798>내용</label><textarea name="message" cols="30" rows="10" placeholder="내용을 입력하세요." autocomplete="off" id="content" required data-v-c4909798></textarea></li></ul><button type="submit" data-v-c4909798>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "paper-plane"] }, null, _parent));
      _push(` SEND MESSAGE</button><div style="${ssrRenderStyle({ "display": "none" })}" class="thankyou_message" data-v-c4909798><div class="inner_wrap" data-v-c4909798><h2 data-v-c4909798><em data-v-c4909798><i class="fa-solid fa-envelope-circle-check" data-v-c4909798></i><br data-v-c4909798> Thanks!</em>연락주셔서 감사합니다! </h2><span class="done" data-v-c4909798><i class="fa-solid fa-xmark" data-v-c4909798></i></span></div></div></form></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c4909798"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Intro = __nuxt_component_1;
  const _component_Profile = __nuxt_component_2;
  const _component_Skills = __nuxt_component_3;
  const _component_Works = __nuxt_component_4;
  const _component_Contact = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home_wrap" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Intro, null, null, _parent));
  _push(ssrRenderComponent(_component_Profile, null, null, _parent));
  _push(ssrRenderComponent(_component_Skills, null, null, _parent));
  _push(ssrRenderComponent(_component_Works, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-Dxfn236E.js.map
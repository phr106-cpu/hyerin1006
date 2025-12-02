AOS.init();

// Banner Swiper
var bannerSwiper = new Swiper(".bannerSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});

// Product Swiper
var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Promo Tabs
const promoTabs = document.querySelectorAll(".promo_tab");
const promoTitle = document.querySelector(".promo_title");
const promoSubtitle = document.querySelector(".promo_subtitle");
const promoProductLists = document.querySelectorAll(".promo_product_list");
const promoSpeechImg = document.querySelector(".promo_speech_img");

const tabContent = {
  "1plus1": {
    title: "1+1상품",
    subtitle: "행사상품 사면 하나 더!",
    image: "../GS25/images/section3_top.png",
  },
  "2plus1": {
    title: "2+1상품",
    subtitle: "다양하고 놀라운 +1 행사",
    image: "../GS25/images/section3_top.png",
  },
  eco: {
    title: "차별화상품",
    subtitle: "GS25에만 있는 프리미엄 과자",
    image: "../GS25/images/topVer2.png",
  },
  gift: {
    title: "덤증정상품",
    subtitle: "원하시는 상품 골라주세요",
    image: "../GS25/images/topVer2.png",
  },
};

promoTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // 모든 탭 active 제거
    promoTabs.forEach((t) => t.classList.remove("active"));
    // 클릭한 탭 active 추가
    this.classList.add("active");

    const tabType = this.dataset.tab;

    // body에 현재 탭 클래스 추가
    document.body.className = `tab-${tabType}`;

    // 타이틀, 서브타이틀 변경
    promoTitle.textContent = tabContent[tabType].title;
    promoSubtitle.textContent = tabContent[tabType].subtitle;

    // 말풍선 이미지 변경
    promoSpeechImg.src = tabContent[tabType].image;

    // 모든 상품 리스트에서 active 제거
    promoProductLists.forEach((list) => {
      list.classList.remove("active");
    });

    // 해당 탭의 상품 리스트에만 active 추가
    const activeList = document.querySelector(
      `.promo_product_list[data-tab="${tabType}"]`
    );
    if (activeList) {
      activeList.classList.add("active");
    }
  });
});
// Footer Accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion_item");

  accordionItems.forEach((item) => {
    const btn = item.querySelector(".accordion_btn");

    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // 다른 아코디언 닫기
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // 현재 아코디언 토글
      item.classList.toggle("active");
    });
  });

  // 외부 클릭시 닫기
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".accordion_item")) {
      accordionItems.forEach((item) => {
        item.classList.remove("active");
      });
    }
  });
});

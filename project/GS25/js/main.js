document.addEventListener("DOMContentLoaded", function () {
  // 초기 탭 설정
  document.body.classList.add("tab-1plus1");

  // AOS 초기화
  AOS.init({
    duration: 1200,
    easing: "ease-out",
    once: true,
    offset: 100,
  });

  // 헤더 요소들
  const fixedHeader = document.querySelector(".fixed_header");
  const originalHeader = document.querySelector("header:first-of-type");
  const menuBtn = document.querySelector(".menu_btn");
  const menuBtnFixed = document.querySelector(".menu_btn_fixed");
  const hamClose = document.querySelector(".ham_close");

  // 스크롤 시 고정 헤더 표시
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      fixedHeader.classList.add("show");
    } else {
      fixedHeader.classList.remove("show");
    }
  });
  // 기존 헤더 햄버거 메뉴 열기
  if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const targetHeader = document.querySelector("header");
      targetHeader.classList.add("menu_active");
      document.body.classList.add("menu_open");
    });
  }

  // 고정 헤더 햄버거 메뉴 열기
  if (menuBtnFixed) {
    menuBtnFixed.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const targetHeader = document.querySelector("header");
      targetHeader.classList.add("menu_active");
      document.body.classList.add("menu_open");
    });
  }

  // 햄버거 메뉴 닫기
  if (hamClose) {
    hamClose.addEventListener("click", function (e) {
      e.preventDefault();
      const targetHeader = document.querySelector("header");
      targetHeader.classList.remove("menu_active");
      document.body.classList.remove("menu_open");
    });
  }
  // 햄버거 메뉴 아코디언 (1024px용)
  document.querySelectorAll(".ham_list > li > h3").forEach((title) => {
    title.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.parentElement;
      const isActive = parent.classList.contains("active");

      // 다른 메뉴 닫기
      document.querySelectorAll(".ham_list > li").forEach((item) => {
        item.classList.remove("active");
      });

      // 클릭한 메뉴 토글
      if (!isActive) {
        parent.classList.add("active");
      }
    });
  });

  // 배너 Swiper
  const bannerSwiper = new Swiper(".bannerSwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // Product Swiper
  var productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".productSwiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      1025: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
    },
  });

  // Promo Tabs
  const promoTabs = document.querySelectorAll(".promo_tab");
  const promoLists = document.querySelectorAll(".promo_product_list");

  promoTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      promoTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      promoLists.forEach((list) => list.classList.remove("active"));
      const targetList = document.querySelector(
        `.promo_product_list[data-tab="${targetTab}"]`
      );
      if (targetList) {
        targetList.classList.add("active");
      }

      // tab 클래스 교체
      document.body.classList.remove(
        "tab-1plus1",
        "tab-2plus1",
        "tab-gift",
        "tab-eco"
      );
      document.body.classList.add(`tab-${targetTab}`);

      const titles = {
        "1plus1": "1+1상품",
        "2plus1": "2+1상품",
        gift: "덤증정상품",
        eco: "차별화상품",
      };
      const subtitles = {
        "1plus1": "행사상품 사면 하나 더!",
        "2plus1": "행사상품 사면 두개 더!",
        gift: "구매 시 덤으로 드려요!",
        eco: "우리만의 특별한 상품!",
      };

      const titleEl = document.querySelector(".promo_title");
      const subtitleEl = document.querySelector(".promo_subtitle");
      if (titleEl) titleEl.textContent = titles[targetTab];
      if (subtitleEl) subtitleEl.textContent = subtitles[targetTab];
    });
  });

  // Footer Accordion
  const accordionBtns = document.querySelectorAll(".accordion_btn");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const accordionItem = this.closest(".accordion_item");
      if (accordionItem) {
        accordionItem.classList.toggle("active");
      }
    });
  });
});

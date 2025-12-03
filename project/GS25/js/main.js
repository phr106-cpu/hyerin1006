document.addEventListener("DOMContentLoaded", function () {
  // 초기 탭 설정 (1+1 기본)
  document.body.className = "tab-1plus1"; // 🔥 추가!

  // AOS 초기화
  AOS.init({
    duration: 1200,
    easing: "ease-out",
    once: true,
    offset: 100,
  });

  // ... 나머지 코드
  // 햄버거 메뉴 코드
  const menuBtn = document.querySelector(".menu_btn");
  const hamClose = document.querySelector(".ham_close");
  const header = document.querySelector("header");

  menuBtn.addEventListener("click", function () {
    header.classList.add("menu_active");
    document.body.classList.add("menu_open");
  });

  hamClose.addEventListener("click", function () {
    header.classList.remove("menu_active");
    document.body.classList.remove("menu_open");
  });

  // Banner Swiper - 이노그리드처럼 부드럽게!
  var bannerSwiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 2, // 추가 슬라이드 복제
    speed: 800, // 부드러운 전환 속도
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });

  // Product Swiper
  var productSwiper = new Swiper(".productSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".productSwiper .swiper-pagination",
      clickable: true,
    },
  });

  // Promo Tabs 코드
  const promoTabs = document.querySelectorAll(".promo_tab");
  const promoLists = document.querySelectorAll(".promo_product_list");

  promoTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      promoTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      promoLists.forEach((list) => list.classList.remove("active"));
      document
        .querySelector(`.promo_product_list[data-tab="${targetTab}"]`)
        .classList.add("active");

      document.body.className = `tab-${targetTab}`;

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

      document.querySelector(".promo_title").textContent = titles[targetTab];
      document.querySelector(".promo_subtitle").textContent =
        subtitles[targetTab];
    });
  });

  // Footer Accordion
  const accordionBtns = document.querySelectorAll(".accordion_btn");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const accordionItem = this.closest(".accordion_item");
      accordionItem.classList.toggle("active");
    });
  });
});

var asSliderBanner = new Swiper(".asSliderBanner", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".asSliderPagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return number < 10 ? '0' + number : number; // Adds leading zero
      },
      formatFractionTotal: function (number) {
        return number < 10 ? '0' + number : number; // Adds leading zero
      },
    },
    navigation: {
      nextEl: ".asSliderNext",
    },
});
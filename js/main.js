$(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // fade:true,
    dots: true,
  });

  
  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

});

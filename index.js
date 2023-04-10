const scrollCarousel = (e, scrollRight) => {
  const slider = e.target.parentNode.querySelector('.slides-container')
  const sliderWidth = slider.clientWidth;

  slider.scrollLeft += scrollRight
    ? sliderWidth
    : -sliderWidth;
}

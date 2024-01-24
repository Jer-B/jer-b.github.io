function adjustTimelineLayout() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const isMobile = window.innerWidth < 850;

  timelineItems.forEach((item) => {
    if (isMobile) {
      if (item.classList.contains("point-right")) {
        item.classList.remove("point-right");
        item.classList.add("point-left");
      }
    } else {
      item.classList.remove("point-left");
      item.classList.add("point-right");
    }
  });
}

// Initial adjustment
adjustTimelineLayout();

// Adjust on resize
window.addEventListener("resize", adjustTimelineLayout);

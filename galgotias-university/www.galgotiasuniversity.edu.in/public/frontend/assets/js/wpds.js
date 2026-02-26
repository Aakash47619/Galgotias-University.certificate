

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll("section.lazy-background"));

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {

          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);

        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var lazyvideo = [].slice.call(document.querySelectorAll("video.lazy-video"));

  if ("IntersectionObserver" in window) {

     let lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {

          if (entry.target.querySelector('source').getAttribute('data-src') !== null) {
              const source = entry.target.querySelector('source').getAttribute('data-src')
              entry.target.setAttribute('src', source);
            }
          lazyVideoObserver.unobserve(entry.target);

        }
      });
    });

    lazyvideo.forEach(function(video) {
      lazyVideoObserver.observe(video);
    });
  }
});

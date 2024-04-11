$(document).ready(function () {
  $(".accordion-title").click(function () {
    // Hide all other accordion contents
    $(".accordion-content").not($(this).next()).slideUp(300);

    // Toggle the clicked accordion content
    $(this).next(".accordion-content").slideToggle(300);
  });
});

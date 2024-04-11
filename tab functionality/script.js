$(document).ready(function () {
  // Set the first tab as active by default
  $(".tab-button:first").addClass("active");
  $("#tab1").show();

  $(".tab-button").click(function () {
    $(".tab-button").removeClass("active");

    // Hide all tab contents
    $(".tab-content").hide();

    var tabId = $(this).data("tab");

    // Add the active class to the clicked button
    $(this).addClass("active");

    // Show the corresponding tab content
    $("#" + tabId).show();
  });
});

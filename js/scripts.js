$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
        $("body").addClass("green-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

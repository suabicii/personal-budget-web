var form = $("form");
var modal = $("#modal");

$(
  form.submit(function (evt) {
    evt.preventDefault();
    modal.css("display", "block");
  })
);

document.addEventListener("DOMContentLoaded", function(event) {
  var el = document.querySelector("#ngskills");
  el.addEventListener("onSaveSkills", data =>
    console.log("Logging Save from host", data.detail)
  );
});

function processSave(data) {
  console.log(data);
}

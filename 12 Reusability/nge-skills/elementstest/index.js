document.addEventListener("DOMContentLoaded", () => {
  var el = document.querySelector("#ngskills");
  el.addEventListener("onSaveSkills", data =>
    console.log("Logging Save from host", data.detail)
  );
});

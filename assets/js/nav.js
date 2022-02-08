console.clear();
$("#a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8").click(function(e) {
  if (e.target.tagName == "INPUT") return true;
  e.preventDefault();
  $("#burger").prop("checked", !$("#burger").prop("checked"));

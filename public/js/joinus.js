function showForm(){
    document.getElementById('form').style.visibility="visible";
  }
  function myFunction() {
    alert("Welcome To The Family🥳🥳!\tCheck out our meeting times!");
  }

  function showlist(){
  document.getElementById("toggle-Button").style.visibility="visible";
  document.getElementById("navi-List").style.visibility="visible";

  toggleButton.addEventListener("click", () => {
    naviList.classList.toggle("active");
  });
}

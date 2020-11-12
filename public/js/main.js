fetch("api/checkin").then(resp => resp.json()).then(data => {
  if (data.session) {
    location.href = "/users"
  }
})

document.querySelectorAll("button[redirect]").forEach(btn => {
  const redirect = btn.getAttribute("redirect")
  btn.addEventListener("click", () => location.href = redirect)
})
fetch("api/checkin").then(resp => resp.json()).then(data => {
  if (data.session) {
    location.href = "/users"
  }
})

authBtn.onclick = () => {
  const form = document.forms[0]
  const vals = Object.fromEntries([...new FormData(form).entries()])

  fetch("api/login", {
    method: "POST",
    body: JSON.stringify(vals)
  }).then(resp => resp.json()).then(data => {
    if (data.success) {
      location.href = "/users"
    }
  })
}
fetch("api/users").then(resp => resp.json()).then(data => {
  if (data.error) {
    location.href = "/login"
  } else {
    data.forEach(user => {
      const el = document.createElement("li")
      el.innerText = `Имя: ${user.name}, логин: ${user.login}`
      users.append(el)
    })
  }
})

logoutBtn.onclick = () => {
  fetch("api/logout").then(resp => resp.json()).then(data => {
    if (data.success) {
      location.href = "/login"
    }
  })
}
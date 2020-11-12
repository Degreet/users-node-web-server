fetch("api/checkin").then(resp => resp.json()).then(data => {
  if (data.session) {
    location.href = "/users"
  }
})

regBtn.onclick = async () => {
  const form = document.forms[0]
  const vals = Object.fromEntries([...new FormData(form).entries()])

  for (const key in vals) {
    vals[key] = vals[key].trim()
  }

  if (await validate(vals)) {
    fetch("api/register", {
      method: "POST",
      body: JSON.stringify(vals)
    }).then(resp => resp.json()).then(data => {
      if (data.success) {
        location.href = "/login"
      }
    })
  }
}

function validate({ pass, name, login, passConf }) {
  if (pass != passConf
    || !/^[-\.a-zA-Zа-яА-Я' ]+$/.test(name)
    || !/^\w{2,32}$/.test(login)
    || !/^\S{3,64}$/.test(pass))
    return false

  return fetch("/api/isfree", {
    method: "POST",
    body: JSON.stringify({ login })
  }).then(resp => resp.json()).then(data => data.vacant)
}
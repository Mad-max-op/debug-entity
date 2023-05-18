let pass_image = document.getElementsByClassName("pass-eye")[0]
let pass_box = document.getElementById("password")

function pass_fun(e)
{
    let state = e.src
    state = state.split("/")
    state = state[state.length-1]

    if(state == "hide.png")
    {
        pass_image.src = "assets/view.png"
        pass_box.type = "text"
    }else{
        pass_image.src = "assets/hide.png"
        pass_box.type = "password"
    }
}

function login_fun()
{
    console.log("h")
    window.location.href = "main/main.html"
}
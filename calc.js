function displaydata(data) {
    result.value=result.value+data
}

function allclear() {
    result.value=""
}

function evalu() {
   result.value=eval(result.value)
}
function backspace() {
    data=result.value
    result.value=data.slice(0,-1)
}
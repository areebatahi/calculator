function pressBtn(btn) {
    var val = document.getElementById('feild').value += btn;
    return val;
}

function clearText() {
    var val = document.getElementById('feild').value = "";
    return val;
}

function backpressNum() {
    var val = document.getElementById('feild').value;
    var valB = val.substring(0, val.length - 1)
    document.getElementById('feild').value = valB;
}

function calculate() {
    var val = document.getElementById('feild').value;
    var valB = eval(val)
    document.getElementById('feild').value = valB;
}

function percentage() {
    var val = document.getElementById('feild').value = "";
    var val1 = document.getElementById('feild').value = 0;
    return val + val1;
}

window.onload = function () {
    var copybtn = '<a class="distribute-to-cross-border" title="复制" rel="nofollow">复制</a>';
    var copybtn = document.createElement('a');
    copybtn.setAttribute('class', 'distribute-to-cross-border');
    copybtn.innerHtml = '<span>复制</span>'
    copybtn.onclick = function() {
        var title = document.getElementById("mod-detail-title").childNodes[0].innerText;
        alert(title);
    }

    var action_panel = document.getElementsByClassName('unit-detail-order-action');
    action_panel[0].appendChind(copybtn);
};

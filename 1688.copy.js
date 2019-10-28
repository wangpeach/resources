
window.onload = function () {
    var copybtn = '<a class="distribute-to-cross-border" title="复制" rel="nofollow"></a>';
    var copybtn = document.createElement('a');
    copybtn.setAttribute('class', 'distribute-to-cross-border');
    copybtn.innerHTML = '<span>复制</span>'
    copybtn.onclick = function() {
        var objs = {};

        var title =  document.querySelector('#mod-detail-title>h1').innerText;
        var imgprops = document.querySelectorAll("#dt-tab li img:not([data-lazy-src])");

        var imgs = new Array();
        imgprops.forEach(element => {
            imgs.push(element.getAttribute('src'));
        });

        objs.title = title;
        objs.imgs = imgs;
        console.log(objs);
    }

    var action_panel = document.getElementsByClassName('unit-detail-order-action');
    action_panel[0].appendChild(copybtn);
};

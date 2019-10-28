
window.onload = function () {
    var action_panel = document.getElementsByClassName('unit-detail-order-action');

    var copybtn = document.createElement('a');
    copybtn.setAttribute('class', 'distribute-to-cross-border');
    copybtn.innerHTML = '<span>解析</span>'
    copybtn.onclick = function() {
        var objs = {};

        var title =  document.querySelector('#mod-detail-title>h1').innerText;
        var imgprops = document.querySelectorAll("#dt-tab li img:not([data-lazy-src])");
        var description = document.querySelector('#de-description-detail').innerHTML;

        var imgs = new Array();
        imgprops.forEach(element => {
            imgs.push(element.getAttribute('src').replace("60x60", "460x460"));
        });

        
        objs.url = location.href;
        objs.title = title;
        objs.imgs = imgs;
        objs.description = description.replace(/\n\t/g,"");

        objs.sku = {
            skuProps: iDetailData.sku.skuProps,
            skuMap: iDetailData.sku.skuMap
        };

        var objstr = JSON.stringify(objs);

        var input = document.createElement('input');
        input.setAttribute('readonly', 'readonly');
        input.setAttribute('value', objstr);
        document.body.appendChild(input);
        input.setSelectionRange(0, objstr.length);
        input.select();
        
        if (document.execCommand('Copy')) {
            document.execCommand('Copy');
            this.innerHTML = '<span style="color: YELLOWGREEN;">解析成功</span>';
        } else {
            this.innerHTML = '<span style="color: lightcoral;">解析失败</span>';
        }
        document.body.removeChild(input);
    }

    action_panel[0].appendChild(copybtn);

    var docheight = 0, cury = 0;
    var interval = setInterval(function() {
        docheight = document.body.scrollHeight;
        cury += 100;
        document.body.scrollTo(0, cury);
        if(cury >= docheight) {
            this.document.scrollTo(0, 0);
            clearInterval(interval);
        }
    }, 200);
};

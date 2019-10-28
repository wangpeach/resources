
window.onload = function () {
    var copybtn = '<a class="distribute-to-cross-border" title="复制" rel="nofollow"></a>';
    var copybtn = document.createElement('a');
    copybtn.setAttribute('class', 'distribute-to-cross-border');
    copybtn.innerHTML = '<span>复制</span>'
    copybtn.onclick = function() {
        var objs = {};

        var title =  document.querySelector('#mod-detail-title>h1').innerText;
        var imgprops = document.querySelectorAll("#dt-tab li img:not([data-lazy-src])");
        var description = document.querySelector('#de-description-detail').innerHTML;

        var imgs = new Array();
        imgprops.forEach(element => {
            imgs.push(element.getAttribute('src'));
        });

        

        objs.title = title;
        objs.imgs = imgs;
        objs.description = description.replace(/\n\t/g,"<br>");

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
            console.log('复制成功');
        }
        console.log(objs);

        // document.body.removeChild(input);
    }

    var action_panel = document.getElementsByClassName('unit-detail-order-action');
    action_panel[0].appendChild(copybtn);
};

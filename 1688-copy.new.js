var analy = function (el) {
    var objs = {};

    let data = window.__INIT_DATA.data;
    let good = window.__INIT_DATA.globalData;

    var title = good.tempModel.offerTitle.replace('一件代发', '');;

    let detail = document.querySelector('.content-detail');
    let allImg = document.querySelectorAll('.content-detail img');
    detail.innerHTML = '';
    for (const item of allImg) {
        detail.append(item);
        detail.append(document.createElement('br'));
    }

    let description = detail.innerHTML;

    objs.description = description.replace(/\n\t/g, "");

    var imgs = new Array();
    for (const item of good.images) {
        imgs.push(item.fullPathImageURI);
    }


    objs.url = location.href;
    objs.title = title;
    objs.imgs = imgs;
    objs.description = description.replace(/\n\t/g, "");

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
        el.innerHTML = '<span style="color: AQUAMARINE; font-size: 13px;">点击解析(解析成功)</span>';
        layer.msg('解析成功', { icon: 1 });
    } else {
        el.innerHTML = '<span style="color: MINTCREAM; font-size: 13px;">点击解析(解析失败)</span>';
        layer.msg('解析失败', { icon: 2 });
    }
    document.body.removeChild(input);

}

function ready() {
    jQuery(document).ready(function () {
    document.body.click();

    var copybtn = document.createElement('a');
    copybtn.classList.add('tool-item');
    copybtn.innerHTML = '<span class="tool-item-text">点击</span><span class="tool-item-text">解析</span>';
    copybtn.onclick = function () {
        analy(copybtn);
    }

    var contentWrap = document.querySelector(".content-wrap");
    var docheight = 0,
        cury = 0;
    var interval = setInterval(function () {
        docheight = contentWrap.scrollHeight;
        cury += 200;
        window.scrollTo(0, cury);
        if (cury >= docheight) {
            window.scrollTo(0, 150);
            clearInterval(interval);

            setTimeout(function () {
                // copybtn.click();
                analy(copybtn);
            }, 1500)
        }
    }, 20);
    });
}

// jQuery(document).ready(function () {
if (location.href.indexOf('sk=consign') < 0) {
    let timeout = setTimeout(() => {
        let _代发 = document.querySelectorAll('.od-pc-offer-tab-item');
        if (_代发.length > 0) {
            for (const item of _代发) {
                if (item.getAttribute('href') && item.getAttribute('href').indexOf('sk=consign') > -1) {
                    location.href = item.getAttribute('href');
                }
            }
            clearTimeout(timeout);
        }
    }, 300)
} else {
    setTimeout(() => {
        ready();
    }, 2000);
}
// });

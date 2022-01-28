var analy = function(el) {
    var objs = {};

    var title = document.querySelector('.title-text').innerText;
    var imgprops = document.querySelectorAll(".detail-gallery-img:not([data-lazy-src])");
    var description = document.querySelector('.od-pc-detail-description').innerHTML;
	

    var imgs = new Array();
    imgprops.forEach(element => {
        imgs.push(element.getAttribute('src').replace("60x60", "460x460"));
    });


    objs.url = location.href;
    objs.title = title;
    objs.imgs = imgs;
    objs.description = description.replace(/\n\t/g, "");

    // objs.sku = {
    //     skuProps: iDetailData.sku.skuProps,
    //     skuMap: iDetailData.sku.skuMap
    // };

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


window.onload = function() {
	document.body.click();
	setTimeout(() => {
		let first = document.querySelector(".detail-gallery-turn-wrapper");
		first.parentNode.removeChild(first);
		let remove = document.querySelector(".offer-title-wrapper");
		remove.parentNode.removeChild(remove);
	    var action_panel = document.getElementsByClassName('order-button-children-list');

	    var copybtn = document.createElement('div');
	    copybtn.setAttribute('class', 'do-purchase');
	    copybtn.setAttribute('style', 'margin-top: 10px;');
	    copybtn.innerHTML = '<span>点击解析</span>'
	    copybtn.onclick = function() {
		analy(copybtn);
	    }

	    action_panel[0].appendChild(copybtn);

	    var contentWrap = document.querySelector(".od-pc-detail-description");
	    var docheight = 0,
		cury = 0;
	    var interval = setInterval(function() {
		docheight = contentWrap.scrollHeight;
		cury += 200;
		window.scrollTo(0, cury);
		if (cury >= docheight) {
		    window.scrollTo(0, 150);
		    clearInterval(interval);

		    setTimeout(function() {
			// copybtn.click();
			analy(copybtn);
		    }, 1500)
		}
	    }, 20);
	}, 1500)
	
};

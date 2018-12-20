/* 
@Offsetの取得
 */
function scroll() {
    if (window.pageYOffset !== null) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if (document.compatMode === "CSS1Compat") { 
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        };
    };
    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    };
};
/*
@モニタサイズの取得 
*/
function client() {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}

function constant(obj, target, speed) {    
    clearInterval(obj.timer);   
    let dir = obj.offsetLeft < target ? speed : -speed;    
    obj.timer = setInterval(function() {
        obj.style.left = obj.offsetLeft + dir + 'px';   
        if (Math.abs(target - obj.offsetLeft) < Math.abs(dir)) {
            clearInterval(obj.timer);
            obj.style.left = target + 'px';
        };
    }, speed)
};

function getStyleAttr(Obj, attr) {
    if (Obj.currentStyle) {
        return Obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(Obj, null)[attr];
    }
}

function buffer(obj, json, fn) {     
    clearInterval(obj.timer);    
    let begin = 0,
        target = 0,
        speed = 0;

    obj.timer = setInterval(function() {        
        let flag = true; 
        for (let k in json) {
            if ('opacity' === k) {
                begin = parseInt(parseFloat(getStyleAttr(obj, k)) * 100) || 100;
                target = parseInt(parseFloat(json[k]) * 100);
            } else if ('scrollTop' === k) {
                begin = Math.ceil(obj.scrollTop);
                target = parseInt(json[k]);
            } else {
                begin = parseInt(getStyleAttr(obj, k)) || 0;
                target = parseInt(json[k]);
            };

            speed = (target - begin) * 0.2;
            speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

            if ('opacity' === k) {
                obj.style.opacity = (begin + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (begin + speed) + ')';
            } else if ('scrollTop' === k) {
                obj.scrollTop = begin + speed;
            } else if ('zIndex' === k) {
                obj.style[k] = json[k];
            } else {
                obj.style[k] = begin + speed + 'px';
            };
            if (begin !== target) {
                flag = false;
            };
        };       
        if (flag) {
            clearInterval(obj.timer)                
        }
    }, 20);
};
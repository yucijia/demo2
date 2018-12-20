(function($){
    /* my hobby */
  let slider = document.getElementById('slider');
  let slider_main = document.getElementById('slider_main');
  let allLis = slider_main.children;

  let slider_ctr = document.getElementById('slider_ctr');

  slider.onmouseover = function () {
    buffer(slider_ctr, {
      opacity: 1
    });
  }
  slider.onmouseout = function () {
    buffer(slider_ctr, {
      opacity: 0.01
    });
  };

  let json = [{
    width: 400,
    top: 20,
    left: 50,
    opacity: 0.2,
    zIndex: 2
  }, {
    width: 600,
    top: 70,
    left: 0,
    opacity: 0.8,
    zIndex: 3
  }, {
    width: 800,
    top: 100,
    left: 200,
    opacity: 1,
    zIndex: 4
  }, {
    width: 600,
    top: 70,
    left: 700,
    opacity: 0.8,
    zIndex: 3
  }, {
    width: 400,
    top: 20,
    left: 800,
    opacity: 0.2,
    zIndex: 2
  }];
  for (let i = 0; i < json.length; i++) {
    buffer(allLis[i], json[i]);
  };

  for (let i = 0; i < slider_ctr.children.length; i++) {
    let item = slider_ctr.children[i];

    item.onmousedown = function () {
      if (this.className === "slider_ctr_prev") {
        json.push(json.shift());
      } else {
        json.unshift(json.pop());

      }
      for (let i = 0; i < json.length; i++) {
        buffer(allLis[i], json[i]);

      }
    }

  }
  /* ********tab*********** */
  tab();

  function tab() {
    let allLis = $('#h_tab li');
    let doms = $('.h-tab-dom');

    allLis.mousedown(function () {
      let i = $(this).index();
      $(this).addClass('current');
      $(this).siblings().removeClass();
      doms.removeClass().addClass('h-tab-dom');
      doms[i].className = 'h-tab-dom current';
    });
  };


})($);
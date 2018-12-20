(function ($) {
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: { //◆データ
      labels: ['HTML5', 'CSS3', 'jQuery', 'javaScript', 'PhotoShop',
      　　　　 'Illustrotar','WordPress', 'Vue.js', 'PHP',  'Node.js'], //ラベル名
      datasets: [{ //データ設定
        data: [90, 87, 80, 75, 30, 25, 40, 15, 10, 5], //データ内容
        backgroundColor: ['#FF4444', '#4444FF', '#44BB44', '#FFFF44', '#FF44FF',
      　　　　　　　　　　 　'#F444BB', '#F4BB44', '#B4F4BF', '#F4B4F4',  '#BB44FF'] //背景色
      }]
    },
    options: { //◆オプション
      responsive: true, //グラフ自動設定
      legend: { //凡例設定
        display: false //表示設定
      },
      title: { //タイトル設定
        display: true, //表示設定
        fontSize: 28, //フォントサイズ
        text: '私の勉強実施計画確認表' //ラベル
      },
      scales: { //軸設定
        yAxes: [{ //y軸設定
          display: true, //表示設定
          scaleLabel: { //軸ラベル設定
            display: true, //表示設定
            labelString: '勉強実施内容', //ラベル
            fontSize: 18 //フォントサイズ
          },
          ticks: { //最大値最小値設定
            min: 0, //最小値
            max: 100, //最大値
            fontSize: 18, //フォントサイズ
            stepSize: 5 //軸間隔
          },
        }],
        xAxes: [{ //x軸設定
          display: true, //表示設定
            scaleLabel: { //軸ラベル設定
            display: true, //表示設定
            labelString: '進捗状況 %', //ラベル
            fontSize: 18 //フォントサイズ
          },
          ticks: {
            min: 0, //最小値
            max: 100, //最大値
            fontSize: 18 //フォントサイズ
          },
        }],
      },
      layout: { //レイアウト
        padding: { //余白設定
          left: 30,
          right: 10,
          top: 0,
          bottom: 0
        },

      }
    }


  });

})($);
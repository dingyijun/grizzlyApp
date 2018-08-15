import { fixStatusBar, getHeight } from 'util/public';

window.apiready = function () {
  var header = document.getElementById('header');
  // var content = document.getElementById('content');
  fixStatusBar(header);
  var data = window.api.pageParam;
  var url = data.url;
  var title = data.title;
  document.getElementById('title').innerHTML = title;
  var pageload = 0;
  if (window.api.systemType === 'ios') {
    window.api.openFrame({
      name: 'frame',
      url: url,
      rect: {
        x: 0,
        y: getHeight('header'),
        w: 'auto',
        h: 'auto'
      },
      pageParam: data,
      bounces: false,
      vScrollBarEnabled: true,
      hScrollBarEnabled: true
    });
  } else {
    // viewappear事件在ios中首次打开不会调用，在安卓使用以避免切换时加载frame造成卡顿。
    window.api.addEventListener({
      name: 'viewappear'
    }, function (ret, err) {
      if (pageload < 1) {
        window.api.openFrame({
          name: 'frame',
          url: url,
          rect: {
            x: 0,
            y: getHeight('header'),
            w: 'auto',
            h: 'auto'
          },
          pageParam: data,
          bounces: false,
          vScrollBarEnabled: true,
          hScrollBarEnabled: true
        });
      }
      pageload++;
    });
  }

  document.getElementById('back').addEventListener('tap', function () {
    window.api.closeWin();
  });
};

import confing from 'config';

if (process.env === 'production') {
  window.apiready = function () {
    window.api.setStatusBarStyle({
      style: 'light'
    });
    window.api.openFrame({
      name: 'index',
      url: confing.mainPage,
      rect: {
        x: 0,
        y: 0,
        w: 'auto',
        h: 'auto'
      },
      bounces: false,
      vScrollBarEnabled: true,
      hScrollBarEnabled: true
    });
  };
} else {
  window.location.href = confing.mainPage;
}

import React from 'react';

const App = React.createClass({
  componentDidMount(){
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log($.device)
    $.init();
  },
  onDeviceReady(){
    alert('DeviceReady');
  },
  render() {
    return (
      <div>
      <div className="page-group">
          <div className="page page-current" id="page1">
            <header className="bar bar-nav">
              <a className="icon icon-left pull-right"></a>
              <a className="icon icon-refresh pull-left"></a>
              <h1 className="title">标题</h1>
            </header>
              <div className="content">
                  <div className="content-block">这里是content</div>
              </div>
          </div>

          <div className="page" id="page2">44444</div>
          <div className="page" id="page3">55556</div>
          <nav className="bar bar-tab">
              <a className="tab-item external active" href="#page1">
                  <span className="icon icon-home"></span>
                  <span className="tab-label">首页</span>
              </a>
              <a className="tab-item external" href="#page2">
                  <span className="icon icon-star"></span>
                  <span className="tab-label">收藏</span>
              </a>
              <a className="tab-item external" href="#page3">
                  <span className="icon icon-settings"></span>
                  <span className="tab-label">设置</span>
              </a>
          </nav>
      </div>
      <div className="panel-overlay"></div>
      <div className="panel panel-left panel-reveal">
          <div className="content-block">
              <p>这是一个侧栏</p>
              <p></p>
              <p><a href="#" className="close-panel">关闭</a></p>
          </div>
      </div>
      </div>
    );
  },
});

export default App;

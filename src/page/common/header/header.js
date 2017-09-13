/**
 * Created by lenovo on 2017/8/30.
 */
require("./header.css");
const __mm   =  require("util/mm.js");

/*通用页面的头部*/
var header = {
    init:function () {
        this.binkEvent();
    },
    onload:function(){
      var keyword = _mm.getUrlParam("keyword");
      /*如果keyword存在,就回填输入框*/
      if(keyword){
          $("#search-input").val(keyword);
      }
    },
    binkEvent: function(){
        /*点击搜索按钮提交*/
        var _this = this;
        $("#search-btn").click(function(){
            _this.searchSubmit();
        });
        /*输入回车后，搜索提交*/
        $("#search-input").keyup(function(e){
            if(e.keyCode ===13) {
                _this.searchSubmit();
            }
        })
    },
    /*搜索提交*/
    searchSubmit(){
       var keyword = $.trim($('#search-input').val());
       if(keyword){
           window.location.href = './list.html?keyword=' + keyword;
       }else{
           __mm.goHome();
       }
    }
}

//module.export = nav.init();//模块输出的时候调用
header.init();
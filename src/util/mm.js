"use strict";

 var conf = {
     serverHost : ''
 }
 var Hogan = require("hogan");
let _mm={
    request:function(param) {
        let _this = this;
        $.ajax({
            type      : param.method || 'get',
            url       : param.url    || '',
            dataType  : param.type   || 'json',
            data      : param.data   || '',
            success   : function(res){
              if(0 === res.status) {
                   typeof param.success === 'function' && param.success(res.data, res.msg)
              }else if( 10 === res.status) {
                  _this.doLogin();
              }else if( 1 === res.status){
                   typeof param.error === 'function' && param.error(res.msg)
              }
            },
            error     : function(err) {

            }
        })
    },
    //获取服务器地址
     getServerUrl:function(path) {
        return conf.serverHost + path;
     },
     //获取url参数
     getUrlParam: function (name) {
        //keyword=xxx&page=1
         var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
         console.log( window.location.search);
         var result = window.location.search.substr(1).match(reg);
         return result ? decodeURIComponent(result[2]) : null;
     },
    //统一登录处理
    doLogin : function(){
        window.location.href = './login.html?redirect='+ encodeURIComponent(window.location.href);
    },
    //渲染html
      renderHtml:function(htmlTemplate,data) {
          var template = Hogan.compile(htmlTemplate);
          return template.render(data);
      },

     //ajax请求成功的提示
      successTips:function(msg) {
           alert(msg || '操作成功');
      },
      errorTips:function(msg) {
          alert(msg ||  '有错误')
      },
    //字段的验证, 支持非空、手机、邮箱判断
      validate:function(value,type) {
        var value = $.trim(value);
        if( 'require' === type) {
            return !!value
        }
        //手机号验证
          if('iphone' === type) {
              return /^1\d{10}$/.test(value)
          }
          //邮箱格式验证
           if('email' === type) {
               return /^1\d{10}$/.test(value)
           }
      },

      goHome: function() {
        window.location.href = "./index.html"
      }
};

     module.exports =  _mm;

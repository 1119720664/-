/**
 * Created by lenovo on 2017/8/30.
 */
require("./index.css");
const __mm   =  require("util/mm.js");
const _user  =  require("service/user-service.js");
const _cart  =  require("service/cart-service.js");
console.log(_user);

var nav = {                //导航模块
    init:function () {
        this.binkEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;  //调用后，把所有的信息都返回给模块
    },
    binkEvent: function(){  //登录点击事件
         $('.js-login').click(function(){
             __mm.doLogin();
         });
        /*注册点击事件*/
        $('.js-register').click(function(){
            window.location.href="./register.html"
        });

        $('.js-logout').click(function(){
                _user.logout(function(res){
                    window.location.reload();
                },function(errMsg) {
                    _mm.errorTips(errMsg);
                }
            )
        })
    },
    /*加载用户信息*/
    loadUserInfo:function(){
        console.log(_user);
        _user.checkLogin(function(res) {
            $('.user.not-login').hide().siblings('.user.not-login').show().
                find(".username").text(res.username);
        },function() {
            //do nothing
        })
    },
    /*加载购物车数量*/
    loadCartCount:function(){
        _cart.getCartCount(function(res) {
            $('.nav .cart-count').text(res || 0);
        },function() {
            $('.nav .cart-count').text(0);
        })
    }
}

module.export = nav.init();//模块输出的时候调用
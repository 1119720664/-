
require("./nav-slide.css");
const __mm   =  require("util/mm.js");
const templateIndex  =  require("./nav-slide-templata");



var nav = {                /*侧边导航*/
    option:{
        name:'',
        navList:[
            { name:'user-center',desc:'个人中心',href:'./user-center.html'},
            { name:'order-list',desc:'我的订单',href:'./order-list.html'},
            { name:'pass-update',desc:'修改密码',href:'./pass-update.html'},
            { name:'about',desc:'关于MMall',href:'./about.html'}
        ]
    },
    init:function (option) {
        /*合并选项*/
        $.extend(this.option,option);
        this.renderNav();

    }, /*侧边导航*/
    renderNav: function(){
        for(var i = 0,iLength = this.option.navList.length;i<iLength;i++){
              if(this.option.navList[i].name === this.option.name){
                  this.option.navList[i].isActive = true;
              }
        }
        /*渲染list数据*/
        var navHtml = __mm.renderHtml(templateIndex,{
            navList:this.option.navList
        });
        /*最后把html放在容器里*/
        $(".nav-side").html(navHtml);
    },

}

module.exports = nav;//模块输出的时候调用

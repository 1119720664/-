'use strict';
const _mm = require("util/mm.js");
var _user={

        checkLogin: function (resolve, reject) {
            _mm.request({
                url: _mm.getServerUrl('/user/get_user_info.do'),
                methods: "POST",
                success: resolve,
                error: reject
            })
        },

        logout : function(resolve,reject){   /*检查登录的状态*/
            _mm.request({
                url     : _mm.getServerUrl('/user/logout.do'),
                methods : 'POST',
                success : resolve,
                error   : reject
            })
        }

};

    module.exports = _user;

//获取用户的基本信息
function getUserInfo() {
    $.ajax({
        type: "GET",
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem("token") || ''
        },
        success: function (res) {
            console.log(res);

        }

    })
}
getUserInfo()


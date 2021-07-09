$(function () {
    $("#reg_link").on("click", function () {
        $(".login").hide()
        $(".reg").show()
    })
    $("#log_link").on("click", function () {
        $(".reg").hide()
        $(".login").show()
    })
    // 登陆表单验证
    var form = layui.form
    var layer = layui.layer
    form.verify({
        //自定义一个叫pwd的校验规则
        pwd: [/^[\S]{6,12}$/],
        repwd: function (value) {
            var pwd = $('.repassword').val()
            //console.log(pwd);
            if (pwd !== value) {
                return "两次密码不一致"
            }
        }
    })
    //监听表单提交事件
    $("#reg_form").on("submit", function (e) {
        console.log(888);

        e.preventDefault()
        var dat = $('#reg_form').serialize()
        var data = dat.substring(0, 28)
        //console.log(data);
        $.post("/api/reguser", data, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg("注册成功,请登录")
            $("#log_link").click()
        })
    })
    //监听登录表单提交事件
    $("#login").on("submit", function (e) {
        e.preventDefault()
        var data = $(this).serialize()
        console.log(data);
        $.post("/api/login", data, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.msg)
            }
            layer.msg("登录成功")
            localStorage.setItem("token", res.token)
            location.href = "./login.html"
        })


    })




})
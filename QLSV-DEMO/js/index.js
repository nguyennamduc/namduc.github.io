//Thực hiện cài đặt kiểm tra mật khẩu

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password-field").value;
    if (username == 'admin' && password == 'admin123456') {
        swal("Thành Công!", "Bạn Đã Đăng Nhập Với Tư Cách Admin", "success");
        window.location = 'Custommer.html';
        return true;
    }
    if (username == "namduc" && password == "namduc123456") {
        swal("Thành Công!", "Bạn Đã Đăng Nhập Với Tư Cách Quyền Do Admin Cấp", "success");
        window.location = "Custommer.html"
        return true;

    }

    // Nếu không nhập gì mà nhấn đăng nhập thì sẽ báo lỗi
    if (username == '' && password == '') {
        swal("Bạn Chưa Nhập Thông Tin!", "Vui Lòng Kiểm Tra Lại", "warning");
        return false;
    }
    if (username == null || username == "") {
        swal("Bạn Chưa Nhập Tài Khoản", "Vui Lòng Kiểm Tra Tài Khoản", "error");
        return false;
    }
    if (password == null || password == "") {
        swal("Bạn Chưa Nhập Mật Khẩu", "Vui Lòng Kiểm Tra Mật Khẩu", "error");
        return false;
    }
    //Nếu mật khẩu dưới 9 ký tự 
    if (password.length < 9) {
        swal("Bạn Nhập Chưa Đủ Mật Khẩu", "Mật Khẩu Phải Đủ 9 Ký Tự Bao Gồm Chữ Và Số", "error");
        return false;
    }
    //Nếu mật khẩu trên 9 ký tự thì sẽ báo lỗi
    if (password.length > 9) {
        swal("Bạn Nhập Thừa Mật Khẩu", "Vui Lòng Kiểm Tra Lại Mật Khẩu", "error");
        return false;
    }
    swal("Thông Tin Bạn Nhập Không Tồn Tại", "Vui Lòng Kiểm Tra Hoặc Nhấn Quên Mật Khẩu", "error");
}


// Hiện mật khẩu 
$('.toggle-password').click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr('type') == 'password') {
        input.attr('type', 'text');

    } else {
        input.attr("type", "password");
    }

});



//  Hiện đồng hồ thời gian 
function time() {
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Chủ Nhật";
    weekday[1] = "Thứ Hai";
    weekday[2] = "Thứ Ba";
    weekday[3] = "Thứ Tư";
    weekday[4] = "Thứ Năm";
    weekday[5] = "Thứ Sáu";
    weekday[6] = "Thứ Bảy";
    var day = weekday[today.getDay()];
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    nowTime = h + ":" + m + ":" + s;
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    today = day + ', ' + dd + '/' + mm + '/' + yyyy;
    tmp = '<i class="fa fa-clock-o" aria-hidden="true"></i> <span class="date">' + today + ' | ' + nowTime + '</span>';
    document.getElementById("clock").innerHTML = tmp;
    clocktime = setTimeout("time()", "1000", "Javascript");

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
}


//Email cấp lại mật khẩu 
function RegexEmail(emailInputBox) {
    var emailStr = document.getElementById(emailInputBox).value;
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(emailStr);
    if (!isvalid) {
        swal("Lỗi! Opps", "Có Thể Bạn Chưa Nhập Email Hoặc Nhập Sai", "error");
        emailInputBox.focus;
    } else {
        swal("Thông Báo!", "Chúng Tôi Đã Gửi Thông Tin Qua Email Cho Bạn!", "success");
        emailInputBox.focus;
        window.location = "#";

    }
}

//获得姓名焦点时执行的函数
function focus_user(){
    var oUser=document.getElementById('result_user');
    oUser.innerHTML='请输入您的姓名！';
    oUser.style.color='blue';
    document.form.user.style='border:1px solid red';
}

//失去姓名焦点时执行的函数
function blur_user(){
    var oUser=document.getElementById('result_user');
    var pre=document.form.user.value;
    var re=/^[\u4e00-\u9fa5]{2,}/;
    if(pre==''){
        oUser.innerHTML='(必填项)请输入您的姓名！';
        document.form.user.style='border:1px solid red';
        return false;
    }else{
        if(!re.test(pre)){
            oUser.innerHTML='姓名必须为两位以上的汉字！';
            oUser.style.color='red';
            return false;
        }else{
            oUser.innerHTML='ok!';
            oUser.style.color='green';
            document.form.user.style='border:1px solid #ccc';
            return true;
        }
    }   
}


//获得年龄焦点时执行的函数
function focus_age(){
    var oAge=document.getElementById('result_age');
    oAge.innerHTML='请输入你的年龄！';
    oAge.style.color='blue';
    document.form.age.style='border:1px solid red';
}

//失去年龄焦点时执行的函数
function blur_age(){
    var oAge=document.getElementById('result_age');
    var pre=document.form.age.value;
    var re=/120|((1[0-1]|\d)?\d)/;
    if(pre==''){
        oAge.innerHTML='(必填项)年龄不能为空!';
        document.form.age.style='border:1px solid red';
        return false;
    }else{
        if(!re.test(pre)){
            oAge.innerHTML='年龄输入不合法';
            oAge.style.color='red';
            return false;
        }else{
            oAge.innerHTML='ok!';
            oAge.style.color='green';
            document.form.age.style='border:1px solid #ccc';
            return true;
        }
    }
}

//获取身份证号焦点时执行的函数
function focus_ID(){
    var oCard=document.getElementById('result_ID');
    oCard.innerHTML='请输入出身份证号码!';
    oCard.style.color='blue';
    document.form.ID.style='border:1px solid red';
}
//失去身份证号焦点时执行的函数
function blur_ID(){
    var oCard=document.getElementById('result_ID');
    var pre=document.form.ID.value;
    var re=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if(pre==''){
        oCard.innerHTML='身份证号码不能为空!';
        document.form.ID.style='border:1px solid red';
        return false;
    }else{
        if(!re.test(pre)){
            oCard.innerHTML='身份证号为15位或18位';
            oCard.style.color='red';
            return false;
        }else{
            oCard.innerHTML='ok!';
            oCard.style.color='green';
            document.form.ID.style='border:1px solid #ccc';
            return true;
        }
    }
}

//获取固定电话焦点时执行的函数
function focus_tel(){
    var oTel=document.getElementById('result_tel');
    oTel.innerHTML='请输入电话号码!如021-87888822';
    oTel.style.color='blue';
    document.form.tel.style='border:1px solid red';
}
//失去固定电话焦点时执行的函数
function blur_tel(){
    var oTel=document.getElementById('result_tel');
    var pre=document.form.tel.value;
    var re=/\d{3}-\d{8}|\d{4}-\d{7}/;
    if(pre==''){
        oTel.innerHTML='电话号码不能为空!';
        document.form.tel.style='border:1px solid red';
        return false;
    }else{
        if(!re.test(pre)){
            oTel.innerHTML='输入有误,如 021- 或 0511-';
            oTel.style.color='red';
            return false;
        }else{
            oTel.innerHTML='ok!';
            oTel.style.color='green';
            document.form.tel.style='border:1px solid #ccc';
            return true;
        }
    }
}


//获取手机焦点时执行的函数
function focus_phone(){
    var oPhone=document.getElementById('result_phone');
    oPhone.innerHTML='请输入电话号码!如021-87888822';
    oPhone.style.color='blue';
    document.form.phone.style='border:1px solid red';
}

//失去手机焦点时执行的函数
function blur_phone(){
    var oPhone=document.getElementById('result_phone');
    var pre=document.form.phone.value;
    var re=/^1[34578]\d{9}$/;
    if(pre==''){
        oPhone.innerHTML='手机号码不能为空!';
        document.form.phone.style='border:1px solid red';
        return false;
    }else{
        if(!re.test(pre)){
            oPhone.innerHTML='请输入出11位数手机号';
            oPhone.style.color='red';
            return false;
        }else{
            oPhone.innerHTML='ok!';
            oPhone.style.color='green';
            document.form.phone.style='border:1px solid #ccc';
            return true;
        }
    }
}


//获取qq焦点时执行的函数
function focus_qq(){
    var oQq=document.getElementById('result_qq');
    oQq.innerHTML='请输入QQ号码';
    oQq.style.color='blue';
    document.form.qq.style='border:1px solid red';
}

//失去qq焦点时执行的函数
function blur_qq(){
    var oQq=document.getElementById('result_qq');
    var pre=document.form.qq.value;
    var re=/[1-9]([0-9]{5,11})/;
    if(pre==''){
        oQq.innerHTML='QQ号码不能为空!';
        document.form.qq.style='border:1px solid red';
        return false;
    }else{
        if(!re.test(pre)){
            oQq.innerHTML='请输入出5－13位数的QQ号';
            oQq.style.color='red';
            return false;
        }else{
            oQq.innerHTML='ok!';
            oQq.style.color='green';
            document.form.qq.style='border:1px solid #ccc';
            return true;
        }
    }
}


//获取邮箱焦点时执行的函数
function focus_email(){
    var oEmail=document.getElementById('result_email');
    oEmail.innerHTML='请输入邮箱！';
    oEmail.style.color='blue';
    document.form.email.style='border:1px solid red';
}
//失去邮箱焦点时执行的函数
function blur_email(){
    var oEmail=document.getElementById('result_email');
    var pre=document.form.email.value;
    var re=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(pre==''){
        oEmail.innerHTML='邮箱不能为空!';
        document.form.email.style='border:1px solid red';
        return false;
    }else{
        if(!re.test(pre)){
            oEmail.innerHTML='您输入的邮箱有误，请重新输入';
            oEmail.style.color='red';
            return false;
        }else{
            oEmail.innerHTML='ok!';
            oEmail.style.color='green';
            document.form.email.style='border:1px solid #ccc';
            return true;
        }
    }
}



//获取邮编焦点时执行的函数
function focus_postcode(){
    var oPostcode=document.getElementById('result_postcode');
    oPostcode.innerHTML='请输入邮编！';
    oPostcode.style.color='blue';
    document.form.postcode.style='border:1px solid red';
}
//失去邮编焦点时执行的函数
function blur_postcode(){
    var oPostcode=document.getElementById('result_postcode');
    var pre=document.form.postcode.value;
    var re=/[1-9]\d{5}(?!\d)/;
    if(pre==''){
        oPostcode.innerHTML='邮箱不能为空!';
        document.form.postcode.style='border:1px solid red';
        return false;
    }else{
        if(!re.test(pre)){
            oPostcode.innerHTML='邮编为6位数字';
            oPostcode.style.color='red';
            return false;
        }else{
            oPostcode.innerHTML='ok!';
            oPostcode.style.color='green';
            document.form.postcode.style='border:1px solid #ccc';
            return true;
        }
    }
}









//提交
 function checkForm(){
    var flag_user=blur_user();
    var flag_age=blur_age();
    var flag_ID=blur_ID();
    var flag_tel=blur_tel();
    var flag_phone=blur_phone();
    var flag_qq=blur_qq();
    var flag_email=blur_email();
    var flag_postcode=blur_postcode();


  if (flag_user==true&&flag_age==true&&flag_ID==true&&flag_tel==true&&flag_phone==true&&flag_qq==true&&flag_email==true&&flag_postcode==true) {  
    return true;
  }else{
    return false;
  } 
 }
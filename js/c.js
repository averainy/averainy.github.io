function checkCode(){
    var pwdValue="9527"
    var password=document.getElementById("txtcode").value;
    if (pwdValue != password){
        alert("密码不正确");
        return false;
    }
    document.getElementById("content").style.display="block";;
    
}
function sethidden(){
    var content=$("#content");
    if (content == null){
        return false;
    }
    //var btn = $('<input type="password" id="password"></input> <button onclick="showContent();">submit</button>');
    var btn = $('<div style="font-size:16px;line-height:24px;display:flex;background: #fcfcfc;border-bottom: 1px dashed #e6e6e6;"> \
            <div style="width:200px;padding: 30px 20px;"> \
                <img id="qr" src="/img/qrcode.jpg" alt="" style="width:200px;border: 1px solid #ccc; border-radius: 10px;"> \
            </div> \
            <div style="flex:1;padding:10px 15px;text-align:left;"> \
                <p style="color:red;margin: 10px 0;line-height: 30px;">部分内容为打击盗链困扰，本站已启用公众号人机验证<br>微信扫码关注左侧公众号，发送"<b>验证码</b>"二字获得验证码，验证码5分钟有效。</p> \
                <div style="margin-top:10px;display:flex;"> \
                    <input type="text" placeholder="输入验证码" id="txtcode" style="padding:6px;width:220px;font-size:16px;border:1px solid #333;font-weight: bold;"> \
                    <input type="button" value="提交显示隐藏内容" onclick="checkCode()" style="font-size:16px;border:0;background:#333;color:white;height:42px;"> \
                </div> \
                <p id="tip" style="display: block;font-size:12px;"></p> \
            </div> \
        </div>');
    content.before(btn);
    
}
$(document).ready(function(){
    sethidden();
});

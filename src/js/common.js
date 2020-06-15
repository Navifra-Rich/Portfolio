//---------------------------------------좌측 드랍다운 메뉴 마우스 in, out 감지해서 메뉴 위치 변경----------------------------
export function dropdownMenu(open){
    var arr=document.getElementsByClassName('menu_item');
    if(open==='open'){
       for(var i=0;i<arr.length;i++){
           arr[i].style.visibility = "visible";
           arr[i].style.transform = "translate( 0px, "+i*50+"px)";
       }
    }else if(open==='close'){
       
       for(var i=0;i<arr.length;i++){
          arr[i].style.transform = "translate(-600px, 0px)";
          arr[i].style.visibility = "hidden";
       }
    }
};
//---------------------------------------좌측 드랍다운 메뉴 클릭해서 페이지 이동----------------------------
export function mainLinkClick(url,obj){
    window.scrollTo({top:0, behavior:"smooth"});
    setTimeout(function(){
        obj.$router.push(url);
    }.bind(obj),400); 
};
//-----------------------------------------홈화면 이동------------------------------------------------------
export function goHome(obj){
    window.scrollTo({top:0, behavior:"smooth"});
    setTimeout(function(){
        obj.$router.push("/gnaseel/");
    }.bind(obj),400); 
};

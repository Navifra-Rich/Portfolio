<template>
<div class="projects">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="menu_link">
        <div class="menu_button" @mouseover="dropdownMenu">
            메뉴
        </div>
        <div class="menu_item"  @click="mainLinkClick(item.url)" v-for="item in main_link_list" :key="item.name"> {{item.name}}</div>
    </div>
    <div class="home_link">
      <div class="home_text" v-for="link in linkList" :key="link.name">
        <p @click="linkClick(link.url)">{{link.name}}</p>
      </div>
    </div>
    <div class="homeLink"></div>
    <div class="main_text" style="">Pjt</div>
    <div class="projects_panel">
        <div class="projects_next">
                <button @click="nextProject(-1)">좌로</button>
                <button @click="nextProject(1)">우로</button>
        </div>
        <div class="projects_panel_left">
            
            <div class="projects_title">{{imgList[pjtCount].title}}</div>
            <div class="projects_disc">{{imgList[pjtCount].disc}}</div>
        </div>
        <div class="projects_panel_right">
            <div class="panel_view">
                <div class="pjt_item" v-for="pjt in imgList" :key="pjt.id">

                    <img class="projects_img" :src=pjt.url>
                    <div class="projects_img_disc">
                        <div class="projects_skills">기술 스택~~<br>
                            <p v-for="(item,index) in pjt.stack" :key="item.id">{{pjt.stack[index]}} </p>
                        </div>
                        <div class="projects_date">제작기간<br>{{pjt.date}}</div>
                        <div class="projects_git">상세정보.......깃 주소 링크</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted(){
            var r_panel=document.getElementsByClassName('projects_panel_right');
            var l_panel = document.getElementsByClassName('projects_panel_left');
            var b_panel = document.getElementsByClassName('projects_next');
            var m_panel = document.getElementsByClassName('menu_link');
            setTimeout(function(){
                r_panel[0].style.transform ="translate(-1000px, 0px)";
                l_panel[0].style.transform ="translate(0px, -1000px)";
                b_panel[0].style.transform ="translate(1000px, 0px)";
                m_panel[0].style.transform ="translate(1000px, 0px)";
            },200);
        },
    data(){
        return{
            pjtCount:0,
            imgList:[
                { id:"1", url:require('../assets/pjt_1.png'), 
                    title:"webSocket 이용한 채팅서버", git:"a", date:"2020-20-20 ~ 3030-30-30",
                    disc:"HTTP프로토콜 특성상 서버에서 클라로 요청은 제한되서 하려면 웹 소켓 머시기 거시기~",
                    stack:["Websocket", "Java"],
                },
                { id:"2", url:require('../assets/pjt_2.png'), 
                    title:"Spring프레임워크를 사용한 웹사이트", git:"a", date:"1010-10-10 ~ 2020-20-20",
                    disc:"Spring으로 만들고, Oauth로 구글로그인 지원해주면서 기능 연동가능~ 디자인은 bootstap~ 클라우드 플랫폼으로 서버빌리고~ SSH통신~",
                    stack:["Web", "Spring", "Java", "Oauth"],
                },
                { id:"3", url:require('../assets/pjt_3.png'), 
                    title:"Data Structure 라이브러리 제작", git:"a", date:"2001-12-34 ~ 4545-45-45",
                    disc:"이건 지금 친구들이랑 하고있는건데~ C++ container 기반으로 자료구조 라이브러리 만들꺼야~ 스터디 하고있고~ 꿍얼꿍얼",
                    stack:["C++", "DataStructure", "Java"],
                },
            ],
            linkList:[
                { name:"git", url:"https://github.com/Gnaseel" },
                { name:"kaggle", url:"https://www.kaggle.com/Gnaseel" },
                { name:"tistory", url:"https://gnaseel.tistory.com" },
            ],
            main_link_list:[
                { name:"Home", url:"/gnaseel/" },
                { name:"Column", url:"/gnaseel/Column" },
                { name:"About", url:"/gnaseel/About" },
            ],
        }
    },
    methods:{
        
        nextProject(num){
            this.pjtCount+=num;
            var el = document.getElementsByClassName('panel_view');
          
            if(this.pjtCount<0)
                this.pjtCount=this.imgList.length-1;
            else if(this.pjtCount==this.imgList.length)
                this.pjtCount=0;
            
            el[0].style.transform = "translate(0px, "+ this.pjtCount*-550+"px)";
            
        },
        mainLinkClick(url){
            window.scrollTo({top:0, behavior:"smooth"});
            setTimeout(function(){
                location.href=url;
            },400); 
        },
        linkClick(url){
            window.open(url);
        },
        dropdownMenu(){
           var arr=document.getElementsByClassName('menu_item');
           var menu=document.getElementsByClassName('menu_button');
           menu[0].style.position="relative";
   
          while(arr!=null){
               arr[0].className='menu_item_on';
           }
        },
    },
}
</script>

<style lang="scss">
.projects{
    height:100%;
    width:140%;
    background: black;
    position:relative;
    font-size: 50px;
    color:white;
    
    .menu_link{
        top:110px;
        left:-920px;
        width:100px;
        height:300px;
        position:fixed;
        background: white;
        color:blanchedalmond;
        font-size:30px;
        transition-duration: 2s;
        .menu_button{
            height:65px;
            width:80px;
            margin-left: 10px;
            margin-bottom:10px;
            background: black;
            position:fixed;
        }
        .menu_item{
            height:65px;
            width:80px;
            margin-bottom:10px;
            margin-left: 10px;
            background:black;
            position: fixed;
            display: none;
            transition-duration: 1s;
        }
        .menu_item_on{
            left:10px;
            height:65px;
            width:80px;
            margin-bottom:10px;
            background:black;
            display: inline-block;
            transition-duration: 1s;
        }    
    }
    .home_link{
        z-index: 3;
        position:fixed;
        font-size: 20px;
        display:inline-block;
        align-items: center;
        vertical-align: middle;
        right:50px;
        line-height: 50px;
        .home_text{
            :hover{
                color:black;
                background: whitesmoke;
                transition-duration:0.4s;
            }
        }
    }
    .title{
        color:rgb(139, 133, 133);
        position:fixed;
        top: 50px;
        left:573px;
    }
    .main_text{
        left: 10%; 
        top: 70px;
        position:absolute;
        font-size:230px;
        font-weight:bold;
        color:rgb(211, 196, 174);
    }
    .projects_disc{
        width:400px;
        height:250px;
    }
    .projects_panel{
        position:relative;
        font-size:20px;
        top:20%;
        transition-duration: 1s;
        .projects_next{
            position:absolute;
            top:200px;
            left:-600px;
            transition-duration: 2s;
            button{
                width:80px;
                height:80px;
                margin-left:10px;
                color: black;
                background: blanchedalmond;
            }
        }
        .projects_panel_left{
            position:absolute;
            background: white;
            
            width:500px;
            height:250px;
            top:1300px;
            left:80px;
            text-align: left;
            transition-duration: 2s;
            .projects_title{
                margin: 15px 0 0 15px;
                color:white;
                font-size:32px;
                font-weight:bold;
                background: black;
                height:50px;
                width:470px;
                position:absolute;
            }
            .projects_disc{
                margin: 15px 0 0 15px;
                color:white;
                top:70px;
                width:470px;
                height:150px;
                background: black;
                
                position:absolute;
            }
        }
        .projects_panel_right{
            position:absolute;
            left:1605px;
            width:900px;
            height:550px;
            overflow: hidden;
            background: white;
            transition-duration: 2s;
            .panel_view{
                width:900px;
                height:1550px;
                position: absolute;
                transition-duration: 1s;
                .pjt_item{
                    width:900px;
                    height:550px;
                    position:relative;
                    .projects_img{
                    position: absolute;
                    left:25px;
                    top:25px;
                    width:500px;
                    height:500px;
                    }
                    .projects_img_disc{
                    
                        position:absolute;
                        left:550px;
                        width:325px;
                        height:500px;
                        top:25px;
                        text-align:left;
                        color:blanchedalmond;
                        .projects_skills{
                            margin-bottom: 10px;
                            height:240px;
                            background: black;
                        }
                        .projects_date{
                            margin-bottom: 10px;
                            height:140px;
                            background: black;
                        }
                        .projects_git{
                            margin-bottom: 10px;
                            height:100px;
                            background: black;
                        }
                    }
                }
                
            }
        }
    }
    
    overflow: hidden;    
}::-webkit-scrollbar {
        display: none;
}

</style>
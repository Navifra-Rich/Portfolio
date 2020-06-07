<template>
<div class="projects">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="menu_link" @mouseleave="dropdownMenu('close')">
        <div class="menu_button" @mouseover="dropdownMenu('open')" > 메뉴 </div>
        <div class="menu_item"  @click="mainLinkClick(item.url)" v-for="item in main_link_list" :key="item.name"> {{item.name}}</div>
    </div>
    <div class="out_link">
      <div class="home_text" v-for="link in linkList" :key="link.name">
        <p @click="linkClick(link.url)">{{link.name}}</p>
      </div>
    </div>
    <div class="homeLink"></div>
    <div class="main_text" style="">Pjt</div>
    <div class="projects_panel">
        <div class="projects_next">
                <div class="projects_index" v-for="index in this.imgList.length" :key="index.id"></div>
                <button @click="nextProject(-1)">좌로</button>
                <button @click="nextProject(1)">우로</button>
        </div>
        <div class="projects_panel_left">
            <div class="panel_left_view">
                    <div class="panel_left_item" v-for="item in imgList.slice().reverse()" :key="item.id">
                            <div class="projects_title">{{item.title}}</div>
                            <div class="projects_disc" v-html="item.disc"></div>
                    </div>
            </div>
        </div>
        <div class="projects_panel_right">
            <div class="panel_view">
                <div class="pjt_item" v-for="pjt in imgList" :key="pjt.id">
                    <img class="projects_img" :src=pjt.url>
                    <div class="projects_img_disc">
                        <div class="projects_skills">
                            <p>Tags</p>
                            <div class="projects_tag_container">
                                <div class="proejects_tag" v-for="(item,index) in pjt.stack" :key="item.id">{{pjt.stack[index]}} </div>
                            </div>
                            <p>Date</p>
                            <div class="projects_date" v-html="pjt.date"></div>
                            <p>Link</p>
                            <div class="projects_button_panel">
                                <div class="projects_button" @click="linkClick(pjt.gitLink)">Git Hub</div>
                                <div class="projects_button" @click="linkClick(pjt.gitLink)">More Info</div>
                            </div>
                            
                            <template v-if="pjt.cowo!=null">
                                <p>공동제작자</p>
                                <div class="projects_coworker_panel">
                                    <div class="projects_coworker" v-for="coworker in pjt.cowo" :key="coworker.id">{{coworker}}</div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import * as common from '../js/common.js';
export default {
    mounted(){
            //좌측 패널 초기값 설정
            var leftPanel = document.getElementsByClassName('panel_left_view');
            leftPanel[0].style.bottom= (this.imgList.length-1)*250+"px";
            
            //우측 버튼 옆의 위치 보여주는 패널 색 설정
            var index = document.getElementsByClassName('projects_index');
            index[this.pjtCount].style.background ="blueviolet";
            
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
                { id:"1", url:require('../assets/Projects/pjt_1.png'), 
                    title:"웹 사이트 제작", git:"a", date:"December 28, 2019 <br>&nbsp&nbsp~&nbsp&nbspFebruary 4, 2020",
                    disc:"Spring프레임 워크를 사용해서 만든 웹 사이트.<br\>\
                            Oracle과 연동해서 간단한 회원가입 기능과 게시판 기능을 지원했다.\
                            Oauth를 지원해서 구글 계정으로도 로그인 할 수 있고,\
                            내부에서 구글 캘린더와도 연계되어있다.",
                    stack:["Web", "Java",  "Spring", "Oauth","BootStrap","Oracle"],
                    gitLink:"https://github.com/Gnaseel/SpringProject",
                },
                { id:"2", url:require('../assets/Projects/pjt_2.png'), 
                    title:"WebSocket 이용한 채팅서버", git:"a", date:"?~?",
                    disc:"Client의 요청없이도 선택적으로 데이터를 \
                    전송하는 WebSocket의 특징을 사용해서 채팅 서버를 구축<br>\
                    git을 알기 전 다루던 프로젝트라 아직 업로드 되어있지 않다.<br>\
                    조만간 다시 만들어서 업로드 할 예정",
                    stack:["Web","Websocket", "Java"],
                    gitLink:"",
                },
                { id:"3", url:require('../assets/Projects/pjt_3.png'), 
                    title:"REST방식 공공 데이터 검색", git:"a", date:"October 28, 2019 <br>&nbsp&nbsp~&nbsp&nbspNovember 4, 2019",
                    disc:"행정안전부의 개발자 센터와 국토교통부의 서버에서 REST방식으로 데이터를 받아와서\
                     입력된 위치를 파악해 그 사이의 교통수단을 출력하는 웹 어플리케이션 서버를 제작했다.\
                     전통적인 Spring+Tomcat 조합으로 아직 배포는 하지 않았고, 정작업을 거친 후 배포 할 예정이다.",
                    stack:["Web", "REST", "Java" ,"Spring", "Jquery"],
                    gitLink:"https://github.com/Gnaseel/Tschedule",
                },
                { id:"4", url:require('../assets/Projects/pjt_2.png'), 
                    title:"Data Structure 라이브러리", git:"a", date:"May 15, 2020 <br>&nbsp&nbsp~&nbsp&nbspIn Progress",
                    disc:"현재 진행중<br>\
                    C++ container 기반으로 자료구조 라이브러리를 직접 만들고,\
                    간단한 소팅도 지원할 예정이다.<br>\
                    처음 예상했던 것 보다 훨씬 더 언어에 대한 이해를 넓혀준 프로젝트",
                    stack:["C++", "DataStructure", "Algorithm", "Sorting"],
                    gitLink:"https://github.com/Gnaseel/CSstudy",
                },
                { id:"5", url:require('../assets/Projects/pjt_5.png'), 
                    title:"Psc Scheduling Simulator", git:"a", date:"April 4, 2020 <br>&nbsp&nbsp~&nbsp&nbspMay 23, 2020",
                    disc:"선택된 알고리즘을 바탕으로 프로세스간의 우선순위를 정하고,\
                     프로세서에 할당되는 과정을 시각화한 애플리케이션이다.<br>\
                     Java의 Swing라이브러리를 사용했고, Jsooth를 이용해 exe파일로 만들어 배포했다.",
                    stack:["Java", "Swing", "JSmooth"],
                    gitLink:"https://github.com/Gnaseel/Process-Scheduling-Simulator",
                    cowo:["임효석", "lapaho8645", "siszero"],
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
        dropdownMenu(open){
            common.dropdownMenu(open);
        },
        mainLinkClick(url){
            common.mainLinkClick(url,this);
        },
        nextProject(num){
            var index = document.getElementsByClassName('projects_index');
            index[this.pjtCount].style.background ="gray";

            this.pjtCount+=num;
            var el = document.getElementsByClassName('panel_view');
            var leftPanel = document.getElementsByClassName('panel_left_view');
           
            if(this.pjtCount<0)
                this.pjtCount=this.imgList.length-1;
            else if(this.pjtCount==this.imgList.length)
                this.pjtCount=0;
            
            el[0].style.transform = "translate(0px, "+ -550*this.pjtCount+"px)";
            leftPanel[0].style.transform = "translate(0px, "+250*this.pjtCount+"px)";
            index[this.pjtCount].style.background ="blueviolet";
        },
        linkClick(url){
            if(url==""){
                alert('존재하지 않음');
                return;
            }
                
            window.open(url);
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../css/common.scss";
.projects{
    word-break:keep-all;
    height:100%;
    width:140%;
    background: black;
    position:relative;
    color:white;
    * { box-sizing: border-box; }

    //Project는 다른 컴포넌트와 home text공유안됨. 가로로 넓어서 겹침
    .home_text{
        display: inline-block;
        width:60px;
        margin:15px;
        color:blanchedalmond;
    }
 
    .projects_panel{
        position:relative;
        font-size:20px;
        top:20%;
        transition-duration: 1s;
        .projects_next{
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            position:absolute;
            top:200px;
            left:-800px;
            transition-duration: 2s;
            .projects_index{
                display:inline-block;
                width:20px;
                height:50px;
                background: gray;
                margin:10px;
            }
            button{
                margin-top:10px;
                position: relative;
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
            overflow: hidden;
            background: black;
            border: 3px solid silver;
            border-radius: 10px;
            .panel_left_view{
                position: relative;
                width:500px;
                bottom:0px;
                transition-duration: 1s;
                .panel_left_item{
                    background: none;
                    display: block;
                    position:relative;
                    width:500px;
                    height:250px;
                    *{padding:5px;}
                    .projects_title{
                        margin: 10px 0 0 10px;
                        color:rgb(185, 7, 7);
                        font-size:32px;
                        font-weight:bold;
                        background: black;
                        height:60px;
                        width:470px;
                        position:absolute;
                        border-bottom: 2px solid;
                    }:after{
                        margin:30px;
                    }
                    .projects_disc{
                        margin: 10px 0 0 10px;
                        color:blanchedalmond;
                        top:75px;
                        width:470px;
                        height:145px;
                        background: black;
                        position:absolute;
                        font-size:16px;
                        line-height: 28px;
                    }
                }
            }
            
        }
        .projects_panel_right{
            position:absolute;
            left:1605px;
            width:900px;
            height:550px;
            overflow: hidden;
            border-radius: 10px;
            background:black;
            border: 3px solid rgb(204, 194, 175);
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
                        border: 3px solid rgb(138, 9, 9);
                        border-radius: 10px;
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
                            position:relative;
                            margin-bottom: 5px;
                            height:240px;
                            p{
                                margin: 20px 0 20px 10px;
                                color:crimson;
                                font-size:25px;
                                font-weight: bold;
                            }
                            .projects_tag_container{
                                display:flex;
                                width:300px;
                                flex-wrap: wrap;
                                .proejects_tag{
                                    display:inline-block;
                                    background: blanchedalmond;
                                    color:brown;
                                    margin:5px;
                                    border-radius: 10px;
                                    font-size:15px;
                                    padding:10px;
                                }
                            }
                            .projects_date{
                                display:block;
                                width:400px;
                                color:blanchedalmond;
                                border-radius: 10px;
                                font-size:20px;
                                margin: 0 0 5px 20px;
                            }
                            .projects_button_panel{
                                .projects_button{
                                    display:inline-block;
                                    background: none;
                                    width:100px;
                                    height:50px;
                                    line-height:50px;
                                    text-align:center;
                                    font-size: 17px;
                                    font-weight:bold;
                                    margin-right:20px;
                                    color:blanchedalmond;
                                    transition-duration: 1s;
                                    border-radius: 10px;
                                }:hover{
                                    background:blanchedalmond;
                                    color:darkred;
                                }
                            }
                            .projects_coworker_panel{
                                width:300px;
                                flex-wrap: wrap;
                                .projects_coworker{
                                    display:inline-block;
                                    background: blanchedalmond;
                                    color:brown;
                                    margin:5px;
                                    border-radius: 10px;
                                    font-size:15px;
                                    padding:10px;
                                }
                            }
                        }
                        .projects_middle{
                            margin-bottom: 10px;
                            height:140px;
                            background: black;
                            border: 5px solid rgb(134, 74, 74);
                            border-radius: 10px;
                            padding-top: 40px;
                            padding-left: 40px;
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
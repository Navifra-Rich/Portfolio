<template>
<div class="projects">
    <span class="title">Hi, I'm HGnaseel</span>
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
            <img class="projects_img" :src=imgList[pjtCount].url>
            <div class="projects_img_disc">
                <div class="projects_skills">기술 스택~~<br>
                    <p v-for="(item,index) in imgList[pjtCount].stack" :key="item.id">{{imgList[pjtCount].stack[index]}} </p>
                </div>
                <div class="projects_date">제작기간<br>{{imgList[pjtCount].date}}</div>
                <div class="projects_git">상세정보.......깃 주소 링크</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
        }
    },
    methods:{
        nextProject(num){
            this.pjtCount+=num;
            if(this.pjtCount<0)
                this.pjtCount=this.imgList.length-1;
            else if(this.pjtCount==this.imgList.length)
                this.pjtCount=0;
        }
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
    .title{
        color:rgb(139, 133, 133);
        position:fixed;
        top: 50px;
        left: calc(50% - 180px);
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
        .projects_next{
            position:absolute;
            top:200px;
            left:400px;
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
            top:300px;
            left:80px;
            text-align: left;
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
            left:27%;
            width:900px;
            height:550px;
            background: white;
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
</style>
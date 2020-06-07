<template>
<div class="column">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="main_text" style="">Column</div>
    <div class="out_link">
        <div class="home_text" v-for="link in linkList" :key="link.name">
            <p @click="linkClick(link.url)">{{link.name}}</p>
        </div>
    </div>
    <div class="menu_link" @mouseleave="dropdownMenu('close')">
        <div class="menu_button" @mouseover="dropdownMenu('open')"> 메뉴</div>
        <div class="menu_item" @click="mainLinkClick(item.url)" v-for="item in main_link_list" :key="item.name"> {{item.name}} </div>
    </div>
     <div class="column_panel">
            <div class="column_item" v-for="item in this.columnList" :key="item.titie" @click="clickColumn(item.url)">
                 <div class="column_image">
                     <img :src=item.img>
                 </div>
                  <div class="column_item_rightPanel">
                       <div class="column_title">{{item.title}}</div> 
                       <div class="column_date">{{item.date}}</div>
                       <div class="column_summary">{{item.summary}}</div>
                  </div>
            </div>
     </div>
</div>
</template>

<script>
import * as common from '../js/common.js';
export default {

    mounted(){
        var m_panel = document.getElementsByClassName('menu_link');
        setTimeout(function(){
            window.scrollTo({top:400,behavior:'smooth'});
            m_panel[0].style.transform ="translate(1000px, 0px)";
        },500);
    },
    data(){
        return{
            linkList:[
                    { name:"git", url:"https://github.com/Gnaseel" },
                    { name:"kaggle", url:"https://www.kaggle.com/Gnaseel" },
                    { name:"tistory", url:"https://gnaseel.tistory.com" },
                ], 
            main_link_list:[
                    { name:"Home", url:"/gnaseel/" },
                    { name:"Pjt", url:"/gnaseel/Projects" },
                    { name:"About", url:"/gnaseel/About" },
                ],
            columnList:[
                { 
                    title : "[Web] 동일 출처 정책과 CORS",
                    date : "2020. 5. 28",
                    summary:"동일 출처 정책(Same Origin Policy)은 어떤 출처에서 불러온 문서나 스크립트가 다른 출처에서 \
                    가져온 리소스와 상호작용 하는것을 제한하는 보안정책이다.\
                    XmlHTTPRequest로 다른 서버에 접근할 때 발생하는데...",
                    img:require('../assets/Column/col_5.png'),
                    url:"https://gnaseel.tistory.com/26",
                },
                { 
                    title : "[HTTP] HTTP Request Message 구조",
                    date : "2020. 5. 15",
                    summary:"HTTP는 Hyper Text Tranfer Protocol의 약자로, www상에서 정보를 주고받을 수 있는 프로토콜이다.\
                            응용계층에 속하며 80번 포트를 사용해서 통신...",
                    img:require('../assets/Column/col_4.png'),
                    url:"https://gnaseel.tistory.com/23",
                },
                { 
                    title : "[Java] int와 Integer의 차이",
                    date : "2020. 4. 27",
                    summary:"int와 Integer은 쓰임새가 유사한 것 같으면서도 다르다.\
                            정확하게 개념을 짚어놓지 않으면 코딩할 때 왜 이 메소드에서 매개변수를 틀렸다고 하는지, 어떻게\
                             변환...",
                    img:require('../assets/noImg.png'),
                    url:"https://gnaseel.tistory.com/19?category=827308",
                },
                { 
                    title : "[웹 보안] SQL Injection",
                    date : "2020. 2. 24",
                    summary:"간단하게 결론부터 말하자면 SQL injection은 DB에접근할 때 사용자가 입력하는 값이 쿼리문에 포함될 때 \
                            악의적으로 입력값을 설정해서 쿼리문을 조작해, 비정상적으로...",
                    img:require('../assets/Column/col_2.png'),
                    url:"https://gnaseel.tistory.com/category/%EC%9B%B9/Security",
                },
                { 
                    title : "[Web Socket / Spring] 실시간 채팅 기능 구현",
                    date : "2020. 1. 12",
                    summary:"http통신은 HyperText Transfer Plotocol의 약자로서 오늘날 광범위하고 일반적으로 사용되는 통신 기법이다.\
                            http의 기본 원리는...",
                    img:require('../assets/Column/col_1.png'),
                    url:"https://gnaseel.tistory.com/11",
                },
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
        clickColumn(url){
            window.open(url);
        }
    },
}
</script>

<style lang="scss">
@import '../css/common.scss';
.column{
    height:4500px;
    width:140%;
    background: black;
    color:white;
    position:relative;
    *{border-radius: 10px;}
    .column_panel{
        top:500px;
        left:170px;
        position: absolute;
        width:1200px;
        color: blanchedalmond;
        border: 3px solid darkred;
        
        display:flex;
        flex-direction: column;
        align-items: center ;
        .column_item{
            width: 1100px;
            height:300px;
            border: 3px solid silver;
            margin:20px;
            position:relative;
            display:block;
            .column_image{
                align-items: center;
                vertical-align: middle;
                display:inline-block;
                position: absolute;
                left:25px;
                top:25px;
                img{
                    width:250px;
                    height:250px;
                }
                
            }
            .column_item_rightPanel{
                left:300px;
                position: absolute;
                display:inline-block;
                text-align: left;
                *{ margin:8px}
                .column_title{
                    color:rgb(102, 26, 173);
                    font-size:40px;
                    font-weight: bold;
                    margin-top: 15px;
                }
                .column_date{
                    font-size:20px;
                    margin:15px;
                }
                .column_summary{
                    font-size:20px;
                    margin-top: 15px;
                }
            }
        }
    }
}
</style>
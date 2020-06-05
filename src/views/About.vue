<template>
<div class="about">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="main_text" style="">About</div>
    <div class="home_link">
      <div class="home_text" v-for="link in linkList" :key="link.name">
        <p @click="linkClick(link.url)">{{link.name}}</p>
      </div>
    </div>
    <div class="up_button">위</div>
    <div class="menu_link">
        <div class="menu_button" @mouseover="dropdownMenu"> 메뉴</div>
        <div class="menu_item" @click="mainLinkClick(item.url)" v-for="item in main_link_list" :key="item.name"> {{item.name}} </div>
    </div>
    <div class="about_content">
        <div class="about_head" v-on:scroll.passive="onScroll">
            <div class="title_image">
                <img src="../assets/aboutImg.png">
            </div>
            <div class="about_disc_panel" >
                <p class="about_disc_title"><span v-html="aboutDiscTitle"></span></p>
                <p class="about_disc_content"><span v-html="aboutDiscContent"></span>
                </p>
            </div>
        </div>
        <div class="skill_stack_title">Skill Stack</div>
        <div @mouseover="overSkillPanel(stackIdx)" class="skill_stack_panel" v-for="(stack, stackIdx) in skillStack" :key="stack.domain">
            <div class="stack_domain">{{stack.domain}}</div>
            <div class="stack_skill" @click="skillClick(stackIdx)" @mouseover="printSkillDisc(stackIdx,index)" v-for="(skill, index) in stack.skills" :key="skill.id">
                <img :src=stack.skillsIcon[index] >
                <div class="skill_name">{{stack.skills[index]}}</div>
            </div>
            <div class="skill_disc"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
        var m_panel = document.getElementsByClassName('menu_link');
        setTimeout(function(){
            scrollTo({top:400,behavior:'smooth'});
            m_panel[0].style.transform ="translate(1000px, 0px)";
        },500);
    },  
    methods:{
        handleScroll(){
            var about_head = document.getElementsByClassName('about_head');
            //scrollTo({top:about_head[0].getBoundingClientRect().top, behavior:'smooth'});
        },
        onScroll(){
           alert('!?');
        },
        linkClick(url){
            window.open(url);
        },
        mainLinkClick(url){
            window.scrollTo({top:0, behavior:"smooth"});
            setTimeout(function(){
                this.$router.push(url);
            }.bind(this),400);
        },
        skillClick(idx){
            var panel=document.getElementsByClassName('skill_stack_panel');
            var winHeight = panel[idx].getBoundingClientRect().top;
            var winScroll = window.pageYOffset;
            var scTo = winHeight+winScroll;
            window.scrollTo({ top:scTo, behavior:'smooth'});
            alert(event.clientY)
        },
        printSkillDisc(idx1,idx2){
            var el=document.getElementsByClassName('skill_disc');
            el[idx1].innerHTML="<br><br>"+this.skillStack[idx1].skillsDisc[idx2];

            // skillpanel 최소 height 조정 (패널 크기가 discription에 의해 바뀌어서 화면이 위아래로 흔들리는 것 방지)
            var panel=document.getElementsByClassName('skill_stack_panel');
            var val = panel[idx1].clientHeight;

            if(panel[idx1].style.minHeight<val)
            panel[idx1].style.minHeight= val+"px";

          
        }, 
        dropdownMenu(){
           var arr=document.getElementsByClassName('menu_item');
           var menu=document.getElementsByClassName('menu_button');
           menu[0].style.position="relative";

            while(arr!=null){
               arr[0].className='menu_item_on';
            }
        },
        overSkillPanel(idx){
            // var panel=document.getElementsByClassName('skill_stack_panel');
            // var winHeight = panel[idx].getBoundingClientRect().top;
            // var winScroll = window.pageYOffset;
            // var scTo = winHeight+winScroll;
            // window.scrollTo({ top:scTo, behavior:'smooth'});
            //alert(event.clientY);
        },
    },
    data(){
        return {
                linkList:[
                    { name:"git", url:"https://github.com/Gnaseel" },
                    { name:"kaggle", url:"https://www.kaggle.com/Gnaseel" },
                    { name:"tistory", url:"https://gnaseel.tistory.com" },
                ],
                main_link_list:[
                    { name:"Home", url:"/gnaseel/" },
                    { name:"Column", url:"/gnaseel/Column" },
                    { name:"Project", url:"/gnaseel/Projects" },
                ],
                aboutDiscTitle:"끈임없이 가치를 추구하는 사람<br/>\
                            <br/>\
                            Hi' I'm H-gnaseel",
                aboutDiscContent:"엔지니어들은 항상 어떻게 일하는지에 관심이 많습니다.<br/>\
                            <br/>\
                            하지만 우리는 How보다도 Why에 관심을 가져야 합니다.<br/>\
                            <br/>\
                            내가 만드는 모든 것들이 기존의 질서를 산산히 와해시켜서<br/>\
                            <br/>\
                            더 나은, 더 긍정적인 세상을 향한 경계에서 미증유의 변화를 일으키도록.<br/>\
                            <br/><br/>\
                            기술은 가치를 실현하기 위한 도구일 뿐입니다.<br/>\
                            <br/>\
                            사진은 바꿀겁니다...느낌만 볼라고 올린거라 면도도 안했으...\
                            ",
                skillStack:[
                    {   
                        domain:"Front end", skills:["html", "css", "JavaScript"], level:[3,2,3], 
                        skillsIcon:[require('../assets/about/html.png'), require('../assets/about/css.png'), require('../assets/about/js.png')], 
                        skillsDisc:[
                            "기본적인 태그의 사용법과 의미, 웹 표준을 이해하고 있습니다.",
                            "간단한 에니메이션을 사용할 수 있고, 컴포넌트를 어떻게 다뤄야하는지 이해하고 있습니다.",
                            "개인 프로젝트는 항상 프론트 엔드까지 다뤘기 때문에 기본 문법과 개념을 숙지하고 있지만,<br>\
                            스크립트 언어는 항상 어렵습니다."
                            ],
                    },
                    {   
                        domain:"Front end - FrameWord", skills:["vue.js", "Jquery"], level:[2,3], 
                        skillsIcon:[require('../assets/about/vue.png'), require('../assets/about/jquery.png')], 
                        skillsDisc:[
                            "학교에서 간단한 프로젝트를 vue로 진행해봤었는데, 컴포넌트를 다루는 방법이 상당히 흥미롭습니다.<br>\
                             그래서 개인적으로도 공부하고 있고, 지금 보고있는 포트폴리오 사이트도 vue.js로 이루어져있습니다.",
                            "vue를 배우기 이전까지는 작업 능률을 위해서 항상Jquery를 사용했습니다.<br> 물론 90%이상은 \
                             웹의 구성요소를 쉽고 빠르게 선택하기 위한 셀렉터 호출이었지만 간단한 AJAX통신도 구성할 수 있습니다.",
                            ],
                    },
                    {   
                        domain:"Back end skills", skills:["Spring", "php"], level:[3,3], 
                        skillsIcon:[require('../assets/about/spring.png'), require('../assets/about/php.png')], 
                        skillsDisc:[
                            "Spring 프레임워크를 사용해서 많은 프로젝트를 진행했습니다.\
                             Spring의 강점인 MVC패턴이나 의존성 주입에서 큰 매력을 느낀 것 같습니다.\
                             특히 Java 플랫폼을 위한 프레임워크라서 항상 틀만 갖추면 안정적이고, 막힘없이 프로젝트가 진행되는 느낌이 좋았습니다.",
                            "학교에서 간단한 프로젝트를 진행해본 경험이 있습니다.\
                             빠른속도로 작게 개발하고 싶을 때 사용하면 매우 편리한 개발환경이었습니다.",          
                            ],
                    },
                     {   
                        domain:"Data base", skills:["Oracle", "MySQL"], level:[3,2], 
                        skillsIcon:[require('../assets/about/oracle.png'), require('../assets/225.225.png')], 
                        skillsDisc:[
                            "Spring과 연계해서 로그인 기능이 있는 게시판을 구현할 때 다뤄봤습니다.",
                            "학교에서 php와 연계해서 회원 정보를 저장하는 용도로 사용해봤습니다.",
                            ],
                    },
                
                ],
        }
    }
}
</script>

<style lang="scss">
.about{
    scroll-behavior: smooth;
    height:3500px;
    width:140%;
    background: black;
    position:relative;
    font-size: 50px;
    color:white;
    .menu_link{
        top:110px;
        left:-940px;
        width:100px;
        height:300px;
        position:fixed;
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

        :hover{
            color:black;
            background: whitesmoke;
            transition-duration:0.4s;
        }
    }
    .title{
        color:rgb(139, 133, 133);
        position: absolute;
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
    
    .up_button{
        background: blueviolet;
        font-size: 20px;
        position:fixed;
        width:50px;
        height:50px;
        right:40px;
        bottom:50px;
    }
    .about_content{
        top:500px;
        left:170px;
        position: absolute;
        width:1200px;
        height:1500px;
        background : black;
        color: blanchedalmond;
        .about_head{
            display:flex;
            justify-content: center;
            align-items: center;
            .title_image{
                width:400px;
                height:400px;
                background:black;
                vertical-align: middle;
                img{
                    width:400px;
                    height:400px;
                    border-radius: 15px;
                }
            }
            .about_disc_panel{
                margin-left: 30px;
                padding-left:20px;
                width:650px;
                height:620px;
                background:black;
                text-align: left;
                .about_disc_title{
                    font-size:40px;
                    font-weight: bold;
                }
                .about_disc_content{
                    font-size: 20px;
                }
            }
        }
        .skill_stack_title{
            top:620px;
            left:50px;
            width:400px;
            height:170px;
            background: black;
            font-size:70px;
            color:blueviolet;
        }
        .skill_stack_panel{
            margin:30px 30px 30px 0px;
            border-left: 3px solid blueviolet;
            padding:20px;
            left:50px;
            width:1080px;
            //height:400px; //높이는 동적으로 바뀌어야될듯??
            //overflow:auto;
            height:auto;
            position:relative;
            display:table;
            background: black;
            text-align: left;
            .stack_domain{
                top:20px;
                left:30px;
                position:absolute;
                color: blanchedalmond;
                display:inline-block;
            }
            .stack_skill{
                top:50px;
                margin:20px;
                width:300px;
                height:300px;
                position:relative;
                display:inline-block;
                border-radius: 30px;
                //background:brown;
                img{
                    width:200px;
                    height:200px;
                    display:inline-block;
                    position: absolute;
                    transition-duration: 1s;
                }
                .skill_name{
                    top:220px;
                    display:inline-block;
                    position:absolute;
                    color:brown;
                }
                
            }:hover{
                background:blueviolet;
                transition-duration: 1s;
                img{
                    display:none;
                }
            }:hover~.skill_disc{
                    width: 1000px;
                    display:table-row;
                    font-size:20px;
                    transition-duration: 0.5s;
            }
            .skill_disc{
                    //position:relative;
                    display:none;
                    color:blanchedalmond;
                    text-align: left;
                    font-size:5px;
                   
                    background: none;
                    transition-duration: 1s;
                    p{
                        font-size:5px;
                        background: none;
                        transition-duration: 1s;
                    }
                }
        }
    }
}
</style>
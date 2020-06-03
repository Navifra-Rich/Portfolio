<template>
<div class="about">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="main_text" style="">About</div>
    <div class="home_link">
      <div class="home_text" v-for="link in linkList" :key="link.name">
        <p @click="linkClick(link.url)">{{link.name}}</p>
      </div>
    </div>

    
    <div class="about_content">
        <div class="title_image">
            <p>대충 치명적인 척 하는 흑백사진</p>
        </div>
        <div class="about_disc_panel">
            <p class="about_disc_title"><span v-html="aboutDiscTitle"></span></p>
            <p class="about_disc_content"><span v-html="aboutDiscContent"></span>
            </p>
        </div>
        <div class="skill_stack_title">Skill Stack</div>
        <div class="skill_stack_panel" v-for="stack in skillStack" :key="stack.domain">
            <div class="stack_domain">{{stack.domain}}</div>
            <div class="stack_skill" v-for="(skill, index) in stack.skills" :key="skill.id">
                <img :src=stack.skillsIcon[index] @mouseover="hidden">
                <div class="skill_name">{{stack.skills[index]}}</div>
                <div class="skill_disc">
                    {{stack.skillsDisc[index]}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted(){
        setTimeout(function(){
            scrollTo({top:400,behavior:'smooth'});
        },500);
    },  
    methods:{
        linkClick(url){
            window.open(url);
      },
    },
    data(){
        return {
                linkList:[
                    { name:"git", url:"https://github.com/Gnaseel" },
                    { name:"kaggle", url:"https://www.kaggle.com/Gnaseel" },
                    { name:"tistory", url:"https://gnaseel.tistory.com" },
                ],
                aboutDiscTitle:"끈임없이 가치를 추구하는 사람<br/>\
                            <br/>\
                            Hi' I'm H-gnaseel",
                aboutDiscContent:"엔지니어는 항상 어떻게 일하는지에 관심이 많습니다.<br/>\
                            어떻게 해야 더 클라이언트의 요구를 잘 이해할 수 있을지,<br/>\
                            어떻게 하면 더 완벽하게 설계할 수 있을지,<br/>\
                            어떻게 인프라를 갖춰야 더 효율적인 시스템이 탄생할지<br/>\
                            <br/>\
                            하지만 우리는 How보다도 Why에 관심을 가져야 합니다.<br/>\
                            <br/>\
                            이 프로그램으로 인해서 사용자가 어떤 편의를 얻을 수 있을지,<br/>\
                            우리가 이 시스템을 만드는 것은 어떤 가치를 추구하기 때문인지,<br/>\
                            내가 만드는 모든 것들이 기존의 질서를 산산히 와해시켜서<br/>\
                            더 나은, 더 긍정적인 세상을 향해 기술의 경계에서 미증유의 새로운 변화를 일으켰는지<br/>\
                            <br/>\
                            저는 항상 끈임없이 가치를 추구합니다.<br/>\
                            ",
            
        
        
                skillStack:[
                    {   
                        domain:"Front end", skills:["html", "css", "JavaScript"], 
                        skillsIcon:[require('../assets/225.225.png'), require('../assets/225.225.png'), require('../assets/225.225.png')], 
                        skillsDisc:[
                            "기본적인 태그의 사용법과 의미, 웹 표준을 이해하고 있습니다.",
                            "간단한 에니메이션을 사용할 수 있고, 컴포넌트를 어떻게 다뤄야하는지 이해하고 있습니다.",
                            "스크립트 언어에 익숙해지는데는 많은 시간이 걸리는 것 같습니다.\
                             항상 간단한 사이트 제작은 직접 프론트 엔드까지 다뤘었고, 고도의 기술이 필요하지 않은 \
                             작업은 Java script로 직접처리할 수 있습니다."
                            ],
                    },
                    {   
                        domain:"Front end - FrameWord", skills:["vue.js", "Jquery"], 
                        skillsIcon:[require('../assets/225.225.png'), require('../assets/225.225.png')], 
                        skillsDisc:[
                            "학교에서 간단한 프로젝트를 vue로 진행해봤었는데, 컴포넌트를 다루는 방법이 흥미로워서\
                             개인적으로도 공부하고 있습니다. 지금 보고있는 포트폴리오 사이트도 vue.js로 이루어져있습니다.\
                             프론트 엔드는 주 분야가 아니지만, 재미가 있어 항상 새로운 기술을 접하면 시도해봅니다.",
                            "vue를 배우기 이전까지는 작업 능률을 위해서 항상Jquery를 사용했습니다. 물론 90%이상은 \
                             웹의 구성요소를 쉽고 빠르게 선택하기 위한 셀렉터 호출이었지만 간단한 AJAX통신도 구성할 수 있습니다.",
                            ],
                    },
                    {   
                        domain:"Back end skills", skills:["Spring", "php"], 
                        skillsIcon:[require('../assets/225.225.png'), require('../assets/225.225.png')], 
                        skillsDisc:[
                            "Spring 프레임워크를 사용해서 많은 프로젝트를 진행했습니다.\
                             Spring의 강점인 MVC패턴이나 의존성 주입에서 큰 매력을 느낀 것 같습니다.\
                             특히 Java 플랫폼을 위한 프레임워크라서 항상 틀만 갖추면 안정적이고, 막힘없이 프로젝트가 진행되는 느낌이 좋았습니다.",
                            "학교에서 간단한 프로젝트를 진행해본 경험이 있습니다.\
                             빠른속도로 작게 개발하고 싶을 때 사용하면 매우 편리한 개발환경이었습니다.",          
                            ],
                    },
                     {   
                        domain:"Data base", skills:["Oracle", "MySQL"], 
                        skillsIcon:[require('../assets/225.225.png'), require('../assets/225.225.png')], 
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
    height:1500px;
    width:140%;
    background: black;
    position:relative;
    font-size: 50px;
    color:white;
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
    .about_content{
        top:500px;
        left:170px;
        position: absolute;
        width:1200px;
        height:1500px;
        background: blueviolet;
        color: blanchedalmond;
        .title_image{
            top:50px;
            left:50px;
            width:400px;
            height:400px;
            background:black;
            position:absolute;
            vertical-align: middle;
        }
        .about_disc_panel{
            padding-left:20px;
            top:50px;
            left:500px;
            width:650px;
            height:620px;
            position:absolute;
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
        .skill_stack_title{
            top:500px;
            left:50px;
            width:400px;
            height:170px;
            position:absolute;
            background: black;
        }
        .skill_stack_panel{
            margin:30px 30px 30px 0px;
            padding:20px;
            top:700px;
            left:50px;
            width:1080px;
            height:400px; //높이는 동적으로 바뀌어야될듯??
            position:relative;
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
                background:brown;
                img{
                    width:200px;
                    height:200px;
                    display:inline-block;
                    position: absolute;
                    transition-duration: 1s;
                }
                .skill_name{
                    top:220px;
                    display:block;
                    position:absolute;
                    
                }
                .skill_disc{
                    position:absolute;
                    display:none;
                    color:black;
                    text-align: left;
                    font-size:15px;
                    margin:10px;
                }
            }
            :hover{
                //display:none;
                background:white;
                transition-duration: 1s;
                img{
                    display:none;
                }
                .skill_disc{
                    display:inline-block;
                }
            }
        }
    }
}
</style>
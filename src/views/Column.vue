<template>
<div class="column">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="main_text" style="">Column</div>
    <div class="home_link">
        <div class="home_text" v-for="link in linkList" :key="link.name">
            <p @click="linkClick(link.url)">{{link.name}}</p>
        </div>
    </div>
    <div class="menu_link">
        <div class="menu_button" @mouseover="dropdownMenu"> 메뉴</div>
        <div class="menu_item" @click="mainLinkClick(item.url)" v-for="item in main_link_list" :key="item.name"> {{item.name}} </div>
    </div>
    <div class="column_panel">
            
    </div>
</div>
</template>

<script>
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
                    { name:"Column", url:"/gnaseel/Column" },
                    { name:"About", url:"/gnaseel/About" },
                ],
        }
    },
    methods:{
        dropdownMenu(){
           var arr=document.getElementsByClassName('menu_item');
           var menu=document.getElementsByClassName('menu_button');
           menu[0].style.position="relative";
   
          while(arr!=null){
               arr[0].className='menu_item_on';
           }
        },
        mainLinkClick(url){
            window.scrollTo({top:0, behavior:"smooth"});
            this.$router.push(url);
            setTimeout(function(){
                this.$router.push(url);
            }.bind(this),400); 
        },
    },
}
</script>

<style lang="scss">
.column{
    height:1500px;
    width:140%;
    background: black;
    font-size: 50px;
    color:white;
    position:relative;
    .menu_link{
        top:110px;
        left:-960px;
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
    .column_panel{
        top:500px;
        left:170px;
        position: absolute;
        width:1200px;
        height:1500px;
        color: blanchedalmond;
    }
}
</style>
<template>
<div class="column">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="main_text" style="">Column</div>
    <div class="home_link">
        <div class="home_text" v-for="link in linkList" :key="link.name">
            <p @click="linkClick(link.url)">{{link.name}}</p>
        </div>
    </div>
    <div class="column_panel">

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
    data(){
        return{
            linkList:[
                    { name:"git", url:"https://github.com/Gnaseel" },
                    { name:"kaggle", url:"https://www.kaggle.com/Gnaseel" },
                    { name:"tistory", url:"https://gnaseel.tistory.com" },
                ],
        }
    }
}
</script>

<style lang="scss">
.column{
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
    .column_panel{
        top:500px;
        left:170px;
        position: absolute;
        width:1200px;
        height:1500px;
        background: blueviolet;
        color: blanchedalmond;
    }
}
</style>
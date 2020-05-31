<template>
  <div class="home">
    <span>Hi, I'm HGnaseel</span>
    <div class="home_link">
      <div class="home_text" v-for="link in linkList" :key="link.name">
        <p @click="linkClick(link.url)">{{link.name}}</p>
      </div>
    </div>

    <div class="home_main">
      <div @mouseout="mainOut(0)" @mouseover="mainOver(0)" class="home_main_text" id="Colunm">Colunm</div>
      <div @mouseout="mainOut(1)" @mouseover="mainOver(1)" class="home_main_text" id="Project">Project</div>
      <div @mouseout="mainOut(2)" @mouseover="mainOver(2)" class="home_main_text" id="About">About</div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Home",
  data(){
    return{
      linkList:[
        { name:"git", url:"https://github.com/Gnaseel" },
        { name:"kaggle", url:"https://www.kaggle.com/Gnaseel" },
        { name:"tistory", url:"https://gnaseel.tistory.com" },
      ],
    }
  },
  methods:{
    linkClick(url){
      window.open(url);
    },
    mainOver(num){
      let list = [
        "Colunm", "Project", "About"
      ]
      
      for(let i=0;i<3;i++){
        if(i!=num){
         document.querySelector('#'+list[i]).id= list[i]+'_un';
        }else{
          document.querySelector('#'+list[i]).id= list[i]+'_se';
        }
      }
    },
    mainOut(num){
      let list = [
        "Colunm", "Project", "About"
      ]
      for(let i=0;i<3;i++){
        let v=list[i];
        if(num!=i) v+='_un';
        else v+='_se';
        var a = document.getElementById(v);
        if(a!=null)
          a.id=list[i]
      }
    },
  },
};
</script>
<style lang="scss">

.home{
  width:100%;
  height:100%;
  display:inline-block;
  background: black;
  color:blanchedalmond;
  font-size: 50px;
  span{
    color:rgb(139, 133, 133);
    position:fixed;
    top: 50px;
    left: calc(50% - 180px);
  }
  .home_link{
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
  .home_main{
    margin-top:50px;
    font-size:230px;
    height:700px;
    display:flex;
    align-items: center;
    justify-content: center;
    
    .home_main_text{
      display:inline-block;
      position:fixed;
      overflow: hidden;
      transition-duration: 0.8s;
      font-weight: bold;
    }
    :hover{
     color:rgb(211, 169, 111);
     font-size:110%; 
     letter-spacing: 10px;
     transition-duration:2s;
    }

    #Colunm{
      left:-30%;
    }
    #Colunm_un{
      left:-30%;
      color:rgb(92, 87, 80);
    }
    #Colunm_se{
      left:5%;
    }
    #Project{
      margin-top:150px;
    }
    #Project_un{
      margin-top:150px;
      color:rgb(92, 87, 80);
    }
    #About{
      right:-30%;
    }
    #About_un{
      right:-30%;
      color:rgb(92, 87, 80);
    }
    #About_se{
      right:5%;
    }
  }
}
</style>
<template>
<div class="column">
    <span class="title">Hi, I'm HGnaseel</span>
    <div class="main_text" style="">Column</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.column{
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
}
</style>
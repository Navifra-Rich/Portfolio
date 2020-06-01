<template>
<div class="column">
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
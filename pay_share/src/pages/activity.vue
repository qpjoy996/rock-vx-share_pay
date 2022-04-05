<template>
   <div class="activity">
    <img class="header" src="./../assets/img/header.png"/>
    <div class="content">
      <div class="item-info">
        <h2 class="item-title">活动说明</h2>
        <ul class="item-ul">
          <li class="item-li">1、欢迎来到3D大侦探</li>
          <li class="item-li">2、本游戏超级好玩</li>
          <li class="item-li">3、从小白到大牛，一对一小姐姐&大哥哥线上教学</li>
          <li class="item-li">4、最大的难点在于每次通关过后，惊喜的发现剧情原来这样</li>
          <li class="item-li">5、此游戏老少咸宜，欢迎广大同学在线试玩</li>
        </ul>
      </div>
      <p class="tip">本测试url为demo，如有侵权，请联系删除！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activity'
}
</script>
<style>
  .activity{
    background-color:#FFC93A;
  }
  .content{
    padding:0 .4rem .72rem;
  }
  .item-info{
    padding:.73rem .39rem 1.64rem;
    background-color:#FFFFFF;
    box-shadow:0px 8px 48px 6px rgba(252,195,56,0.44);
    border-radius:10px;
  }
  .item-info .item-title{
    background: url('./../assets/img/tip.png') no-repeat;
    background-size:50%;
    background-position: center;
    text-align:center;
    font-size:.3rem;
    color:#3F1E00;
    margin-bottom:.56rem;
  }
  .item-info .item-ul{
    list-style:none;
    font-size:.3rem;
    color: #9e9999;;
  }
  .item-info .item-ul .item-li{
    font-size:.28rem;
    font-weight:normal;
    color:#333333;
    line-height:.48rem;
  }
  .content .tip{
    margin-top:.88rem;
    text-align:center;
    font-size:.24rem;
    color:#6D5312;
  }
</style>
<template>
  <div class="aboutPage">
    <div class="gradient-section">
      <h1 class="title">About us</h1>
      <p class="text">
        盛宝金融科技商学院成立于 2018年6月，由三亚学院与全球领先金融科技公司盛宝银行（SaxoBank）合作共建，
        获得举办方吉利控股集团大力支持，是国内首家本土高校与国外金融机构合作共建的金融科技商学院，
        率先于2018年开设金融科技本科专业，为全国首批、海南唯一院校，海南省一流本科专业。
        学院立足海南自由贸易港金融创新发展，致力于培养符合国际标准、胜任中国及全球金融企业、机构岗位需求的金融科技人才，
        是全国首批“数字人民币”试点单位、海南唯一“中国金融科技教育与应用创新联盟”成员单位、教育部金融科技专业虚拟教研室成员单位、
        海南省金融学会理事单位。其中，学院共建方盛宝银行作为在线金融资产交易金融科技企业，在北欧乃至全球金融领域享有盛誉。
      </p>
    </div>
    <img class="heroAbout" src="@/assets/img/about1.png" />
  </div>
</template>

<script>
</script>

<style scoped>
.gradient-section {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  z-index: -1;
  text-align: center;
  align-items: center;
  justify-content: top;
  overflow: hidden;
}
.gradient-section .title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.3em;
  font-weight: 100;
  text-indent: 0.3em;
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
  margin-top: 4em;
  text-shadow: 1px 1px 2px black;
}
.gradient-section .text {
  position: absolute;
  align-self: center;
  text-align: center;
  font-family: "Magisho", sans-serif;
  font-size: 1.3rem;
  font-weight: 100;
  letter-spacing: 0.1em;
  margin-top: 14em;
  padding: 0em 20em;
  text-shadow: 1px 1px 2px black;
  color: #fff;
}

.heroAbout {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: top;
  animation: fade-in 0.5s forwards;
  overflow: hidden;
}

@media only screen and (max-width: 600px) {
  .gradient-section .title {
    font-size: 2rem;
  }
  .gradient-section .text {
    font-size: 1rem;
    width: 40vh;
  }
}
</style>

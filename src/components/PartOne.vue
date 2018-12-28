<template>
  <div class="part-one">
    <img class="part-one-image" :src="headImage" alt="头像">
    <p>姓&emsp;&emsp;名：吴家宝</p>
    <p>学&emsp;&emsp;历：专科</p>
    <p>工作年限：1 年</p>
    <p>年&emsp;&emsp;龄：23</p>
    <p>联系电话：不是很想告诉你</p>
    <p>电子邮箱：2459666474@qq.com</p>
    <p>GitHub：<a href="https://github.com/WJB2" target="_blank">WJB</a></p>
  </div>
</template>

<script>
export default {
  name: "partOne",
  data() {
    return {
      headImage: require('./../assets/img/greenman-wjba.png')
    }
  }
};
</script>

<style scoped>
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
p {
  line-height: 30px;
}
.part-one {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~./../assets/img/border_imagea.png") 30 30 stretch;
  background: #18202d;
  padding-left: 10px;
}
.part-one-image {
  width: 150px;
  height: 150px;
}
</style>
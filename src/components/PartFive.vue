<template>
  <div :class="partFive">
    <h3 class="text-center text-top">工作经验</h3>
    <p>
      <a href="javascript:void(0)">温州**科技股份有限公司</a>
      <span class="text-small">| 2017/10 - 2018/04</span>
    </p>
    <p class="text-small">工作内容：学习阶段 编写Vue代码</p>
    <p class="text-small">项目成就：</p>
      <p class="text-small">&emsp;1.让我来洗衣公众号的开发</p>
      <p class="text-small">&emsp;2.证书验证系统</p>
      <p class="text-small">&emsp;3.当当房产小程序</p>
    <p>
      <a href="javascript:void(0)">衢州**科技股份有限公司</a>
      <span class="text-small">| 2018/05 - 至今</span>
    </p>
    <p class="text-small">&emsp;项目成就</p>
    <p class="text-small">&emsp;1. 智慧工地项目移动端、PC端、微信公众号端。</p>
    <p class="text-small">&emsp;2. 钉钉任务管理系统微应用的开发。</p>
    <p class="text-small">&emsp;3. 家电哥管理后台。</p>
    <p class="text-small">&emsp;4. 三级分销系统管理后台。</p>
  </div>
</template>

<script>
export default {
  name: "partFive",
  data() {
    return {
      partFive: "part-five",
      curWidth: 0
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if(this.curWidth < 1600) {
      this.partFive = "part-five-responsive"
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
.part-five {
  width: 100%;
  height: 310px;
  border: 40px solid transparent;
  border-image: url("~./../assets/img/border_imagea.png") 30 30 stretch;
  background: #18202d;
}
.part-five-responsive {
  width: 100%;
  border: 40px solid transparent;
  border-image: url("~./../assets/img/border_imagea.png") 30 30 stretch;
  background: #18202d;
}
.text-center {
  text-align: center;
}
.text-small {
  font-size: 0.9em;
  color: rgb(253, 239, 239);
}
</style>
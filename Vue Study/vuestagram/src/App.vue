<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <Container :image="image" :Data="Data" :step="step" />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import postData from "./assets/postdata.js";
import Container from "./components/Container.vue";
import axios from "axios";

axios.post();

export default {
  name: "VueApp",
  components: {
    Container,
  },
  data() {
    return {
      Data: postData,
      moreClick: 0,
      step: 0,
      image: "",
    };
  },
  methods: {
    publish() {
      var myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
        filter: "perpetua",
      };
      this.Data.unshift(myPost);
      this.step = 0;
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreClick}.json`)
        .then((result) => {
          console.log(result.data);
          this.Data.push(result.data);
          this.moreClick++;
        });
    },
    upload(e) {
      let 파일 = e.target.files;
      console.log(파일[0].type);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.image = url;
      this.step++;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>

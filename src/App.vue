<template>
  <div id="app">
    <div class="toolbar">
      <button @click="edit = !!!edit">
        <font-awesome-icon :icon="edit?'save':'edit'"></font-awesome-icon>
      </button>
      <button @click="is_thinking = !!!is_thinking">
        <font-awesome-icon :icon="is_thinking?['fas','brain']:['far','comment']"></font-awesome-icon>
      </button>
      <button @click="sshot()">sshot</button>
    </div>
    <div class="mainView" ref="mainView">
      <textarea v-model="msg" v-if="edit"></textarea>
      <div style = "white-space: pre-line"
           class="bubble " :class="{'thought': is_thinking, 'speech': !is_thinking}" v-if="!edit">
        {{ msg }}
      </div>
      <div class="cow" :class="cowtype" ref="cow"></div>
    </div>
    <a ref = "download" :href="output" download="cow.png" v-show="false" >aaa</a>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      is_thinking: false,
      output: 'ciao',
      cowtype: 'cow1',
      edit: false,
      msg: ''
    }
  },
  methods: {
    sshot: function () {
      let el = this.$refs.mainView;
      const options = {
        type: 'dataURL'
      }
      this.$html2canvas(el, options).then((out) => {
        console.log(out)
        this.output = out;
        this.$refs.download.click();
      });
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Coming+Soon');

.toolbar {
  margin: auto;
  width: 360px;
  background-color: #f9f9f9;
}

.mainView {
  background-color: #86B7E4;
  background-image: url("~@/assets/cow1-bg.png");
  background-repeat: repeat-x;
  background-position: left bottom;
  border: solid 1px #999;
  width: 360px;
  margin: auto;
}

textarea {
  margin: auto;
  width: 90%;
  font-weight: bold;
  font-size: 1.2em;
  font-family: 'Coming Soon';
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
  border: none;
  min-height: 100px;
}

.msg {
  margin: auto;
  width: 90%;
  font-weight: bold;
  font-size: 1.2em;
  font-family: 'Coming Soon';
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
}

.cow {
  width: 100%;
  height: 330px;
}

.cow1 {
  background-image: url("~@/assets/cow1.png");
  background-repeat: no-repeat;
  background-position: center bottom;
}


div.bubble {
  position: relative;
  width: 280px;
  text-align: center;
  line-height: 1.4em;
  margin: 40px auto;
  background-color: #fff;
  border: 8px solid #333;
  border-radius: 30px;
  font-family: 'Coming Soon';
  padding: 20px;

  font-weight: bold;
}

div.thought {
  width: 280px;
  border-radius: 200px;
  padding: 30px;
}

div.bubble:before,
div.bubble:after {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
}

div.speech:before {
  left: 170px;
  bottom: -50px;
  border: 25px solid;
  border-color: #333 transparent transparent #333;
}

div.speech:after {
  left: 178px;
  bottom: -30px;
  border: 15px solid;
  border-color: #fff transparent transparent #fff;
}

div.thought:before,
div.thought:after {
  left: 290px;
  bottom: -30px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 8px solid #333;
  -webkit-border-radius: 28px;
  -moz-border-radius: 28px;
  border-radius: 28px;
}

div.thought:after {
  width: 20px;
  height: 20px;
  left: 280px;
  bottom: -40px;
  -webkit-border-radius: 18px;
  -moz-border-radius: 18px;
  border-radius: 18px;
}

</style>

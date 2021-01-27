<template>
  <div id="app" class="container">
    <div class="row">
      <h1 class="col text-center">There's no why, only beCows.</h1>
    </div>
    <div class="mainView row justify-content-center" ref="mainView">
      <div class="col">
        <div style="white-space: pre-line"
             class="bubble " :class="{'thought': is_thinking, 'speech': !is_thinking}">
          <textarea class="form-control" v-model="msg" v-if="edit"></textarea>
          <div v-else>{{ msg }}</div>
        </div>
        <div class="cow" :class="cowtype" ref="cow"></div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="btn-toolbar">

        <button type="button" class="btn btn-primary m-1" @click="toggleEdit()">
          <font-awesome-icon :icon="edit?'save':'edit'"></font-awesome-icon>
        </button>

        <button class="btn btn-primary m-1" @click="is_thinking = !!!is_thinking">
          <font-awesome-icon :icon="is_thinking?['fas','brain']:['far','comment']"></font-awesome-icon>
        </button>

        <a class="btn btn-primary m-1" ref="download" :href="output" download="cow.png">
          <font-awesome-icon icon="download"></font-awesome-icon>
        </a>
      </div>
    </div>
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
    toggleEdit: function () {
      this.edit = !this.edit;
      if (!this.edit) {
        let el = this.$refs.mainView;
        const options = {
          type: 'dataURL'
        }
        this.$html2canvas(el, options).then((out) => {
          console.log(out)
          this.output = out;
        });
      }
    },
    sshot: function () {
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Coming+Soon');

* {
  font-family: 'Coming Soon';
}

.mainView {
  background-color: #86B7E4;
  background-image: url("~@/assets/cow1-bg.png");
  background-repeat: repeat-x;
  background-position: left bottom;
}

.cow {
  min-height: 330px;
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
  margin: 5px auto 40px auto;
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
  left: 120px;
  bottom: -35px;
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
  left: 120px;
  bottom: -50px;
  -webkit-border-radius: 18px;
  -moz-border-radius: 18px;
  border-radius: 18px;
}

</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>ES6 destructuring samples</h3>
    <a href="https://hobbycoding.tistory.com/128" target="_blank" rel="noopener">Blog</a>
    <h3>ES6 spread operator</h3>
    <a href="https://hobbycoding.tistory.com/106" target="_blank" rel="noopener">Blog</a>

    <h3>v-bind sample</h3>
    <div>
      <span :title="message">
        내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
      </span>
    </div>

    <h3>v-for sample</h3>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>

    <h3>v-on:click</h3>
    <p>{{ message1 }}</p>
    <button v-on:click="reverseMessage">메시지 뒤집기</button>


    <h3>v-model</h3>
    <p>{{ message2 }}</p>
    <input v-model="message2">

    <h3>v-bind v-on vs v-model 한글처리에 효과</h3>
    <p>{{ inputText }}</p>
    <input v-bind:value="inputText" v-on:input="updateInput">

    <div>
      <h3>BaseInput w/한글처리에 효과</h3>
      <p>{{ inputText2 }}</p>
      <BaseInput label="Title" v-model="inputText2" type="text" placeholder="Title" class="field" />
    </div>

    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue';

export default {
  name: 'HelloWorld',

  components: {
    BaseInput
  },

  props: {
    msg: String,
  },
  data : function() {
  return {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다',
      message1: '안녕하세요! Vue.js!',
      message2: '안녕하세요! Vue.js!',
      inputText: '',
      inputText2: '안녕하세요! Vue.js!',
      todos: [
        { text: 'JavaScript 배우기' },
        { text: 'Vue 배우기' },
        { text: '무언가 멋진 것을 만들기' }
      ]
    };
  },
  methods: {
    reverseMessage: function () {
      this.message1 = this.message1.split('').reverse().join('')
    },
    updateInput: function(event) {
      var updatedText = event.target.value;
      this.inputText = updatedText;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

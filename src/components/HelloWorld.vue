<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
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

    <div>
      <h3>handling user input</h3>
      <p>{{ user_input_msg }}</p>
      <button @click="reverseMessage_input_msg">Reverse Message</button>
      <button @click="user_input_msg += '!'">Append "!"</button>
      <a href="https://vuejs.org" @click.prevent="notify">
        A link with e.preventDefault()
      </a>
    </div>

    <div>
      <h3>attributes binding</h3>
      <p>
        <span :title="user_input_msg">
          Hover your mouse over me for a few seconds to see my dynamically bound title!
        </span>
      </p>
  <!--
  class bindings have special support for objects and arrays
  in addition to plain strings
  -->
      <p :class="{ red: isRed }" @click="toggleRed">
        This should be red... but click me to toggle it.
      </p>
  <!-- style bindings also support object and arrays -->
      <p :style="{ color }" @click="toggleColor">
        This should be green, and should toggle between green and blue on click.
      </p>
    </div>

    <div>
      <h3>Conditions and Loops</h3>
      <button @click="show = !show">Toggle List</button>
      <button @click="list.push(list.length + 1)">Push Number</button>
      <button @click="list.pop()">Pop Number</button>
      <button @click="list.reverse()">Reverse List</button>

      <ul v-if="show && list.length">
        <li v-for="item of list" :key="item.id">{{ item }}</li>
      </ul>
      <p v-else-if="list.length">List is not empty, but hidden.</p>
      <p v-else>List is empty.</p>    </div>
    </div>

    <div>
      <h3>Form Binding</h3>
      <h2>Text Input</h2>
        <input v-model="text"> {{ text }}

        <h2>Checkbox</h2>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">Checked: {{ checked }}</label>

        <!--
          multiple checkboxes can bind to the same
          array v-model value
        -->
        <h2>Multi Checkbox</h2>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <p>Checked names: <pre>{{ checkedNames }}</pre></p>

        <h2>Radio</h2>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>

        <h2>Select</h2>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>

        <h2>Multi Select</h2>
        <select v-model="multiSelected" multiple style="width:100px">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ multiSelected }}</span>
    </div>
    <div>
      <h3>Simple Components</h3>
      <ol>
        <!--
          We are providing each todo-item with the todo object
          it's representing, so that its content can be dynamic.
          We also need to provide each component with a "key",
          which is explained in the guide section on v-for.
        -->
        <TodoItem
          v-for="item in groceryList"
          :todo="item"
          :key="item.id"
        ></TodoItem>
      </ol>
    </div>

</template>

<script>
// import BaseInput from './BaseInput.vue';
import TodoItem from '@/components/TodoItem.vue';
// import TeleportExample from "@/components/teleport/TeleportExample";


export default {
  name: 'HelloWorld',

  components: {
    //BaseInput
    TodoItem
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
      ],
      user_input_msg: 'Hello World!',
      isRed: true,
      color: 'green',

      show: true,
      list: [1, 2, 3],

      text: 'Edit me',
      checked: true,
      checkedNames: ['Jack'],
      picked: 'One',
      selected: 'A',
      multiSelected: ['A'],

      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
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
    reverseMessage_input_msg: function () {
      this.user_input_msg = this.user_input_msg.split('').reverse().join('')
    },
    notify() {
      alert('navigation was prevented.')
    },
    toggleRed() {
      this.isRed = !this.isRed
    },
    toggleColor() {
      this.color = this.color === 'green' ? 'blue' : 'green'
    }
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
button, a {
  display: block;
  margin-bottom: 1em;
}
.red {
  color: red;
}
</style>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome...</p>
    <input type="text" ref="name">
    <button @click="handleClick">Click me</button>
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">Link 1 </a>
          <a href="#">Link 2 </a>
          <a href="#">Link 3 </a>
        </template>
        <h4>Le estoy pasando un SLOT</h4>
      </Modal>
    </div>
    <div v-if="showModal2">
      <Modal @close="toggleModal2" :header="header2" :text="text2">
        <h4>Le estoy pasando un SLOT al modal 2</h4>
        <template v-slot:links>
          <a href="#">Link A</a>
          <a href="#">Link B</a>
        </template>
      </Modal>
    </div>
    <button @click="toggleModal">Open Modal</button>
    <button @click="toggleModal2">Open Modal2</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My first Vue App :)',
      header: "Sign up for the Giveaway!",
      text: "Grab your ninja swag for half a price!",
      header2: "Sign up for the Giveaway 2!",
      text2: "Grab your ninja swag for half a price 2!",
      showModal: false,
      showModal2: false
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>

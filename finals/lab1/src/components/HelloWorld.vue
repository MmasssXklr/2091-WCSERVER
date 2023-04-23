<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <h3>Interests</h3> <br>
      Photography |
      Design |
      Programming |
      Layout 
    </p>

    <h3>Education</h3>
    <p> Information Technology major in Web Development at Holy Angel University </p>

    <h3>Extracurriculars</h3>
    <p> GDSC | Logic Breaker </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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

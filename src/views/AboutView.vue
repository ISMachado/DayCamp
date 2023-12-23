<template>
  <div class="about">

    <!-- Menu Lateral -->
    <div class="menu">
      <router-link to="/about/home">Home</router-link>
      <router-link to="/about/students">Cadastrar Alunos</router-link>
      <router-link to="/about/schools">Cadastrar Escolas</router-link>
      <router-link to="/about/events">Eventos</router-link>
    </div>

    <!-- Conteúdo Dinâmico -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AboutView"
};
</script>

<style scoped>
/* Estilize o menu e o conteúdo conforme necessário */
.menu {
  width: 200px;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.menu a {
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
}

.menu a:hover {
  color: #e29a22;
}
</style>


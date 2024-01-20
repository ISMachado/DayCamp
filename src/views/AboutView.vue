<template>
  <div class="home">
    <div class="menu">
      <!-- Conteúdo do Menu -->
      <router-link to="/about/home">Home</router-link>
      <router-link to="/about/students">Cadastrar Alunos</router-link>
      <router-link to="/about/schools">Cadastrar Escolas</router-link>
      <router-link to="/about/events">Eventos</router-link>
    </div>

    <div class="content">
      <!-- Conteúdo da Tabela -->
      <h2 class="table-title">Escolas</h2>
      <div>
        <table class="custom-table">
          <thead>
            <tr>
              <th class="pt-3">Escolas</th>
              <th class="pt-3">Professores</th>
              <th class="pt-3">Alunos</th>
              <th class="pt-3">Turmas</th>
              <th class="pt-3">Conversões</th>
            </tr>
          </thead>
          <tbody>
            <!-- Aqui você pode adicionar linhas com os dados da tabela -->
            <td colspan="5">
              <hr class="table-separator" />
            </td>
            <tr>
              <td>Escola 1</td>
              <td>09 Professores</td>
              <td>268 Alunos</td>
              <td>10</td>
              <td>12</td>
            </tr>
            <td colspan="5">
              <hr class="table-separator" />
            </td>
            <!-- Linha 2 -->
            <tr>
              <td>Escola 2</td>
              <td>15 Professores</td>
              <td>350 Alunos</td>
              <td>12</td>
              <td>18</td>
            </tr>
            <td colspan="5">
              <hr class="table-separator" />
            </td>
            <!-- Linha 3 -->
            <tr>
              <td class="pb-3">Escola 3</td>
              <td class="pb-3">12 Professores</td>
              <td class="pb-3">300 Alunos</td>
              <td class="pb-3">8</td>
              <td class="pb-3">15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilize o menu e o conteúdo conforme necessário */
.home {
  display: flex;
}

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
  border-radius: 13.628px;
  transition: background 0.3s, box-shadow 0.3s;
}

.menu a:hover {
  color: #e29a22;
}

.menu a.router-link-exact-active {
  background: var(--black-amp-white-white, #FFF);
  box-shadow: 0px 3.18px 4.997px 0px rgba(0, 0, 0, 0.02);
  color: #333; /* Pode ser necessário ajustar a cor do texto */
}

.content {
  flex: 1;
  padding: 20px;
}

.table-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: var(--Gray-Gray-700, #4a5568);
  margin-bottom: 20px;
}

.custom-table {
  border-radius: 18px;
  background: var(--black-amp-white-white, #f0eeee);
  box-shadow: 0px 4.277px 6.721px 0px rgba(0, 0, 0, 0.02);
  width: 100%;
}

th {
  color: var(--Gray-Gray-400, #a0aec0);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}

.table-separator {
  height: 1px;
  border: none;
  background-color: #ddd;
  margin: 10px 0;
}
</style>

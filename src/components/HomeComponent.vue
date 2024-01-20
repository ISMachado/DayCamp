<template>
  <div>
    <h2 class="table-title">Escola</h2>
    <div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Escola</th>
            <th>Professores</th>
            <th>Alunos</th>
            <th>Turmas</th>
            <th>Conversões</th>
          </tr>
        </thead>
        <tbody>
          <!-- Aqui você pode adicionar linhas com os dados da tabela -->
          <!-- Exemplo de uma linha -->
          <tr>
            <td>Nome da Escola</td>
            <td>Nome do Professor</td>
            <td>Número de Alunos</td>
            <td>Número de Turmas</td>
            <td>Número de Conversões</td>
          </tr>
          <!-- Adicione mais linhas conforme necessário -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: var(--Gray-Gray-700, #4a5568);
  margin-bottom: 20px;
}

.custom-table {
  border-radius: 18.33px;
  background: var(--black-amp-white-white, #fff);
  box-shadow: 0px 4.277px 6.721px 0px rgba(0, 0, 0, 0.02);
  width: 100%; /* Para garantir que a tabela ocupa 100% da largura disponível */
  margin-top: 20px; /* Adapte conforme necessário */
}

th {
  color: var(--Gray-Gray-400, #a0aec0);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}
</style>

<template>
  <div class="loginUser">
    <div class="card-container">
      <div class="card">
        <div class="card-content">
          <div class="left-side"></div>
          <div class="right-side">
            <div class="title pb-3">Day Camps</div>
            <p class="text">Insira seu e-mail e senha para acessar</p>
            <form>
              <div class="pt-3">
                <label for="email" class="input-label mb-0">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemplo@gmail.com"
                  required
                />

                <label for="password" class="input-label mb-0 pt-3">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*********"
                  required
                />
              </div>

              <div class="pt-5">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginUser",
};
</script>

<style scoped>
.card-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 800px;
  height: 550px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 1.21px 14.52px 1.21px rgba(0, 0, 0, 0.2);
}

.card-content {
  display: flex;
  height: 100%;
}

.left-side {
  width: 50%;
  background: #e29a22;
  border-radius: 14px 0 0 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-side {
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: #252525;
  font-size: 30px;
  font-weight: 550;
}

.text {
  color: rgba(30, 30, 30, 0.75);
  font-size: 16px;
  font-weight: 400;
}

.input-label {
  display: flex;
  color: rgba(30, 30, 30, 0.75);
  font-size: 16px;
  font-weight: 500;
}

form {
  width: 100%;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
}

button {
  background-color: #e29a22;
  width: 100%;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 8px;
}
</style>

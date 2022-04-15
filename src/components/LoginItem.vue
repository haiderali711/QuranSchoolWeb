<script setup>

</script>

<template>
<div class="box">
  <div id="header">
    <div id="cont-lock"><i class="material-icons lock">lock</i></div>
    <div id="bottom-head"><h1 id="logintoregister">Login</h1></div>
  </div> 
   <form action="" method="post">
    <div class="group">      
      <input class="inputMaterial" type="text" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Username</label>
    </div>
	    <div class="group">      
      <input class="inputMaterial" type="password" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Password</label>
    </div>
    <button id="buttonlogintoregister" type="submit">Login</button>
  </form>
  <div id="footer-box"><p class="footer-text">Not a member?<span class="sign-up"> Sign up now</span></p></div>
</div>

</template>


<style scoped lang="scss">
    @import './LoginItem.scss';    
</style>>

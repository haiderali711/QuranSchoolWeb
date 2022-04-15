<script>

    export default {
        props:['showLogin', 'changeShowLogin'],
        methods : {
            
        }
    }
</script>

<template>
<div class="box">
    <div id="header">
        <div id="cont-lock">FONT</div>
        <div id="bottom-head"><h1 id="logintoregister">Register A New Teacher</h1></div>
    </div> 
    <div>
        <form action="" method="post">
            <div class="group">      
            <input class="inputMaterial" type="text" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Name</label>
            </div>
            <div class="group">      
            <input class="inputMaterial" type="text" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Email</label>
            </div>
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
            <button id="buttonlogintoregister" type="submit">Register</button>
        </form>
    </div>
  <div id="footer-box"><p class="footer-text">Already Registered?<span class="sign-up" @click="changeShowLogin"> Sign In instead!</span></p></div>
</div>

</template>


<style scoped lang="scss">
    @import './RegisterItem.scss';    
</style>>

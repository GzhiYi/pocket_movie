<template>
    <div>
       hello{{msg}}
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
      el:'#app',
      data(){
        return {
          msg:"hello vue !!"
        }
      },
    }
</script>
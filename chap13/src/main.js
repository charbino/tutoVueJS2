import Vue from 'vue'
import App from './App.vue'


Vue.filter('to-lowerCase', function(value){
  return value.toLowerCase();
});

Vue.mixin({
    created(){
      console.log('Global mixin - Created hook')
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

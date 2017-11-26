Vue.component('tabs',{
    template:`
    <div>
           <div class="tabs">
               <ul>
                   <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
                       <a href="#" @click="activeTab(tab)"> {{ tab.name }} </a>
                   </li>
               </ul>
           </div>
           <slot></slot>
   </div>`,
 

   data(){
       return {tabs : []};
   },
   created(){
       this.tabs = this.$children;
   },
   methods:{
    activeTab(selectedTab){
        this.$children.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
        });
        
    }
   }
});

Vue.component('tab', {
    template:`
    <div class="tabs-details" v-if="isActive"><slot></slot></div>
       `,
   props:{
       name:{required :true},
       selected:{default:false}
   },
   data(){
       return{
           isActive : false
       };
   },
   mounted(){
       this.isActive = this.selected;
   }
})

let vm = new Vue({
   el:'#root',
   data:{
       message: 'Hello World'
   }
})

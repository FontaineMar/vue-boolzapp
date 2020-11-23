const myApp = new Vue({
  el:'#myBoolzapp',
  data:{
    nomeUtente:{
      nome: 'Marco',
      image: 'img/avatar_io.jpg',
    },
    contacts:[
      {
        name: 'Michele',
        image: 'img/avatar_1.jpg',
        lastChat:'03/10/20',
        sms:[]
      },
      {
        name: 'Rosa',
        image: 'img/avatar_2.jpg',
        lastChat:'03/10/20',
        sms:[]
      },
      {
        name: 'Giovanni',
        image: 'img/avatar_3.jpg',
        lastChat:'03/10/20',
        sms:[]
      },
      {
        name: 'Maria',
        image: 'img/avatar_4.jpg',
        lastChat:'03/10/20',
        sms:[]
      },
      {
        name: 'Pablo',
        image: 'img/avatar_5.jpg',
        lastChat:'03/10/20',
        sms:[]
      },
      {
        name: 'Luisa',
        image: 'img/avatar_6.jpg',
        lastChat:'03/10/20',
        sms:[]
      }
    ],
    courrentContactsIndex:0,
    myInput:'',
  },
  methods:{
    changeChat: function(index){
       this.courrentContactsIndex = index
    },
    message: function(){
      this.contacts[this.courrentContactsIndex]['sms'].push(this.myInput)
    console.log(this.contacts[this.courrentContactsIndex])
    }
  },

})

document.addEventListener('keydown' , function (e){
  if(e.key == 'Enter'){
    myApp.message()
  }
})

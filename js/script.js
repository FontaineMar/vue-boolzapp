const myApp = new Vue({
  el:'#myBoolzapp',
  data:{
    nomeUtente:{
      nome: 'Giulia',
      image: 'img/avatar_io.jpg',
    },
    contacts:[
      {
        name: 'Michele',
        image: 'img/avatar_1.jpg',
        lastChat:'03/10/20',
        history:[
          {
            text:'compri il latte?',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'non posso sto a lavoro',
            date: '21 ott 2020',
            type:'sent'
          }
        ]
      },
      {
        name: 'Freddy',
        image: 'img/avatar_2.jpg',
        lastChat:'03/10/20',
        history:[
          {
            text:'ciao domani vieni alla mia festa?',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'non lo so ti faccio sapere',
            date: '21 ott 2020',
            type:'sent'
          }
        ]      },
      {
        name: 'Bomba Anarchica',
        image: 'img/avatar_3.jpg',
        lastChat:'03/10/20',
        history:[
          {
            text:'dimmi quando parti',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'ok va bene ',
            date: '21 ott 2020',
            type:'sent'
          }
        ]      },
      {
        name: 'Chicco',
        image: 'img/avatar_4.jpg',
        lastChat:'03/10/20',
        history:[
          {
            text:'dove stai?',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:' a casa tu?',
            date: '21 ott 2020',
            type:'sent'
          }
        ]      },
      {
        name: 'Pablo',
        image: 'img/avatar_5.jpg',
        lastChat:'03/10/20',
        history:[
          {
            text:'chiamami',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'fra un po adesso sono impegnato',
            date: '21 ott 2020',
            type:'sent'
          }
        ]
      },
      {
        name: 'Luisa',
        image: 'img/avatar_6.jpg',
        lastChat:'03/10/20',
        history:[
          {
            text:'ciao come stai?',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'tutto bene grazie',
            date: '21 ott 2020',
            type:'sent'
          }
        ]
      }
    ],
    courrentContactsIndex:0,
    myInput:'',
  },
  methods:{
    changeChat: function(index){
      this.courrentContactsIndex = index
    },
    receivedMessage: function(){
      this.contacts[this.courrentContactsIndex].history.push(
      {
        text: 'ok va bene',
        type: 'sent',
        date: '21 nov 2020'
      })
    },
    sendMessage: function(){
      this.contacts[this.courrentContactsIndex].history.push(
        {
        text: this.myInput,
        type: 'sent',
        date: '21 nov 2020'
        });
        setTimeout(function() {this.receivedMessage()} ,3000);
    }
  }
})

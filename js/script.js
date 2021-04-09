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
        name: 'Francesco',
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
    activeContact: null,
    myInput:'',
    filterContact:[],
    search:'',
  },
  created(){
    this.activeContact = this.contacts[0]
  },
  methods:{
    changeChat(contact){
      this.activeContact = contact
    },
    receivedMessage(){
      this.activeContact.history.push(
      {
        text: 'ciao come stai?',
        type: 'received',
        date: (new Date()).toDateString()
      })
    },
    sendMessage(){
      this.activeContact.history.push(
        {
        text: this.myInput,
        type: 'sent',
        date: (new Date()).toDateString()
        });
        this.myInput='';
        setTimeout(()=> {this.receivedMessage()} ,3000);
    },
    searchContact(){
      this.filterContact = this.contacts.filter( (contact) =>
      contact.name.toLowerCase().includes(this.search))
    },
    deleteMesasage(){
      this.activeContact.history.splice(0,)
    }
  }
})

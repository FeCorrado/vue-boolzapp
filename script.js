new Vue({
  el: "#app",
  data: {
    userSrc:[],
    namer: "",
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,

        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },

      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],

    im: 1,
    newMessage: "",
    imgUt: "1",
    nomUt: "Michele",
  },
  methods: {
    selUte: function (i) {
      this.im = i;
      this.imgUt = i + 1;
      this.nomUt = this.contacts[i].name;
      console.log(this.imgUt);
    },
    addMessage: function (im) {
      this.contacts[im].messages.push({
        date: "19/01/2022 15:30:55",
        text: this.newMessage,
        status: "sent",
      });
      setTimeout( () => {
        this.contacts[im].messages.push({
          date: "19/01/2022 15:30:55",
          text: "ok",
          status: "recived",
        });
      }, 1000);

      /*
            if (this.contacts[im].name === 'Luisa' & this.newMessage === 'ma hai il baffo?') {
                this.contacts[im].messages.push({
                    date: '19/01/2022 15:30:55',
                    text: 'è la moda del 2022, ignorante!!!',
                    status: 'recived'
            }else {
                this.contacts[im].messages.push({
                    date: '19/01/2022 15:30:55',
                    text: 'ok',
                    status: 'recived'
            },
            */
      this.newMessage = "";
    },
    filterProductsByName: function () {
      this.userSrc = this.contacts.filter(
       (contact) => contact.name.startsWith(this.namer));
   },
  },
  
});

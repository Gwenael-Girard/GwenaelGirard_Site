import { createStore } from 'vuex'

export default createStore({
state: {
  contacts: [
    {
      name: "github",
      username: "GwenaelGirard-Divtec",
      url: "https://github.com",
      image: "/reseaux/github.png"
    },

    {
      name: "instagram",
      username: "gwn_grd",
      url: "https://instagram.com",
      image: "/reseaux/instagram.png"
    },
    {
      name: "mail",
      username: "gwenael@girard-pro.ch",
      url: "",
      image: ""
    },
],

  comptencesListe: [
    {
      name: "Programmation",
      comptences: [
        {title: "Javascript", note: 6},
        {title: "C++", note: 3},
        {title: "C", note: 4},
      ]
    },

    {
      name: "Langue",
      comptences: [
        {title: "Anglais", note: 5},
        {title: "Français", note: 6},
        {title: "Allemand", note: 2},
      ]
    },

    {
      name: "Multimédia",
      comptences: [
        {title: "Photoshop", note: 6},
        {title: "Illustrator", note: 6},
      ]
    },
  ],
},
getters: {
},
mutations: {
},
actions: {
},
modules: {
}
})

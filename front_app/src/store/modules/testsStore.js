
// initial state
const state = {
    videos : [
        {
            docId : "111",
            title : "Titre de ma vidéo",
            author : "100.AAA.111",
            categorie : 'Cours',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : true

        },{
            docId : "222",
            title : "Titre de ma vidéo",
            author : "100.AAA.222",
            categorie : 'Exercice',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false,
            background : require('@/assets/img/naruto_nouille_portrait.jpg')
        },{
            docId : "333",
            title : "Titre de ma vidéo",
            author : "100.AAA.333",
            categorie : 'Formation',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "444",
            title : "Titre de ma vidéo",
            author : "100.AAA.444",
            categorie : 'Ouvrage',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "555",
            title : "Titre de ma vidéo",
            author : "100.AAA.555",
            categorie : 'Tutoriel',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "666",
            title : "Titre de ma vidéo",
            author : "100.AAA.666",
            categorie : 'Vulgarisation',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "777",
            title : "Titre de ma vidéo",
            author : "100.AAA.777",
            categorie : 'Vulgarisation',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "888",
            title : "Titre de ma vidéo",
            author : "100.AAA.888",
            categorie : 'Vulgarisation',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "999",
            title : "Titre de ma vidéo",
            author : "100.AAA.999",
            categorie : 'Vulgarisation',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        }
    ],
    ecrits : [
        {
            docId : "111",
            title : "Titre de ma vidéo",
            author : "100.AAA.111",
            categorie : 'Tutoriel',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : true
        },{
            docId : "222",
            title : "Titre de ma vidéo",
            author : "100.AAA.222",
            categorie : 'Ouvrage',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "333",
            title : "Titre de ma vidéo",
            author : "100.AAA.333",
            categorie : 'Formation',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "444",
            title : "Titre de ma vidéo",
            author : "100.AAA.444",
            categorie : 'Exercice',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "555",
            title : "Titre de ma vidéo",
            author : "100.AAA.555",
            categorie : 'Cours',
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        }
    ]
}

const getters = {
    getVideos: (state) => state.videos ,
    getEcrits: (state) => state.ecrits
}

const mutations = {
    changeVideoFavorite (state, docId) {
        const video = state.videos.find(video => video.docId === docId);
        video.isFavorite = !video.isFavorite;
    }
}

export default {
    state,
    getters,
    mutations
}

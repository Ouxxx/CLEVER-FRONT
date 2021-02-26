
// initial state
const state = {
    videos : [
        {
            docId : "111",
            title : "Titre de ma vidéo",
            author : "100.AAA.111",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : true
        },{
            docId : "222",
            title : "Titre de ma vidéo",
            author : "100.AAA.222",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "333",
            title : "Titre de ma vidéo",
            author : "100.AAA.333",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "444",
            title : "Titre de ma vidéo",
            author : "100.AAA.444",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "555",
            title : "Titre de ma vidéo",
            author : "100.AAA.555",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "666",
            title : "Titre de ma vidéo",
            author : "100.AAA.666",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "777",
            title : "Titre de ma vidéo",
            author : "100.AAA.777",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "888",
            title : "Titre de ma vidéo",
            author : "100.AAA.888",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "999",
            title : "Titre de ma vidéo",
            author : "100.AAA.999",
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
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : true
        },{
            docId : "222",
            title : "Titre de ma vidéo",
            author : "100.AAA.222",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "333",
            title : "Titre de ma vidéo",
            author : "100.AAA.333",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "444",
            title : "Titre de ma vidéo",
            author : "100.AAA.444",
            views : "4142",
            since : "il y a 2 mois",
            description : "Ceci est la description de ma video. Elle est super géniale vous allez tout savoir. Peace",
            isFavorite : false
        },{
            docId : "555",
            title : "Titre de ma vidéo",
            author : "100.AAA.555",
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

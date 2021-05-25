
// initial state
const state = {
    categories : [
        {
            name : 'Cours',
            description: 'Contenu unique sur un sujet unique.',
            colorRef : {
                r : 153,
                g : 50,
                b : 204
            }
        },{
            name : 'Exercice',
            description: "Proposez une source d'entrainement. Nous vous conseillons de le faire sur sujet unique.",
            colorRef : {
                r : 255,
                g : 165,
                b : 0
            }
        },{
            name : 'Formation',
            description: "Vous souhaitez créer un contenu multi-catégories axé autour d'un sujet unique ? Alors cette catégorie sera préférée.",
            colorRef : {
                r : 0,
                g : 206,
                b : 209
            }
        },{
            name : 'Ouvrage',
            description: 'Contenu unique sur un sujet unique.',
            colorRef : {
                r : 139,
                g : 0,
                b : 139
            }
        },{
            name : 'Tutoriel',
            description: "Guide favorisant la transmission directe d'un savoir au travers d'un enchaînement d'étapes.",
            colorRef : {
                r : 255,
                g : 255,
                b : 0
            }
        },{
            name : 'Vulgarisation',
            description: 'Contenu unique sur un sujet unique.',
            colorRef : {
                r : 173,
                g : 255,
                b : 47
            }
        }
    ]
}

const getters = {
    getCategories: (state) => state.categories,
    getCategorieByName: (state) => (name) => state.categories.find(categorie => categorie.name === name)
}

export default {
    state,
    getters
}

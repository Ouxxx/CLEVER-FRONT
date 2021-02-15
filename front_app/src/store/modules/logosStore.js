
// initial state
const state = {
    shares : [
        {
            name : 'Twitter',
            path : require('@/assets/img/logos/twitter.png'),
            url : 'https://twitter.com/'
        }
    ],
    logos : [
        {
            name : "Plus",
            path : require('@/assets/img/logos/plus.png')
        },{
            name : "Autre",
            path : require('@/assets/img/logos/plus.png')
        }
    ]
}

const getters = {
    getShares: (state) => state.shares ,
    getLogoByName: (state) => (name) => state.logos.find(logo => logo.name === name)
}

export default {
    state,
    getters
}

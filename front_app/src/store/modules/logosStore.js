
// initial state
const state = {
    shares : [
        {
            name : 'Twitter',
            path : require('@/assets/img/logos/twitter.png'),
            url : 'https://twitter.com/'
        },{
            name : 'Instagram',
            path : require('@/assets/img/logos/instagram.png'),
            url : 'https://instagram.com/'
        },{
            name : 'Linkedin',
            path : require('@/assets/img/logos/linkedin.png'),
            url : 'https://linkedin.com/'
        },{
            name : 'Discord',
            path : require('@/assets/img/logos/discord.png'),
            url : 'https://discord.com/'
        },{
            name : 'Twitch',
            path : require('@/assets/img/logos/twitch.png'),
            url : 'https://twitch.com/'
        },{
            name : 'Facebook',
            path : require('@/assets/img/logos/facebook.png'),
            url : 'https://facebook.com/'
        },
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

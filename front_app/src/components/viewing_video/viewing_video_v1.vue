<template>
    <div class="viewing-video-root">
        <headerCh></headerCh>
        <sidebarCh></sidebarCh>
        <div class="viewing-content">
            <div class="content-one-and-second">
                <chVideo class="content-one"></chVideo>
                    <!-- composant à créer : composant lecteur vidéo -->
                <chVideo class="content-one"></chVideo>
                    <!-- composant à créer : contenu secondaire -->
            </div>
            <div class="icon-bar">
                <img src="../../assets/img/S-gold.png" alt="s-icon">
                <img src="../../assets/img/coeur-icon2.png" alt="heart-icon">
                <img src="../../assets/img/megaphone-icon.png" alt="megaphone-phone">
                <img src="../../assets/img/warning-icon.png" alt="warning-icon">
                <img src="../../assets/img/partage-icon.png" alt="sharing-icon">
                <img src="../../assets/img/xs-oeil-icon.png" alt="eye-icon">
            </div>
            <div class="desc-forum-proposal">
                <table>
                    <tr>
                        <td class="description"> DESCRIPTION
                            <!-- composant à créer pour le contenu video et pour le contenu img.
                            Pour le contenu ecrit on choisit un résumé. -->
                        </td>
                        <td class="proposal-content"> SUGGESTIONS
                            <!-- composant à créer : suggestions -->
                        </td>
                    </tr>
                    <tr>
                        <td class="forum"> FORUM
                            <!-- composant à créer : forum commentaires sera utilisé pour tous les types de
                            contenu  -->
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
        


</template>

<script>
import headerCh from '../common/header/Header_v5'
import sidebarCh from '../common/sidebar/Sidebar_v2'
import chVideo from '../common/video/Video_v1'
export default {
    components: {headerCh, sidebarCh, chVideo},
    
}
</script>

<style scoped>

.viewing-video-root {
    position: relative;
    background-color: rgb(0,10,26);
    min-height: 100vh;
}

/* Contenu regardé */

.content-one-and-second {
    display:flex;
    flex-direction: row;
    justify-content: center;
}

.content-one {
    margin: 60px 0 0 50px;
    width: 800px;
}

/* Barre d'icones */

.icon-bar {  
    margin-left: 50px;
}

/* Desc Forum Proposal */

.desc-forum-proposal {
    color: white;
    margin-left: 50px;
}


</style>
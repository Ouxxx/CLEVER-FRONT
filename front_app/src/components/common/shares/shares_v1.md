# Composant Shares_v1

## Description :

Le composant Shares_v1 permet d'afficher une liste de liens. Il permet aussi l'envoi de signaux permettant d'ajouter de nouveaux liens ou d'en supprimmer.

## Props :

*sharedLinks* : 

- Tableau affiché par le composant Shares_v1
- De type Array. Contient des objets de la forme : { name : String, path : String, url : String }
- Requis : oui

*isEditable* : 

- Boolean qui permet d'ajouter la possibilité de modifier le contenu de *sharedLinks* via des signaux (cf section signaux)
- De type Boolean
- Requis : Non
- Par defaut vaut %false%

## Signaux :

*add-share* :

- Signal permettant d'ajouter un nouveau lien
- Transmet le nouveau lien de partage sous la forme d'un objet  { name : String, path : String, url : String } 
- Condition : *isEditable* doit être égal à true



*delete-share* :
- Signal permettant de supprimer un nouveau lien
- Transmet le lien de partage à supprimer sous la forme d'un objet  { name : String, path : String, url : String } 
- Condition : *isEditable* doit être égal à true

## Cas d'utilisation :

L'idée de ce composant est d'ajouter et de supprimer des liens dans un tableau transmis par le composant parent. Le composant parent devrait donc avoir une methode d'ajout et de supression de lien en cas de reception d'evenements comme ci-dessous:

    export default {
        data () {
            return {
                shares : [],
                ...
            }
        },
        methods : {
            addShare(share) {
                this.shares.push(share)
            },
            deleteShare(share) {
                this.shares = this.shares.filter(item => item.url !== share.url)
            },
            ...
        },
        ...    
    }

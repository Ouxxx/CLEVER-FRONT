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

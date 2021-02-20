# Composant Modal_v2

## Description :

Le composant Modal_v2 permet d'ouvrir une modale sur la page. La modale contient un titre, un corps determiné par ses blocs enfants ainsi que 2 boutons : 1 bouton present en fonction de la prop *withSubmit* emetant un signal *modal-submit* lorsqu'on clique dessus; 1 bouton toujours présent emetant un signal 'modal-cancel'.

## Props :

*title* : 

- Titre de la modale
- De type String.
- Requis : Oui

*submitLabel* : 

- Label du bouton de validation 
- De type String.
- Requis : Non

*cancelLabel* : 

- Titre du bouton de retour
- De type String.
- Requis : Oui

*withSubmit* : 

- Boolean qui determine la presence du bouton defini par *submitLabel*
- De type Boolean.
- Requis : Oui

## Signaux :

*modal-submit* :

- Signal émis lorsqu'on clique sur le bouton défini par *submitLabel*
- Condition : *withSubmit* doit être égal à true

*modal-cancel* :

- Signal émis lorsqu'on clique sur le bouton défini par *cancelLabel*

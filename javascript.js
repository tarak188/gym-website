function verif_formulaire() {
    if (document.formulaire.nom1.value == "") {
      alert("Veuillez entrer votre nom!");
      document.formulaire.nom1.focus();
      return false;
    }
    if (document.formulaire.email.value == "") {
      alert("Veuillez mettre l'@!");
      document.formulaire.email.focus();
      return false;
    }
    if (document.formulaire.email.value.indexOf('@') == -1) {
      alert("Veuillez mettre l'@!");
      document.formulaire.email.focus();
      return false;
    }
    if (document.formulaire.password.value == "") {
      alert("Veuillez entrer votre mot de passe!");
      document.formulaire.password.focus();
      return false;
    }
    if (document.formulaire.age.value == "") {
      alert("L'age doit être un nombre!");
      document.formulaire.age.focus();
      return false;
    }
    var chkZ = 1;
    for (i = 0; i < document.formulaire.age.value.length; ++i) {
      if (document.formulaire.age.value.charAt(i) < "1" || document.formulaire.age.value.charAt(i) > "99") {
        chkZ = -1;
      }
    }
    if (chkZ == -1) {
      alert("votre age n'est pas correcte veuillez mettre un nombre !!!");
      document.formulaire.age.focus();
      return false;
    }
    
  }
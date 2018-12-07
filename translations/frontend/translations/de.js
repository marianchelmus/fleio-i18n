angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de', {"ACTIVE":"AKTIV","Cancel":"Abbrechen","Console":"Konsole","DISABLED":"BEHINDERT","Date":"Datum","Date created":"Erstellungsdatum","Delete":"Löschen","Delete instance":"Instanz löschen","Delete instance {{name}}":"Instanz {{name}} löschen","Edit":"Bearbeiten","Email":"Email","Fee":"Beitrag","Flavors":"Varianten","From":"Aus","Hello":"Hallo","Hello!":"Hallo!","Hello, {{ userInfo.user.first_name }}":"Hallo, {{ userInfo.user.first_name }}","Images":"Abbilder","Instance UUID: {{ $ctrl.instance.uuid }}":"Instanz UUID: {{ $ctrl.instance.uuid }}","Instance name":"Instanz Name","Instance {:name}":"Instanz {:name}","Instances":"Instanzen","Invoice":"Rechnung","Invoice {:id}":"Rechnung {:id}","Invoices":"Berechnung","Language":"Sprache","Launch":"Starten","Log out":"Abmelden","Login":"Anmeldung","More":"Mehr","Name":"Name","Notifications":"Mitteilungen","Password":"Passwort","Password is required":"Passwort wird benötigt","Powered by Fleio":"Angetrieben durch Fleio","Powered by Fleio v. {{ vm.frontend_version }}":"Angetrieben durch Fleio v. {{ vm.frontend_version }}","Region":"Region","Remember me":"Erinnere dich an mich","Rename":"Umbenenne","SSH keys":"SSH Schlüsselpaar","Save":"Speichern","Search instances":"Instanzen suchen","Settings":"Einstellungen","Sign in":"Anmelden","Theme":"Thema","To":"Bis","User name":"Benutzername","User name is required":"Benutzername wird benötigt","Volume":"Datenträger","Volumes":"Datenträger"});
/* jshint +W100 */
}]);
define([], function () {
    return {
        'PropertyPaneDescription': 'Configuration du WebPart',
        'QueryGroupName': 'Paramètres de requête de recherche',
        'AudienceGroupName': 'Paramètres de ciblage d\'audience',
        'TemplateGroupName': 'Paramètres du template',
        'TitleFieldLabel': 'Titre du WebPart ',
        'QueryFieldLabel': 'Précisez votre requête de recherche',
        'QueryFieldDescription': 'Vous pouvez utiliser les tokens suivants: {Site} - {SiteCollection} - {Today} ou {Today + NR} ou {Today-NR} - {CurrentDisplayLanguage} - {User}, {User.Name}, {User.Email } ',
        'FieldsMaxResults': 'Nombre de résultats à afficher',
        'SortingFieldLabel': 'Tri (MP:ascending or descending) - exemple: lastmodifiedtime:ascending,author:descending',
        'DebugFieldLabel': 'Afficher la sortie de débogage ?',
        'DebugFieldLabelOn': 'Oui',
        'DebugFieldLabelOff': 'Non',
        'ExternalFieldLabel': 'Indiquez l\'URL du template externe',
        'ScriptloadingFieldLabel': 'Activer le chargement des script à partir du template ?',
        'ScriptloadingFieldLabelOn': 'Mode danger',
        'ScriptloadingFieldLabelOff': 'Mode sécurisé',
        'DuplicatesFieldLabel': 'Couper (trim) les résultats en double?',
        'DuplicatesFieldLabelOn': 'Oui',
        'DuplicatesFieldLabelOff': 'Non',
        'PrivateGroupsFieldLabel': 'Rechercher dans le contenu des groupes privés ?',
        'PrivateGroupsFieldLabelOn': 'Oui',
        'PrivateGroupsFieldLabelOff': 'Non, seulement les groupes publics',
        'AudienceColumnMappingLabel': 'Propriété gérée par l\'audience au mappage de propriété de profil utilisateur',
        'AudienceColumnMappingDescription': 'Sur chaque ligne, associez chaque propriété gérée par l\'audience à la propriété de profil utilisateur correspondante.Exemple: {"ManagedPropertyAlias":"UserProfileProperty"}',
        'AudienceAllValueLabel': 'Valeur de la colonne Site public pour indiquer le contenu destiné à tous',
        'AudienceAllValueDescription': 'Entrez la propriété gérée et sa valeur qui indiquera quel contenu est ciblé pour tout le monde. Exemple: {"ManagedPropertyAlias":"All"}',
        'AudienceBooleanOperatorLabel': 'Sélectionnez l\'opérateur booléen pour les mappages ci- dessus',

        'QuertValidationEmpty': 'Veuillez spécifier une requête de recherche',
        'TemplateValidationEmpty': 'Veuillez spécifier l\URL de votre template',
        'TemplateValidationHTML': 'Veuillez utiliser un fichier HTML pour le template',

        'ScriptsDialogHeader': 'Tags de script trouvés dans votre template',
        'ScriptsDialogSubText': 'Si vous voulez exécuter les scripts à partir de votre template, vous devez activer l\'option de chargement des script.'
    }
});

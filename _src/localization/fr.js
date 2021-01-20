export const FRENCH_TRANSLATIONS = {

    sidebar: {
        buttons: {
            petition: 'Signez la pétition',
            representatives: 'Contactez vos représentants',
            social: 'Impliquez les autres',
            donation: 'Faites un don',
        }
    },
    petition: {
        modalHeader: 'Signez la pétition',
        url: 'https://www.petitionenligne.net/emb/303450'
    },
    reps: {
        modalHeader: 'Contactez vos représentants',
        form: {
            inputInstructions: 'Entrez votre code postal pour trouver les coordonnées de vos représentants fédéraux et provinciaux.' +
                '<br><br>Un modèle de courriel sera créé avec l’information que vous ' +
                'fournirez. Veuillez réviser et personnaliser le courriel; ' +
                'surtout l’objet du message. Malgré que les modèles de ' +
                'courriel soient utiles, le fait de personnaliser votre message ' +
                'démontrera que vous êtes dévoués et préoccupés.',
            foundRepsInstructions: 'Nous avons trouvé le représentant suivant pour le code postal <var>{postal}</var>.',
            emailInstructions: 'Nous n\'avons pas pu ouvrir automatiquement votre client de ' +
                'messagerie. Pour rédiger manuellement le courriel:' +
                '<ol><li>Ouvrez votre client de messagerie et commencez à rédiger un nouvel courriel</li>' +
                '<li>Copiez l\'adresse «À», l\'adresse «BCC», le titre et le message ci-dessous dans les champs respectifs de le courriel.</li>' +
                '<li>Veuillez revoir et personnaliser votre courriel, en particulier la ligne d\'objet. Bien que les modèles de courrier électronique soient précieux, la personnalisation de votre courrier électronique démontrera votre engagement et votre préoccupation.</li>' +
                '<li>Appuyez sur "Envoyer" pour envoyer le courriel à votre représentant</li></ol>',
            submitterPostal: 'Code postal',
            submitterName: 'Votre nom complet',
            submit: 'Soumettre',
            searchAgain: 'Chercher à nouveau',
            sendEmail: 'Envoyez un courriel',
            repEmail: 'l\'adresse «À»',
            bccAddress: 'l\'adresse «BCC»',
            bccExplanation: 'Envoyez-nous une copie de votre message à votre représentant pour nous permettre de faire un suivi avec lui.',
            emailTitle: 'le titre',
            emailBody: 'le message',
            backToReps: 'Back',
            copy: 'Copier dans le presse-papier',
            error: {
                nameRequired: 'S\'il vous plait entrez votre nom entier. Ces informations ne sont pas enregistrées. Il est uniquement utilisé pour générer un modèle de courrier électronique.',
                invalidPostal: 'Code postal invalide.',
                notFound: 'Aucun représentant trouvé pour le code postal <var>{postal}</var>. Souhaitez-vous plutôt contacter directement le premier ministre?'
            }
        },
        bccAddress: 'IncreaseTheGrants@gmail.com',
        emailTemplates: [
            {
                title: 'S’il-vous-plaît, assurez-vous que les fondations fassent leur part!',
                body: 'Cher {ministerName}\n\n' +
                    'En tant qu’électeur, je vous demande de régler un problème qui affecte les organismes de bienfaisance dans notre circonscription.\n\n' +
                    'Jusqu’à tout récemment, je ne savais pas que les fondations caritatives au Canada avaient subtilement ' +
                    'amassé une importante richesse (maintenant de plus de $80 milliards en actifs) tout en réduisant leur ' +
                    'ratio de dons en provenance de leurs actifs (de 10% il y a dix ans à moins de 8% aujourd’hui). Pendant ce ' +
                    'temps, les organismes de bienfaisance peinent à satisfaire aux demandes croissantes des Canadiens ' +
                    'dans le besoin. Je suis troublé par ces nouvelles : cette situation est inacceptable et ne reflète pas le rôle ' +
                    'espéré des fondations. Je veux ce qu’il y a de mieux pour les organismes de bienfaisance dans notre ' +
                    'circonscription et j’espère que vous appuierez un changement positif à ce sujet lors du prochain budget.\n\n' +
                    'Puisque nos taxes sont utilisées pour les crédits d’impôt pour dons de bienfaisance remis aux gens ' +
                    'fortunés qui donnent aux fondations, j’ai l’impression que nous pouvons exiger mieux. Je trouve ' +
                    'inacceptable et injuste que les fondations amassent continuellement de l’argent dans leurs coffres et ' +
                    'qu’ils retiennent cet argent pour les générations futures en laissant la souffrance des gens s’aggraver. ' +
                    'On devrait exiger des fondations de donner plus puisqu’elles ne le font pas de façon volontaire. Nous ' +
                    'devons travailler plus et plus fort afin d’adresser les enjeux sociaux plus rapidement.\n\n' +
                    'Je vous prie, en tant que représentant élu, de discuter de cette situation avec votre caucus, le premier ' +
                    'ministre, le ministre des Finances et les députés. Je voudrais que les fondations soient exigées de ' +
                    'donner 10% de leurs actifs par année et de cesser l’accumulation continuelle de richesses. Cette ' +
                    'exigence aiderait les organismes de bienfaisance dans notre communauté ainsi que plusieurs électeurs ' +
                    'dans notre circonscription. Pour en apprendre plus sur cet enjeu, visitez le ' +
                    'www.increasethegrants.ca/fr/\n\n' +
                    'Je vous remercie de votre temps et de votre service envers la communauté. En espérant recevoir de vos\n' +
                    'nouvelles bientôt.\n\n' +
                    'Merci beaucoup,\n\n' +
                    '{submitterName}\n{submitterPostal}'
            }
        ]
    },
    social: {
        modalHeader: 'Impliquez les autres',
        subtitle: 'Aidez à sensibiliser plus de gens à cette initiative rationnelle en la partageant avec vos contacts sur les réseaux sociaux.',
        shareUrl: 'https://increasethegrants.ca/fr',
        twitter: {
            text: 'Nous devons attendre plus des fondations!',
            hashtag: 'donnerplus'
        }
    },
    donation: {
        modalHeader: 'Faites un don',
        content: 'Aidez nous à répandre l’information en faisant un don. ' +
            '100% des dons iront vers la promotion de cette initiative. ' +
            'Les dons sont récoltés par GIV3 par l’entremise de CanaDon.org.',
        instructions: [
            'Cliquez sur le lien ci-dessous pour continuer sur CanaDon.org.',
            'Entrez le montant que vous voulez donner maintenant ou en paiement récurrent.',
            'Sélectionnez l’option « Donner Plus » du menu déroulant.',
            'Cliquez sur « Continuer avec mon don » pour choisir un mode de paiement.',
        ],
        buttonText: 'Continuer sur CanaDon.org',
        buttonUrl: 'https://www.canadahelps.org/fr/organismesdebienfaisance/giv3/'
    },
    toc: {
        modalHeader: 'Table des matières'
    },
    chart: {
        axis: {
            assets: 'Valeur des actifs dans les fondations (en milliards de dollars)',
            grantingPct: 'Subventions en % des actifs'
        }
    }
}
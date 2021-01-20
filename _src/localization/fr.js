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
            foundRepsInstructions: 'We found the following representative(s) for the postal code <var>{postal}</var>.',
            emailInstructions: 'We were unable to open your email client automatically. To draft the email manually:' +
                '<ol><li>Open your email client and begin drafting a new email</li>' +
                '<li>Copy the "To" address, "BCC" address, title and message below into respective fields of the email.</li>' +
                '<li>Please review and personalize your email – especially the subject line. While template emails are valuable, personalizing your email will demonstrate your commitment and concern.</li>' +
                '<li>Press "Send" to submit the email to your representative</li></ol>',
            submitterPostal: 'Code postal',
            submitterName: 'Votre nom complet',
            submit: 'Soumettre',
            searchAgain: 'Search Again',
            sendEmail: 'Send Email',
            repEmail: 'To Address',
            bccAddress: 'BCC Address',
            bccExplanation: 'Send us a copy of your message to your representative to allow us follow up with them.',
            emailTitle: 'Title',
            emailBody: 'Message',
            backToReps: 'Back',
            copy: 'Copy to clipboard',
            error: {
                nameRequired: 'Please enter your full name. This information is not recorded. It is only used for generating an email template.',
                invalidPostal: 'Invalid postal code.',
                notFound: 'No representatives found for the postal code <var>{postal}</var>. Would you like to reach out to the Prime Minister directly instead?'
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
            text: 'We need to expect more from charitable foundations!',
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
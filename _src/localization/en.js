export const ENGLISH_TRANSLATIONS = {
    sidebar: {
        buttons: {
            petition: 'Sign the Petition',
            representatives: 'Contact Your Representatives',
            social: 'Engage Others',
            donation: 'Make a Donation',
        }
    },
    petition: {
        modalHeader: 'Sign the Petition'
    },
    reps: {
        modalHeader: 'Contact Your Representatives',
        form: {
            instructions: 'Enter your postal code to look up the contact information of your federal and provincial government Representatives. An email template will be generated with the information that you provide.',
            submitterPostal: 'Postal Code',
            submitterName: 'Your Full Name',
            submit: 'Submit',
            searchAgain: 'Search Again',
            error: {
                nameRequired: 'Please enter your full name. This information is not recorded. It is only used for generating an email template.',
                invalidPostal: 'Invalid postal code.',
                notFound: 'No representatives found for the provided postal code.'
            }
        },
        emailTitle: 'Increase the Grants',
        emailBody: 'Dear {ministerName} \n\n' +
            ' I am a taxpayer and a constituent in your riding, and I am asking you to support an initiative that is very important to me.\n\n' +
            'Perhaps you have heard of the initiative to require charitable foundations to grant 10% of their assets each year to better support our charities and those in need in our communities?   I would like to add my name and support to this initiative. And I am asking you to use your connections and voice to support this. \n\n' +
            'Since there are taxpayer dollars represented in these foundations by way of charity tax credits given to the foundation donors, I feel I have a right to say how I wish my taxes to be used. \n\n' +
            'Foundation have accumulated over $80 Billion in their endowments, while charities struggle to help Canadians in need.  We need more foundation wealth granted each year to help , especially in these challenging times.   I am sure we both know many struggling charities in our riding.  It is time to make a meaningful gesture to help them. \n\n' +
            'Foundation behaviour over the past ten years shows that they have not voluntarily stepped up so we need a policy requiring it.  We need you, as an elected official to make this happen.  I ask you to discuss this issue with your party leadership (and the Prime Minister) to support a motion to set the required annual Distribution Quota  of foundations to 10%. -  At minimum, we need a five-year pilot test due to the current and residual impact of COVID-19. \n\n' +
            'You can learn more at https://increasethegrants.ca\n' +
            'I look forward to seeing this initiative succeed. I am counting on you!\n' +
            'Thank you for your attention and support.\n\n' +
            'Sincerely, with thanks,\n\n' +
            '{submitterName}\n{submitterPostal}'

    },
    social: {
        modalHeader: 'Engage Others',
        subtitle: 'Help increase awareness of this common-sense initiative by sharing it with your contacts on social media.',
        shareUrl: 'https://increasethegrants.ca',
        twitter: {
            text: 'We need to expect more from charitable foundations!',
            hashtag: 'increasethegrants'
        }
    },
    donation: {
        modalHeader: 'Make a Donation',
        content: 'Help us spread the word with a donation. 100% of donation proceeds will go towards marketing this initiative. Donations are collected by GIV3 through CanadaHelps.org.',
        instructions: [
            'Click the link below to continue to CanadaHelps.org.',
            'Enter an amount that you wish to donate now or as a recurring payment',
            'Select the <strong>"IncreaseTheGrants"</strong> fund from the dropdown.',
            'Click "continue with donation to proceed to payment options',
        ],
        buttonText: 'Proceed to CanadaHelps.org',
        buttonUrl: 'https://www.canadahelps.org/en/charities/giv3/'
    }
}
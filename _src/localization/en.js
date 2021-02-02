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
        modalHeader: 'Sign the Petition',
        url: 'https://www.petitions.net/emb/303450'
    },
    reps: {
        modalHeader: 'Contact Your Representatives',
        form: {
            inputInstructions: 'Enter your postal code to look up the contact information of your federal and provincial government Representatives.<br><br>An email template will be generated with the information that you provide. Please review and personalize your email – especially the subject line. While template emails are valuable, personalizing your email will demonstrate your commitment and concern.',
            foundRepsInstructions: 'We found the following representative(s) for the postal code <var>{postal}</var>.',
            emailInstructions: 'We were unable to open your email client automatically. To draft the email manually:' +
                '<ol><li>Open your email client and begin drafting a new email</li>' +
                '<li>Copy the "To" address, "BCC" address, title and message below into respective fields of the email.</li>' +
                '<li>Please review and personalize your email – especially the subject line. While template emails are valuable, personalizing your email will demonstrate your commitment and concern.</li>' +
                '<li>Press "Send" to submit the email to your representative</li></ol>',
            submitterPostal: 'Postal Code',
            submitterName: 'Your Full Name',
            submit: 'Submit',
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
                title: 'Please make sure that Foundations are doing their fair share!',
                body: 'Dear {ministerName},\n\n' +
                    'I am a constituent in your riding, and I am asking you to help lend your voice in support of the charities in our riding and across Canada.\n\n' +
                    'Perhaps you have heard of the initiative to require charitable foundations to grant 10% of their assets ' +
                    'each year to better support our charities and those in need in our communities? I would like to add my ' +
                    'name and support to this initiative, and as my representative, I am asking you to reach out to Finance ' +
                    'Canada, the PMO and your colleagues to support this change in the next budget.\n\n' +
                    'Foundations have accumulated over $80 Billion in their endowments, while charities struggle. We ' +
                    'need to require foundations to increase their granting each year to help those in need.\n\n' +
                    'Over the past ten years, Canadian foundations have more than doubled their assets, but their ' +
                    'disbursements have not kept pace! Canada used to require foundations to disburse a much higher ' +
                    'amount to charities every year, ensuring that tax-deductible donations actually reached those who need ' +
                    'it most. However, changes to allow less charitable contributions from foundations have allowed ' +
                    'foundations to accumulate wealth, locked up in their investment accounts instead of helping our ' +
                    'community charities.\n\n' +
                    'I am asking you to raise this issue with your Party leadership, the Prime Minister, the Minister of ' +
                    'Finance, and your colleagues in parliament. At minimum, we need a five-year trial period to increase the ' +
                    'annual distribution quota given the current and residual impact of COVID-19, after which the program can be reviewed.\n\n' +
                    'Since there are taxpayer dollars represented in these foundations, by way of charity tax credits, I am ' +
                    'counting on you to ensure these dollars are being used fairly.\n\n' +
                    'For more information about the issue visit https://IncreaseTheGrants.ca\n\n' +
                    'Thank you for your time. I look forward to hearing back from you soon.\n\n' +
                    'Sincerely,\n{submitterName}\n{submitterPostal}'
            },
            {
                title: 'Let’s get billions of dollars to struggling charities – all without increasing government spending',
                body: 'Dear {ministerName},\n\n' +
                    'As your constituent, I am asking you to help solve a problem affecting struggling charities in our riding.\n\n' +
                    'Until recently, I was not aware that charitable foundations in Canada have been quietly accumulating ' +
                    'significant wealth (now over $80 Billion in assets), while also reducing their granting as a ratio of their ' +
                    'assets (from 10% ten years ago, down to less than 8%). Meanwhile, charities are struggling to meet the ' +
                    'increasing demands of Canadians in need. This is not right and does not reflect the intended role of ' +
                    'foundations. This is quite upsetting now that I have learned of it. I want to do the best for the charities ' +
                    'in our riding and hope you will support a change to this issue in the next budget.\n\n' +
                    'Since my tax dollars are being used to give charity tax credits to wealthy people donating money to these ' +
                    'foundations, I feel we have a right to demand better. I find it unacceptable to have money hoarded in ' +
                    'perpetuity in foundation accounts. Foundations should be required to increase their granting since they ' +
                    'are not doing it voluntarily. Holding back money to help future generations is unfair to current taxpayers ' +
                    'and allows all of the suffering to compound. We need to work better to address social problems sooner.\n\n' +
                    'Will you please, as my elected official, discuss this issue with your caucus, the Prime Minister, the ' +
                    'Minister of Finance, and fellow MPs? I would like to see foundations being required to grant 10% of ' +
                    'their assets per year and to stop accumulating greater wealth in perpetuity. This would help the ' +
                    'charities in our community, and many constituents in our riding. To learn more about this issue visit ' +
                    'https://IncreaseTheGrants.ca\n\n' +
                    'Thank you for your time and service to our community. I look forward to hearing back soon.\n\n' +
                    'With thanks,\n{submitterName}\n{submitterPostal}'
            },
            {
                title: 'An Easy Win for You with Voters',
                body: 'Dear {ministerName},\n\n' +
                    'I am a constituent in your riding, and I am asking you to support a policy change in the next budget to ' +
                    'help struggling charities. It is a solution which will trigger billions of dollars with no cost to the Canadian ' +
                    'Revenue Agency. It is an easy win for the Party and for all Canadians.\n\n' +
                    'You may already know that charitable foundations in Canada have been quietly accumulating significant ' +
                    'wealth (now over $80 Billion in assets). This has doubled in the past 6 years, while at the same time, ' +
                    'these foundations have been reducing their granting to charities as a ratio of their assets (from 10% ten ' +
                    'years ago, down to less than 8% in the most recent reported period). Meanwhile, charities are struggling ' +
                    'to meet the increasing demands of Canadians in need. This is not right, does not reflect the intended role ' +
                    'of foundations, and is not how taxpayers want their taxes used. If foundations were required to return ' +
                    'to granting 10% of their assets as done not so long ago (2011 and 2008), it would trigger billions of ' +
                    'additional dollars to support charities.\n\n' +
                    'I am writing to ask you to please discuss this issue with your party leadership. This is an easy win for ' +
                    'the Party. You see,\n\n' +
                    '• There would be no cost to Revenue Canada since the money is already just sitting in foundation ' +
                    'investment accounts.\n' +
                    '• The majority of Canadians support the idea of increasing the require distribution to 10% (based ' +
                    'on Ipsos research: https://sector3insights.com/products/canadians-understanding-and-opinions-of-charitable-foundations/).\n' +
                    '• Your party can be seen as supporting the two million Canadian voters working in the Non-Profit ' +
                    'Sector, and the millions more who volunteer.\n' +
                    '• The billions of dollars sitting in bank accounts will have a significant economic multiplier when ' +
                    'the money is spent by charities, and the money ripples through the economy.\n' +
                    '• And you will be the heroes working to help the millions of Canadians in need, to help our ' +
                    'deteriorating environment, to support new medial research, by enhancing educational ' +
                    'institutions, and so much more.\n\n' +
                    'Will you please, as my elected official, discuss this opportunity with your party leadership and the ' +
                    'Minister of Finance? Please require foundations to significantly increase their granting and to stop ' +
                    'accumulating greater wealth in perpetuity. It is a win-win-win for you, your Party and all Canadians.\n\n' +
                    'You can learn more at https://IncreaseTheGrants.ca\n\n' +
                    'Please let me know where you stand and what actions you will take.\n\n' +
                    'Sincerely,\n{submitterName}\n{submitterPostal}'
            }
        ],
        primeMinisterEmail: {
            title: 'Please make sure that Foundations are doing their fair share!',
            body: 'Dear Prime Minister Trudeau,\n\n' +
                'As a Canadian and a taxpayer, I am asking you and your government to ' +
                'help Canadian charities during this difficult time.\n\n' +
                'Perhaps you have heard of the initiative to require charitable foundations to grant 10% of their assets ' +
                'each year to better support our charities and those in need in our communities? I would like to add my ' +
                'name and support to this initiative, and I am asking you and your government to make this change as a ' +
                'part of the next budget.\n\n' +
                'Foundations have accumulated over $80 Billion in their endowments, while charities struggle. We need to ' +
                'require foundations to increase their granting each year to help those in need.\n\n' +
                'Over the past ten years, Canadian foundations have more than doubled their assets, but their disbursements' +
                ' have not kept pace! Canada used to require foundations to disburse a much higher amount to charities every ' +
                'year, ensuring that tax-deductible donations actually reached those who need it most. However, changes to ' +
                'allow less charitable contributions from foundations have allowed foundations to accumulate wealth, locked ' +
                'up in their investment accounts instead of helping our community charities.\n\n' +
                'At minimum, we need a five-year trial period to increase the annual distribution quota given the current ' +
                'and residual impact of COVID-19, after which the program can be reviewed.\n\n' +
                'Since there are taxpayer dollars represented in these foundations, by way of charity tax credits, I am ' +
                'counting on you to ensure these dollars are being used fairly.\n\n' +
                'For more information about the issue visit https://IncreaseTheGrants.ca\n\n' +
                'Thank you for your time. I look forward to hearing back from you soon.\n\n' +
                'Sincerely,\n{submitterName}\n{submitterPostal}',
        },
    },
    social: {
        modalHeader: 'Engage Others',
        subtitle: 'Help increase awareness of this common-sense initiative by sharing it with your contacts on social media.',
        shareUrl: 'https://www.increasethegrants.ca',
        facebook: {
            share: 'Share'
        },
        twitter: {
            share: 'Tweet',
            text: 'We need to expect more from charitable foundations!',
            hashtag: 'IncreaseTheGrants'
        },
        linkedin: {
            share: 'Share'
        }
    },
    donation: {
        modalHeader: 'Make a Donation',
        content: 'Help us spread the word with a donation. 100% of donation proceeds will go towards marketing this initiative. Donations are collected by GIV3 through CanadaHelps.org.',
        instructions: [
            'Click the link below to continue to CanadaHelps.org.',
            'Enter an amount that you wish to donate now or as a recurring payment',
            'Select the <strong>"Increase The Grants"</strong> option from the fund dropdown.',
            'Click "continue with donation" to proceed to payment options',
        ],
        buttonText: 'Proceed to CanadaHelps.org',
        buttonUrl: 'https://www.canadahelps.org/en/charities/giv3/'
    },
    toc: {
        modalHeader: 'Table of Contents'
    },
    chart: {
        axis: {
            assets: 'Value of Assets in foundations ($ billions)',
            grantingPct: 'Granting as % of Assets'
        }
    }
}
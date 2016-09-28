var data = {
  prefixes: {
    crazy: "Donald Trump believes",
    fascist: "Donald Trump is a fascist",
    sexist: "Donald Trump is a sexist"
  },
  liar: [
    {
      title: "lied 87 times in a week's worth ofpublic apperances. once every three miutes",
      urls: ["http://www.politico.com/magazine/story/2016/09/2016-donald-trump-fact-check-week-214287?utm_source=huffingtonpost.com&utm_medium=referral&utm_campaign=pubexchange"]
    },
    {
      title: "lies about self funding his campaign",
      urls: ["http://www.theatlantic.com/politics/archive/2016/05/trumps-self-funding-lie/482691/", "http://www.ijreview.com/2015/11/469588-donald-trump-keeps-saying-his-campaign-is-self-funded-but-that-is-just-not-true/", "http://www.politico.com/story/2015/10/donald-trump-fec-fundraising-214838", "http://www.politicususa.com/2016/05/15/myth-donald-trumps-self-funded-campaign-officially-dead.html", "http://therightscoop.com/cnn-exposes-trump-lie-that-hes-self-funding-his-campaign/"]
    },
    {
      title: "lies about campaign spending",
      urls: ["https://www.opensecrets.org/pres16/candidate.php?id=N00023864", "http://www.nytimes.com/politics/first-draft/2016/01/04/donald-trump-finally-takes-out-his-checkbook-for-tv-ad-buys/", "http://realtime.influenceexplorer.com/race/president/"]
    },
    {
      title: "lies about polls",
      urls: ["http://www.dailywire.com/news/4373/trump-keeps-saying-polls-show-him-beating-hillary-aaron-bandler#modal"]
    },
    {
      title: "lied 71 times in an hour speech",
      urls: ["http://new.www.huffingtonpost.com/entry/donald-trump-fact-check_us_56fc375fe4b0daf53aee9175"]
    },
    {
      title: "claims The Art of the Deal is the best selling business book of all time.",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2015/jul/06/donald-trump/donald-trumps-art-deal-best-selling-business-book-/"]
    },
    {
      title: "lied about his campaign manager assaulting a female reporter until tape of it was released",
      urls: ["http://www.theatlantic.com/politics/archive/2016/03/trump-breitbart/473262/", "https://www.jupiter.fl.us/ArchiveCenter/ViewFile/Item/448", "http://injo.com/2016/03/558061-breitbart-news-reporter-files-criminal-charges-against-trump-campaign-manager-corey-lewandowski/", "http://www.theatlantic.com/politics/archive/2016/03/michelle-fields-charges-corey-lewandowski-trump/473388/", "http://www.theatlantic.com/politics/archive/2016/03/corey-lewandowski-arrested/475827/"]
    },
    {
      title: "falsely claims Hillary wants to release violent criminals from jail",
      leaning: 1,
      urls: ["http://www.nytimes.com/2016/05/21/us/politics/nra-guns-donald-trump-hillary-clinton.html"]
    },
    {
      title: "claims the U.S is “losing jobs like never before.” a few days after acknowledging job numbers showing the creation of 271,000 jobs in a month",
      urls: ["http://blogs.wsj.com/briefly/2015/11/06/october-jobs-report-the-numbers-2/", "http://benevabusinessconsultants.com/blog/2016/05/06/fact-checking-tuesdays-gop-presidential-debate/"]
    },
    {
      title: "claims Obama is going to import a quarter of a million refugees. (the real number is 25 times lower.)",
      urls: ["https://www.washingtonpost.com/news/fact-checker/wp/2015/12/14/the-biggest-pinocchios-of-2015/"]
    },
    {
      title: "claims the U.S has no process for vetting refugees",
      urls: ["http://www.alan.com/2016/06/14/trump-falsely-claims-no-system-for-vetting-refugees/"]
    },
    {
      title: "claims the U.S only allows Muslim refugees and refuses to let Christians in.",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2015/jul/20/donald-trump/donald-trump-says-if-youre-syria-and-christianyou-/"]
    },
    {
      title: "claims “scores” of U.S migrants have been charged with terrorism. (the actual number is 0)",
      urls: ["https://www.washingtonpost.com/news/fact-checker/wp/2016/05/02/donald-trumps-false-claim-that-scores-of-recent-migrants-in-the-u-s-are-charged-with-terrorism/"]
    },
    {
      title: "lies about French Gun Laws after Paris Attack.",
      urls: ["http://www.washingtonpost.com/wp-srv/special/nation/gun-homicides-ownership/table/", "http://www.mediaite.com/online/that-donald-trump-paris-gun-control-tweet-was-from-back-in-january/"]
    },
    {
      title: "claims he lost hundreds of friends on 9/11 yet can’t give a single name.",
      urls: ["http://www.thedailybeast.com/articles/2016/02/17/donald-trump-s-hundreds-of-9-11-lies.html", "http://www.redstate.com/streiff/2016/02/17/donald-trump-lies-knowing-911-victims-just-everything-else/", "http://www.independent.co.uk/news/world/americas/trump-won-t-name-any-of-the-hundreds-of-friends-he-says-he-lost-in-911-attacks-a6879651.html", "http://therightscoop.com/ted-cruz-talks-about-his-friend-who-died-in-911-trump-cant-name-one-of-hundreds-of-his-who-did/", "http://www.businessinsider.com/ap-trumps-911-narrative-memory-and-hyperbole-15-years-later-2016-4"]
    },
    {
      title: "claims 9/11 hijackers' wives were informed and sent home before the attack. (none of the 9/11 hijackers were even married.)",
      urls: ["https://www.washingtonpost.com/news/fact-checker/wp/2015/12/06/trumps-dubious-claim-that-the-911-hijackers-wives-knew-exactly-what-was-going-to-happen/"]
    },
    {
      title: "claims he saw thousands of Muslims celebrating on 9/11 even after the claim is debunked",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2015/nov/22/donald-trump/fact-checking-trumps-claim-thousands-new-jersey-ch/", "https://www.washingtonpost.com/news/fact-checker/wp/2015/11/22/donald-trumps-outrageous-claim-that-thousands-of-new-jersey-muslims-celebrated-the-911-attacks/", "http://time.com/4131439/donald-trump-muslims-9-11-video/"]
    },
    {
      title: "claims Orlando shooter was a foreign born immigrant despite being born in the same city as Trump.",
      urls: ["http://thinkprogress.org/politics/2016/06/13/3787964/trump-afghan-orlando-shooting/"]
    },
    {
      title: "claims four out of five white victims of homicide were murdered by blacks after retweeting statistics made up by neo-nazis.",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2015/nov/23/donald-trump/trump-tweet-blacks-white-homicide-victims/", "http://www.factcheck.org/2015/11/trump-retweets-bogus-crime-graphic/"]
    },
    {
      title: "claims Oakland and Ferguson are among the most dangerous cities in the world. (they aren’t even among the most dangerous in their states)",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2016/may/25/donald-trump/donald-trumps-false-claim-oakland-ferguson-are-amo/", "https://www.washingtonpost.com/news/the-fix/wp/2016/05/18/donald-trump-somehow-thinks-ferguson-and-oakland-are-dangerous-like-iraq/"]
    },
    {
      title: "lies about his winery being the largest on the east coast.",
      urls: ["http://spectator.org/65730_no-donald-trump-does-not-have-largest-winery-east-coast/", "http://www.thedailybeast.com/articles/2016/03/10/trump-wine-is-built-on-acres-of-lies.html"]
    },
    {
      title: "claims June has “no jobs to be had” despite 5.4 million job openings in the U.S. that month. (A 15-year high.)",
      urls: ["http://money.cnn.com/2015/06/09/news/economy/us-job-opening-highest-in-15-years/"]
    },
    {
      title: "claims the United States is the ‘most highly taxed nation in the world.’",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2015/aug/28/donald-trump/donald-trump-says-us-most-highly-taxed-nation-worl/", "https://stats.oecd.org/Index.aspx?DataSetCode=REV"]
    },
    {
      title: "claims the U.S. GDP is below 0",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2015/jun/16/donald-trump/donald-trump-says-us-gdp-never-negative-ter/"]
    },
    {
      title: "tells New York Times he wants to impose unprecedented 45% tariff on Chinese goods. At debates he accused New York Times of misquoting him, admitting how 'crazy' it would be and how he would never want it. Then he goes on to argue for the 45% tariff two minutes later.",
      urls: ["http://www.nytimes.com/politics/first-draft/2016/01/07/donald-trump-says-he-favors-big-tariffs-on-chinese-exports/", "https://www.washingtonpost.com/news/the-fix/wp/2016/01/14/6th-republican-debate-transcript-annotated-who-said-what-and-what-it-meant/"]
    },
    {
      title: "claims Obama spent 4 million dollars to conceal school and passport records.",
      urls: ["http://www.washingtonpost.com/blogs/fact-checker/wp/2015/08/19/trumps-zombie-claim-that-obama-spent-4-million-to-conceal-school-and-passport-records/"]
    },
    {
      title: "claims the U.S Border wall would only cost 8 billion dollars.",
      urls: ["https://www.washingtonpost.com/news/fact-checker/wp/2016/02/11/trumps-dubious-claim-that-his-border-wall-would-cost-8-billion/"]
    },
    {
      title: "claims John Kasich 'helped' Lehman Brothers ‘destroy the world economy’",
      urls: ["https://www.washingtonpost.com/news/fact-checker/wp/2016/03/15/donald-trumps-false-claim-that-john-kasich-helped-lehman-brothers-destroy-the-world-economy/"]
    },
    {
      title: "claims Putin called him a genius.",
      urls: ["https://www.washingtonpost.com/news/fact-checker/wp/2016/05/03/no-putin-did-not-call-donald-trump-a-genius/"]
    }, 
    {
      title: "lies 21 times in a speech",
      urls: ["http://www.politicususa.com/2016/07/21/donald-told-21-fact-checked-proven-lies-acceptance-speech.html"]
    },
    {
      title: "claims to not know of David Duke despite mentioning him for 15 years",
      full_title: "claims to not know of David Duke despite mentioning him for 15 years",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2016/mar/02/donald-trump/trumps-absurd-claim-he-knows-nothing-about-former-/", "http://www.theblaze.com/stories/2016/02/28/donald-trump-just-said-i-dont-know-anything-about-david-duke-but-he-says-something-else-in-interview-from-2000/", "http://www.cnn.com/TRANSCRIPTS/1602/28/sotu.01.html"]
    },
    {
      title: "claims the Mexican government is deporting criminals into the U.S.",
      full_title: "claims the Mexican government is forcibly deporting convicted criminals into the United States.",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2015/aug/06/donald-trump/trump-mexican-government-they-send-bad-ones-over/"]
    },
    {
      title: "connects crime rates to immigration (immigrants are less likely than native born Americans to commit crime.)",
      full_title: "lies about immigrants and ignores that immigrants are less likely than native born Americans to commit violent crimes or be incarcerated.",
      urls: ["http://www.wsj.com/articles/the-mythical-connection-between-immigrants-and-crime-1436916798"]
    },
    {
      title: "claims he drew 15,000 at a rally. Real number is proven to be 4,000.",
      full_title: "claims he pulled in 15,000 people at a rally. Real number is proven to be 4,000.",
      urls: ["http://www.politifact.com/punditfact/statements/2015/jul/15/rachel-maddow/rachel-maddow-says-donald-trump-exaggerated-his-cr/"]
    },
    {
      title: "lied about raising money for veterans",
      urls: ["http://news.groopspeak.com/breaking-trump-lied-about-funds-raised-for-veterans-breaks-down-after-questioning/"]
    },
    {
      title: "claims Mexicans are 'pouring into the U.S' (statistics show more Mexicans leave the U.S than come in every year)",
      urls: ["http://www.pewhispanic.org/2015/11/19/more-mexicans-leaving-than-coming-to-the-u-s/"]
    },
    {
      title: "Trump lies about raising money for Veterans.",
      full_title: "Trump lies about raising money for Veterans.",
      urls: ["http://news.groopspeak.com/breaking-trump-lied-about-funds-raised-for-veterans-breaks-down-after-questioning/"]
    },
    {
      title: "claims 300,000 veterans died waiting for medical care with no evidence",
      full_title: "Trump claims 300,000 veterans died waiting for medical care with no evidence",
      urls: ["https://www.washingtonpost.com/news/fact-checker/wp/2015/11/17/donald-trump-repeats-inaccurate-figure-that-over-300000-veterans-died-waiting-for-care/"]
    },
    {
      title: "dodged the draft because of his 'bone spurs' (is now in 'perfect' health)",
      full_title: "Trump dodged the draft because of 'bone spurs' but is now in 'perfect' health",
      urls: ["http://www.thesmokinggun.com/file/trump-draft-deferment", "http://reverbpress.com/politics/time-hypocrite-slimebag-donald-trump-lied-dodging-vietnam-draft-video/"]
    },
    {
      title: "lies about donating to charity.",
      urls: ["http://new.www.huffingtonpost.com/entry/trump-charity-lies_us_575b4094e4b00f97fba86ae1"]
    },
    {
      title: "claimes he donated $100 million dollars. won't provide records and extensive research ",
      full_title: "Claimes he donated $100 million dollars without providing any records or evidence or naming who he donated too.",
      urls: ["http://www.inquisitr.com/2303241/donald-trump-boasts-102-million-in-charity-giving-but-wheres-the-proof/"]
    },
    {
      title: "ranked least charitable billionaire",
      urls: ["http://www.thesmokinggun.com/documents/celebrity/trump-least-charitable-billionaire-109247"]
    },
    {
      title: "lies about losing lawsuits.",
      urls: ["https://www.washingtonpost.com/news/fact-checker/wp/2016/02/27/donald-trumps-misleading-claim-that-hes-won-most-of-lawsuits-over-trump-university/"]
    },
    {
      title: "cheats at golf",
      urls: ["https://www.washingtonpost.com/lifestyle/style/does-donald-trump-cheat-at-golf-a-washington-post-investigation/2015/09/02/f8a940b2-50c4-11e5-9812-92d5948a40f8_story.html"]
    },
    {
      title: "fabricates fake Civil War battle to make his golf club seem important, questions historians who call him out, makes up fictitious historians who said he was right",
      full_title: "fabricates fake Civil War battle to make his golf club seem more important, questions historians who tell him he’s wrong, makes up fictitious anonymous historians who said he was right, backpedals even further by saying the made-up historians didn’t talk to him but his people when he is asked their names.",
      urls: ["http://www.nytimes.com/2015/11/25/us/politics/in-renovation-of-golf-club-donald-trump-also-dressed-up-history.html?_r=0"]
    }
  ],
  fascist: [
    {
      title: "openly calls for targeting innocent women and children for murder (a war crime)",
      urls: [
        "http://thinkprogress.org/politics/2015/12/15/3732671/trump-isis-kill-family-members/",
        "http://www.independent.co.uk/news/world/americas/donald-trump-reiterates-desire-to-murder-terrorists-families-a6912496.html",
        "http://www.cnn.com/2015/12/02/politics/donald-trump-terrorists-families/",
        "http://www.washingtontimes.com/news/2016/mar/3/donald-trump-says-hed-force-us-military-commit-war/"
      ]
    },
    {
      title: "promised to force the military to commit war crimes after they balked",
      urls: [
        "http://www.washingtontimes.com/news/2016/mar/3/donald-trump-says-hed-force-us-military-commit-war/",
        "http://www.politifact.com/truth-o-meter/statements/2015/dec/17/rand-paul/rand-pauls-right-geneva-conventions-bar-donald-tru/",
        "http://theweek.com/speedreads/610361/donald-trump-doubles-down-torture-war-crimes",
        "http://www.telesurtv.net/english/opinion/The-US-Military-Will-Commit-Donald-Trumps-War-Crimes-20160307-0011.html",
        "http://reason.com/blog/2016/03/03/donald-trump-says-military-wont-refuse-h",
        "http://www.rawstory.com/2016/03/a-retired-major-general-sets-trump-straight-after-he-advocates-war-crimes/",
        "http://www.democracynow.org/2016/3/1/donald_trump_wants_to_commit_war"
      ]
    },
    {
      title: "about torture thinks \"Even if it doesn't work they probably deserved it anyway\"",
      urls: ["http://www.cnn.com/2016/03/11/opinions/trump-wrong-on-american-torture/", "http://www.cnsnews.com/news/article/patrick-goodenough/trump-waterboarding-it-works-if-it-doesnt-work-they-deserve-it", "https://www.theguardian.com/us-news/2015/nov/24/donald-trump-on-waterboarding-even-if-it-doesnt-work-they-deserve-it"]
    },
    {
      title: "points to ISIS to justify torture saying we should be \"fighting fire with fire\"",
      urls: ["http://talkingpointsmemo.com/livewire/trump-responds-istanbul-waterboarding-torture"]
    },
    {
      title: "said “The problem is we have the Geneva Conventions, all sorts of rules and regulations, so the soldiers are afraid to fight”",
      urls: ["http://www.politico.com/blogs/2016-gop-primary-live-updates-and-results/2016/03/donald-trump-geneva-conventions-221394#ixzz4LJ1DEgmt"]
    },
    {
      title: "won't rule out using nuclear weapons in Europe, since it's 'a big place'",
      urls: ["http://www.independent.co.uk/news/world/americas/us-elections/donald-trump-refuses-to-rule-out-using-nuclear-weapons-in-attack-on-europe-a6961101.html"]
    },
    {
      title: "said lethal injection is “too comfortable”",
      full_title: "said lethal injection is “too comfortable” a form of capital punishment",
      urls: ["http://thinkprogress.org/justice/2016/03/02/3755065/trump-criminal-justice/"]
    },
    {
      title: "wants to lower gas prices by invading countries and stealing their oil",
      full_title: "Trump's solution for high gas prices is to violate The Geneva Convention by invading several of America's allies in the Middle East and Africa unprovoked to forcibly seize the oil fields for himself.",
      urls: ["http://blogs.abcnews.com/george/2011/04/donald-trumps-solution-on-gas-prices-get-tough-with-saudi-arabia-seize-oil-fields-in-libya-and-iraq.html", "http://www.forbes.com/sites/williampentland/2011/04/23/dumbest-guy-in-the-room-donald-trumps-energy-policy/#700458db29b9"]
    },
    {
      title: "when asked about that plan, clarrified that “We’re not stealing anything. We’re taking.“",
      full_title: "When asked for clarification about the above mentioned plan to steal land from multiple nations on two different continents Trump responded with, “We’re not stealing anything. We’re taking.“",
      urls: ["http://content.time.com/time/specials/packages/article/0,28804,2068227_2068229_2068345,00.html"]
    },
    {
      title: "proposed mandatory death penalty for killing a police officer",
      urls: ["http://www.cnn.com/2015/12/10/politics/donald-trump-police-officers-death-penalty/"]
    },
    {
      title: "pledges to open up libel laws on newspapers to stifle freedom of speech",
      urls: ["https://www.washingtonpost.com/news/the-fix/wp/2016/02/26/donald-trump-vows-to-open-up-libel-laws-to-make-suing-the-media-easier-heres-how-he-could-do-it/", "http://www.npr.org/2016/03/26/471846238/trumps-promise-to-open-up-libel-laws-unlikely-to-be-kept", "http://money.cnn.com/2016/02/26/media/donald-trump-libel-laws/", "http://www.pbs.org/newshour/rundown/trump-threatens-to-weaken-first-amendment-protections-for-reporters/","http://www.cnsnews.com/news/article/susan-jones/trump-would-absolutelyopen-libel-laws-so-person-mecan-bring-lawsuits", "http://www.theguardian.com/us-news/2016/feb/26/trump-pledges-curb-press-freedom-libel-laws-first-amendment", "http://thefederalist.com/2016/03/22/donald-trump-doesnt-understand-libel-laws/", "http://www.sfchronicle.com/opinion/diaz/article/Trump-takes-on-First-Amendment-6871309.php"]
    },
    {
      title: "incites violence by his supporters",
      urls: ["http://www.reuters.com/article/us-usa-election-idUSKCN0WM0RJ", "http://english.alarabiya.net/en/News/world/2016/03/21/Trump-refuses-to-condemn-violence-at-his-U-S-presidential-rallies-.html", "http://www.japantoday.com/category/world/view/trump-refuses-to-condemn-violence-at-his-rallies", "http://www.nationalmemo.com/trump-refuses-to-condemn-violence-at-his-u-s-presidential-rallies/", "http://www.vox.com/2016/3/14/11219256/trump-violent"]
    }, 
    {
      title: "defended 'passionate' supporters who brutally beat and urinated on a homeless man",
      urls: ["https://www.washingtonpost.com/news/morning-mix/wp/2015/08/21/trump-says-fans-are-very-passionate-after-hearing-one-of-them-allegedly-assaulted-hispanic-man/", "http://www.ibtimes.co.uk/donald-trump-calls-boston-brothers-who-beat-homeless-hispanic-man-his-name-passionate-1516392", "https://www.bostonglobe.com/metro/2015/08/20/after-two-brothers-allegedly-beat-homeless-man-one-them-admiringly-quote-donald-trump-deporting-illegals/I4NXR3Dr7litLi2NB4f9TN/story.html", "http://gothamist.com/2015/08/20/trump_ugh_enough.php", "http://national.suntimes.com/national-world-news/7/72/1680630/trump-boston-hate-crime/", "http://www.dailymail.co.uk/news/article-3204702/Boston-brothers-viciously-attack-urinate-homeless-Hispanic-man-inspired-Donald-Trump-responds-saying-passionate-supporters.html"]
    }, 
    {
      title: "said he would love to punch protesters",
      urls: ["https://www.washingtonpost.com/news/morning-mix/wp/2016/02/23/donald-trump-on-protester-id-like-to-punch-him-in-the-face/", "http://www.independent.co.uk/news/people/donald-trump-tells-vrowd-he-wants-to-punch-protester-in-the-face-at-nevada-rally-a6890981.html", "http://www.nytimes.com/politics/first-draft/2016/02/23/donald-trump-on-protester-id-like-to-punch-him-in-the-face/", "http://www.cnn.com/2016/02/23/politics/donald-trump-nevada-rally-punch/"]
    },
    {
      title: "jokes about murdering reporters",
      full_title: "jokes about murdering reporters",
      urls: ["http://www.cnn.com/2015/12/21/politics/trump-putin-killing-reporters/"]
    },
    {
      title: "joked about the death of Hillary Clinton. twice.",
      urls: ["https://www.theguardian.com/us-news/2016/aug/09/trump-gun-owners-clinton-judges-second-amendment", "http://www.cnn.com/2016/09/16/politics/donald-trump-hillary-clinton-guns-secret-service/index.html"]
    },
    {
      title: "called for the execution of minority children known as 'The Central Park Five' (turns out, DNA evidence found they were innocent)",
      urls: ["http://www.theguardian.com/us-news/2016/feb/17/central-park-five-donald-trump-jogger-rape-case-new-york", "http://www.newyorker.com/news/amy-davidson/donald-trump-and-the-central-park-five", "https://twitter.com/realDonaldTrump/status/325982969040879620?ref_src=twsrc%5Etfw"]
    },
    {
      title: "but still implies they were guilty after they were exonerated",
      full_title: "but he still implies they were guilty after they were exonerated",
      urls: ["https://twitter.com/realDonaldTrump/status/325982969040879620?ref_src=twsrc%5Etfw"]
    },
    {
      title: "says he might have insituted internment camps in WWII",
      full_title: "says he might have insituted internment camps in WWII",
      urls: ["http://time.com/4140050/donald-trump-muslims-japanese-internment/"]
    },
    {
      title: "wants to remove Muslim TSA agents",
      full_title: "wants to remove Muslim TSA agents",
      urls: ["http://www.nydailynews.com/news/politics/donald-trump-considers-supporter-plan-fire-muslim-tsa-agents-article-1.2695675", "http://abcnews.go.com/Politics/donald-trump-request-rally-goer-replace-hijab-wearing/story?id=40269164"]
    }, 
    {
      title: "said the Chinese government 'showed strength' in response to the Tienanmen Square protests",
      full_title: "said the Chinese government 'showed strength' in response to the Tienanmen Square protests",
      urls: ["https://www.theguardian.com/us-news/2016/mar/11/donald-trump-tiananmen-square-china-playboy-interview"]
    },
    {
      title: "calls for Snowden to be executed saying 'kill the traitor'",
      full_title: "calls for Snowden to be executed saying 'kill the traitor'",
      urls: ["http://www.washingtontimes.com/news/2013/jul/2/donald-trump-edward-snowden-kill-traitor/"]
    }
  ],
  crazy: [
    {
      title: "global warming is a hoax pepetrated by the Chinese",
      urls: [
        "https://twitter.com/realDonaldTrump/status/265895292191248385?ref_src=twsrc%5Etfw"
      ],
      debunk: {
        title: "This fact can be complete debunked by a single google search",
        urls: [
          "http://www.lenntech.com/greenhouse-effect/global-warming-history.htm",
          "https://en.wikipedia.org/wiki/History_of_climate_change_science#Scientists_increasingly_predict_warming.2C_1970s"
        ]
      }
    },
    {
      title: "temperatures are at record lows",

      full_title: "Global Warming is \"bullshit\" and temperatures are at record lows",
      urls: [
        "https://twitter.com/realDonaldTrump/status/418542137899491328?ref_src=twsrc%5Etfw"
      ]
    },
    {
      title: "environmentally friendly light bulbs cause cancer",
      urls: [ "https://twitter.com/realDonaldTrump/status/258593090107998208?ref_src=twsrc%5Etfw" ],
      debunk: {
        title: "They don't",
        urls: [ "http://www.ledlights.org/FAQ/Do-LED-Lights-Cause-Cancer.html", "http://energyblog.nationalgeographic.com/2014/01/08/separating-myth-from-fact-on-cfls-and-leds-five-concerns-addressed/comment-page-1/"]
      }
    },
    {
      title: "wind power kills \"all the birds\"",
      urls: ["https://www.youtube.com/watch?v=2rSTwnKxjbY"]
    },
    {
      title: "asbestos is safe",
      urls: [
        "http://www.motherjones.com/politics/2016/05/the-trump-files-asbestos-mob-conspiracy",
        "https://twitter.com/realdonaldtrump/status/258655569458651136"
      ]
    },
    {
      title: "asbestos would have prevented the World Trade Center from collapsing",
      urls: ["https://www.youtube.com/watch?v=sk3JUpDf5dk"]
    },
    {
      title: "vaccines cause Autism",
      urls: ["https://twitter.com/realDonaldTrump/status/449525268529815552?ref_src=twsrc%5Etfw"]
    },
    {
      title: "and doctors are lying about vaccines not causing autism",
      full_title: "doctors are lying about vaccines not causing autism",
      urls: ["https://twitter.com/realDonaldTrump/status/507158574670573568?ref_src=twsrc%5Etfw"]
    },
    {
      title: "Ted Cruz’s dad was involved in JFK's assasination",
      urls: [
        "http://www.politico.com/blogs/2016-gop-primary-live-updates-and-results/2016/05/trump-ted-cruz-father-222730"
      ]
    },
    {
      title: "the unemployment rate might be 42%",
      urls: ["http://www.politifact.com/truth-o-meter/statements/2015/sep/30/donald-trump/donald-trump-says-unemployment-rate-may-be-42-perc/"]
    },
    {
      title: "Obama forged his birth certificate",
      urls: [
        "https://twitter.com/realdonaldtrump/status/232572505238433794",
        "http://abcnews.go.com/Politics/donald-trumps-history-raising-birther-questions-president-obama/story?id=33861832",
        "http://mediamatters.org/blog/2015/06/16/the-worst-of-donald-trumps-media-commentary/204012",
      ]
    },
    {
      title: "Obama is a Secret Muslim",
      urls: ["http://mediamatters.org/research/2015/09/18/from-fox-to-the-campaign-trail-trump-previously/205642"]
    },
    {
      title: "Obama didn't write his book",
      urls: ["http://mediamatters.org/blog/2015/06/16/the-worst-of-donald-trumps-media-commentary/204012"]
    },
    {
      title: "Obama was born ‘Barry Soetoro’",
      full_title: "Obama's birth name is ‘Barry Soetoro’",
      urls: ["https://twitter.com/realDonaldTrump/status/525492766366007296", "http://www.foxnews.com/transcript/2011/04/15/exclusive-donald-trump-rips-into-president-obama-past/"]
    },
    {
      title: "Obama murdered the Hawaiian State Health Director and staged his death as a plane crash",
      urls:["https://twitter.com/realDonaldTrump/status/411247268763676673?ref_src=twsrc%5Etfw"]
    },
    {
      title: "Scalia was murdered",
      full_title: "79 year old Scalia was murdered",
      urls: ["http://www.rightwingwatch.org/content/donald-trump-raises-suspicions-about-justice-scalias-death"]
    },
  ],
  sexist: [
    {
      title: "claims all women are bimbos and gold diggers.",
      full_title: "claims all women are bimbos and gold diggers.",
      urls: [
        "http://new.www.huffingtonpost.com/entry/18-real-things-donald-trump-has-said-about-women_us_55d356a8e4b07addcb442023",
        "http://www.dailymail.co.uk/news/article-3546047/Beauty-pageant-organizer-accused-Trump-unwanted-fondling-contestant-claimed-said-women-bimbos.html",
        "http://www.friynds.com/m/news/view/-n-Donald-Trump-claimed-to-have-said-039-all-women-are-bimbos-039-at-beauty-pageant-n"]
    },
    {
      title: "claims women who breastfeed are disgusting.",
      full_title: "claims women who breastfeed are disgusting.",
      urls: ["http://www.dailymail.co.uk/news/article-3178232/Trump-called-lawyer-disgusting-asked-court-break-pump-breast-milk.html"]
    },
    {
      title: "employee describes Trump committing workplace sexual misconduct.",
      full_title: "employee describes Trump committing workplace sexual misconduct.",
      urls: ["http://www.nydailynews.com/opinion/barbara-res-donald-trump-boss-article-1.2525669"]
    },
    {
      title: "employee frequently mentioned in speeches by Trump as proof of him not being a sexist blasts Trump as being a sexist.",
      full_title: "employee frequently mentioned in speeches by Trump as proof of him not being a sexist blasts Trump as being a sexist.",
      urls: ["http://www.theguardian.com/commentisfree/2016/apr/27/donald-trump-barbara-res-woman-card", "http://www.thedailybeast.com/articles/2016/02/25/donald-trump-s-tower-boss.html","http://www.dailymail.co.uk/news/article-3492514/Female-former-Trump-tower-chief-hailed-example-supporting-women-says-billionaire-not-want-president.html", "http://www.slate.com/articles/news_and_politics/politics/2016/03/donald_trump_has_one_core_philosophy_misogyny.html", "https://www.washingtonpost.com/politics/donald-trump-a-champion-of-women-his-female-employees-think-so/2015/11/23/7eafac80-88da-11e5-9a07-453018f9a0ec_story.html"]
    },
    {
      title: "refuses to hire mothers because, “She’s not giving me 100%. She’s giving me 84% and 16% is going towards taking care of children.”",
      full_title: "refuses to hire mothers because, “She’s not giving me 100%. She’s giving me 84% and 16% is going towards taking care of children.”",
      urls: ["http://thisguycantbepresident.com/mothers-dont-deserve-jobs/"]
    },
    {
      title: "thinks the Disney movie Mulan was liberal propaganda created to convince women to join the military instead of staying home where they belong in order to weaken the military.",
      full_title: "thinks the Disney movie Mulan was liberal propaganda created to convince women to join the military instead of staying home where they belong in order to weaken the military.",
      urls: ["https://www.buzzfeed.com/andrewkaczynski/mister-ill-make-a-man-out-of-you?utm_term=.miJgBapyx#.dvZEldG9v"]
    },
    {
      title: "said '[women] you have to treat 'em like shit' before pouring wine down the back of a female journalist and bragging about it",
      full_title: "said '[women] you have to treat 'em like shit' before pouring wine down the back of a female journalist and bragging about it",
      urls: ["http://www.thedailybeast.com/articles/2015/08/08/you-have-to-treat-em-like-shit-before-megyn-kelly-trump-dumped-wine-on-a-female-reporter.html", "http://www.ibtimes.com/42-horrible-things-donald-trump-has-said-about-women-next-republican-presidential-2345140"]
    },
    {
      title: "defends Roger Ailes as 'a Very Good Person'",
      full_title: "defends CEO of Fox News after being forced to resign due to multiple accusations of sexual harassment. 'He's a Very Good Person'",
      urls: ["http://www.hollywoodreporter.com/news/donald-trump-defends-roger-ailes-913993"]
    },
    {
      title: "forces models to do humiliating tasks to 'Weed out the ugly ones'",
      urls: ["http://www.newser.com/story/73902/trump-weeds-out-ugly-girls.html",
      "http://www.washingtonpost.com/lifestyle/style/column-anna-holmes-on-donald-trumps-sexism/2011/04/21/AFmSfEHF_story.html"]
  },
    {
      title: "argues prosecutor should allow rapist to pay victim compensation instead of face jail time.",
      full_title: "argues prosecutor should allow rapist to pay victim compensation instead of face jail time.",
      urls: ["https://news.google.com/newspapers?nid=1314&dat=19920214&id=BV1WAAAAIBAJ&sjid=QPADAAAAIBAJ&pg=2003,1825091&hl=en"]
    },
    {
      title: "defends military personnel accused of sexual assault and rape by putting the blame on the fact women are allowed to serve along men in the military.",
      full_title: "defends military personnel accused of sexual assault and rape by putting the blame on the fact women are allowed to serve along men in the military.",
      urls: [
        "http://www.inquisitr.com/2733754/yes-donald-trumps-sexual-assault-in-the-military-tweet-is-real/",
        "http://new.www.huffingtonpost.com/2013/05/08/donald-trump-tweet-sexual-assault-military_n_3239781.html"]
    },
    {
      title: "stalked Princess Diana and later bragged, “ I Could Have Nailed her”",
      full_title: "stalked Princess Diana and later bragged, “ I Could Have Nailed her”",
      urls: ["http://www.starpulse.com/creepy-donald-trump-reportedly-stalked-princess-diana-who-he-considere-1848499616.html", "http://www.thedailybeast.com/articles/2016/02/26/trump-i-could-have-nailed-princess-diana.html"]
    },
    {
      title: "Multiple women working on Trump campaign file complaints with Civil Rights Commission against Trump for sexual harassment or sexual discrimination.",
      full_title: "Multiple women working on Trump campaign file complaints with Civil Rights Commission against Trump for sexual harassment or sexual discrimination.",
      urls: ["https://www.washingtonpost.com/news/post-politics/wp/2016/01/31/donald-trump-denies-allegations-of-gender-based-discrimination-from-former-employee/"]
    },
    {
      title: "woman claims Trump tried to rape her her and told her he wanted to, “Make her his sex slave.” Afterwards Trump ruins her and her husband financially.",
      urls: ["http://www.nydailynews.com/archives/gossip/harassment-suit-trumped-article-1.764918",
       "http://bipartisanreport.com/2016/03/07/donald-trump-has-a-125-million-sexual-assault-lawsuit-that-he-didnt-want-you-to-know-about/"]
    },
    {
      title: "pageant contestants claims Trump sexually assaulted her.",
      urls: ["http://www.newser.com/story/225129/donald-trump-kissed-pageant-contestants-on-the-mouth.html"]
    },
    {
      title: "is accused of rape by his ex-wife.",
      full_title: "is accused of rape by his ex-wife.",
      urls: ["http://www.express.co.uk/news/world/638063/Donald-Trump-rape-ex-wife-Ivana-plastic-surgery-operation-documentary", "http://www.independent.co.uk/news/people/donald-trump-ex-wife-claim-he-raped-her-resurfaces-in-new-documentary-a6836151.html", "http://gawker.com/the-time-donald-trumps-ex-wife-accused-him-of-brutally-1721129617", "https://broadly.vice.com/en_us/article/he-raped-me-when-donald-trump-was-accused-of-sexual-assault?utm_source=vnfbus"]
    },
    {
      title: "accused of rape or sexual assault by numerous women over several decades",
      urls: ["http://www.dailymail.co.uk/news/article-3578088/Dark-tales-molesting-beauty-queens-raping-ex-wife-Claims-racism-cosying-mafia-gets-closer-White-House-TRUMP-stripped-bare.html", "http://www.dailyrecord.co.uk/news/uk-world-news/donald-trump-accused-rape-woman-7858242#rJUj9YEHx7x9Hf8m.97", "http://www.mirror.co.uk/news/world-news/donald-trump-denies-rape-teenage-7857357", "https://www.mrconservative.com/2016/04/72311-breaking-trump-accused-of-raping-13-year-old-girl/", "http://www.inquisitr.com/3044556/donald-trump-rape-lawsuit-claims-trump-forced-12-and-13-year-old-girls-to-peform-oral-sex-on-him/", "http://www.redstate.com/sweetie15/2016/04/29/donald-trump-named-lawsuit-alleging-rape-teen-girl/", "http://www.dailymail.co.uk/news/article-3546047/Beauty-pageant-organizer-accused-Trump-unwanted-fondling-contestant-claimed-said-women-bimbos.html", "http://www.nydailynews.com/archives/gossip/harassment-suit-trumped-article-1.764918b", "http://www.independent.co.uk/news/world/americas/donald-trump-unsettling-behaviour-dozens-women-a7030506.html", "http://therealdeal.com/2016/06/20/jane-doe-files-civil-rape-complaint-against-donald-trump-in-ny-court/", "http://www.deathandtaxesmag.com/294361/donald-trump-jeffrey-epstein-teen-girl-rape/"]
    }, 
    {
      title: "Over 50 former Trump models describe Trumps distrust of women, his numerous affairs and his habit of forcing himself onto women half his age while making unwanted sexual advances.",
      urls: ["http://www.nytimes.com/2016/05/15/us/politics/donald-trump-women.html"]
    },
    {
      title: "Journalist claims Trump sexually harassed her after interview.",
      urls: ["http://www.newsflow24.com/donald-trump-sexually-harassed-a-washington-post-editor-after-their-foreign-policy-interview%E2%80%93get-the-deets-rzl9"]
    }
  ],
}

module.exports = data;

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "BBC.com",
            "title": "General election live 2024: Labour manifesto to prioritise wealth creation, Starmer says - BBC.com",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiMmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9saXZlL3VrLXBvbGl0aWNzLTY5MTExMzYy0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-06-13T08:15:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Faiz Siddiqui, Trisha Thadani",
            "title": "Tesla shareholders re-approve Elon Musk's 2018 pay package, Musk says - The Washington Post",
            "description": "Investors and Musk’s supporters, including X CEO Linda Yaccarino, applauded the results. The tally will be finalized at a shareholder meeting later Thursday.",
            "url": "https://www.washingtonpost.com/technology/2024/06/13/tesla-shareholders-approve-musk-pay/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4YMYGEX4LZ454Z6YPFIQ7H7ZH4_size-normalized.jpg&w=1440",
            "publishedAt": "2024-06-13T07:00:00Z",
            "content": "SAN FRANCISCO Tesla shareholders re-approved Elon Musks controversial 2018 pay package by a wide margin, Musk posted on X Wednesday night, appearing to resolve an uncertainty that has loomed over his… [+3193 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jake Fischer",
            "title": "2024 NBA Finals: The elephant in the room — Luka Dončić's defense isn't good enough for the Mavs to win a title - Yahoo Sports",
            "description": "The Mavs superstar was hunted on defense, was ineffective on switches and fouled out with more than four minutes to play. That's no championship formula as...",
            "url": "https://sports.yahoo.com/2024-nba-finals-the-elephant-in-the-room--luka-doncics-defense-isnt-good-enough-for-the-mavs-to-win-a-title-062002014.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/R3FD0MypsfzePIPs0gAhqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/4b6a8f30-294d-11ef-86de-15b1950a95b3",
            "publishedAt": "2024-06-13T06:20:00Z",
            "content": "DALLAS For such a copycat league, NBA teams use different terminologies for the same concepts. When a player is traded, understanding a new playbook is more like learning a new language, another dial… [+7244 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "NICOLE WINFIELD",
            "title": "G7 summit opens with deal to use Russian assets for Ukraine as EU's traditional powers recalibrate - The Associated Press",
            "description": "A Group of Seven summit is opening in Italy with agreement on a U.S. proposal to back a $50 billion loan to Ukraine using frozen Russian assets as collateral. Diplomatic sources confirmed an agreement had been reached on the deal before the leaders even lande…",
            "url": "https://apnews.com/article/italy-g7-summit-ukraine-biden-pope-a7771f3f8932653b44e21217a121854b",
            "urlToImage": "https://dims.apnews.com/dims4/default/0df8093/2147483647/strip/true/crop/6018x3385+0+313/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F14%2F77%2F359931a71fc0c3e26bac43d48d0b%2Fb7ca36bb169347f49ae156a50aa31e6b",
            "publishedAt": "2024-06-13T04:05:00Z",
            "content": "BARI, Italy (AP) A Group of Seven summit is opening Thursday with agreement on a U.S. proposal to back a $50 billion loan to Ukraine using frozen Russian assets as collateral, giving Kyiv a strong sh… [+6556 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Matt Schooley",
            "title": "How to watch Tom Brady's Patriots Hall of Fame ceremony and what to know if you're going to Gillette Stadium - CBS Boston",
            "description": "If you are headed to Gillette Stadium for Tom Brady's Patriots Hall of Fame induction, here is what to know.",
            "url": "https://www.cbsnews.com/boston/news/tom-brady-patriots-hall-of-fame-ceremony-details/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/09/10/907ff156-c877-4ee7-a371-b7631b6d1822/thumbnail/1200x630g2/5768b4437358dd1337c83e9fcfb77714/tom-brady.jpg?v=b30c30e5b3a8744d4d8858062a9c4fa7",
            "publishedAt": "2024-06-13T03:44:49Z",
            "content": "FOXBORO – On Wednesday, Tom Brady will be inducted into the Patriots Hall of Fame during a sold-out ceremony inside Gillette Stadium.\r\nThis will mark the first time a player has been honored with a c… [+4047 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Lizzy Becherano",
            "title": "USA gets Copa America momentum back with Brazil draw - ESPN",
            "description": "United States coach Gregg Berhalter called his team's 1-1 draw with star-studded Brazil on Wednesday night a \"little step\" on the road to success ahead of Copa America. He also said \"we're ready.\"",
            "url": "https://www.espn.com/soccer/story/_/id/40338472/usa-copa-america-momentum-brazil-draw",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0613%2Fr1345130_1296x729_16%2D9.jpg",
            "publishedAt": "2024-06-13T03:34:00Z",
            "content": "Jun 12, 2024, 11:34 PM ET\r\nUnited States coach Gregg Berhalter called his team's 1-1 draw with star-studded Brazil on Wednesday night a \"little step\" on the road to success ahead of Copa America. He … [+2990 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sheila Chiang",
            "title": "Chinese EV stocks surge after EU slaps up to 38% additional import tariffs - CNBC",
            "description": "Citi analysts said the EU's additional tariffs were \"generally benign,\" and a Morningstar analyst said they were \"modest\" in comparison to U.S. hikes last month",
            "url": "https://www.cnbc.com/2024/06/13/chinese-ev-stocks-surge-after-eu-slaps-up-to-38percent-additional-import-tariffs.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107428385-1718243367676-gettyimages-2150869552-cfoto-2024beij240504_np0vd.jpeg?v=1718243464&w=1920&h=1080",
            "publishedAt": "2024-06-13T03:16:00Z",
            "content": "Visitors are looking at a BYD DM-i electric car at the 2024 Beijing International Automotive Exhibition in Beijing, China, on May 3, 2024. (Photo by Costfoto/NurPhoto via Getty Images)\r\nShares of Chi… [+4816 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Axios",
            "title": "House votes to hold AG Merrick Garland in contempt of Congress - Axios",
            "description": null,
            "url": "https://www.axios.com/2024/06/12/house-votes-merrick-garland-contempt-of-congress",
            "urlToImage": null,
            "publishedAt": "2024-06-13T03:01:36Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Patrick Reilly",
            "title": "'Once-in-a-lifetime' nova explosion will appear to add new star to night sky in dazzling spectacle: NASA - New York Post ",
            "description": "“It’ll fuel the next generation of scientists,” said Dr. Rebekah Hounsell, an assistant research scientist.",
            "url": "https://nypost.com/2024/06/12/us-news/once-in-a-lifetime-nova-explosion-will-appear-to-add-new-star-to-night-sky-in-dazzling-spectacle-nasa/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/06/www-nasa-gov-centers-and-83706752.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-06-13T02:59:00Z",
            "content": "Scientists around the world are anxiously waiting for a cosmic nova event that will appear to add a new star to the night sky sometime between now and September, according to NASA.\r\nThe spectacle wil… [+2609 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Riley Hoffman, Brittany Shepherd, Tommy Barone, Jacob Steinberg",
            "title": "8 climate protesters arrested during Congressional Baseball Game: Police - ABC News",
            "description": "The annual baseball game was met with pro-Palestinian and climate protesters.",
            "url": "https://abcnews.go.com/Politics/8-climate-protestors-arrested-congressional-baseball-game-police/story?id=111077381",
            "urlToImage": "https://i.abcnewsfe.com/a/68b27ddb-0c2e-44c2-82b7-9c22e5f36669/congressional-baseball-demonstration-abc-jt-240612_1718240165973_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-06-13T01:48:44Z",
            "content": "Eight climate protesters were arrested on Wednesday after being tackled on the field during the Congressional Baseball Game, U.S. Capitol Police said in a statement.\r\nThe self-described \"youth-led gr… [+2232 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "POLITICO",
            "title": "Argentine riot police unleash water cannons and tear gas to disperse protesters - POLITICO",
            "description": null,
            "url": "https://www.politico.com/news/2024/06/12/argentine-riot-police-water-cannons-tear-gas-protesters-00163104",
            "urlToImage": null,
            "publishedAt": "2024-06-13T01:47:52Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Oklahoma court dismisses bid for Tulsa Race Massacre reparations - BBC.com",
            "description": "Some 300 black people were killed in the 1921 massacre - but nobody has been held responsible.",
            "url": "https://www.bbc.com/news/articles/cjmm8dnxz00o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/76c0/live/c63651a0-28f2-11ef-baa7-25d483663b8e.jpg",
            "publishedAt": "2024-06-13T01:37:58Z",
            "content": "By Sam Cabral, BBC News, Washington\r\nOnly two known survivors of the Tulsa Race Massacre remain - Lessie Benningfield Randle, 109 (left) and Viola Fletcher, 110 (centre); a third, Hughes Van Ellis (r… [+2504 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Melissa Rudy",
            "title": "Tiger mosquitoes blamed for spread of dengue fever: ‘Most invasive species’ - Fox News",
            "description": "As dengue fever continues to spread throughout Europe, experts are blaming an invasive mosquito species as the culprit. Infectious disease experts share words of caution.",
            "url": "https://www.foxnews.com/health/tiger-mosquitoes-blamed-spread-dengue-fever-invasive-species",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/tiger-mosquito.jpg",
            "publishedAt": "2024-06-13T00:59:00Z",
            "content": "As dengue fever continues to spread throughout Europe, experts are blaming an invasive mosquito species as the culprit.\r\nKnown as \"tiger mosquitoes\r\n,\" the insects of the species name Aedes albopictu… [+7984 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Meredith Deliso, Melissa Griffin",
            "title": "Gov. DeSantis declares state of emergency in parts of Florida as heavy rain leads to 'major flooding' - ABC News",
            "description": "Gov. Ron DeSantis declared a state of emergency in several counties.",
            "url": "https://abcnews.go.com/US/southern-florida-flooding-rain/story?id=111074789",
            "urlToImage": "https://i.abcnewsfe.com/a/06322ac8-5034-4045-a909-b734c3171080/Florida-rain-1-gty-jm-240612_1718232277846_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-06-13T00:16:41Z",
            "content": "Parts of southern Florida continued to get inundated with heavy rainfall Wednesday, with Gov. Ron DeSantis declaring a state of emergency tonight for several counties, including Broward, Collier, Lee… [+2136 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Entertainment Tonight"
            },
            "author": "Zach Seemayer",
            "title": "Marc Anthony and Wife Nadia Ferreira Reveal Son's Name on His 1st Birthday - Entertainment Tonight",
            "description": "Marc Anthony and Nadia Ferreira are commemorating their son's special day.",
            "url": "https://www.etonline.com/marc-anthony-and-wife-nadia-ferreira-reveal-sons-name-on-his-1st-birthday-227280",
            "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2024-06/Marc_Anthony_GettyImages-2150213127_1280.jpg?h=44b879e5",
            "publishedAt": "2024-06-13T00:03:00Z",
            "content": "Marc Anthony and his wife, Nadia Ferreira, are commemorating a very exciting milestone in their young son's life!\r\nThe proud parents took to Instagram on Wednesday to celebrate their baby boy's first… [+2660 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AZCentral"
            },
            "author": "The Arizona Republic",
            "title": "What time does 'Bridgerton' Season 3 Part 2 come out? How to watch the show tonight - The Arizona Republic",
            "description": null,
            "url": "https://www.azcentral.com/story/entertainment/television/2024/06/12/bridgerton-season-3-part-2-release-time/74077900007/",
            "urlToImage": null,
            "publishedAt": "2024-06-12T23:29:29Z",
            "content": null
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6e7784122d934af4b3822a9cff67ac82";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsApp - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element, index) => {
                        return <div className='col md-3' key={element.url + index}>
                            <NewsItem title={element.title?element.title: ""} description={element.description?element.description: ""}
                            imageUrl={element.urlToImage} url = {element.url}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
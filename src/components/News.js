/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: null, name: "Eonline.com" },
      author: "Corinne Heller",
      title:
        "Priyanka Chopra and Nick Jonas Celebrate Their First Holi Since Welcoming Baby - E! NEWS",
      description:
        "Two months after welcoming their first child, Priyanka Chopra and Nick Jonas celebrated the Hindu festival of Holi at a private home in Los Angeles.",
      url: "https://www.eonline.com/news/1323809/priyanka-chopra-and-nick-jonas-celebrate-their-first-holi-since-welcoming-baby",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2022219/rs_1200x1200-220319093348-1200-nick-jonas-priyanka-chopra-instagram-holi-031822.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2022-03-19T20:41:21Z",
      content:
        'Priyanka Chopra and Nick Jonas had an extra "lit" Holi celebration this year.\r\nThe married couple celebrated the Hindu holiday at a private home in Los Angeles this week. This is their first time mar… [+886 chars]',
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "2022 NFL Mock Draft: Packers replace Davante Adams with pick used in trade, Seahawks take a top-10 QB - CBS Sports",
      description: "The NFL carousel continues to go round and round",
      url: "https://www.cbssports.com/nfl/draft/news/2022-nfl-mock-draft-packers-replace-davante-adams-with-pick-used-in-trade-seahawks-take-a-top-10-qb/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2021/10/07/aae005cb-aea7-40c9-b831-96cc540045cb/thumbnail/1200x675/cdebe68aa73a85031d3a89c61cbed73e/gettyimages-1344846682-1.jpg",
      publishedAt: "2022-03-19T20:34:00Z",
      content:
        "March Madness has long been reserved for buzzer beaters, upsets and Cinderellas in the NCAA Tournament. But after what's transpired over the past few weeks, the NFL more than deserves inclusion when … [+840 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Giulia Heyward",
      title:
        "Fatal Texas Wildfire Forces Evacuations and Destroys 50 Homes - The New York Times",
      description:
        "The Eastland Complex fire has killed one person and burned more than 45,000 acres in the central part of the state, officials said.",
      url: "https://www.nytimes.com/2022/03/18/us/texas-wildfires.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/18/us/00texas-wildfire-1/merlin_204075885_1c02de7a-a877-4df4-9e47-c8deaf5c3cdc-facebookJumbo.jpg",
      publishedAt: "2022-03-19T20:27:39Z",
      content:
        "Mr. Abbott said the fire remained dangerous because of ever-shifting winds and dry ground.\r\nPart of what were fighting is the fire, he said. Part of what were fighting is the weather and the winds.\r\n… [+784 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Ramishah Maruf, CNN",
      title: "Credit reporting agencies will wipe out most medical debt - CNN",
      description:
        "Three of the country's largest credit reporting agencies are removing nearly 70% of medical debt from consumer credit reports, the companies announced in a joint statement Friday.",
      url: "https://www.cnn.com/2022/03/19/business/credit-reporting-agencies-medical-debt/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220319143012-hospital-california-0311-super-tease.jpg",
      publishedAt: "2022-03-19T19:53:00Z",
      content:
        "(CNN)Three of the country's largest credit reporting agencies are removing nearly 70% of medical debt from consumer credit reports, the companies announced in a joint statement Friday. \r\nEquifax(EFX)… [+2134 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Alanis Thames",
      title:
        "N.C.A.A. Women’s Tournament: UConn Handles Mercer - The New York Times",
      description:
        "The second-seeded Huskies got a balanced effort and 12 points in 25 minutes from the star guard Paige Bueckers.",
      url: "https://www.nytimes.com/2022/03/19/sports/ncaabasketball/ncaa-tournament-womens-scores.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/19/multimedia/19wcbb-tournament001/19wcbb-tournament001-facebookJumbo.jpg",
      publishedAt: "2022-03-19T19:48:13Z",
      content:
        "After Arizona handed Connecticut a humbling loss in last seasons Final Four, Geno Auriemma, the Huskies head coach, was blunt about his teams level of maturity.\r\nWhen were high and when were on top o… [+759 chars]",
    },
    {
      source: { id: null, name: "TMZ" },
      author: "TMZ Staff",
      title:
        "Bill Murray Catching Heat for Pandemic Comments in New Interview - TMZ",
      description:
        "Bill Murray is receiving backlash for his latest remarks about the pandemic and how it's affected people.",
      url: "https://www.tmz.com/2022/03/19/bill-murray-catching-heat-pandemic-comments-new-interview/",
      urlToImage:
        "https://imagez.tmz.com/image/64/16by9/2022/03/19/64aa07cc8a204e8b85b141b61ef9f400_xl.jpg",
      publishedAt: "2022-03-19T19:42:00Z",
      content:
        "Bill Murray is being labeled as an old and out-of-touch guy after seemingly lamenting the fact we've had to wear masks during this pandemic ... likening it to a fear of death. \r\nThe actor recently di… [+2454 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Associated Press",
      title:
        "Baker Hughes joins oil rivals in pausing Russian operations - Fox Business",
      description:
        "U.S. oil field services company Baker Hughes said Saturday that it was suspending new investments for its Russia operations.",
      url: "https://www.foxbusiness.com/markets/baker-hughes-joins-oil-rivals-pausing-russian-operations",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/03/0/0/AP22078560809164.jpg?ve=1&tl=1",
      publishedAt: "2022-03-19T19:33:06Z",
      content:
        "U.S. oil field services company Baker Hughes said Saturday that it was suspending new investments for its Russia operations, a day after similar moves were announced by rivals Halliburton Co. and Sch… [+2781 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Alan Blinder",
      title:
        "Men’s N.C.A.A. Tournament: North Carolina Ousts Top-Seeded Baylor in Overtime - The New York Times",
      description:
        "North Carolina jumped to a big lead, then in overtime held off the reigning champion Bears, who became the first No. 1 seed to be bounced from this tournament.",
      url: "https://www.nytimes.com/2022/03/19/sports/ncaabasketball/march-madness-scores.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/19/multimedia/19mcbb-tournament001/19mcbb-tournament001-facebookJumbo.jpg",
      publishedAt: "2022-03-19T19:28:09Z",
      content:
        "We knew the potential of this team coming into this season, and we just wanted to turn it around, R.J. Davis said on Friday. We knew after the loss to Pitt, that wasnt the way we wanted to play. So f… [+1412 chars]",
    },
    {
      source: { id: null, name: "KCCI Des Moines" },
      author: "Kayla James",
      title:
        "Bird flu cases continue to increase across Iowa - KCCI Des Moines",
      description:
        "A second outbreak in Buena Vista County was confirmed on Friday by the Iowa Department of Agriculture and Land Stewardship and USDA.",
      url: "https://www.kcci.com/article/iowa-buena-vista-bird-flu-cases-continue-to-increase/39479660",
      urlToImage:
        "https://kubrick.htvapps.com/vidthumb/01a97edf-1f0b-4ae1-90c5-d94c276359ba/01a97edf-1f0b-4ae1-90c5-d94c276359ba_image.jpg?crop=0.796xw:0.797xh;0.0881xw,0&resize=1200:*",
      publishedAt: "2022-03-19T19:13:00Z",
      content:
        "BUENA VISTA COUNTY, Iowa —The Iowa Department of Agriculture and Land Stewardship and USDA have announced a second outbreak of the bird flu in Bueno Vista County on Friday. \r\nBuena Vista County's fir… [+378 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Kathryn Watson",
      title: "Don Young, dean of the House, dies at 88 - CBS News",
      description: "He was the longest-serving member of Congress.",
      url: "https://www.cbsnews.com/news/don-young-dies-dean-of-the-house-age-88/",
      urlToImage:
        "https://cbsnews1.cbsistatic.com/hub/i/r/2022/03/19/accbb5c2-80f2-479c-b355-8aa640b3951b/thumbnail/1200x630/1d6b389946af58f134b8f82b03bcecf8/ap20297215260357.jpg",
      publishedAt: "2022-03-19T19:05:00Z",
      content:
        "Congressman Don Young, the dean of the House, has died, his office confirmed Friday. He has served in the House for nearly half a century. \r\nYoung died Friday while traveling home to Alaska, accordin… [+2619 chars]",
    },
    {
      source: { id: null, name: "KSBW The Central Coast" },
      author: "Chris Hagel",
      title:
        "3.6 earthquake hits near Corralitos in Santa Cruz County - KSBW Monterey",
      description: "3.6 earthquake hits near Corralitos in Santa Cruz County",
      url: "https://www.ksbw.com/article/39-earthquake-hits-near-corralitos-in-santa-cruz-county/39481435",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/saturday-earthquake-png-1647710266.png?crop=1.00xw:0.648xh;0,0.228xh&resize=1200:*",
      publishedAt: "2022-03-19T18:38:00Z",
      content:
        "CORRALITOS, Calif. —A 3.6 magnitude earthquake struck Santa Cruz County north of Corralitos Saturday morning. \r\nThe United States Geological Survey first reported the earthquake as a 3.9 magnitude bu… [+709 chars]",
    },
    {
      source: { id: null, name: "Variety" },
      author: "Jem Aswad",
      title:
        "Kanye West Barred From Performing at Grammys Due to ‘Concerning Online Behavior,’ Rep Confirms - Variety",
      description:
        "Popular on Variety Kanye West has been barred from performing at the Grammy Awards due to his “concerning online behavior,” a rep for the artist confirms to Variety. Reps for the Recording Academy and CBS, which present the Grammys, did not immediately respon…",
      url: "https://variety.com/2022/music/news/kanye-west-grammys-concerning-online-behavior-1235209759/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2021/11/kanye-revolt.jpg?w=1000",
      publishedAt: "2022-03-19T17:56:00Z",
      content:
        "Kanye West has been barred from performing at the Grammy Awards due to his “concerning online behavior,” a rep for the artist confirms to Variety. Reps for the Recording Academy and CBS, which presen… [+4420 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Chinese official calls sanctions on Russia increasingly 'outrageous' - Reuters.com",
      description:
        'A senior Chinese government official said on Saturday that sanctions imposed by Western nations on Russia over Ukraine are increasingly "outrageous".',
      url: "https://www.reuters.com/world/chinese-official-calls-sanctions-russia-increasingly-outrageous-2022-03-19/",
      urlToImage:
        "https://www.reuters.com/resizer/w68PNNSdXDunxKgQEiSy0_RvFV4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/457OROFDT5PEXOFLSCPGRH3L5Q.jpg",
      publishedAt: "2022-03-19T17:47:00Z",
      content:
        'BEIJING, March 20 (Reuters) - A senior Chinese government official said on Saturday that sanctions imposed by Western nations on Russia over Ukraine are increasingly "outrageous".\r\nVice Foreign Minis… [+1973 chars]',
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Morgan Watkins",
      title:
        "Judge rules Kim Davis, who denied same-sex marriage licenses in Kentucky, violated couples' rights - USA TODAY",
      description:
        "Former Rowan County, Kentucky, Clerk Kim Davis violated two couples' constitutional rights by refusing to give them marriage licenses, a judge ruled.",
      url: "https://www.usatoday.com/story/news/nation/2022/03/19/kentucky-clerk-kim-davis-violated-rights-judge/7104110001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2018/09/26/PLOU/c28ad227-f7bf-4779-a7f7-66d21b1171cc-AP18263716005029.jpg?crop=1023,575,x0,y74&width=1600&height=800&fit=bounds",
      publishedAt: "2022-03-19T17:25:31Z",
      content:
        'A federal judge ruled that despite religious objections, Rowan County, KY Clerk Kim Davis must issue marriage licenses to gay couples or risk setting a "dangerous precedent." After the legalization o… [+3649 chars]',
    },
    {
      source: { id: null, name: "Video Games Chronicle" },
      author: "Andy Robinson",
      title:
        "Gran Turismo 7 now has Sony's lowest user score ever on Metacritic | VGC - Video Games Chronicle",
      description:
        "PlayStation's latest game has faced heavy criticism for downtime and microtransactions…",
      url: "https://www.videogameschronicle.com/news/gran-turismo-7-now-has-sonys-lowest-user-score-ever-on-metacritic/",
      urlToImage:
        "https://www.videogameschronicle.com/files/2022/03/social-basic-1.jpg",
      publishedAt: "2022-03-19T16:40:18Z",
      content:
        "Gran Turismo 7 now has Sonys lowest user score ever on review aggregation site Metacritic, following recent downtime and criticism of the games microtransactions.\r\nAt the time of publishing, the PS4 … [+4654 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Timothy Nerozzi",
      title:
        "Sister of US citizen killed in Ukraine recounts Jimmy Hill's final days - Fox News",
      description:
        "Jimmy Hill was killed by a Russian bombing while seeking medical treatment for his partner.",
      url: "https://www.foxnews.com/us/sister-us-citizen-killed-ukraine-recounts-final-days",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/03/Jimmy-Hill-4.jpeg",
      publishedAt: "2022-03-19T16:36:59Z",
      content:
        "Katya Hill, sister of slain U.S. citizen Jimmy Hill, spoke to reporters Saturday about her brother's death in Ukraine.\r\nJimmy Hill was reported dead Wednesday morning after a Russian bomb exploded in… [+4215 chars]",
    },
    {
      source: { id: "buzzfeed", name: "Buzzfeed" },
      author: "Natasha Jokic",
      title:
        "Kanye West's New Girlfriend, Chaney Jones, Said She Doesn't See The Kim Kardashian Resemblance - BuzzFeed",
      description: '"We don\'t speak about her."',
      url: "https://www.buzzfeed.com/natashajokic1/chaney-jones-kanye-west-kim-kardashian-resemblance",
      urlToImage:
        "https://img.buzzfeed.com/buzzfeed-static/static/2022-03/19/16/enhanced/298b4e0c312d/original-1432-1647706930-2.jpg?crop=1247:653;0,20%26downsize=1250:*",
      publishedAt: "2022-03-19T16:36:18Z",
      content: null,
    },
    {
      source: { id: null, name: "New York Times" },
      author: "John Ismay",
      title: "Russia Claims to Use a Hypersonic Missile - The New York Times",
      description:
        "The United States, Russia and China have all been racing to develop hypersonic weapons, which can maneuver in flight at more than five times the speed of sound.",
      url: "https://www.nytimes.com/2022/03/19/us/politics/russia-hypersonic-missile-attack-claim.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/03/19/world/19ukraine-blog-hypersonic-01/19ukraine-blog-hypersonic-01-facebookJumbo.jpg",
      publishedAt: "2022-03-19T16:23:06Z",
      content:
        "WASHINGTON Russia has fired scores of guided missiles into Ukraine, but on Saturday it claimed for the first time that it had launched one capable of hypersonic speed in an attack on an ammunition de… [+889 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Ella Lee, USA TODAY",
      title:
        "4 American Marines killed during NATO exercise in Norway; unrelated to conflict in Ukraine - USA TODAY",
      description:
        "Prime Minister Jonas Gahr Stoere tweeted that the plane crash occurred overnight while troops were participating in the NATO Cold Response exercise.",
      url: "https://www.usatoday.com/story/news/politics/2022/03/19/nato-4-us-marines-die-norway-plane-crash-no-ukraine-relation/7102933001/",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/aa59fdf6f55de93fd434545ba29aa4ed8e8e204d/c=377-0-4073-2090/local/-/media/USATODAY/USATODAY/2014/09/16/1410906355000-XXX-Marine-Week-Seattle-1171.JPG?auto=webp&format=pjpg&width=1200",
      publishedAt: "2022-03-19T16:04:20Z",
      content:
        "Four U.S. Marines died in a plane crash while participating in a NATO training exercise that is unrelated to the conflict in Ukraine, the Norwegian prime minister said Saturday.\r\nPrime Minister Jonas… [+2746 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Katie Hunt, CNN",
      title: "Artemis I moon rocket is a step closer to launch countdown - CNN",
      description:
        "Marvel at NASA's mega moon rocket and Orion spacecraft as they roll out to the launchpad, learn about gigantic sinkholes discovered in the Artic seafloor, take a guess at how researchers are luring murder hornets into traps, and investigate more this week.",
      url: "https://www.cnn.com/2022/03/19/world/artemis-rocket-nasa-science-newsletter-wt-scn/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220318080704-04-artemis-rollout-0317-super-tease.jpg",
      publishedAt: "2022-03-19T16:02:56Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>DailyNews Top Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="mydesc"
              imageUrl="/ursas"
              newsUrl="todo"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}
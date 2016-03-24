'use strict';

const ACTORS = [
    {
        id: "bill-murray",
        name: "Bill Murray",
        description:"William James \"Bill\" Murray (born September 21, 1950) is an American actor, comedian, and writer. He first gained exposure on Saturday Night Live, for which he earned his first Emmy Award and later went on to star in comedy films, including Meatballs (1979), Caddyshack (1980), Stripes (1981), Tootsie (1982), Ghostbusters (1984), Scrooged (1988), What About Bob? (1991), and Groundhog Day (1993). He also co-directed Quick Change (1990). \r Murray garnered additional critical acclaim later in his career, starring in Lost in Translation (2003), which earned him a Golden Globe and a BAFTA Award for Best Actor, as well as an Academy Award nomination for Best Actor. He also received Golden Globe nominations for his roles in Ghostbusters, Rushmore (1998), Hyde Park on Hudson (2012), St. Vincent (2014), and the HBO miniseries Olive Kitteridge (2014), for which he later won his second Primetime Emmy Award. \r He has collaborated more than once with such notable film directors as Sofia Coppola, Ivan Reitman, Harold Ramis, Wes Anderson, Jim Jarmusch, Frank Oz and the Farrelly brothers.",
        poster:"https://www.fillmurray.com/500/500",
        images:[{
            id:"digits1",
            caption:"Caption for image 1",
            source:"https://www.fillmurray.com/200/200"
        },{
            id:"digits2",
            caption:"Caption for image 2",
            source:"https://www.fillmurray.com/300/300"
        }]
    },{
        id: "nick-cage",
        name: "Nicholas Cage",
        description:"Nicolas Kim Coppola (born January 7, 1964), known professionally as Nicolas Cage, is an American actor and producer. He has performed in leading roles in a variety of films, ranging from romantic comedies and dramas to science fiction and action films. In the early years of his career, Cage starred in films such as Valley Girl (1983), Racing with the Moon (1984), Birdy (1984), Peggy Sue Got Married (1986), Raising Arizona (1987), Moonstruck (1987), Vampire's Kiss (1989), Wild at Heart (1990), Honeymoon in Vegas (1992), and Red Rock West (1993). Cage received an Academy Award, a Golden Globe, and Screen Actors Guild Award for his performance as an alcoholic Hollywood writer in Leaving Las Vegas (1995) before coming to the attention of wider audiences with mainstream films, such as The Rock (1996), Face/Off (1997), Con Air (1997), City of Angels (1998), and National Treasure (2004). He earned his second Academy Award nomination for his performance as Charlie and Donald Kaufman in Adaptation (2002). In 2002, he directed the film Sonny, for which he was nominated for Grand Special Prize at Deauville Film Festival. Cage owns the production company Saturn Films and has produced films such as Shadow of the Vampire (2000) and The Life of David Gale (2003). Through his performances in The Weather Man (2005), Lord of War (2005), Bad Lieutenant: Port of Call New Orleans (2009), and Kick-Ass (2010) he earned critical acclaim. Films such as Ghost Rider (2007) and Knowing (2009) were box office successes. Cage has been strongly criticized in recent years for his choice of roles, some of which have been universally panned. However, he recently starred in The Croods and Joe, both of which ",
        poster:"https://www.placecage.com/300/300",
        images:[{
            id:"digits1",
            caption:"Caption for image 1",
            source:"https://www.placecage.com/200/200"
        },{
            id:"digits2",
            caption:"Caption for image 2",
            source:"https://www.placecage.com/300/300"
        }]
    },{
        id: "steven-seagal",
        name: "Steven Seagal",
        description:"Steven Frederic Seagal (born April 10, 1952) is an American actor, film producer, screenwriter, film director, martial artist, Aikido instructor, musician, reserve deputy sheriff and entrepreneur. A 7th-dan black belt in Aikido, Seagal began his adult life as a martial arts instructor in Japan; becoming the first foreigner to operate an Aikido dojo in the country. He later moved to Los Angeles, California, where he worked as a martial arts instructor on Never Say Never Again; accidentally breaking actor Sean Connery's wrist during production. In 1988, Seagal made his acting debut in Above the Law. By 1991, he had starred in four successful films. He achieved further fame in 1992, when he played Navy SEALs counter-terrorist expert Casey Ryback in Under Siege. However, On Deadly Ground (in 1994) and Under Siege 2: Dark Territory (in 1995) were less successful at the box office. During the latter half of the 1990s, Seagal starred in three more theatrical films and the direct-to-video film The Patriot. Since that time, with the exception of Exit Wounds (in 2001) and Half Past Dead (in 2002), his career has shifted almost entirely to direct-to-video productions. From 1998 to 2014, Seagal appeared in a total of 27 of these. At the age of 58, he returned to prominence as Torrez in the 2010 film Machete; his first widely released film since 2002. Intermittently between 2009 and 2013, he filmed three seasons of his reality show Steven Seagal: Lawman, which depicted Seagal performing his duties as a reserve deputy sheriff in Jefferson Parish, Louisiana (season 1–2) and Maricopa County, Arizona (season 3). He also created and starred in two seasons of the undercover police drama series True Justice between 2011 and 2012. Seagal is an accomplished guitarist; having released two studio albums (Songs from the Crystal Cave and Mojo Priest), and performed on a number of film scores. He has worked with many famous musicians, including Stevie Wonder and Tony Rebel (who both performed on his debut album). As a businessman, Seagal has undertaken many ventures; he is estimated to be worth anywhere from $5–16 million (as of 2015). In 1997, he began \"working closely\" with Young Living on a line of \"therapeutic oil\" products. As the founder of Steven Seagal Enterprises, he began to market his own energy drink, Lightning Bolt, in 2005. In 2013, he began representing the Russian firearms manufacturer ORSIS; appearing in promotional campaigns. In addition to his professional achievements, Seagal is known as an environmentalist, an animal rights activist, and as a supporter of the 14th Dalai Lama, Tenzin Gyatso. He is also known for his outspoken political views and for his friendship with Vladimir Putin. Seagal once referred to Putin as \"one of the great living world leaders\".",
        poster:"https://www.stevensegallery.com/400/400",
        images:[{
            id:"digits1",
            caption:"Caption for image 1",
            source:"https://www.stevensegallery.com/200/200"
        },{
            id:"digits2",
            caption:"Caption for image 2",
            source:"https://www.stevensegallery.com/300/300"
        }]
    }
];

class ActorsService
{

    getActors()
    {
        return ACTORS;
    }

    getActorWith(id)
    {
        let response = undefined;

        ACTORS.forEach(actor => {
           if (actor.id === id) { response = actor; }
        });

        return response;
    }

}

module.exports = ActorsService;
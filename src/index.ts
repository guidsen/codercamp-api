import parser from './parser';
import { IDataSource } from './types/source';

const sources: Array<IDataSource> = [{
  url: 'https://blog.algolia.com/feed/',
}, {
  url: 'https://medium.com/feed/airbnb-engineering',
}, {
  url: 'https://blog.asana.com/category/eng/feed/',
}, {
  url: 'https://auth0.com/blog/rss.xml',
}, {
  url: 'https://blog.box.com/blog/feed/',
}, {
  url: 'https://blog.codeship.com/feed/',
}, {
  url: 'https://blog.discordapp.com/feed/',
}, {
  url: 'https://githubengineering.com/atom.xml',
}, {
  url: 'https://codeascraft.com/feed/',
}, {
  url: 'https://tech.grammarly.com/feed.xml', // bad images
}, {
  url: 'https://engineering.instagram.com/feed',
}, {
  url: 'https://engineering.intercom.com/feed.xml',
}, {
  url: 'http://engineering.khanacademy.org/rss.xml',
}, {
  url: 'https://devs.mailchimp.com/blog/feed/',
}, {
  url: 'https://blog.risingstack.com/rss/',
}, {
  url: 'https://slack.engineering/feed',
}, {
  url: 'http://engineering.shopify.com/blogs/engineering.atom',
}, {
  url: 'https://www.toptal.com/developers/blog.rss',
}, {
  url: 'https://medium.com/feed/twitch-news/tagged/engineering',
}, {
  url: 'https://medium.com/feed/walmartlabs',
}, {
  url: 'https://www.wix.engineering/feed.xml',
}, {
  url: 'https://yahooeng.tumblr.com/rss',
}, {
  url: 'https://medium.com/feed/yammer-engineering,'
}, {
  url: 'https://engineeringblog.yelp.com/feed.xml',
}, {
  url: 'https://engineering.zenefits.com/feed/',
}, {
  url: 'https://engineering.webengage.com/feed/',
}];

// sources.forEach(parser);
// parser({ url: 'https://tech.grammarly.com/feed.xml' });
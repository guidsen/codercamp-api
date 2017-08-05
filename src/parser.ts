import * as FeedParser from 'feedparser';
import * as request from 'request';
import * as openGraphScraper from 'open-graph-scraper';
import { IDataSource } from './types/source';
import { IArticle } from './types/article';

const getLink = (item: any): string => item.guid ? item.guid : item.link;
const getImagePreview = (item: any): string => {
  // TODO: Check if image url is a correct url
  const imageFromRss = item.enclosures[0] && item.enclosures[0].url || false;

  if (imageFromRss) return imageFromRss;

  return item.ogImage&& item.ogImage.url || null;
};

const feedItemToArticle: IArticle = (feedItem: any) => ({
  title: feedItem.title,
  summary: feedItem.ogDescription,
  link: feedItem.guid ? feedItem.guid : feedItem.link,
  imagePreview: getImagePreview(feedItem),
  categories: feedItem.categories,
  publishedAt: feedItem.pubDate,
});

const scrape = (url: string) => {
  const scraperOpts = { url, timeout: 4000 };

  return new Promise((resolve, reject) => {
    openGraphScraper(scraperOpts, (err, results) => {
      if (err || !results.data) {
        console.error('Couldn\'t scrape %s', scraperOpts.url);

        reject(err);
      }

      resolve(results.data);
    });
  });
};

const parser = (source: IDataSource) => {
  const req = request(source.url);
  const feedParser = new FeedParser();

  req.on('response', () => {
    req.pipe(feedParser);
  });

  feedParser.on('readable', async () => {
    let article;
    let item;

    while (item = feedParser.read()) {
      const openGraphInfo = await scrape(getLink(item))
        .catch(console.error);

      article = feedItemToArticle(Object.assign({}, item, openGraphInfo));

      console.log(article);
    }
  });

  return 'foo';
};

export default parser;

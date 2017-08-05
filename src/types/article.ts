export interface IArticle {
  title: string
  summary: string
  link: string
  imagePreview: ?string
  categories: Array<string>
  publishedAt: string
}
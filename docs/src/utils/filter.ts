import type { ArticleDifficulty, ArticleSchema } from '@types/article';

export function checkArticleMatch(
  article:ArticleSchema,
  query:string,
  difficulties:ArticleDifficulty[],
  categories:string[],
):boolean{
  const normalizedQuery=query.toLowerCase();

  const matchesTitle=article.data.title
    .toLowerCase()
    .includes(normalizedQuery);

  const matchesDescription=
    article.data.description
      .toLowerCase()
      .includes(normalizedQuery)||
    article.data.longDescription
      .toLowerCase()
      .includes(normalizedQuery);

  const matchesCategory=
    categories.length===0||
    categories.some(category=>article.data.categories.includes(category));

  const matchesDifficulty=
    difficulties.length===0||
    difficulties.some(difficulty=>article.data.difficulty===difficulty);

  return (matchesTitle||matchesDescription)&&matchesDifficulty&&matchesCategory;
}

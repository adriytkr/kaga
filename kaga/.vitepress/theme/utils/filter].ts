import type {Article} from '~/types/articles';

export function isArticleMatch(
  article:Article,
  query:string,
):boolean{
  const normalizedQuery=query.toLowerCase();

  const matchTitle=
    article.title
      .toLowerCase()
      .includes(normalizedQuery)

  const matchDescription=
    article.description
      .toLowerCase()
      .includes(normalizedQuery);

  const matchQuery=matchTitle||matchDescription;

  return matchQuery;
}

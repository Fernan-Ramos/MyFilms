import { routeCodes } from 'js/constants/routes';

const links = [
  {
    label: 'Novedades',
    route: routeCodes.TRENDING,
  },
  // {
  //   label: 'WatchList',
  //   route: routeCodes.WATCHLIST
  // },
  {
    label: 'Listas',
    route: routeCodes.LISTS,
  },
  {
    label: 'Favoritos',
    route: routeCodes.FAVORITES,
  },
  {
    label: 'Recomendaciones',
    route: routeCodes.RECOMMENDATIONS,
  },
];

export { links as default };

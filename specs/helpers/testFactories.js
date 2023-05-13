import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantDB from '../../src/scripts/data/favoriterestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurantDB: FavoriteRestaurantDB,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };

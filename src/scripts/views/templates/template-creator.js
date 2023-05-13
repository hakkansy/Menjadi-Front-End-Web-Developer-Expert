/* eslint-disable import/no-cycle */
import CONFIG from '../../globals/config';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantDetailTemplate = (restaurant) => `
<img class="restaurant-picture" crossorigin="anonymous" alt="gambar ${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0" >
<div class="detailRestaurant">
    <h2>Nama Restoran</h2>
    <p>${restaurant.name}</p>
    <h2>Alamat</h2>
    <p>${restaurant.address}</p>
    <h2>Kota</h2>
    <p>${restaurant.city}</p>
    <h2>Rating</h2>
    <p>${restaurant.rating}</p>

    <h2 class="restaurant-description-title">Description</h2>
    <p class="restaurant-description">${restaurant.description}</p>
</div>
<div class="restaurant-categories">
    ${restaurant.categories
    .map(
      (category) => `
            <p class="restaurant-categories-title">${category.name}</p>
          `,
    )
    .join('')}
</div>

<div class="detailRestaurant-menu">    
    <h2>Menu</h2>
    
    <div class="restaurant-menu">
        <ul>
            <h3>Food</h3>
            ${restaurant.menus.foods
    .map(
      (food) => `
      <li><p> ${food.name}</p></li>
              `,
    )
    .join('')}
        </ul>
        <ul>
            <h3>Drink</h3>
            ${restaurant.menus.drinks
    .map(
      (drink) => `
        <li><p> ${drink.name}</p></li>
                `,
    )
    .join('')}
        </ul>
    </div>
</div> 

<h2 class="review-title">Reviews</h2>
${DetailHelper.eachCustomersReview(restaurant)}
`;

const createCustomerReviewTemplate = (customerReview) => `
<div class="detailRestaurant-review">
            <div class="restaurant-review" id="restaurant-review">
                <div class="review-header">
                    <p class="review-name"><i class="far fa-user"></i> ${customerReview.name}</p>
                    <p class="review-date">${customerReview.date}</p>
                </div>
                <div class="review-comment">
                    <p><i class="far fa-comment"></i> ${customerReview.review}</p>
                </div>
            </div>
            `;

const createRestaurantListTemplate = (restaurant) => `
    <article class="list-item">
    <a href="#/detail/${restaurant.id}">
          <div class="list-thumbnail">
              <img class="list-item__thumbnail lazyload" tabindex="0" class="card-image" crossorigin="anonymous" alt="gambar ${restaurant.name}" 
              data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous"/>
              <p class="rating"><i title="ratings" class="fa fa-star card-rating"></i>  ${restaurant.rating}</p>
              
          </div>
          <div class="list-item__content">
              <h2 class="list-item__title">${restaurant.name}</h2>
              <p class="post-item__restaurant-city">@${restaurant.city}</p>
              <p class="list-item__description">${restaurant.description.slice(0, 150)}...</p>
          </div>
    </a>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line object-curly-newline
export {
  createRestaurantDetailTemplate,
  createRestaurantListTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createCustomerReviewTemplate,
};

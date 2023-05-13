const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const condition = 'Tidak ada restaurant yang Anda sukai';

Scenario('showing empty liked restaurant', async ({ I }) => {
  I.seeElement('#lists');
  I.see(condition, '#lists');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(condition, '#lists');

  I.amOnPage('/');

  I.seeElement('.list-item a');
  const firstCard = locate('.list-item__title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.lists');
  const likedCardTitle = await I.grabTextFrom('.list-item__title');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(condition, '#lists');

  I.amOnPage('/');

  I.seeElement('.list-item a');
  const firstCard = locate('.list-item__title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');
  const likedCardTitle = await I.grabTextFrom('.list-item__title');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#lists');
  const noFavRestaurant = await I.grabTextFrom('#lists');

  assert.strictEqual(noFavRestaurant, condition);
});

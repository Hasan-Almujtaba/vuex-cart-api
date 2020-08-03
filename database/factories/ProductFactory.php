<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
  return [
    'title' => $faker->word(),
    'description' => $faker->sentence(),
    'image' => 'https://picsum.photos/400/400/?image=' . $faker->randomDigit,
    'price' => rand(10, 100)
  ];
});

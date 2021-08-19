import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
  return (
    <div class="card-group">
      <div class="card">
        <img
          class="card-img-top"
          src="https://www.tasteatlas.com/images/ingredients/285b066b66884a4f94fcdd0246d9f0da.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Beer</h5>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://static01.nyt.com/images/2019/02/13/dining/13pour1/merlin_150020475_775d925d-78a9-4798-b9e7-fd9e497708a8-superJumbo.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Wine</h5>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://cdn.luxe.digital/media/2020/07/24153549/johnnie-walker-luxury-whiskey-luxe-digital%402x.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Whiskey</h5>
        </div>
      </div>
    </div>
  );
}

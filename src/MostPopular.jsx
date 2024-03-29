import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MostPopular() {
  return (
    <div>
      <div class="card-group">
      <div class="card">
        <img
          class="card-img-top"
          src="https://wallpaperaccess.com/full/7314.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Meta Trap House</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://static01.nyt.com/images/2019/02/13/dining/13pour1/merlin_150020475_775d925d-78a9-4798-b9e7-fd9e497708a8-superJumbo.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">The Vincent Van Gogh Gallery</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn.luxe.digital/media/2020/07/24153549/johnnie-walker-luxury-whiskey-luxe-digital%402x.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Teufzer</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      
    </div>
    <br/>
    {/* adding another  */}
    <div class="card-group">
      <div class="card">
        <img
          class="card-img-top"
          src="https://www.tasteatlas.com/images/ingredients/285b066b66884a4f94fcdd0246d9f0da.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Meta Trap House</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="https://static01.nyt.com/images/2019/02/13/dining/13pour1/merlin_150020475_775d925d-78a9-4798-b9e7-fd9e497708a8-superJumbo.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">The Vincent Van Gogh Gallery</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn.luxe.digital/media/2020/07/24153549/johnnie-walker-luxury-whiskey-luxe-digital%402x.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Teufzer</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      
    </div>
    </div>
  );
}

import React from 'react';
import './App.scss';

function App() {
  return (
    <>
      <header>
        <a href="/" class="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png" />
        </a>
        <nav>
          <a href="#">Tutorials</a>
          <a href="#">Reference</a>
          <a href="#">Excersize</a>
          <a href="#">Bootcamp</a>
          <a href="#">Videos</a>
        </nav>
      </header>
      <nav class="menu">
        <a href="#">Home</a>
        <a href="#">HTML</a>
        <a href="#">CSS</a>
        <a href="#">Javascript</a>
        <a href="#">SQL</a>
      </nav>

      <div class="container">
        <div class="sidebar">
          <div class="heading">HTML Tutorial</div>
          <ul>
            <li>
              <a href="">HTML Home</a>
            </li>
            <li>
              <a href="">HTML Introduction</a>
            </li>
            <li>
              <a href="">HTML Editors</a>
            </li>
            <li>
              <a href="">HTML Basic</a>
            </li>
          </ul>
        </div>
        <div class="content">
          <h1>HTML Tutorial</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div class="rightSideBar">
          <a href="#">
            <img src="https://placehold.co/200x400" />
          </a>

          <a href="#">
            <img src="https://placehold.co/200x600" />
          </a>
        </div>
      </div>

      <footer>
        <div class="footer-menu">
          <ul>
            <li class="heading">About us</li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
          <ul>
            <li class="heading">Customer</li>
            <li>
              <a href="">Return</a>
            </li>
            <li>
              <a href="">Refund</a>
            </li>
            <li>
              <a href="">Compaints</a>
            </li>
          </ul>
          <ul>
            <li class="heading">Social</li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          &copy; Copyright 2023. All rights reseverd ABC Corporation
        </div>
      </footer>
    </>
  );
}

export default App;

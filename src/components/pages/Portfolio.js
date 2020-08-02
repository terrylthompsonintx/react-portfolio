import React from "react";

const Portfolio = () => (
  <div>
    <h1>PortFolio</h1>
    <div class='row'>
                    <div class='col-3'>
                        <img src='./assets/img/hearth.png' class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Hearth</h5>
                          <p class="card-text">Hearth is a photo sharing app. Users can create a group in which they can create posts to upload and share photographs.  Only group members can view posts. 
                              Hearth is a full stack app that uses Node, Express, Jimp, Express-Fileupload and Mysql as well as Sequelize </p>
                          <a href="https://infinite-ocean-27765.herokuapp.com/" class="btn btn-primary" >View App</a>
                          <a href="https://github.com/feuerbacherb/hearth" class="btn btn-secondary" >View Github</a>
                        </div> 
                    </div>
                    <div class='col-3'>
                        <img src='./assets/img/parks.png' class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Vacation-Planner</h5>
                          <p class="card-text">A front end application that allows users to plan a vacation at a national park. 
                              The webpage consumes the National Park Service and Open Weather APIs to display campground and weather information. </p>
                          <a href="https://terrylthompsonintx.github.io/Vacation-Planner/" class="btn btn-primary" >  View App  </a>
                          <a href="https://github.com/roxyvaught/Vacation-Planner" class="btn btn-secondary" >View Github</a>
                        </div> 
                    </div>
                    <div class='col-3'>
                        <img src='./assets/img/weather.png' class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Weather-Dashboard</h5>
                          <p class="card-text">A front end project that allows the user to get the forecast for their city. The webpage consumes the Open Weather API.
                               </p>
                          <a href="https://terrylthompsonintx.github.io/Weather-Dashboard/" class="btn btn-primary" >View App</a>
                          <a href="https://github.com/terrylthompsonintx/Weather-Dashboard" class="btn btn-secondary" >View Github</a>
                        </div> 
                    </div>
                    <div class='col-3'>
                        <img src='./assets/img/horiseon.png' class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Horiseon</h5>
                          <p class="card-text">A simple webpage. </p>
                          <a href="https://terrylthompsonintx.github.io/Challenge-1-Horiseon/" class="btn btn-primary" >View App</a>
                          <a href="https://github.com/terrylthompsonintx/Challenge-1-Horiseon" class="btn btn-secondary" >View Github</a>
                        </div> 
                    </div>
                  
                    <div class='row'>
                    <div class='col-3'>
                        <img src='./assets/img/daytimer.png' class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Day Timer</h5>
                          <p class="card-text">An app that allows the user to plan their day. The user enters tasks through out the day.  The app uses the javascript setinterval method to track time while highlighting tasks for the current hour.  </p>
                          <a href="https://terrylthompsonintx.github.io/DayTimer/" class="btn btn-primary" >View App</a>
                          <a href="https://github.com/terrylthompsonintx/DayTimer" class="btn btn-secondary" >View Github</a>
                        </div> 
                    </div>
                    <div class='col-3'>
                        <img src='./assets/img/jsquiz.png' class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Javascript Quiz</h5>
                          <p class="card-text">A quiz game that uses HTML, CSS, and Javascript.   </p>
                          <a href="https://terrylthompsonintx.github.io/jsQuiz/" class="btn btn-primary" >View App</a>
                          <a href="https://github.com/terrylthompsonintx/jsQuiz" class="btn btn-secondary" >View Github</a>
                        </div> 
                    </div>
                    <div class='col-3'>
                    <img src='./assets/img/password.png' class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Password Generator</h5>
                          <p class="card-text">An app that prompts the users for the parameters of new password and generates a random one based on those parameters.
                               </p>
                          <a href="https://terrylthompsonintx.github.io/password-generator/" class="btn btn-primary" >View App</a>
                          <a href="https://github.com/terrylthompsonintx/password-generator" class="btn btn-secondary" >View Github</a>
                        </div> 
                    </div>
                    <div class='col-3'>
                    <img src='./assets/img/notetaker.png' class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Note Taker</h5>
                          <p class="card-text">A note taking app.  The user can create,edit, and delete notes.  Persistance is through local storage. </p>
                          <a href="https://notetaker--tt.herokuapp.com/" class="btn btn-primary" >View App</a>
                          <a href="" class="btn btn-secondary" >View Github</a>
                        </div> 
                    </div>
                   
                </div>                    
                </div>
  </div>
);

export default Portfolio;

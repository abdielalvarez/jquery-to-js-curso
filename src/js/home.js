
// DIFERENCIAS AJAX Y FETCH

// $.ajax('https://randomuser.me/api/', {
//     method: 'GET',
//     success: data => console.log(data.results[0].name.first),
//     error: err => console.log(err)
// })

// fetch('https://randomuser.me/api/')
//     .then(res => res.json())
//     .then(user => console.log(user.results[0].name.first))
//     .catch(err => console.log(err))

// ===========================================================================================================

// ASYNC FUNCTION WITH FETCH

// const load = (async () => {
//     const response = await fetch('https://yts.lt/api/v2/list_movies.json?genre=action')
//     const data = await response.json()
//     console.log(data.data.movies[0].title_english)
// })()

// ===========================================================================================================

// AUTODECLARATE FUNCTION and ASYNC FUNCTION BRINGING MORE THAN ONE DATA

// const load = (async () => {

//     const getData = async (url) => {
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     }

//     const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
//     const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
//     const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
    
//     console.log(actionList, dramaList, animationList);
    
// })()

// ===========================================================================================================

// SELECTORS

// const $actionContainer = document.querySelector('#action')
// const $dramaContainer = document.querySelector('#drama')
// const $animationContainer = document.querySelector('#animation')

// const $featuringContainer = document.querySelector('#featuring')
// const $form = document.querySelector('#form')
// const $home = document.querySelector('#home')

// const $modal = document.getElementById('modal')
// const $overlay = document.getElementById('overlay')
// const $hideModal = document.getElementById('hide-modal')

// const $modalTitle = $modal.querySelector('title')
// const $modalDescription = $modal.querySelector('p')
// const $modalImage = $modal.querySelector('img')

// ===========================================================================================================

// TEMPLATES

// const load = (async () => {
//     const getData = async (url) => {
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     }
//     const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
//     const videoItemTemplate = (movie) => {
//         return (
//             `<div class="primaryPlaylistItem">
//                 <div class="primaryPlaylistItem-image">
//                 <img src="${movie.medium_cover_image}">
//             </div>
//                 <h4 class="primaryPlaylistItem-title">
//                     ${movie.title}
//                 </h4>
//             </div>`
//         )
//     }
//     actionList.data.movies.forEach(movie => {
//         const HTMLString = videoItemTemplate(movie)
//         console.log(HTMLString);
//     })
// })()

// Template explanation

// // Jquery templates
// '<div class="primaryPlaylistItem">' +
//     '<div class="primaryPlaylistItem-image">' +
//         '<img src='+imageSrc+'>' +
//     '</div>' +
//     '<h4 class="primaryPlaylistItem-title">' +
//         'Titulo de la peli' +
//     '</h4>' +
// '</div>'

// // Javascript templates
// `<div class="primaryPlaylistItem">
//     <div class="primaryPlaylistItem-image">
//         <img src="src/images/covers/midnight.jpg">
//     </div>
//     <h4 class="primaryPlaylistItem-title">
//         Titulo de la peli
//     </h4>
// </div>`

// ===========================================================================================================

// DOM: CREATE REAL HTML IN NAVIGATOR

// const load = (async () => {

//     const getData = async (url) => {
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     }

//     // 1.- get an Array
//     const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')

//     // 2.- get an Template you want to iterate
//     const videoItemTemplate = (movie) => {
//         return (
//             `<div class="primaryPlaylistItem">
//                 <div class="primaryPlaylistItem-image">
//                 <img src="${movie.medium_cover_image}">
//             </div>
//                 <h4 class="primaryPlaylistItem-title">
//                     ${movie.title}
//                 </h4>
//             </div>`
//         )
//     }

//     // 3.- get a selector to asociate with the Array
//     const $actionContainer = document.querySelector('#action')
    
//     // 4.- iterate the Array
//     actionList.data.movies.forEach(movie => {
//         const HTMLString = videoItemTemplate(movie)
//         const html = document.implementation.createHTMLDocument()
//         // 5 html your code, that at this point it is just plain text
//         html.body.innerHTML = HTMLString
//         // 6.- show your html in navigator
//         $actionContainer.append(html.body.children[0])
//     })
// })()

// ===========================================================================================================

// RECYCLE FUNCTIONS

// (async function load() {
    
//     async function getData(url) {
//       const response = await fetch(url);
//       const data = await response.json()
//       return data;
//     }
  
//     const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
//     const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
//     const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
    
//     function videoItemTemplate(movie) {
//       return (
//         `<div class="primaryPlaylistItem">
//           <div class="primaryPlaylistItem-image">
//             <img src="${movie.medium_cover_image}">
//           </div>
//           <h4 class="primaryPlaylistItem-title">
//             ${movie.title}
//           </h4>
//         </div>`
//       )
//     }

//     function createTemplate(HTMLString) {
//         const html = document.implementation.createHTMLDocument();
//         html.body.innerHTML = HTMLString;
//         return html.body.children[0];
//     }
    
//     function renderMovieList(list, $container) {
//         // removing the loading image
//         $container.children[0].remove()
//         // actionList.data.movies
//         list.forEach((movie) => {
//             const HTMLString = videoItemTemplate(movie);
//             const movieElement = createTemplate(HTMLString)
//             // $actionContainer
//             $container.append(movieElement);
//         })
//     }
    
//     const $actionContainer = document.querySelector('#action');
//     renderMovieList(actionList.data.movies, $actionContainer)  
//     const $dramaContainer = document.getElementById('drama');
//     renderMovieList(dramaList.data.movies, $dramaContainer)
//     const $animationContainer = document.getElementById('animation');
//     renderMovieList(animationList.data.movies, $animationContainer)
//   })()

// ===========================================================================================================

// EVENTS:

// (async function load() {
    
//     async function getData(url) {
//         const response = await fetch(url);
//         const data = await response.json()
//         return data;
//     }

//     const $form = document.getElementById('form');
//     $form.addEventListener('submit', event => {
//         // IMPORTANT: this allow you not reloading all the page when you make submit to an input
//         event.preventDefault()
//     })
    
//     const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
//     const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
//     const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
    
//     function videoItemTemplate(movie) {
//       return (
//         `<div class="primaryPlaylistItem">
//           <div class="primaryPlaylistItem-image">
//             <img src="${movie.medium_cover_image}">
//           </div>
//           <h4 class="primaryPlaylistItem-title">
//             ${movie.title}
//           </h4>
//         </div>`
//       )
//     }

//     function createTemplate(HTMLString) {
//         const html = document.implementation.createHTMLDocument();
//         html.body.innerHTML = HTMLString;
//         return html.body.children[0];
//     }

//     function addEventClick($element) {
//         $element.addEventListener('click', () => {
//             alert('click')
//         })
//     }
    
//     function renderMovieList(list, $container) {
//         $container.children[0].remove()
//         list.forEach((movie) => {
//             const HTMLString = videoItemTemplate(movie);
//             const movieElement = createTemplate(HTMLString)
//             $container.append(movieElement);
//             addEventClick(movieElement)
//         })
//     }
    
//     const $actionContainer = document.querySelector('#action');
//     renderMovieList(actionList.data.movies, $actionContainer)  
//     const $dramaContainer = document.getElementById('drama');
//     renderMovieList(dramaList.data.movies, $dramaContainer)
//     const $animationContainer = document.getElementById('animation');
//     renderMovieList(animationList.data.movies, $animationContainer)
// })()

// ===========================================================================================================

// CLASSES AND CSS

// (async function load() {
  
//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
  
//   $form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//   })
  
//   const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
//   const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
//   const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
  
//   function videoItemTemplate(movie) {
//     return (
//       `<div class="primaryPlaylistItem">
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal()
//     })
//   }
//   function renderMovieList(list, $container) {
    
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       addEventClick(movieElement);
//     })
//   }
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList.data.movies, $actionContainer);

//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList.data.movies, $dramaContainer);

//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList.data.movies, $animationContainer);

//   const $featuringContainer = document.getElementById('featuring');

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function showModal() {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';
//   }

// })()

// ===========================================================================================================

// CREATE ELEMENTS AND ASSIGN ATTRIBUTES

// (async function load() {
  
//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute])
//     }
//   }
  
//   $form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img')
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50
//     })
//     $featuringContainer.append($loader)
//   })
  
//   const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
//   const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
//   const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
  
//   function videoItemTemplate(movie) {
//     return (
//       `<div class="primaryPlaylistItem">
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal()
//     })
//   }
//   function renderMovieList(list, $container) {
    
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       addEventClick(movieElement);
//     })
//   }
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList.data.movies, $actionContainer);

//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList.data.movies, $dramaContainer);

//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList.data.movies, $animationContainer);


//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function showModal() {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';
//   }

// })()

// ===========================================================================================================

// FORMS

// (async function load() {

//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
//   }
//   const BASE_API = 'https://yts.lt/api/v2/';

//   function featuringTemplate(peli) {
//     return (
//       `
//       <div class="featuring">
//         <div class="featuring-image">
//           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//           <p class="featuring-title">Pelicula encontrada</p>
//           <p class="featuring-album">${peli.title}</p>
//         </div>
//       </div>
//       `
//     )
//   }

//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img');
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50,
//     })
//     $featuringContainer.append($loader);

//     const data = new FormData($form);
//     const peli = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
//     const HTMLString = featuringTemplate(peli.data.movies[0]);
//     $featuringContainer.innerHTML = HTMLString;
//   })

//   const actionList = await getData(`${BASE_API}list_movies.json?genre=action`)
//   const dramaList = await getData(`${BASE_API}list_movies.json?genre=drama`)
//   const animationList = await getData(`${BASE_API}list_movies.json?genre=animation`)
  
//   function videoItemTemplate(movie) {
//     return (
//       `<div class="primaryPlaylistItem">
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal()
//     })
//   }
//   function renderMovieList(list, $container) {
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       addEventClick(movieElement);
//     })
//   }
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList.data.movies, $actionContainer);

//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList.data.movies, $dramaContainer);

//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList.data.movies, $animationContainer);

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function showModal() {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';

//   }

// })()

// ===========================================================================================================

// OBJECT DETRUCTURING

// (async function load() {

//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
//   }
//   const BASE_API = 'https://yts.lt/api/v2/';

//   function featuringTemplate(peli) {
//     return (
//       `
//       <div class="featuring">
//         <div class="featuring-image">
//           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//           <p class="featuring-title">Pelicula encontrada</p>
//           <p class="featuring-album">${peli.title}</p>
//         </div>
//       </div>
//       `
//     )
//   }

//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img');
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50,
//     })
//     $featuringContainer.append($loader);

//     const data = new FormData($form);
//     const {
//       data: {
//         movies: pelis
//       }
//     } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
//     const HTMLString = featuringTemplate(pelis[0]);
//     $featuringContainer.innerHTML = HTMLString;
//   })

//   const actionList = await getData(`${BASE_API}list_movies.json?genre=action`)
//   const dramaList = await getData(`${BASE_API}list_movies.json?genre=drama`)
//   const animationList = await getData(`${BASE_API}list_movies.json?genre=animation`)
  
//   function videoItemTemplate(movie) {
//     return (
//       `<div class="primaryPlaylistItem">
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal()
//     })
//   }
//   function renderMovieList(list, $container) {
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       addEventClick(movieElement);
//     })
//   }
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList.data.movies, $actionContainer);

//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList.data.movies, $dramaContainer);

//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList.data.movies, $animationContainer);

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function showModal() {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';

//   }

// })()

// ===========================================================================================================

// DATA SET

// (async function load() {

//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
//   }
//   const BASE_API = 'https://yts.lt/api/v2/';

//   function featuringTemplate(peli) {
//     return (
//       `
//       <div class="featuring">
//         <div class="featuring-image">
//           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//           <p class="featuring-title">Pelicula encontrada</p>
//           <p class="featuring-album">${peli.title}</p>
//         </div>
//       </div>
//       `
//     )
//   }

//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img');
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50,
//     })
//     $featuringContainer.append($loader);

//     const data = new FormData($form);
//     const {
//       data: {
//         movies: pelis
//       }
//     } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
//     const HTMLString = featuringTemplate(pelis[0]);
//     $featuringContainer.innerHTML = HTMLString;
//   })

//   const actionList = await getData(`${BASE_API}list_movies.json?genre=action`)
//   const dramaList = await getData(`${BASE_API}list_movies.json?genre=drama`)
//   const animationList = await getData(`${BASE_API}list_movies.json?genre=animation`)
  
//   function videoItemTemplate(movie, category) {
//     return (
//       `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal($element)
//     })
//   }
//   function renderMovieList(list, $container, category) {
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie, category);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       addEventClick(movieElement);
//     })
//   }
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList.data.movies, $actionContainer, 'action');

//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList.data.movies, $dramaContainer, 'drama');

//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList.data.movies, $animationContainer, 'animation');

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function showModal($element) {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//     const id = $element.dataset.id;
//     const category = $element.dataset.category;
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';
//   }

// })()

// ===========================================================================================================

// FINDING ELEMENTS IN LIST

// (async function load() {

//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
//   }
//   const BASE_API = 'https://yts.lt/api/v2/';

//   function featuringTemplate(peli) {
//     return (
//       `
//       <div class="featuring">
//         <div class="featuring-image">
//           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//           <p class="featuring-title">Pelicula encontrada</p>
//           <p class="featuring-album">${peli.title}</p>
//         </div>
//       </div>
//       `
//     )
//   }

//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img');
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50,
//     })
//     $featuringContainer.append($loader);

//     const data = new FormData($form);
//     const {
//       data: {
//         movies: pelis
//       }
//     } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
//     const HTMLString = featuringTemplate(pelis[0]);
//     $featuringContainer.innerHTML = HTMLString;
//   })

//   const { data: { movies: actionList }} = await getData(`${BASE_API}list_movies.json?genre=action`)
//   const { data: { movies: dramaList }} = await getData(`${BASE_API}list_movies.json?genre=drama`)
//   const { data: { movies: animationList }} = await getData(`${BASE_API}list_movies.json?genre=animation`)
  
//   function videoItemTemplate(movie, category) {
//     return (
//       `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal($element)
//     })
//   }
//   function renderMovieList(list, $container, category) {
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie, category);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       addEventClick(movieElement);
//     })
//   }
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList, $actionContainer, 'action');

//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList, $dramaContainer, 'drama');

//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList, $animationContainer, 'animation');

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function findById(list, id) {
//     return list.find(movie => movie.id === parseInt(id, 10))
//   }

//   function findMovie(id, category) {
//     switch (category) {
//       case 'action': {
//         return findById(actionList, id)
//       }
//       case 'drama': {
//         return findById(dramaList, id)
//       }
//       default: {
//         return findById(animationList, id)
//       }
//     }
//   }

//   function showModal($element) {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//     const id = $element.dataset.id;
//     const category = $element.dataset.category;
//     const data = findMovie(id, category)
//     $modalTitle.textContent = data.title
//     $modalImage.setAttribute('src', data.medium_cover_image)
//     $modalDescription.textContent = data.description_full 
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';
//   }

// })()

// ===========================================================================================================

// ANIMATIONS

// (async function load() {

//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
//   }
//   const BASE_API = 'https://yts.lt/api/v2/';

//   function featuringTemplate(peli) {
//     return (
//       `
//       <div class="featuring">
//         <div class="featuring-image">
//           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//           <p class="featuring-title">Pelicula encontrada</p>
//           <p class="featuring-album">${peli.title}</p>
//         </div>
//       </div>
//       `
//     )
//   }

//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img');
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50,
//     })
//     $featuringContainer.append($loader);

//     const data = new FormData($form);
//     const {
//       data: {
//         movies: pelis
//       }
//     } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
//     const HTMLString = featuringTemplate(pelis[0]);
//     $featuringContainer.innerHTML = HTMLString;
//   })

//   function videoItemTemplate(movie, category) {
//     return (
//       `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal($element)
//     })
//   }
//   function renderMovieList(list, $container, category) {
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie, category);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       const image = movieElement.querySelector('img')
//       image.addEventListener('load', (event) => {
//         event.srcElement.classList.add('fadeIn');
//       })
//       addEventClick(movieElement);
//     })
//   }

  
//   const { data: { movies: actionList }} = await getData(`${BASE_API}list_movies.json?genre=action`)
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList, $actionContainer, 'action');
  
//   const { data: { movies: dramaList }} = await getData(`${BASE_API}list_movies.json?genre=drama`)
//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList, $dramaContainer, 'drama');
  
//   const { data: { movies: animationList }} = await getData(`${BASE_API}list_movies.json?genre=animation`)
//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList, $animationContainer, 'animation');

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function findById(list, id) {
//     return list.find(movie => movie.id === parseInt(id, 10))
//   }

//   function findMovie(id, category) {
//     switch (category) {
//       case 'action': {
//         return findById(actionList, id)
//       }
//       case 'drama': {
//         return findById(dramaList, id)
//       }
//       default: {
//         return findById(animationList, id)
//       }
//     }
//   }

//   function showModal($element) {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//     const id = $element.dataset.id;
//     const category = $element.dataset.category;
//     const data = findMovie(id, category)
//     $modalTitle.textContent = data.title
//     $modalImage.setAttribute('src', data.medium_cover_image)
//     $modalDescription.textContent = data.description_full 
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';
//   }

// })()

// ===========================================================================================================

// ERRORS VALIDATION

// (async function load() {
 
//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.data.movie_count > 0) { 
//       return data;
//     }
//     throw new Error('No se encontró ningun resultado');
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
//   }
//   const BASE_API = 'https://yts.lt/api/v2/';

//   function featuringTemplate(peli) {
//     return (
//       `
//       <div class="featuring">
//         <div class="featuring-image">
//           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//           <p class="featuring-title">Pelicula encontrada</p>
//           <p class="featuring-album">${peli.title}</p>
//         </div>
//       </div>
//       `
//     )
//   }

//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img');
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50,
//     })
//     $featuringContainer.append($loader);

//     const data = new FormData($form);
//     try {
//       const {
//         data: {
//           movies: pelis
//         }
//       } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)

//       const HTMLString = featuringTemplate(pelis[0]);
//       $featuringContainer.innerHTML = HTMLString;
//     } catch(error) {
//       alert(error.message);
//       $loader.remove();
//       $home.classList.remove('search-active');
//     }
//   })

//   function videoItemTemplate(movie, category) {
//     return (
//       `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       // alert('click')
//       showModal($element)
//     })
//   }
//   function renderMovieList(list, $container, category) {
//     // actionList.data.movies
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie, category);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       const image = movieElement.querySelector('img');
//       image.addEventListener('load', (event) => {
//         event.srcElement.classList.add('fadeIn');
//       })
//       addEventClick(movieElement);
//     })
//   }

//   const { data: { movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`)
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList, $actionContainer, 'action');

//   const { data: { movies: dramaList } } = await getData(`${BASE_API}list_movies.json?genre=drama`)
//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList, $dramaContainer, 'drama');

//   const { data: { movies: animationList } } = await getData(`${BASE_API}list_movies.json?genre=animation`)
//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList, $animationContainer, 'animation');

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function findById(list, id) {
//     return list.find(movie => movie.id === parseInt(id, 10))
//   }

//   function findMovie(id, category) {
//     switch (category) {
//       case 'action' : {
//         return findById(actionList, id)
//       }
//       case 'drama' : {
//         return findById(dramaList, id)
//       }
//       default: {
//         return findById(animationList, id)
//       }
//     }
//   }

//   function showModal($element) {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//     const id = $element.dataset.id;
//     const category = $element.dataset.category;
//     const data = findMovie(id, category);

//     $modalTitle.textContent = data.title;
//     $modalImage.setAttribute('src', data.medium_cover_image);
//     $modalDescription.textContent = data.description_full
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';
//   }

// })()

// ===========================================================================================================

// DARE: GET USER AND NEW MOVIES

// (async function load() {

//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.data.movie_count > 0) { 
//       return data;
//     }
//     throw new Error('No se encontró ningun resultado');
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
//   }
//   const BASE_API = 'https://yts.lt/api/v2/';

//   function featuringTemplate(peli) {
//     return (
//       `
//       <div class="featuring">
//         <div class="featuring-image">
//           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//           <p class="featuring-title">Pelicula encontrada</p>
//           <p class="featuring-album">${peli.title}</p>
//         </div>
//       </div>
//       `
//     )
//   }

//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img');
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50,
//     })
//     $featuringContainer.append($loader);

//     const data = new FormData($form);
//     try {
//       const {
//         data: {
//           movies: pelis
//         }
//       } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)

//       const HTMLString = featuringTemplate(pelis[0]);
//       $featuringContainer.innerHTML = HTMLString;
//     } catch(error) {
//       alert(error.message);
//       $loader.remove();
//       $home.classList.remove('search-active');
//     }
//   })

//   // -----------comedy loader-----------------------------------------------------------------------

//   const $img2 = document.createElement('img');
//   setAttributes($img2, {
//     src: 'src/images/loader.gif',
//     height: 50,
//     width: 50
//   })
//   const $comedyContainer = document.getElementById('comedyList')
//   $comedyContainer.append($img2)

//   // -----------users loader-----------------------------------------------------------------------

//   const $img3 = document.createElement('img');
//   setAttributes($img3, {
//     src: 'src/images/loader.gif',
//     height: 50,
//     width: 50,
//   })
//   const $usersContainer = document.getElementById('usersList');
//   $usersContainer.append($img3)

//   // -------------------------------------------------------------------------------------------------

//   function videoItemTemplate(movie, category) {
//     return (
//       `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal($element)
//     })
//   }
//   function renderMovieList(list, $container, category) {
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie, category);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       const image = movieElement.querySelector('img');
//       image.addEventListener('load', (event) => {
//         event.srcElement.classList.add('fadeIn');
//       })
//       addEventClick(movieElement);
//     })
//   }

//   const { data: { movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`)
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList, $actionContainer, 'action');

//   const { data: { movies: dramaList } } = await getData(`${BASE_API}list_movies.json?genre=drama`)
//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList, $dramaContainer, 'drama');

//   const { data: { movies: animationList } } = await getData(`${BASE_API}list_movies.json?genre=animation`)
//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList, $animationContainer, 'animation');

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function findById(list, id) {
//     return list.find(movie => movie.id === parseInt(id, 10))
//   }

//   function findMovie(id, category) {
//     switch (category) {
//       case 'action' : {
//         return findById(actionList, id)
//       }
//       case 'drama' : {
//         return findById(dramaList, id)
//       }
//       default: {
//         return findById(animationList, id)
//       }
//     }
//   }

//   function showModal($element) {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//     const id = $element.dataset.id;
//     const category = $element.dataset.category;
//     const data = findMovie(id, category);

//     $modalTitle.textContent = data.title;
//     $modalImage.setAttribute('src', data.medium_cover_image);
//     $modalDescription.textContent = data.description_full
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';
//   }

//   // ---------Comedy list exercise for playlist item----------

//   const { data: { movies: comedyList } } = await getData(`${BASE_API}list_movies.json?genre=comedy`)

//   function myPlaylistItemTemplate (movie) {
//     return (
//       `<li class="myPlaylist-item">
//         <a href="#">
//           <span>
//             ${movie.title}
//           </span>
//         </a>
//       </li>`
//     )
//   }

//   try {
//     $comedyContainer.children[0].remove();
//     comedyList.forEach(movie => {
//       const HTMLString = myPlaylistItemTemplate(movie)
//       const html = document.implementation.createHTMLDocument()
//       html.body.innerHTML = HTMLString
//       $comedyContainer.append(html.body.children[0])
//       $comedyContainer.classList.add('fadeIn');
//     }) 
//   } catch (error) {
//     throw new Error('Lista de comedia no fue resuelta')
//   }
  

//   // ----------User random generator exercise for profiles-----------

//   const { results: usersList } = await getUsers('https://randomuser.me/api/?results=20')
  
//   async function getUsers(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data
//   }
  
//   function playlistFriendsItemTemplate({ name: { first }, picture: { thumbnail } }) {
//     return (
//       `<li class="playlistFriends-item">
//         <a href="#">
//           <img src="${thumbnail}" alt="${first}" />
//           <span>
//             ${first}
//           </span>
//         </a>
//       </li>`
//     )
//   }

//   try {
//     $usersContainer.children[0].remove();
//     usersList.forEach(user => {    
//       const HTMLString = playlistFriendsItemTemplate(user)
//       const html = document.implementation.createHTMLDocument()
//       html.body.innerHTML = HTMLString
//       $usersContainer.append(html.body.children[0])
//       $usersContainer.classList.add('fadeIn');
//     })
//   } catch (error) {
//     throw new Error('No se pudieron encontrar usuarios')
//   }

// })()

// ===========================================================================================================

// LOCAL STORAGE

// importante:
// a) al hacer setItem con objetos usa JSON.stringify() en el VALOR, el navegador solo entiende string
// b) al hacer getItem con objetos usa JSON.parse() para que te traigas tu valor como objeto y no como string

// (async function load() {

//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.data.movie_count > 0) { 
//       return data;
//     }
//     throw new Error('No se encontró ningun resultado');
//   }
//   const $form = document.getElementById('form');
//   const $home = document.getElementById('home');
//   const $featuringContainer = document.getElementById('featuring');

//   function setAttributes($element, attributes) {
//     for (const attribute in attributes) {
//       $element.setAttribute(attribute, attributes[attribute]);
//     }
//   }
//   const BASE_API = 'https://yts.lt/api/v2/';

//   function featuringTemplate(peli) {
//     return (
//       `
//       <div class="featuring">
//         <div class="featuring-image">
//           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
//         </div>
//         <div class="featuring-content">
//           <p class="featuring-title">Pelicula encontrada</p>
//           <p class="featuring-album">${peli.title}</p>
//         </div>
//       </div>
//       `
//     )
//   }

//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     $home.classList.add('search-active')
//     const $loader = document.createElement('img');
//     setAttributes($loader, {
//       src: 'src/images/loader.gif',
//       height: 50,
//       width: 50,
//     })
//     $featuringContainer.append($loader);

//     const data = new FormData($form);
//     try {
//       const {
//         data: {
//           movies: pelis
//         }
//       } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)

//       const HTMLString = featuringTemplate(pelis[0]);
//       $featuringContainer.innerHTML = HTMLString;
//     } catch(error) {
//       alert(error.message);
//       $loader.remove();
//       $home.classList.remove('search-active');
//     }
//   })

//   // -----------comedy loader-----------------------------------------------------------------------

//   const $img2 = document.createElement('img');
//   setAttributes($img2, {
//     src: 'src/images/loader.gif',
//     height: 50,
//     width: 50
//   })
//   const $comedyContainer = document.getElementById('comedyList')
//   $comedyContainer.append($img2)

//   // -----------users loader-----------------------------------------------------------------------

//   const $img3 = document.createElement('img');
//   setAttributes($img3, {
//     src: 'src/images/loader.gif',
//     height: 50,
//     width: 50,
//   })
//   const $usersContainer = document.getElementById('usersList');
//   $usersContainer.append($img3)

//   // -------------------------------------------------------------------------------------------------

//   function videoItemTemplate(movie, category) {
//     return (
//       `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//     )
//   }
//   function createTemplate(HTMLString) {
//     const html = document.implementation.createHTMLDocument();
//     html.body.innerHTML = HTMLString;
//     return html.body.children[0];
//   }
//   function addEventClick($element) {
//     $element.addEventListener('click', () => {
//       showModal($element)
//     })
//   }
//   function renderMovieList(list, $container, category) {
//     $container.children[0].remove();
//     list.forEach((movie) => {
//       const HTMLString = videoItemTemplate(movie, category);
//       const movieElement = createTemplate(HTMLString);
//       $container.append(movieElement);
//       const image = movieElement.querySelector('img');
//       image.addEventListener('load', (event) => {
//         event.srcElement.classList.add('fadeIn');
//       })
//       addEventClick(movieElement);
//     })
//   }

//   const { data: { movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`)
//   localStorage.setItem('actionList', JSON.stringify(actionList))
//   const $actionContainer = document.querySelector('#action');
//   renderMovieList(actionList, $actionContainer, 'action');

//   const { data: { movies: dramaList } } = await getData(`${BASE_API}list_movies.json?genre=drama`)
//   localStorage.setItem('dramaList', JSON.stringify(dramaList))
//   const $dramaContainer = document.getElementById('drama');
//   renderMovieList(dramaList, $dramaContainer, 'drama');

//   const { data: { movies: animationList } } = await getData(`${BASE_API}list_movies.json?genre=animation`)
//   localStorage.setItem('animationList', JSON.stringify(animationList))
//   const $animationContainer = document.getElementById('animation');
//   renderMovieList(animationList, $animationContainer, 'animation');

//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

//   function findById(list, id) {
//     return list.find(movie => movie.id === parseInt(id, 10))
//   }

//   function findMovie(id, category) {
//     switch (category) {
//       case 'action' : {
//         return findById(actionList, id)
//       }
//       case 'drama' : {
//         return findById(dramaList, id)
//       }
//       default: {
//         return findById(animationList, id)
//       }
//     }
//   }

//   function showModal($element) {
//     $overlay.classList.add('active');
//     $modal.style.animation = 'modalIn .8s forwards';
//     const id = $element.dataset.id;
//     const category = $element.dataset.category;
//     const data = findMovie(id, category);

//     $modalTitle.textContent = data.title;
//     $modalImage.setAttribute('src', data.medium_cover_image);
//     $modalDescription.textContent = data.description_full
//   }

//   $hideModal.addEventListener('click', hideModal);
//   function hideModal() {
//     $overlay.classList.remove('active');
//     $modal.style.animation = 'modalOut .8s forwards';
//   }

//   // ---------Comedy list exercise for playlist item----------

//   const { data: { movies: comedyList } } = await getData(`${BASE_API}list_movies.json?genre=comedy`)

//   function myPlaylistItemTemplate (movie) {
//     return (
//       `<li class="myPlaylist-item">
//         <a href="#">
//           <span>
//             ${movie.title}
//           </span>
//         </a>
//       </li>`
//     )
//   }

//   try {
//     $comedyContainer.children[0].remove();
//     comedyList.forEach(movie => {
//       const HTMLString = myPlaylistItemTemplate(movie)
//       const html = document.implementation.createHTMLDocument()
//       html.body.innerHTML = HTMLString
//       $comedyContainer.append(html.body.children[0])
//       $comedyContainer.classList.add('fadeIn');
//     }) 
//   } catch (error) {
//     throw new Error('Lista de comedia no fue resuelta')
//   }
  

//   // ----------User random generator exercise for profiles-----------

//   const { results: usersList } = await getUsers('https://randomuser.me/api/?results=20')
  
//   async function getUsers(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data
//   }
  
//   function playlistFriendsItemTemplate({ name: { first }, picture: { thumbnail } }) {
//     return (
//       `<li class="playlistFriends-item">
//         <a href="#">
//           <img src="${thumbnail}" alt="${first}" />
//           <span>
//             ${first}
//           </span>
//         </a>
//       </li>`
//     )
//   }

//   try {
//     $usersContainer.children[0].remove();
//     usersList.forEach(user => {    
//       const HTMLString = playlistFriendsItemTemplate(user)
//       const html = document.implementation.createHTMLDocument()
//       html.body.innerHTML = HTMLString
//       $usersContainer.append(html.body.children[0])
//       $usersContainer.classList.add('fadeIn');
//     })
//   } catch (error) {
//     throw new Error('No se pudieron encontrar usuarios')
//   }

// })()

// ===========================================================================================================

// GETTING DATA FROM LOCAL STORAGE

(async function load() {

  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.data.movie_count > 0) { 
      return data;
    }
    throw new Error('No se encontró ningun resultado');
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');
  const $featuringContainer = document.getElementById('featuring');

  function setAttributes($element, attributes) {
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute]);
    }
  }
  const BASE_API = 'https://yts.lt/api/v2/';

  function featuringTemplate(peli) {
    return (
      `
      <div class="featuring">
        <div class="featuring-image">
          <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${peli.title}</p>
        </div>
      </div>
      `
    )
  }

  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $home.classList.add('search-active')
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader);

    const data = new FormData($form);
    try {
      const {
        data: {
          movies: pelis
        }
      } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)

      const HTMLString = featuringTemplate(pelis[0]);
      $featuringContainer.innerHTML = HTMLString;
    } catch(error) {
      alert(error.message);
      $loader.remove();
      $home.classList.remove('search-active');
    }
  })

  // -----------comedy loader-----------------------------------------------------------------------

  const $img2 = document.createElement('img');
  setAttributes($img2, {
    src: 'src/images/loader.gif',
    height: 50,
    width: 50
  })
  const $comedyContainer = document.getElementById('comedyList')
  $comedyContainer.append($img2)

  // -----------users loader-----------------------------------------------------------------------

  const $img3 = document.createElement('img');
  setAttributes($img3, {
    src: 'src/images/loader.gif',
    height: 50,
    width: 50,
  })
  const $usersContainer = document.getElementById('usersList');
  $usersContainer.append($img3)

  // -------------------------------------------------------------------------------------------------

  function videoItemTemplate(movie, category) {
    return (
      `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      showModal($element)
    })
  }
  function renderMovieList(list, $container, category) {
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      const image = movieElement.querySelector('img');
      image.addEventListener('load', (event) => {
        event.srcElement.classList.add('fadeIn');
      })
      addEventClick(movieElement);
    })
  }

  async function cacheExist (category) {
    const listName = `${category}List`
    const cacheList = localStorage.getItem(listName)
    if(cacheList) {
      return JSON.parse(cacheList)
    }
    const { data: { movies: data } } = await getData(`${BASE_API}list_movies.json?genre=${category}`)
    localStorage.setItem(listName, JSON.stringify(data))
    return data
  }

  const actionList = await cacheExist('action')
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action');

  const dramaList = await cacheExist('drama')
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');

  const animationList = await cacheExist('animation')
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation');

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');

  function findById(list, id) {
    return list.find(movie => movie.id === parseInt(id, 10))
  }

  function findMovie(id, category) {
    switch (category) {
      case 'action' : {
        return findById(actionList, id)
      }
      case 'drama' : {
        return findById(dramaList, id)
      }
      default: {
        return findById(animationList, id)
      }
    }
  }

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);

    $modalTitle.textContent = data.title;
    $modalImage.setAttribute('src', data.medium_cover_image);
    $modalDescription.textContent = data.description_full
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  // ---------Comedy list exercise for playlist item----------

  const comedyList = await cacheExist('comedy')

  function myPlaylistItemTemplate (movie) {
    return (
      `<li class="myPlaylist-item">
        <a href="#">
          <span>
            ${movie.title}
          </span>
        </a>
      </li>`
    )
  }

  try {
    $comedyContainer.children[0].remove();
    comedyList.forEach(movie => {
      const HTMLString = myPlaylistItemTemplate(movie)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = HTMLString
      $comedyContainer.append(html.body.children[0])
      $comedyContainer.classList.add('fadeIn');
    }) 
  } catch (error) {
    throw new Error('Lista de comedia no fue resuelta')
  }
  

  // ----------User random generator exercise for profiles-----------

  async function cacheUsersExist () {
    const listName = 'userList'
    const cacheList = localStorage.getItem(listName)
    if(cacheList) {
      return JSON.parse(cacheList)
    }
    const { results: usersList } = await getUsers('https://randomuser.me/api/?results=20')
    localStorage.setItem(listName, JSON.stringify(usersList))
    return usersList
  }

  const usersList = await cacheUsersExist()
  
  async function getUsers(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }
  
  function playlistFriendsItemTemplate({ name: { first }, picture: { thumbnail } }) {
    return (
      `<li class="playlistFriends-item">
        <a href="#">
          <img src="${thumbnail}" alt="${first}" />
          <span>
            ${first}
          </span>
        </a>
      </li>`
    )
  }

  try {
    $usersContainer.children[0].remove();
    usersList.forEach(user => {    
      const HTMLString = playlistFriendsItemTemplate(user)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = HTMLString
      $usersContainer.append(html.body.children[0])
      $usersContainer.classList.add('fadeIn');
    })
  } catch (error) {
    throw new Error('No se pudieron encontrar usuarios')
  }

})()
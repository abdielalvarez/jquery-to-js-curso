
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

(async function load() {
  
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');
  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    $home.classList.add('search-active')
  })

  const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
  
  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
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
      alert('click')
    })
  }
  function renderMovieList(list, $container) {
    
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      addEventClick(movieElement);
    })
  }
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer);

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer);

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer);

  const $featuringContainer = document.getElementById('#featuring');

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');

})()

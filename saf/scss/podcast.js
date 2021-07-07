let podcasts = [
    { 'url': '//html5-player.libsyn.com/embed/episode/id/17802794/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Think Positive: WFH with Mateen Duresmain' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/17802749/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Think Positive: WFH Rosemary Fricke' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/17802173/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Think Positive: Poverty Mixdown' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/16841537/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'The Future of Democracy' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/16455713/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Decolonising Education: Past and Present' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/15732968/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Disability Advocacy with Carson Tueller' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/14915213/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Connecting Online: Designing spaces for deliberation' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/14825138/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Covid-19: A Student Perspective' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/11086589/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Developing Ideas 4: Future of Education' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/9044600/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Developing Ideas 3: Campaigns' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/8364581/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Participatory Budgeting' },
    { 'url': '//html5-player.libsyn.com/embed/episode/id/8132774/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/e10098/', 'title': 'Developing Ideas 1: Democracy' }
];

let podcast_list = document.getElementById('podcast-list');
podcast_list.querySelector('LI').remove();

podcasts.forEach(function(podcast){ 
    let elmLi = document.createElement('LI');
    let elmA = document.createElement('A');
    elmA.setAttribute('data-podcast-title',podcast.title);
    elmA.setAttribute('data-podcast-url',podcast.url);
    // elmA.setAttribute('target', 'podcast-player');
    // elmA.setAttribute('href', podcast.url);
    elmA.addEventListener('click',function(event) { 
        console.log('Load a podcast ' + event.target.getAttribute('data-podcast-url'));   
        document.getElementById('podcast-player').src = event.target.getAttribute('data-podcast-url');
    });
    elmA.innerHTML = podcast.title;
    elmLi.append(elmA);
    podcast_list.append(elmLi);
});
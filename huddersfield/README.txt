Changes
============
- Seperated out stylesheets
- Drafted the Hud Helper utilities by drafting
- Took all !important overrides out
- Drafted second advert placement -> https://hudsu.unionclouduat.org/administrator/sites/104726/pages/98858/edit?locale=en
- Drafted Random CSS in footer -> https://hudsu.unionclouduat.org/administrator/sites/104726/pages/100750/edit?locale=en
- Disabled sticky menu 
- Added main Hudsu css for font faces to top of dev site -> <link rel="stylesheet" media="screen" href="https://www.unioncloud.org/assets/blank_default/stylesheets/style-d29efd0280f2aedd3b61a40c5c18796d1e88fec7c2e584daf9fa03d13eb68f37.css" /> 

Notes
===========
- 4 years of old sccripts and contents in the site (not sure if true for main)
- Mobile menu appears broken on certain sizes e.g. iPad
- Site crashes under certain conditions killing entire browser (mainly slows development)

Recommendations
====================
- Request live duplicate of site for dev purposes
- Backup and Clean out old scripts and code
- Locate handover of scripts
- Drastically reduce size (above will help) currently takes >7secs and 42 sec on mobile to display anything on average desktop browser and size nearly 8mb
- Mobile performance score from lighthouse 4/100 (desktop 40/100)
- Organise layout as close to possible tree structure
- Remove unused content -> 1192 design elements
- 44 randomly stored CSS snippets, may or may not be relevant to linked section
- Certain elements of the site will OPNLY work with Javascript, e.g. Menu

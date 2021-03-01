
CSS file usage
==============
Build command to combine CSS and copy to clipboard
Should be run from dir below 'css'

- Windows: in Powershell 
    type css\*.css | clip

- OSX: in Terminal
    cat css\*.css | pbcopy 

You can then paste into UnionCloud


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

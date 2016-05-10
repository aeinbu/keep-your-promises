# keep-your-promises
Kode fra presentasjonen min på Webstep Fokus sin åpne fagkveld torsdag 17. mars 2016.
Video av presentasjonen finner du her: https://www.youtube.com/watch?v=TDuDZTLKp_w

## Klargjør maskinen (Påkrevd oppsett)
- Installer node.js fra https://nodejs.org/
- Installer git command line fra https://git-scm.com/downloads
- I terminal/command prompt
  - Kjør `npm install -g gulp` (Det er mulig at du må bruke sudo på Mac: `sudo npm install -g gulp`)
  - Kjør `npm install -g bower` (Det er mulig at du må bruke sudo på Mac: `sudo npm install -g bower`)

## Hent ned og gjør klar dette prosjektet
I terminal/command prompt
```
git clone https://github.com/aeinbu/keep-your-promises.git
cd keep-your-promises
npm update
bower update
````

##Kjør prosjektet
- I terminal/command prompt
  - Kjør `gulp serve`
- Naviger til `http://localhost:8081/` i din nettleser.

__OBS:__ Hvis du har problemer med å kjøre `gulp serve` på Windows, så kan det være ett kjent problem med
browser-sync. Se https://www.browsersync.io/docs/#windows-users for hjelp. (Alternativt kan du fjerne alle
sporene etter browser sync.)


# Node.js web scrapper

### O projektu

Mám v hlavě projekt, ke kterému potřebuji data z webové stránky, která bohužel nemá API s danými údaji.

Takže jsem googlil, jak tato data získat. A objevil jsem **web scraping**.

Tenhle projektík jsem si extrémně užil. Nejenže jsem si vyzkoušel hromadu nových věcí, ale mám nástroj, který můžu dále použít :)

### Použité knihovny

- **express** node.js framework
- **cheerio** for picking up html elements from webpage
- **axios** for http requests
- **nodemon** pro monitoring změn v index.js

### Návod k použití

- **npm run start** - spusti nodemon
- do const **scrapedPageUrl** zadat adresu scrapovaného webu
- prohlédnout scrapovanou stránku pro použitelné html tagy obsahu, který chci scrapnout a dle toho upravit cheerio fci (řádky 16-25).

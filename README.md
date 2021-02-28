# Photo Viewer Application - frontend

A mappa a Photo Viewer projekt frontend részét tartalmazza. A telepítési útmutatóban megtalálható lépések elvégzésevel a webhely elérhetővé válik, adatbázis műveletek eléréshez a backend részt tartalmazó mappa klónozása is szükséges:
Photo Viewer Application - backend: https://github.com/CocoBloom/photo-viewer-with-codeigniter.git

## Telepítési útmutató

### git clone https://github.com/CocoBloom/photo-viewer-react.git
### npm install - A command végrehajtásával a függőságek telepítődnek a mappába.
### npm start - Raect applikáció indítása.

(Megjegyzés: a backend 80-as porton működik. Abban az esetben, ha a 80-as port használatban van, akkor frontenden cserélni kell az elérési útvonalat. Ennek helye a root mappából indulva: ./src/services/ApiService.js.
Cserélendő: const URL = 'http://localhost:8080' .)


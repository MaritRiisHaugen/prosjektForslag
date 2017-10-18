POST

GET


** Hente en liste**
GET /list/:id -> Returnerer liste som tilsvarer id eller 404



GET /about -> Returnerer en tekst om siden

GET /login -> logger inn på siden

GET /logout -> logger ut av siden

GET /home -> henter opp hovedsiden


** Lage liste **


POST /list/:name -> Lager en liste name og returnerer objekt (se skjema) 

POST /createAcct/:userName -> Lager en ny konto med et brukernavn

POST /done -> Sender list item til en done-liste


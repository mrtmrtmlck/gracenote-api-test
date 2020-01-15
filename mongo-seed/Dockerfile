FROM mongo

COPY auto-racing.json /auto-racing.json
COPY cricket.json /cricket.json

CMD mongoimport --host mongodb --db gns-api --collection sportsevents --type json --file /auto-racing.json --jsonArray; mongoimport --host mongodb --db gns-api --collection sportsevents --type json --file /cricket.json --jsonArray

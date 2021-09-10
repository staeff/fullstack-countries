# Countries

`restcountries` project from `https://fullstackopen.com/`

Deployed at https://fullstackopen-coutries.surge.sh

## Requirements

* The app should display data of various countries provided by https://restcountries.eu

* Get the country data from https://restcountries.eu/#api-endpoints-all

* A search field, country should be shown by typing into the field. If more than 10 records match the query, no search result is shown but the message "Too many matches, search more specific"

* If there are ten or fewer countries, but more than one, then all countries matching the query are shown

* When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken there, are shown.

* The application works for most of the countries. Some countries are not supported, e.g. when there are name clashes and it can't reduced to a single country like with Sudan and South Sudan.

* No country found - option

* Add button next to several country listing, that links to the country in question

* Add weather of the countries capital, retrieved from weather api. The tutorial uses
https://weatherstack.com/. Inspiration for other weather apis with a free tier:

* https://rapidapi.com/blog/access-global-weather-data-with-these-weather-apis/

* https://rapidapi.com/collection/yahoo-weather

## Data

This is the record for Swiss: https://restcountries.eu/rest/v2/alpha/ch

It has the following Attributes/Entries:

"name",
"topLevelDomain",
"alpha2Code",
"alpha3Code",
"callingCodes",
"capital",
"altSpellings",
"region",
"subregion",
"population",
"latlng",
"demonym",
"area",
"gini",
"timezones",
"borders",
"nativeName",
"numericCode",
"currencies",
"languages",
"translations",
"flag",
"regionalBlocs",
"cioc"

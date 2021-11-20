"use sctrict";
const number0Films= +prompt('Сколько фильмов вы уже посмотрели?', "");
const personalMovieDB={
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = propmt('Один из последних просмотренных фильмов',''),
      b = prompt('На сколко оценьте его?', ''),
      c = prompt('Один из последних просмотренных фильмов',''),
      d = prompt('На сколко оценьте его?', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
concole.log(personalMovieDB);
  









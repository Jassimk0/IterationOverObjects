const students = [
  {
    studentId: 1,
    name: "Alice Johnson",
    subjects: [
      {
        subjectName: "Mathematics",
        teacher: "Mr. Smith",
        grades: {
          midterm: 88,
          final: 92,
          homework: [
            { assignmentId: 1, score: 85 },
            { assignmentId: 2, score: 90 },
            { assignmentId: 3, score: 95 },
          ],
        },
      },
      {
        subjectName: "History",
        teacher: "Mrs. Davis",
        grades: {
          midterm: 75,
          final: 80,
          homework: [
            { assignmentId: 1, score: 70 },
            { assignmentId: 2, score: 85 },
            { assignmentId: 3, score: 90 },
          ],
        },
      },
    ],
  },
  {
    studentId: 2,
    name: "Bob Williams",
    subjects: [
      {
        subjectName: "Science",
        teacher: "Dr. Brown",
        grades: {
          midterm: 91,
          final: 87,
          homework: [
            { assignmentId: 1, score: 89 },
            { assignmentId: 2, score: 93 },
            { assignmentId: 3, score: 88 },
          ],
        },
      },
      {
        subjectName: "English",
        teacher: "Ms. Green",
        grades: {
          midterm: 84,
          final: 89,
          homework: [
            { assignmentId: 1, score: 82 },
            { assignmentId: 2, score: 87 },
            { assignmentId: 3, score: 91 },
          ],
        },
      },
    ],
  },
];

console.log(
  students[0].subjects[1].grades.homework[0].score +
    students[0].subjects[1].grades.homework[1].score +
    students[0].subjects[1].grades.homework[2].score
);

const person = {
  name: "Jassim Alkhadhari",
  age: 18,
  city: "Kuwait",
};

person.email = "Jassimk08@gmail.com";

console.log(person);

object = {
  name1: "jassim",
  age1: 19,
};

const key = "name1";

function hasKey(object, key) {
  if (object[key]) {
    console.log(true);
  } else {
    console.log(false);
  }
}

hasKey(object, "name1");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

function movietitles(mov) {
  mov.forEach((movie) => {
    console.log(movie.title);
  });
}

movietitles(movies);

let num = 0;

function releasedate(dates) {
  dates.forEach((mov) => {
    if (mov.year === 1994) {
      console.log(mov.year);
      num = num + 1;
    }
  });
}

releasedate(movies);
console.log(num);

function groupMoviesByGenre(genre) {
  genre.forEach((movie) => {
    if (movie.title === "The Dark Knight") {
      movie.genre = "Action/Drama";
    }
  });
  return genre;
}

console.log(groupMoviesByGenre(movies));

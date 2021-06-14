export interface Movie{
  id? : number,
  title? : string,
  description? : string,
  releaseYear? : number,
  realisator? : Person,
  scenarist? : Person, 
  actors? : Actor[]
}

export interface Person{
  id? : number,
  lastName? : string,
  firstName? : string
}

export interface Actor {
    id? : number,
    role? : string,
    lastName? : string,
    firstName? : string
}


// Post
export interface Casting
{
  movieId : number,
  personId : number,
  role : string
}

export interface MovieToDal{
  title? : string,
  description? : string,
  releaseYear? : number,
  realisatorID? :  number,
  scenaristID? :  number
}

export interface PersonToDal{

  lastName? : string,
  firstName? : string
}



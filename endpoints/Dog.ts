import { Endpoint } from "@rest-hooks/endpoint"

interface DogRaw {
	message: string,
	status: string
}

type Dog = string

const fetchDogImageRandom = (breed: string): Promise<Dog> =>
	fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(res =>
	  res.json() as Promise<DogRaw>
	).then(json => json.message)

const dogImageRandom = new Endpoint(fetchDogImageRandom)

export default dogImageRandom
export type { Dog }

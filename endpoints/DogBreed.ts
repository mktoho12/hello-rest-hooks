import { Endpoint } from "@rest-hooks/endpoint"

interface BreedsRaw {
	message: {
		[key: string]: string[]
	},
	status: string
}

type Breeds = string[]

const fetchBreedList = (): Promise<Breeds> =>
	fetch('https://dog.ceo/api/breeds/list/all').then(res =>
	  res.json() as Promise<BreedsRaw>
	).then(json =>
		Object
      .entries(json.message)
		  .map(([key, value]) =>
			  [key].concat(value.map(v => `${key}/${v}`))
		  )
      .flat()
	)

const breeds = new Endpoint(fetchBreedList)

export default breeds
export type { Breeds }

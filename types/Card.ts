export default interface Mini {
  id: string,
  image: string,
  title: string,
  city: string,
  status: Status,
  price: string
}

export type Status = 'Now Leasing' | 'NotLeasing'

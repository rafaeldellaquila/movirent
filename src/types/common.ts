export interface AuthProps {
  email: string
  password: string
  status: boolean
}

export interface PersonalDataProps {
  name: string
  tel: string
  document: string
  email: string
  uid: string
}

export interface AddressProps {
  cep: string
  street: string
  neighborhood: string
  city: string
  state: string
}

export type UserProps = PersonalDataProps & AuthProps
export type ClientProps = PersonalDataProps & AddressProps

export interface FilmProps {
  Poster: string
  Title: string
  Year: string
  Type: string
  Rent: boolean
}

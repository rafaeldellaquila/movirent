export interface UserProps {
  uid: string
  name: string
  email: string
  tel: string
  cep: string
  document: string
  street: string
  neighborhood: string
  city: string
  state: string
  password: string
}

export type AddressProps = Pick<UserProps, 'street' | 'neighborhood' | 'city' | 'state' | 'cep'>
export type PersonalDataProps = Pick<UserProps, 'name' | 'email' | 'tel' | 'document'>

interface Mask {
  [key: string]: string
}

const mask: Mask = {
  tel: '## #####-####',
  document: '###.###.###-##',
  cep: '#####-###',
  default: ''
}

const useMask = (input: string): string => {
  const has = Object.prototype.hasOwnProperty.call(mask, input)
  return has ? mask[input] : mask['default']
}

export default useMask

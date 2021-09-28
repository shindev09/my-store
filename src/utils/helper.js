export const isEmail = value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
  try {
    const res = await asyncFunc(arg)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}

export const getIdFromNameId = url => {
  const arr = url.split('-i.')
  return arr[arr.length - 1]
}

export const generateNameId = ({ name, _id }) =>
  encodeURIComponent(`${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id}`)

export const formatMoney = (value, character = '.') => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, character)

export const formatK = value => {
  const price = Number((Number(value) / 1000).toFixed(2))
  if (price > 1) {
    return price + 'k'
  }
  return value
}

export const rateSale = (original, sale) => Math.round(((original - sale) / original) * 100) + '%'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { payloadCreator } from 'src/utils/helper'
import productApi from 'src/api/product.api'
import purchaseApi from 'src/api/purchase.api'

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  payloadCreator(productApi.getProductDetail)
)

export const addToCart = createAsyncThunk('productDetail/addToCart', payloadCreator(purchaseApi.addToCart))

import { HTTPResponse, ProductParams } from '@/types'
import { AxiosPromise } from 'axios'
import { axiosInstance } from './axiosInstance'

const productAPI = {
  getProductList: (
    params?: ProductParams
  ): AxiosPromise<HTTPResponse<{ total: number; products: any }>> => {
    return axiosInstance.post('https://hpgroup.satavan.vn/api/v3.0/product/get_product', {
      params: {
        ...params,
        // partner_id: store?.getState()?.user?.userInfo?.id || 0,
      },
    })
  },
}

export { productAPI }

import { request } from './request'
// 根据类别查询商品数据
export function getGoodsData(cid) {
  return request({
    url: `/product/listbycid/${cid}`
  })
}
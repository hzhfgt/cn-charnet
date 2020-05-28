import request from '@/utils/request'

//  字义关系
export function addVariants(data) {
  return request({
    url: '/add/meaningRelations/variants',
    method: 'post',
    data
  })
}

//  其他关系
export function addTongjiazi(data) {
  return request({
    url: '/add/otherRelations/tongjiazi',
    method: 'post',
    data
  })
}

//  审核

export function refresh_tongjiazi(data) {
  return request({
    url: '/add/shenhe/refresh_tongjiazi',
    method: 'get'
  })
}

export function refresh_variants(data) {
  return request({
    url: '/add/shenhe/refresh_variants',
    method: 'get'
  })
}

export function addTongjiazi_SH(data) {
  return request({
    url: '/add/shenhe/tongjiazi',
    method: 'post',
    data
  })
}

export function addVariants_SH(data) {
  return request({
    url: '/add/shenhe/variants',
    method: 'post',
    data
  })
}

export function deleteTongjiazi_SH(data) {
  return request({
    url: '/add/shenhe/tongjiazi_delete',
    method: 'post',
    data
  })
}

export function deleteVariants_SH(data) {
  return request({
    url: '/add/shenhe/variants_delete',
    method: 'post',
    data
  })
}

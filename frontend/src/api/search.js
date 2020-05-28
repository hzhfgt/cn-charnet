import request from '@/utils/request'

// 单字查询

export function getSingleCharInfo(charName) {
  return request({
    url: '/search/singleChar/info',
    method: 'get',
    params: { charName: charName }
  })
}

export function getSingleCharMeaning(charName) {
  return request({
    url: '/search/singleChar/meaning',
    method: 'get',
    params: { charName: charName }
  })
}

// 字形关系

export function getComponents(charName) {
  return request({
    url: '/search/shapeRelations/whole-part',
    method: 'get',
    params: { charName: charName }
  })
}

export function getSimilarStructure(charName) {
  return request({
    url: '/search/shapeRelations/similarStructure',
    method: 'get',
    params: { charName: charName }
  })
}

export function getSimilarComponent(charName) {
  return request({
    url: '/search/shapeRelations/similarComponent',
    method: 'get',
    params: { charName: charName }
  })
}

export function getSimilarChoke(charName) {
  return request({
    url: '/search/shapeRelations/similarChoke',
    method: 'get',
    params: { charName: charName }
  })
}

// 字义关系

export function getRelatedMeaning(charName) {
  return request({
    url: '/search/meaningRelations/fanCha',
    method: 'get',
    params: { charName: charName }
  })
}

export function getRelatedMeaning_SW(charName) {
  return request({
    url: '/search/meaningRelations/fanCha_SW',
    method: 'get',
    params: { charName: charName }
  })
}

export function getVariants(charName) {
  return request({
    url: '/search/meaningRelations/variants',
    method: 'get',
    params: { charName: charName }
  })
}

//  字音关系

export function getPronounce(charName, options) {
  return request({
    url: '/search/pronounceRelations',
    method: 'get',
    params: { charName: charName, options: options }
  })
}

//  其他关系
export function getTongjiazi(charName) {
  return request({
    url: '/search/otherRelations/tongjiazi',
    method: 'get',
    params: { charName: charName }
  })
}

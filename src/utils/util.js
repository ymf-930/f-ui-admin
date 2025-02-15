import { Utils, Notice } from 'f-ui-one'

export const generateId = Utils.helper.generateId


export const getUuid = Utils.util.uuid

export const copyText = Utils.util.copy

export const typeOf = Utils.util.typeOf

export const deepCopy = Utils.util.deepCopy

export const deepMerge = Utils.util.deepMerge

export const throttle = Utils.util.throttle

export const debounce = Utils.util.debounce

export const isEmpty = Utils.helper.isEmpty

export const on = Utils.dom.on

export const off = Utils.dom.off

export const addClass = Utils.dom.addClass

export const addResizeListener = Utils.resize.addResizeListener

export const removeResizeListener = Utils.resize.removeResizeListener

/**
 * arraybuffer 流文件转换为base64图像
 * @param data
 */
export function arraybuffer2Base64(data) {
  return (
    'data:image/png;base64,' +
    window.btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
  )
}

/**
 * 抛异常公共函数，用于请求接口或其他异常捕捉错误信息
 * @param callFun 调用函数，用于记录错误调用来源 ，一般复制当前啊函数名称，或者填入说明信息 login/getVerifyCode
 * @param e 错误消息
 * @param title alert和notice模块选填，错误标题
 * @param log 是否打印到控制台
 */
export function throwError(callFun, e, title, log = true) {
  if (e.statusCode === 401) {
    Notice.warning({ title: title || '提示', message: e.message || '操作错误！' })
  } else {
    Notice.error({ title: title || '错误', message: e.message || '操作错误！' })
  }
  if (log) {
    const str = callFun.split('/')
    if (str && str.length >= 2) {
      Utils.log.pretty(str[0], str[1], 'danger')
    }
    console.log(e)
    Utils.log.danger('----------------------------------------------------------')
  }
}

// 数组转对象值
export function arrToObj(arr = [], keyCode = 'key', valueCode = 'value') {
  const map = new Map()
  if (arr.length === 0) return {}
  arr.forEach(item => {
    map.set(item[keyCode], item[valueCode])
  })
  const obj = {}
  for (const [k, v] of map) {
    obj[k] = v
  }
  return obj
}

// 下载文件
export function downloadFile(content, fileName) {
  // filename，摘取了常用的部分，其实还有其他一些
  const typeMap = {
    pdf: 'application/pdf',
    doc: 'application/vnd.ms-word',
    docx: 'application/vnd.ms-word',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.ms-excel',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.ms-powerpoint',
    js: 'application/x-javascript',
    zip: 'application/zip',
    mp3: 'audio/mpeg',
    gif: 'image/gif',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    png: 'image/png',
    txt: 'text/plain',
    xml: 'image/text/xml',
  }
  const hg = fileName.split('.').pop().toLocaleLowerCase() || ''

  const data = new Blob([content], { type: typeMap[hg] })
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(data, fileName)
  } else {
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(data)
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(link.href)
  }
}

// 判断是否包含属性
export function hasKey(obj, key) {
  return Object.keys(obj).includes(key)
}

/**
 * 处理拉平树结构
 * @param stateTree
 * @returns {*[]}
 */
export function compileFlatState(stateTree) {
  let keyCounter = 0
  let childrenKey = 'children'
  const flatTree = []

  const flattenChildren = (node, parent, parentKeys) => {
    if (isEmpty(node)) return
    node.nodeKey = keyCounter++
    flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey }
    if (typeof parent !== 'undefined') {
      flatTree[node.nodeKey].parent = parent.nodeKey
      flatTree[parent.nodeKey][childrenKey].push(node.nodeKey)
    }
    let parents = parentKeys ? parentKeys.split(',').map(i => +i) : []
    // 拼接parents
    if (typeof parentKeys !== 'undefined') {
      parents.push(parent.nodeKey)
      flatTree[node.nodeKey].parents = parents
    }

    if (node[childrenKey]) {
      flatTree[node.nodeKey][childrenKey] = []
      node[childrenKey].forEach(child => flattenChildren(child, node, parents.join(',')))
    }
  }

  stateTree.map(i => flattenChildren(i))
  return flatTree
}

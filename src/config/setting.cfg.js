/**
 * 项目默认配置项
 */
import { Utils } from 'f-ui-one'

const { getPalette, mixBlack, alpha } = Utils.color

// 全局setting变量
export default {
  theme: 'dark',
  menuTheme: '#001529',
  systemPrimary: '#3366ff',
  sidebar: true, // 侧边栏开启状态
  sidebarWidth: 256, // 侧边栏宽度
  tagsView: true, // 多页签开启状态
  tagsType: 'clever', // card、clever、smooth
  routerTransitionName: 'fade-in',
  fixedHeader: true,
  fixedAside: true,
  showWeather: true,
  showSearch: true,
  showMessage: true,
  showCollapse: true,
  contentFull: false, // 中间内容区域是否撑满
}

export const SYSTEM_PRIMARY_COLOR_LIST = [
  '#3366ff',
  '#009688',
  '#1976d2',
  '#536def',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
]

export const MENU_THEME_COLOR_LIST = [
  '#001529',
  '#273352',
  '#ffffff',
  '#191b24',
  '#304156',
  '#031d21',
  '#28333E',
  '#292c37',
  '#383f45',
]

const MENU_THEME_VAR = '--menu-bg-color'
const MENU_THEME_ACTIVE_VAR = '--menu-bg-active-color'

export function setCssVar(prop, val, dom = document.documentElement) {
  dom.style.setProperty(prop, val)
}

export function setAttrVar(prop, val, dom = document.documentElement) {
  dom.setAttribute(prop, val)
}

// 设置全局theme皮肤
export function setThemeMode(theme = 'light') {
  setAttrVar('data-theme', theme)
}

// 设置全局主题色变量
export function setPrimaryColor(color) {
  const paletteColors = getPalette(color)
  // alpha
  const shadow = alpha(color, 0.2)

  // 覆盖默认主题色
  setCssVar('--fei-color-primary-active', paletteColors[3])
  setCssVar('--fei-color-primary', paletteColors[4])
  setCssVar('--fei-color-primary-light1', paletteColors[5])
  setCssVar('--fei-color-primary-light2', paletteColors[6])
  setCssVar('--fei-color-primary-light3', paletteColors[7])
  setCssVar('--fei-color-primary-light4', paletteColors[8])
  setCssVar('--fei-color-primary-light5', paletteColors[9])
  setCssVar('--fei-color-primary-light6', paletteColors[10])
  setCssVar('--fei-color-input-shadow', shadow)
}

// 设置menuTheme
export function setMenuTheme(color) {
  // bg color
  const activeColor = mixBlack(color, 0.2)
  setCssVar(MENU_THEME_VAR, color)
  setCssVar(MENU_THEME_ACTIVE_VAR, activeColor)
}

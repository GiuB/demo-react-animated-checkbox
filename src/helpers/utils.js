export default class {
  /**
   * From hex to rgb
   * source: https://github.com/styled-components/polished/issues/44#issuecomment-274660624
   * @param {string} hex
   * @return {array} width [r, g, b]
   */
  static hex2Rgb = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16)
    const b = parseInt(hex.substring(5, 7), 16)
    const g = parseInt(hex.substring(3, 5), 16)

    return [r, g, b]
  }
}

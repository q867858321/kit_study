/**
 * @Description:
 * @author marin
 * @date 2/20/19
 */

export default function createUniqueString() {
  const timestamp = +new Date() + '';
  const randomNum = parseInt((1 + Math.random()) * 65536) + '';
  return (+(randomNum + timestamp)).toString(32)
}

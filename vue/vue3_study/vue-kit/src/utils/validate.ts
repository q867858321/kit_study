// 验证手机
export function isPhone(tel: string): boolean {
  return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(tel);
}
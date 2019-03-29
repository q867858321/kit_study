/**
 * @Description:
 * @author marin
 * @date 2/20/19
 * 
 */
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title);

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('route.' + title);

    return translatedTitle
  }
  return title
}

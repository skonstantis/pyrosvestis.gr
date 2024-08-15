/* Author: Sotiris Konstantis */

export const onSettingClick = (e, value, set) => {
   e.stopPropagation();
   set(!value);
};
  
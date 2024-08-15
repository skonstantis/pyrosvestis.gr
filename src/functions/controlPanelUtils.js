/* Author: Sotiris Konstantis */

export const onSettingClick = (e, value, set) => {
   e.preventDefault();
   set(!value);
};
  
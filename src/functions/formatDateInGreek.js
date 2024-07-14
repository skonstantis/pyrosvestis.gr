/* Author: Sotiris Konstantis */

export const formatDateInGreek = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', locale: 'el-GR' };
    const date = new Date(dateString);
    return date.toLocaleDateString('el-GR', options);
  };
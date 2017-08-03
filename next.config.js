// @flow
// next.config.js

exports.exportPathMap = () => {
  // console.log(process.env.CURRENT_ITEM);
  // console.log(process.env.EXTERNAL_PATH);
  console.log('hier', process.env.CURRENT_ITEM === 'home' ? '/' : `/${process.env.CURRENT_ITEM}`)
  return {'/': {page: process.env.CURRENT_ITEM === 'home' ? '/' : `/${process.env.CURRENT_ITEM}`}}
}

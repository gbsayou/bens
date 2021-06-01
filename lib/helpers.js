import remark from 'remark'
import html from 'remark-html'
const imgHost = process.env.imgHost

export const checkEmail = (email) => {
  const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(email);
};

const replaceImagePath = (markdown)=>{
  let result = markdown
  result = result.replace(/]\(\/images\//g, `](${imgHost}/images/`)
  return result
}

export const markdownToHtml = async(markdown)=>{
  const replacedImage = replaceImagePath(markdown)
  const result = await remark().use(html).process(replacedImage)
  return result.toString()
}

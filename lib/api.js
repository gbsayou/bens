import axios from "axios";
const cmsHost = process.env.cmsHost

export const getCategoriesSummary = async ()=>{
  const {data} = await axios.get(`${cmsHost}/categories/summary`)
  return data
}

export const getCategoryDetail = async (name)=>{
  const {data} = await axios.get(`${cmsHost}/categories/${name}`)
  return data
}

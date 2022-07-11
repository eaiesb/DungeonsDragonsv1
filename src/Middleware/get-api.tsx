import axios from "axios";
import { dragonData } from '../Config/Config';


export default  function getAllRecords()
  {
      return axios.get(dragonData.dragonData.getAll)
  }

export function getNameRecords (name : string)
  {
    return axios.get(dragonData.dragonData.getAll+"/"+name)
  }
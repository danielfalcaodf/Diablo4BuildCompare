import { Set } from "./set.interface"

export interface Planner {
  id: string,
  name: string,
  class: string,
  category: string,
  season: string,
  username: string
  sets: Set[];
}
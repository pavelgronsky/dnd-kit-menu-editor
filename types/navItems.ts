export type TNaItem = {
  name: string,
  icon: string,
  url: string,
  items?: TNaItem[]
}

export type TNavItems = TNaItem & {
  items?: TNaItem[]
};
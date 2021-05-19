type FloatingMenu = {
  title: string
  eventName: string
}

export const floatingMenus: FloatingMenu[] = [
  {
    title: '머리말',
    eventName: 'onFloatTopHeading'
  },
  {
    title: '제목',
    eventName: 'onFloatHeading'
  },
  {
    title: '부제목',
    eventName: 'onFloatSubHeading'
  },
  {
    title: '리스트',
    eventName: 'onFloatList'
  }
]

import { data } from './data'

function withId(data) {
  return data.map((element, index) => {
    return {
      id: index + 1,
      header: element.header,
      options: element.options,
      text: element.text,
    }
  });
}

export const dataApi = withId(data)
export const capitalize = <T extends string>(s: T): Capitalize<T> => {
  return (s[0].toUpperCase() + s.substring(1)) as Capitalize<T>
}

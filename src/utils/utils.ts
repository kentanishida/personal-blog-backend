export const buildEntities = async <T, U>(
  entities: T[],
  builder: (item: T) => U,
): Promise<U[]> => {
  const builtEntities = entities.map((entity) => {
    return builder(entity)
  })
  return builtEntities
}

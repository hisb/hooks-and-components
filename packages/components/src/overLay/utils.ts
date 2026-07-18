export const attachPropertiesToComponent = <C, T extends Record<string, any> = {}>(Comp: C, properties: T): C => {
  let key: keyof T;
  for(key in properties) {
    (Comp as any)[key] = properties[key];
  }
  return Comp;
}
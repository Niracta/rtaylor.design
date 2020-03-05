type IsActive = (options: { name: string; values: Record<any, any> | undefined; value: any }) => boolean;

export const isActive: IsActive = ({ name, values, value }) => {
  const currentValue = values?.[name];
  switch (true) {
    case values && Array.isArray(currentValue):
      return currentValue.includes(value);
    case typeof currentValue === `string`:
      return currentValue === value;
    default:
      return !!values?.[name];
  }
};

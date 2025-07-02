export const revealClasses = (
  classNames: string | undefined,
  reveal: string
): [string | undefined, string | undefined] => {
  const classesArray = classNames?.split(" ");

  let classesWithoutReveal = classNames ? "" : undefined;
  let revealClass = undefined;

  classesArray?.forEach((cls) => {
    if (cls.includes(reveal)) {
      revealClass = cls;
    } else classesWithoutReveal += cls;
  });

  return [classesWithoutReveal, revealClass];
};

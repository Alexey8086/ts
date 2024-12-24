// В TypeScript type guard — это механизм, который
// помогает сужать типы переменных в определённой области видимости.
// Когда вы проверяете тип переменной с помощью условий (например, if, switch и т. п.),
// TypeScript может автоматически определить более точный тип этой переменной
// для последующего использования.

// is в контексте type guard — это специальный синтаксис,
// который позволяет создавать собственные функции,
// которые будут определять тип переменной в процессе выполнения.

// Когда вы работаете с типами объединений (например, Dog | Cat),
// TypeScript не может точно знать, какой из типов используется,
// пока вы явно не уточните это.
// Type guards с использованием is позволяют сделать такие уточнения в коде,
// чтобы TypeScript мог корректно работать с типами на протяжении всей программы

type Animal = Cat | Dog;

interface Cat {
  kind: 'cat';
  radius: number;
}

interface Dog {
  kind: 'dog';
  sideLength: number;
}

function isCat(animal: Animal): animal is Cat {
  return animal.kind === 'cat';
}

function doVoice(animal: Animal): string {
  if (isCat(animal)) return 'Meow, Meow';
  else return 'Gaf, Gaf';
}

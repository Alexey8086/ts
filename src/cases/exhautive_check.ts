// Exhaustive check, или исчерпывающая проверка, в контексте TypeScript
// используется для обеспечения того, чтобы все возможные варианты типов
// или значений были обработаны в коде, что особенно полезно при работе
// с объединениями типов (union types) и перечислениями (enums).
// Один из способов реализации exhaustive check
// в TypeScript — использование оператора never.
// Этот тип представляет значения, которые никогда не должны произойти.
// Используя never, вы можете убедиться, что все варианты были исчерпаны в switch-case или в серии if-else блоках.

function exhaustiveCheck(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

// Пример с перечислением (enum):
enum Colors {
  Red,
  Green,
  Blue,
}

function getColorName(color: Colors): string {
  switch (color) {
    case Colors.Red:
      return 'Red';
    case Colors.Green:
      return 'Green';
    case Colors.Blue:
      return 'Blue';
    default:
      // вызовет ошибку, если будет добавлен новый цвет (в enum Colors) и не обработан здесь.
      return exhaustiveCheck(color);
  }
}

// Пример с union типами
type Shape = 'circle' | 'square' | 'triangle';

function getShapeInfo(shape: Shape): string {
  switch (shape) {
    case 'circle':
      return 'Round shape';
    case 'square':
      return 'Four equal sides';
    case 'triangle':
      return 'Three sides';
    default:
      // Ошибка, если добавится новая форма в Shape и не обработана здесь.
      return exhaustiveCheck(shape);
  }
}

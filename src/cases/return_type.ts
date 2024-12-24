// В TypeScript есть утилиты ReturnType и Parameters,
// которые помогают извлечь тип возвращаемого значения
// или параметры из функции, когда тип функции неизвестен.

// ReturnType нужен если у нас к примеру функция, какой-то библиотеки
// И мы не знаем какой тип она возвращает, но с помощью ReturnType
// мы можем узнать и обойти этот момент.

// # Пример 1:
function add(a: number, b: number): number {
  return a + b;
}

// Извлекаем тип возвращаемого значения
type AddReturnType = ReturnType<typeof add>; // тип number

// # Пример 2:
function fetchData(): Promise<{ data: string }> {
  return Promise.resolve({ data: 'Hello' });
}

type FetchReturnType = ReturnType<typeof fetchData>; // Promise<{ data: string }>

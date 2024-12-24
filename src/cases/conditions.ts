// Conditional Types в TypeScript — это инструмент, который позволяет создавать типы,
// зависящие от условий. Они работают по принципу "если-иначе",
// проверяя один тип и выводя другой на основе результата проверки.

// Синтаксис Conditional Types: "T extends U ? X : Y"
// T — проверяемый тип.
// U — условие (тип, с которым сравнивается T).
// Если T является подтипом U, используется тип X, иначе — Y.

type ResourceTypes = {
  users: { id: number; name: string };
  posts: { id: number; title: string };
  comments: { id: number; postId: number };
};

type APIResponse<T extends keyof ResourceTypes> = ResourceTypes[T];

function fetchResource<T extends keyof ResourceTypes>(
  resource: T,
): Promise<APIResponse<T>[]> {
  return fetch(`/api/${resource}`).then((res) => res.json());
}

// Использование:
async function example() {
  const users = await fetchResource('users');
  // Тип: { id: number; name: string }[]

  const posts = await fetchResource('posts');
  // Тип: { id: number; title: string }[]

  const comments = await fetchResource('comments');
  // Тип: { id: number; postId: number }[]
}

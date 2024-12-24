//###### 1. Partial<T>
// Делает все свойства объекта необязательными.
type User1 = { id: number; name: string; age: number };
const partialUser: Partial<User1> = { name: 'John' };

//###### 2. Required<T>
// Делает все свойства объекта обязательными.
type User2 = { id?: number; name?: string };
const requiredUser: Required<User2> = { id: 1, name: 'John' }; // Все свойства обязательны

//###### 3. Readonly<T>
// Делает все свойства объекта доступными только для чтения.
type User3 = { id: number; name: string };
const readonlyUser: Readonly<User3> = { id: 1, name: 'John' };
// readonlyUser.id = 2; // Ошибка: свойство доступно только для чтения

//###### 4. Pick<T, K>
// Создаёт тип с выбранными свойствами из исходного типа.
type User4 = { id: number; name: string; age: number };
type UserName = Pick<User4, 'name'>;
// Тип UserName: { name: string }

//###### 5. Omit<T, K>
// Создаёт тип, исключая указанные свойства из исходного типа.
type User5 = { id: number; name: string; age: number };
type UserWithoutAge = Omit<User5, 'age'>;
// Тип UserWithoutAge: { id: number; name: string }

//###### 6. Record<K, T>
// Создаёт объектный тип с фиксированными ключами K и значениями типа T.
type Roles = 'admin' | 'user' | 'guest';
const rolePermissions: Record<Roles, number> = {
  admin: 1,
  user: 2,
  guest: 3,
};

//###### 7. Exclude<T, U>
// Исключает из типа T все типы, которые есть в U.
type Status1 = 'active' | 'inactive' | 'banned';
type ActiveStatus = Exclude<Status1, 'banned'>;
// Тип ActiveStatus: "active" | "inactive"

//###### 8. Extract<T, U>
// Оставляет в типе T только те типы, которые есть в U.
type Status2 = 'active' | 'inactive' | 'banned';
type BannedStatus = Extract<Status2, 'banned'>;
// Тип BannedStatus: "banned"

//###### 9. NonNullable<T>
// Исключает из типа null и undefined.
type User10 = string | null | undefined;
type ValidUser = NonNullable<User10>;
// Тип ValidUser: string

//###### 10. ReturnType<T>
// Получает тип возвращаемого значения функции.
function getUser() {
  return { id: 1, name: 'John' };
}
type User11 = ReturnType<typeof getUser>;
// Тип User: { id: number; name: string }

//###### 11. Parameters<T>
// Получает типы аргументов функции в виде массива.
function createUser(id: number, name: string) {}
type CreateUserParams = Parameters<typeof createUser>;
// Тип CreateUserParams: [number, string]

//###### 12. ConstructorParameters<T>
// Получает типы аргументов конструктора класса.
class TheUser1 {
  constructor(
    public id: number,
    public name: string,
  ) {}
}
type UserConstructorParams = ConstructorParameters<typeof TheUser1>;
// Тип UserConstructorParams: [number, string]

//###### 13. InstanceType<T>
// Получает тип экземпляра класса
class TheUser2 {
  id = 1;
  name = 'John';
}

type UserInstance = InstanceType<typeof TheUser2>;
// Тип UserInstance: User

//###### 14. Awaited<T>
// Получает тип значения, которое возвращает Promise.
type User = Promise<{ id: number; name: string }>;
type ResolvedUser = Awaited<User>;
// Тип ResolvedUser: { id: number; name: string }

//###### 15. ThisParameterType<T>
// Получает тип параметра this в функции.
function greet(this: { name: string }) {
  return `Hello, ${this.name}`;
}

type ThisType1 = ThisParameterType<typeof greet>;
// Тип ThisType: { name: string }

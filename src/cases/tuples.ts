// Пример типизации масивов\кортежей:

type Tuple = [string, number, boolean, ...string[]];

const array: Tuple = ['1', 1, true, '1', '123', '123', 'sdf'];

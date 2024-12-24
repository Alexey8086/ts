// В TypeScript можно использовать концепцию enum as const
// для создания более строгих типов и улучшения типизации.

// Когда вы используете объект с as const, TypeScript воспринимает
// этот объект как неизменяемый (immutable) и сужает типы значений в объекте.

// подход 'enum as const' позволяет создать неизменяемый набор значений
// а также передавать, к примеру, в параметры getStatus обычную строку, а не enum

const Status = {
  Active: 'ACTIVE',
  Inactive: 'INACTIVE',
  Pending: 'PENDING',
} as const;

type Status = (typeof Status)[keyof typeof Status];

function getStatus(status: Status) {
  switch (status) {
    case Status.Active:
      return 'The status is active';
    case Status.Inactive:
      return 'The status is inactive';
    case Status.Pending:
      return 'The status is pending';
    default:
      return 'Unknown status';
  }
}

let currentStatus: Status = Status.Active; // Правильно
